import jwt from 'jsonwebtoken'
import { compare } from 'bcrypt';
import { z } from 'zod'
import ms from 'ms'
import prisma from '@/prisma';
import { cookies } from 'next/headers';
import type { userSignInSchema } from '@/types/schemas/userSchemas';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json() as z.infer<typeof userSignInSchema>;

  const cookieStore = await cookies()

	const user = await prisma.user.findFirst({
		where: {
			email
		}
	});

	if (!user) {
		return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
	}

	const isValidPassword = await compare(password, user.password);

	if (!isValidPassword) {
		return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
	}

	const token = jwt.sign({ id: user.id }, String(process.env.JWT_SECRET!), { expiresIn: '30d' });

	const isProd = process.env.NODE_ENV === 'production'

	const cookieOptions: any = {
		httpOnly: true,
		secure: isProd,
		sameSite: isProd ? 'none' : 'lax',
		maxAge: ms('30d'),
		path: '/'
	}

	if (isProd && process.env.COOKIE_DOMAIN) {
		cookieOptions.domain = process.env.COOKIE_DOMAIN;
	}

	cookieStore.set('session_token', token, cookieOptions);

  const { password: _, ...userWithoutPassword } = user;

	return NextResponse.json({ user: userWithoutPassword }, { status: 200 });
}