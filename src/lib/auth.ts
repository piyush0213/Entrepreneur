import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user && token.id) {
                session.user.id = token.id as string;

                // Fetch subscription status
                const subscription = await db.subscription.findUnique({
                    where: { userId: token.id as string },
                });

                (session.user as unknown as Record<string, unknown>).subscription = subscription
                    ? {
                        plan: subscription.plan,
                        status: subscription.status,
                        currentPeriodEnd: subscription.currentPeriodEnd,
                    }
                    : null;
            }
            return session;
        },
    },
});
