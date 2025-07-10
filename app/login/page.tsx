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
import { EyeIcon, EyeOffIcon, AlertCircle, CheckCircle2, Loader2 } from "lucide-react"

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
        // Store authentication data for admin
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

        // Set cookie for middleware
        document.cookie = `authToken=${authToken}; path=/; max-age=86400`

        if (rememberMe) {
          localStorage.setItem("rememberMe", "true")
        }

        setSuccess("Login successful! Redirecting to dashboard...")

        // Redirect to dashboard after short delay
        setTimeout(() => {
          window.location.href = "/"
        }, 1000)
      } else if (validateEmail(email) && password.length >= 6) {
        // Store authentication data for any valid user
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

        // Set cookie for middleware
        document.cookie = `authToken=${authToken}; path=/; max-age=86400`

        if (rememberMe) {
          localStorage.setItem("rememberMe", "true")
        }

        setSuccess("Login successful! Redirecting to dashboard...")

        // Redirect to dashboard after short delay
        setTimeout(() => {
          window.location.href = "/"
        }, 1000)
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
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/masaolms-login-bg-2.jpg"
          alt="Caraga State University Campus"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Green overlay to match university branding */}
        <div className="absolute inset-0 bg-[#0B4619]/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* University Header */}
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

        {/* Login Card */}
        <Card className="backdrop-blur-md bg-white/95 border border-white/20 shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-[#0B4619]">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600">Sign in to access your learning dashboard</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
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
                  className="h-11 border-[#0B4619]/20 focus-visible:ring-[#0B4619] focus-visible:border-[#0B4619]"
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
                    className="text-xs text-[#0B4619] hover:text-[#F0A500] transition-colors"
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
                    className="h-11 pr-10 border-[#0B4619]/20 focus-visible:ring-[#0B4619] focus-visible:border-[#0B4619]"
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
                <Label htmlFor="remember" className="text-sm text-[#0B4619] cursor-pointer">
                  Keep me signed in
                </Label>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-11 bg-[#0B4619] hover:bg-[#0a3d16] text-white font-medium transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="text-sm font-semibold text-blue-800 mb-2">Demo Credentials</h4>
              <div className="space-y-1 text-xs text-blue-700">
                <p>
                  <strong>Admin:</strong> admin@carsu.edu.ph / admin123
                </p>
                <p>
                  <strong>Student:</strong> Any valid email with 6+ characters password
                </p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              <span className="text-gray-600">Need help accessing your account? </span>
              <Link href="/help" className="font-medium text-[#0B4619] hover:text-[#F0A500] transition-colors">
                Contact IT Support
              </Link>
            </div>

            <div className="text-center text-sm">
              <span className="text-gray-600">New student? </span>
              <Link href="/register" className="font-medium text-[#0B4619] hover:text-[#F0A500] transition-colors">
                Contact your administrator
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-white/90">
          <p className="mb-2 drop-shadow-md">
            © {new Date().getFullYear()} Caraga State University. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="hover:underline text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline text-white/80 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline text-white/80 hover:text-white transition-colors">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
