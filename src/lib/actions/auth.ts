"use server"

import { cookies } from "next/headers"
import ms from "ms"
import { UserSignInInterface, UserSignUpInterface } from "@/types/interfaces/userInterfaces"
import { backendUrl } from "../consts"

export async function signInAction(data: UserSignInInterface) {
    const response = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        return { success: false, message: "Credenciais inválidas" }
    }

    const { token } = await response.json()
    const cookieStore = await cookies()

    cookieStore.set("session_token", token, {
        maxAge: ms("30d") / 1000,
        sameSite: "lax",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    })

    return { success: true, message: "Login realizado com sucesso" }
}

export async function signUpAction(data: UserSignUpInterface) {
    const response = await fetch(`${backendUrl}/sign_up`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        const body = await response.json().catch(() => null)
        const message = body?.message ?? "Erro ao criar conta. Tente novamente."
        return { success: false, message }
    }

    const { token } = await response.json()
    const cookieStore = await cookies()

    cookieStore.set("session_token", token, {
        maxAge: ms("30d") / 1000,
        sameSite: "lax",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    })

    return { success: true, message: "Conta criada com sucesso" }
}

export async function getProfileAction() {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get("session_token")

    if (!sessionToken) {
        return null
    }

    const response = await fetch(`${backendUrl}/profile`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${sessionToken.value}`,
        },
        cache: "no-store",
    })

    if (!response.ok) {
        return null
    }

    return response.json()
}
