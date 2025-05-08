"use client"

import { useState } from "react"
import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function WelcomeSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Welcome to Caraga State University",
      content:
        "Your learning management system dashboard. Here you can access your courses, assignments, and resources.",
      buttonText: "Learn more",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Need help?",
      content:
        "Click the help icon at the top right to access our Help Center. You'll get access to our support forum, help topics, getting started guides, how-to videos, and more.",
      buttonText: "Help center",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Getting Started",
      content: "Check out your enrolled courses below and start your learning journey today.",
      buttonText: "View courses",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-medium">Welcome</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Customize</DropdownMenuItem>
            <DropdownMenuItem>Hide</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative overflow-hidden p-4">
        <div className="flex min-h-[300px] flex-col md:flex-row">
          <div className="flex flex-1 flex-col justify-center space-y-4 p-6 md:w-1/2">
            <h3 className="text-2xl font-bold text-[#0B4619]">{slides[currentSlide].title}</h3>
            <p className="text-gray-600">{slides[currentSlide].content}</p>
            <div>
              <Button className="bg-[#0B4619] hover:bg-[#0a3d16]">{slides[currentSlide].buttonText}</Button>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center bg-[#0B4619] p-6 md:w-1/2">
            <div className="relative h-64 w-full max-w-md">
              <div className="absolute inset-0 rounded-lg bg-white/10 p-4">
                <div className="flex h-6 w-full items-center justify-end space-x-1 rounded-t-lg bg-[#0B4619] px-2">
                  <div className="h-2 w-2 rounded-full bg-white/50"></div>
                  <div className="h-2 w-2 rounded-full bg-white/50"></div>
                  <div className="h-2 w-2 rounded-full bg-white/50"></div>
                  <div className="h-2 w-2 rounded-full bg-white/80"></div>
                  <div className="h-2 w-2 rounded-full bg-white/50"></div>
                  <div className="h-2 w-2 rounded-full bg-white/50"></div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-4 p-4">
                  <div className="flex flex-col space-y-2">
                    <div className="h-16 w-16 rounded-md bg-white/20"></div>
                    <div className="h-4 w-full rounded bg-white/20"></div>
                    <div className="h-2 w-3/4 rounded bg-white/20"></div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="h-16 w-16 rounded-md bg-white/20"></div>
                    <div className="h-4 w-full rounded bg-white/20"></div>
                    <div className="h-2 w-3/4 rounded bg-white/20"></div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="h-16 w-16 rounded-md bg-white/20"></div>
                    <div className="h-4 w-full rounded bg-white/20"></div>
                    <div className="h-2 w-3/4 rounded bg-white/20"></div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="h-16 w-16 rounded-md bg-white/20"></div>
                    <div className="h-4 w-full rounded bg-white/20"></div>
                    <div className="h-2 w-3/4 rounded bg-white/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`mx-1 h-2 w-2 rounded-full ${currentSlide === index ? "bg-[#0B4619]" : "bg-gray-300"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
