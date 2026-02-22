import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { getPublicVideos } from "@/lib/videos";
import { DashboardClient } from "./DashboardClient";

export default async function DashboardPage() {
    const session = await auth();

    if (!session?.user?.id) {
        return null; // middleware handles redirect
    }

    const subscription = await db.subscription.findUnique({
        where: { userId: session.user.id },
    });

    const videos = getPublicVideos(subscription?.plan);

    return (
        <DashboardClient
            user={{
                name: session.user.name || "User",
                email: session.user.email || "",
                image: session.user.image || "",
            }}
            subscription={
                subscription
                    ? {
                        plan: subscription.plan,
                        status: subscription.status,
                        currentPeriodEnd: subscription.currentPeriodEnd?.toISOString() || null,
                    }
                    : null
            }
            videos={videos}
        />
    );
}
