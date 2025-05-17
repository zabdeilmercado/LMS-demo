"use client"

export function resetOnboardingTour() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("csu-lms-tour-completed")
    window.location.reload()
  }
}
