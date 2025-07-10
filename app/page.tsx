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
        router.push("/login?redirected=true")
        return
      }

      try {
        const session = JSON.parse(userSession)
        if (!session.id || !session.email) {
          localStorage.removeItem("authToken")
          localStorage.removeItem("userSession")
          router.push("/login?redirected=true")
          return
        }

        setIsAuthenticated(true)
      } catch (error) {
        localStorage.removeItem("authToken")
        localStorage.removeItem("userSession")
        router.push("/login?redirected=true")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B4619] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <LMSDashboard />
}
