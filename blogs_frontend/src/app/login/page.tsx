"use client";
import LoginForms from "@/components/login.forms";
import LoginUpperText from "@/components/login.upper.text";


export default function Login() {
    return (
        <main className="min-h-screen">
            <div className="text-gray-500 font-sans pt-32 flex flex-col items-center text-center gap-6">
            <LoginUpperText/>
            <LoginForms/>
            </div>
        </main>
    )
}