"use client";
import LoginForms from "@/components/login.forms";
import RegisterFrom from "@/components/register.forms";
import RegisterUpperText from "@/components/register.upper.text";


export default function Login() {
    return (
            <main className="min-h-screen">
                <div className="text-gray-500 font-sans pt-32 flex flex-col items-center text-center gap-6">
                    <RegisterUpperText/>
                    <RegisterFrom/>
                </div>
            </main>
    )
}