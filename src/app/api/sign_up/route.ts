import jwt from 'jsonwebtoken'
import { hashSync } from 'bcrypt';
import { z } from 'zod'
import ms from 'ms'
import prisma from '@/prisma';
import { cookies } from 'next/headers';
import type { userSignUpSchema } from '@/types/schemas/userSchemas';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json() as z.infer<typeof userSignUpSchema>;

	const cookieStore = await cookies()

	const user = await prisma.user.findFirst({
		where: {
			email
		}
	});

	if (user) {
		return NextResponse.json({ message: 'User already exists' }, { status: 401 });
	}

	const hashedPassword = hashSync(password, 12)

	const newUser = await prisma.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		}
	})

	const token = jwt.sign({ id: newUser.id }, String(process.env.JWT_SECRET!), { expiresIn: '30d' });

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

	return NextResponse.json(
		{ message: "User created and logged in successfully" },
		{ status: 200 }
	);
}