import { auth } from './lib/auth';
import { NextResponse } from 'next/server';

export async function proxy(request: any) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/hub') && !session) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  if (pathname === '/signin' && session || pathname === '/signup' && session) {
    return NextResponse.redirect(new URL('/hub', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/hub/:path*', '/signin', '/signup'],
  proxy: proxy,
};