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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle, Loader2, ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    program: "",
    yearLevel: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.studentId) {
      setError("Please fill in all required fields")
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
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl font-bold text-[#0B4619]">Request Submitted!</CardTitle>
              <CardDescription>Your account request has been sent successfully</CardDescription>
            </CardHeader>

            <CardContent className="text-center space-y-4">
              <p className="text-sm text-gray-600">
                Thank you for your registration request. Our administrators will review your application and contact you
                within 2-3 business days.
              </p>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-blue-800">
                  <strong>What's next?</strong>
                  <br />
                  You'll receive an email confirmation with your login credentials once your account is approved.
                </p>
              </div>
            </CardContent>

            <CardFooter>
              <Button onClick={() => router.push("/login")} className="w-full bg-[#0B4619] hover:bg-[#0a3d16]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
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
            <CardTitle className="text-2xl font-bold text-[#0B4619]">Request Access</CardTitle>
            <CardDescription>Submit a request to create your student account</CardDescription>
          </CardHeader>

          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4 border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#0B4619] font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Juan"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="border-[#0B4619]/20 focus-visible:ring-[#0B4619]"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#0B4619] font-medium">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Dela Cruz"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="border-[#0B4619]/20 focus-visible:ring-[#0B4619]"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#0B4619] font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="juan.delacruz@carsu.edu.ph"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-[#0B4619]/20 focus-visible:ring-[#0B4619]"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentId" className="text-[#0B4619] font-medium">
                  Student ID *
                </Label>
                <Input
                  id="studentId"
                  type="text"
                  placeholder="2024-00001"
                  value={formData.studentId}
                  onChange={(e) => handleInputChange("studentId", e.target.value)}
                  className="border-[#0B4619]/20 focus-visible:ring-[#0B4619]"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="program" className="text-[#0B4619] font-medium">
                  Program
                </Label>
                <Select onValueChange={(value) => handleInputChange("program", value)} disabled={isLoading}>
                  <SelectTrigger className="border-[#0B4619]/20 focus:ring-[#0B4619]">
                    <SelectValue placeholder="Select your program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bsit">BS Information Technology</SelectItem>
                    <SelectItem value="bscs">BS Computer Science</SelectItem>
                    <SelectItem value="bsba">BS Business Administration</SelectItem>
                    <SelectItem value="bsed">BS Education</SelectItem>
                    <SelectItem value="bsn">BS Nursing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearLevel" className="text-[#0B4619] font-medium">
                  Year Level
                </Label>
                <Select onValueChange={(value) => handleInputChange("yearLevel", value)} disabled={isLoading}>
                  <SelectTrigger className="border-[#0B4619]/20 focus:ring-[#0B4619]">
                    <SelectValue placeholder="Select year level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st">1st Year</SelectItem>
                    <SelectItem value="2nd">2nd Year</SelectItem>
                    <SelectItem value="3rd">3rd Year</SelectItem>
                    <SelectItem value="4th">4th Year</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#0B4619] font-medium">
                  Additional Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Any additional information or special requests..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="border-[#0B4619]/20 focus-visible:ring-[#0B4619] min-h-[80px]"
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
                    Submitting Request...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="text-center">
            <div className="w-full text-sm">
              <span className="text-gray-600">Already have an account? </span>
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
