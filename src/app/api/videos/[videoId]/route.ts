import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { getVideoWithSource } from "@/lib/videos";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ videoId: string }> }
) {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        // Check subscription
        const subscription = await db.subscription.findUnique({
            where: { userId: session.user.id },
        });

        if (!subscription || subscription.status !== "active") {
            return NextResponse.json(
                { error: "Active subscription required" },
                { status: 403 }
            );
        }

        // Check subscription expiry
        if (subscription.currentPeriodEnd && subscription.currentPeriodEnd < new Date()) {
            await db.subscription.update({
                where: { id: subscription.id },
                data: { status: "expired" },
            });
            return NextResponse.json(
                { error: "Subscription expired" },
                { status: 403 }
            );
        }

        const { videoId } = await params;
        const video = getVideoWithSource(videoId, subscription.plan);

        if (!video) {
            return NextResponse.json(
                { error: "Video not found or insufficient access" },
                { status: 404 }
            );
        }

        // Return video source with a time-limited token approach
        // The source URL is only sent after auth verification
        return NextResponse.json({
            id: video.id,
            title: video.title,
            sourceUrl: video.sourceUrl,
            watermark: session.user.email, // for watermarking
        });
    } catch (error) {
        console.error("Video API error:", error);
        return NextResponse.json(
            { error: "Failed to fetch video" },
            { status: 500 }
        );
    }
}
