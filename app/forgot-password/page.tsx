"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0B4619] shadow-lg">
              <span className="text-[#FFD700] text-3xl font-bold">CSU</span>
            </div>
            <h1 className="mt-4 text-2xl font-bold text-[#0B4619]">CARAGA STATE UNIVERSITY</h1>
            <p className="text-sm text-gray-600">Competence, Service, and Uprightness</p>
          </div>

          <Card className="border shadow-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl text-center">Reset your password</CardTitle>
              <CardDescription className="text-center">
                {!isSubmitted
                  ? "Enter your email address and we'll send you a link to reset your password"
                  : "Check your email for a link to reset your password"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="student@csu.edu.ph"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
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
                        Sending...
                      </>
                    ) : (
                      "Send reset link"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-lg bg-green-50 p-4 text-center">
                    <p className="text-sm text-green-800">
                      We've sent a password reset link to <strong>{email}</strong>
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    If you don't see the email in your inbox, please check your spam folder or contact support.
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/login" className="flex items-center text-sm text-[#0B4619] hover:underline">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to login
              </Link>
            </CardFooter>
          </Card>

          <div className="mt-6 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Caraga State University. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="hover:underline">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
