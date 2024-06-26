import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    // tokenを持たない場合は/loginにリダイレクト   
    if (!request.cookies.has("token")) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!signup|login|api|_next/static|_next/image|favicon.ico).*)'],
};
