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
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Loader2, ArrowLeft, Mail } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (!email) {
      setError("Please enter your email address")
      setIsLoading(false)
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSuccess(true)
    } catch (err) {
      setError("An error occurred. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleTryAgain = () => {
    setSuccess(false)
    setEmail("")
    setError("")
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B4619] via-[#0B4619]/90 to-[#0B4619]/80 flex items-center justify-center p-4">
        <div className="relative z-10 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="relative h-24 w-24 mx-auto mb-4">
              <Image
                src="/images/csu-logo.png"
                alt="Caraga State University Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">CARAGA STATE UNIVERSITY</h1>
            <p className="text-[#F0A500] font-medium text-sm drop-shadow-md">Learning Management System</p>
          </div>

          <Card className="backdrop-blur-md bg-white/95 border border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl font-bold text-[#0B4619]">Check Your Email</CardTitle>
              <CardDescription>Password reset instructions have been sent</CardDescription>
            </CardHeader>

            <CardContent className="text-center space-y-4">
              <p className="text-sm text-gray-600">
                We've sent password reset instructions to <strong>{email}</strong>
              </p>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-blue-800">
                  <strong>Didn't receive the email?</strong>
                  <br />
                  Check your spam folder or contact IT support for assistance.
                </p>
              </div>
            </CardContent>

            <CardFooter className="space-y-2">
              <Button onClick={() => router.push("/login")} className="w-full bg-[#0B4619] hover:bg-[#0a3d16]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
              </Button>
              <Button
                onClick={handleTryAgain}
                variant="outline"
                className="w-full border-[#0B4619]/20 text-[#0B4619] hover:bg-[#0B4619]/5 bg-transparent"
              >
                Try Different Email
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B4619] via-[#0B4619]/90 to-[#0B4619]/80 flex items-center justify-center p-4">
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="relative h-24 w-24 mx-auto mb-4">
            <Image
              src="/images/csu-logo.png"
              alt="Caraga State University Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">CARAGA STATE UNIVERSITY</h1>
          <p className="text-[#F0A500] font-medium text-sm drop-shadow-md">Learning Management System</p>
          <div className="h-1 w-16 bg-gradient-to-r from-white to-[#F0A500] rounded-full mx-auto mt-3"></div>
        </div>

        <Card className="backdrop-blur-md bg-white/95 border border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-[#0B4619]">Reset Password</CardTitle>
            <CardDescription>Enter your email to receive reset instructions</CardDescription>
          </CardHeader>

          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4 border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#0B4619] font-medium">
                  University Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="student@carsu.edu.ph"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 border-[#0B4619]/20 focus-visible:ring-[#0B4619] focus-visible:border-[#0B4619]"
                  required
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-[#0B4619] hover:bg-[#0a3d16] text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Instructions...
                  </>
                ) : (
                  "Send Reset Instructions"
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-800">
                <strong>Note:</strong> Password reset emails may take a few minutes to arrive. If you don't receive it,
                please contact IT support.
              </p>
            </div>
          </CardContent>

          <CardFooter className="text-center">
            <div className="w-full text-sm">
              <span className="text-gray-600">Remember your password? </span>
              <Link href="/login" className="font-medium text-[#0B4619] hover:text-[#F0A500] transition-colors">
                Sign in here
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
