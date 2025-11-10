import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });

  const isTokenOk = Boolean(token);
  const isAdminUser = token?.role == "admin";
  const isadminSpecificRoute = req.nextUrl.pathname.startsWith("/dashboard");

  if (isadminSpecificRoute && !isAdminUser) {
    //  return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    ////////
    // const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    // return NextResponse.redirect(
    //   `/api/auth/signin?callbackUrl=${callbackUrl}`,
    //   req.url
    // );
    ///

    const signinUrl = new URL("/api/auth/signin", req.url);
    signinUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);

    return NextResponse.redirect(signinUrl);

    ///
  }

  return NextResponse.next();
};
