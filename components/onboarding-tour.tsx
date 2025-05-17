"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Define the tour steps
const tourSteps = [
  {
    title: "Welcome to MasaoLMS",
    description: "Let's take a quick tour to help you get familiar with the dashboard.",
    target: null, // No specific target for welcome screen
  },
  {
    title: "Dashboard Navigation",
    description: "Use the sidebar to navigate between different sections of the LMS.",
    target: "sidebar",
  },
  {
    title: "Your Courses",
    description: "View all your enrolled courses and track your progress here.",
    target: "classes-section",
  },
  {
    title: "Upcoming Assignments",
    description: "Keep track of your upcoming assignments and deadlines.",
    target: "upcoming-assignments",
  },
]

export function OnboardingTour() {
  const [showTour, setShowTour] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const totalSteps = tourSteps.length

  // Check if user has completed the tour before
  useEffect(() => {
    const tourCompleted = localStorage.getItem("csu-lms-tour-completed")
    if (!tourCompleted) {
      setShowTour(true)
    }
  }, [])

  // Handle tour completion
  const completeTour = () => {
    localStorage.setItem("csu-lms-tour-completed", "true")
    setShowTour(false)
  }

  // Handle next step
  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeTour()
    }
  }

  // Skip the tour
  const skipTour = () => {
    completeTour()
  }

  // Reset the tour (for testing purposes)
  const resetTour = () => {
    localStorage.removeItem("csu-lms-tour-completed")
    setCurrentStep(0)
    setShowTour(true)
  }

  if (!showTour) return null

  const currentTourStep = tourSteps[currentStep]
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100

  // Welcome modal (first step)
  if (currentStep === 0) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#0B4619]">{currentTourStep.title}</h2>
              <button onClick={skipTour} className="rounded-full p-1 hover:bg-gray-100">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="mt-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#FFD700] shadow-lg">
              <span className="text-3xl font-bold text-[#0B4619]">CSU</span>
            </div>

            <p className="mt-4 text-gray-600">{currentTourStep.description}</p>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>
                  Step {currentStep + 1} of {totalSteps}
                </span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>

            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={skipTour}>
                Skip Tour
              </Button>
              <Button onClick={nextStep} className="bg-[#0B4619] hover:bg-[#0a3d16]">
                Next
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // Tour steps with tooltips
  return (
    <AnimatePresence>
      <div className="pointer-events-none fixed inset-0 z-50">
        {/* Highlight target element */}
        <div
          id={`tour-highlight-${currentTourStep.target}`}
          className="tour-highlight-element"
          data-tour-target={currentTourStep.target}
        />

        {/* Tour tooltip */}
        <motion.div
          className="pointer-events-auto absolute z-50 w-80 rounded-lg bg-white p-4 shadow-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          style={{
            // Default position, will be updated by JS
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#0B4619]">{currentTourStep.title}</h3>
            <button onClick={skipTour} className="rounded-full p-1 hover:bg-gray-100">
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          <p className="mt-2 text-sm text-gray-600">{currentTourStep.description}</p>

          <div className="mt-4">
            <div className="mb-1 flex items-center justify-between text-xs">
              <span>
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-1.5" />
          </div>

          <div className="mt-4 flex justify-between">
            <Button variant="outline" size="sm" onClick={skipTour} className="text-xs">
              Skip
            </Button>
            <Button size="sm" onClick={nextStep} className="bg-[#0B4619] text-xs hover:bg-[#0a3d16]">
              {currentStep === totalSteps - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
