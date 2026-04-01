import jwt from 'jsonwebtoken'
import prisma from "@/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const cookieStore = await cookies()

  const token = cookieStore.get('session_token')?.value;

	if (!token) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	try {
		const decoded = jwt.verify(token, String(process.env.JWT_SECRET!));

		const user = await prisma.user.findFirst({
			where: {
				id: (decoded as any).id
			}
		});

		if (!user) {
			return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
		}
		
		return NextResponse.json(user);
	} catch (error) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}
}