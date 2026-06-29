import { NextRequest, NextResponse } from 'next/server';

const SESSION_COOKIE_NAME = 'forge-session';

export function proxy(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE_NAME);
  const { pathname } = request.nextUrl;
  const isAuthPath = pathname.startsWith('/auth');

  if (!session && !isAuthPath) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  if (session && isAuthPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
