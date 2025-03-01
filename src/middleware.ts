
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard","/"];
export async function middleware(req: NextRequest) {
 
  const token = await getToken({ req });

  if (token && req.nextUrl.pathname === "/login" ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  if (!token &&  protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: ["/","/login","/dashboard"],
  };

  