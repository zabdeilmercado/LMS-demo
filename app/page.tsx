"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { LMSDashboard } from "@/components/lms-dashboard"

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const authToken = localStorage.getItem("authToken")
      const userSession = localStorage.getItem("userSession")

      if (!authToken || !userSession) {
        // User is not authenticated, redirect to login
        router.push("/login?redirected=true")
        return
      }

      // User is authenticated
      setIsAuthenticated(true)
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B4619] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  return <LMSDashboard />
}
