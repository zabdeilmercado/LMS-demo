"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false)
      router.push("/")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="relative h-40 w-40">
              <Image
                src="/images/csu-logo.png"
                alt="Caraga State University Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-[#0B4619]">CARAGA STATE UNIVERSITY</h1>
            <p className="text-sm text-[#F0A500]">Competence, Service, and Uprightness</p>
          </div>

          <Card className="border border-[#0B4619]/10 shadow-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl text-center text-[#0B4619]">Sign in to your account</CardTitle>
              <CardDescription className="text-center">Enter your email and password to access the LMS</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0B4619]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="student@carsu.edu.ph"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-[#0B4619]/20 focus-visible:ring-[#0B4619]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-[#0B4619]">
                      Password
                    </Label>
                    <Link href="/forgot-password" className="text-xs text-[#0B4619] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-[#0B4619]/20 focus-visible:ring-[#0B4619]"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#0B4619]"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-[#0B4619]/20 data-[state=checked]:bg-[#0B4619] data-[state=checked]:text-white"
                  />
                  <Label htmlFor="remember" className="text-sm font-normal text-[#0B4619]">
                    Remember me
                  </Label>
                </div>
                <Button type="submit" className="w-full bg-[#0B4619] hover:bg-[#0a3d16]" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <svg
                        className="mr-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="text-center text-sm">
                <span className="text-gray-600">Don't have an account? </span>
                <Link href="/register" className="font-medium text-[#0B4619] hover:underline">
                  Contact your administrator
                </Link>
              </div>
            </CardFooter>
          </Card>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Caraga State University. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="#" className="hover:underline text-[#0B4619]/70 hover:text-[#0B4619]">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline text-[#0B4619]/70 hover:text-[#0B4619]">
                Terms of Service
              </Link>
              <Link href="#" className="hover:underline text-[#0B4619]/70 hover:text-[#0B4619]">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
