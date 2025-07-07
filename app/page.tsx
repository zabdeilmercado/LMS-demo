"use client"

import { LMSDashboard } from "@/components/lms-dashboard"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      // Check for authentication token/session
      const authToken = localStorage.getItem("authToken")
      const userSession = localStorage.getItem("userSession")

      if (authToken && userSession) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
        router.push("/login")
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#0B4619] border-t-transparent"></div>
          <p className="text-[#0B4619] font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  // Only render dashboard if authenticated
  if (!isAuthenticated) {
    return null
  }

  return <LMSDashboard />
}
