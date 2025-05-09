"use client"

import { LMSDashboard } from "@/components/lms-dashboard"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  // This is just a placeholder for actual authentication logic
  // In a real app, you would check if the user is authenticated
  const isAuthenticated = false

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  // Only render the dashboard if authenticated
  return isAuthenticated ? <LMSDashboard /> : null
}
