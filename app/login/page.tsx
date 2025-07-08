"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { EyeIcon, EyeOffIcon, AlertCircle, CheckCircle2 } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()

  // Check if user is already authenticated
  useEffect(() => {
    const authToken = localStorage.getItem("authToken")
    const userSession = localStorage.getItem("userSession")

    if (authToken && userSession) {
      // User is already logged in, redirect to dashboard
      router.push("/")
    }
  }, [router])

  // Show redirect message if user was redirected from protected route
  useEffect(() => {
    const redirected = searchParams.get("redirected")
    if (redirected === "true") {
      setError("Please log in to access the dashboard")
    }
  }, [searchParams])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setIsLoading(true)

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields")
      setIsLoading(false)
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long")
      setIsLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock authentication logic
      if (email === "admin@carsu.edu.ph" && password === "admin123") {
        // Store authentication data
        const authToken = "mock-jwt-token-admin"
        const userSession = JSON.stringify({
          id: "1",
          email: email,
          name: "Admin User",
          role: "admin",
          loginTime: new Date().toISOString(),
        })

        localStorage.setItem("authToken", authToken)
        localStorage.setItem("userSession", userSession)

        if (rememberMe) {
          localStorage.setItem("rememberMe", "true")
        }

        setSuccess("Login successful! Redirecting to dashboard...")

        setTimeout(() => {
          router.push("/")
        }, 1500)
      } else if (email.endsWith("@carsu.edu.ph") && password.length >= 6) {
        // Store authentication data for regular users
        const authToken = "mock-jwt-token-user"
        const userSession = JSON.stringify({
          id: "2",
          email: email,
          name: email
            .split("@")[0]
            .replace(".", " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
          role: "student",
          loginTime: new Date().toISOString(),
        })

        localStorage.setItem("authToken", authToken)
        localStorage.setItem("userSession", userSession)

        if (rememberMe) {
          localStorage.setItem("rememberMe", "true")
        }

        setSuccess("Login successful! Redirecting to dashboard...")

        setTimeout(() => {
          router.push("/")
        }, 1500)
      } else {
        setError("Invalid email or password. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/masaolms-login-bg-2.jpg"
          alt="Caraga State University Campus"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B4619]/80 via-[#0B4619]/70 to-[#0B4619]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* University Header */}
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="relative h-32 w-32 mb-4">
              <Image
                src="/images/csu-logo.png"
                alt="Caraga State University Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">CARAGA STATE UNIVERSITY</h1>
            <p className="text-sm text-[#F0A500] font-medium mb-2 drop-shadow-md">
              Competence, Service, and Uprightness
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-white to-[#F0A500] rounded-full"></div>
          </div>

          {/* Login Card */}
          <Card className="border border-white/20 shadow-2xl bg-white/80 backdrop-blur-md">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl text-center text-[#0B4619] font-bold">Welcome Back</CardTitle>
              <CardDescription className="text-center text-gray-600">
                Sign in to access your learning dashboard
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 bg-white/80 backdrop-blur-lg rounded-lg">
              {/* Error Alert */}
              {error && (
                <Alert variant="destructive" className="border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Success Alert */}
              {success && (
                <Alert className="border-green-200 bg-green-50 text-green-800">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                {/* Email Field */}
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
                    className="border-[#0B4619]/20 focus-visible:ring-[#0B4619] focus-visible:border-[#0B4619] h-11 bg-white/70"
                    required
                    disabled={isLoading}
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-[#0B4619] font-medium">
                      Password
                    </Label>
                    <Link
                      href="/forgot-password"
                      className="text-xs text-[#0B4619] hover:text-[#F0A500] hover:underline transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-[#0B4619]/20 focus-visible:ring-[#0B4619] focus-visible:border-[#0B4619] h-11 pr-10 bg-white/70"
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#0B4619] transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoading}
                    >
                      {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-[#0B4619]/30 data-[state=checked]:bg-[#0B4619] data-[state=checked]:text-white"
                    disabled={isLoading}
                  />
                  <Label htmlFor="remember" className="text-sm font-normal text-[#0B4619] cursor-pointer">
                    Keep me signed in
                  </Label>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#0B4619] hover:bg-[#0a3d16] text-white font-medium h-11 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                  disabled={isLoading}
                >
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
                    "Sign In"
                  )}
                </Button>
              </form>

              {/* Demo Credentials */}
              <div className="mt-4 p-3 bg-blue-50/90 border border-blue-200 rounded-lg backdrop-blur-sm">
                <p className="text-xs text-blue-800 font-medium mb-1">Demo Credentials:</p>
                <p className="text-xs text-blue-700">Email: admin@carsu.edu.ph</p>
                <p className="text-xs text-blue-700">Password: admin123</p>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 pt-2">
              <div className="text-center text-sm">
                <span className="text-gray-600">Need help accessing your account? </span>
                <Link
                  href="/help"
                  className="font-medium text-[#0B4619] hover:text-[#F0A500] hover:underline transition-colors"
                >
                  Contact IT Support
                </Link>
              </div>

              <div className="text-center text-sm">
                <span className="text-gray-600">New student? </span>
                <Link
                  href="/register"
                  className="font-medium text-[#0B4619] hover:text-[#F0A500] hover:underline transition-colors"
                >
                  Contact your administrator
                </Link>
              </div>
            </CardFooter>
          </Card>

          {/* Footer */}
          <div className="mt-8 text-center text-xs text-white/80">
            <p className="mb-2 drop-shadow-md">
              © {new Date().getFullYear()} Caraga State University. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="#"
                className="hover:underline text-white/70 hover:text-white transition-colors drop-shadow-md"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:underline text-white/70 hover:text-white transition-colors drop-shadow-md"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:underline text-white/70 hover:text-white transition-colors drop-shadow-md"
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
