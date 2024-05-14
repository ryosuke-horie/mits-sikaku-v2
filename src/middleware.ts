import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL('/signup', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!signup|login|api|_next/static|_next/image|favicon.ico).*)'],
};
