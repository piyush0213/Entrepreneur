import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { VIDEO_CATALOG } from "@/lib/videos";
import { WatchClient } from "./WatchClient";
import { redirect } from "next/navigation";

export default async function WatchPage({
    params,
}: {
    params: Promise<{ videoId: string }>;
}) {
    const session = await auth();

    if (!session?.user?.id) {
        redirect("/auth/signin");
    }

    const subscription = await db.subscription.findUnique({
        where: { userId: session.user.id },
    });

    if (!subscription || subscription.status !== "active") {
        redirect("/dashboard");
    }

    const { videoId } = await params;

    // Find video metadata (without source URL)
    const video = VIDEO_CATALOG.find((v) => v.id === videoId);

    if (!video) {
        redirect("/dashboard");
    }

    // Check tier access
    if (video.tier === "master" && subscription.plan === "learner") {
        redirect("/dashboard");
    }

    return (
        <WatchClient
            videoId={video.id}
            title={video.title}
            description={video.description}
            userEmail={session.user.email || ""}
        />
    );
}
