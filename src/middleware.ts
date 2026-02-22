import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const isAuthenticated = !!token;
    const { pathname } = req.nextUrl;

    const isAuthPage = pathname.startsWith("/auth");
    const isDashboard = pathname.startsWith("/dashboard");

    // Redirect authenticated users away from auth pages
    if (isAuthPage && isAuthenticated) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Protect dashboard routes
    if (isDashboard && !isAuthenticated) {
        const signInUrl = new URL("/auth/signin", req.url);
        signInUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/auth/:path*"],
};
