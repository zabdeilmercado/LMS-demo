"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus, Heart, Calendar, CheckCircle, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

export function RightSidebar() {
  const [currentMonth, setCurrentMonth] = useState("April 2025")
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selectedDate, setSelectedDate] = useState(11) // Today's date
  const [completedTasks, setCompletedTasks] = useState<number[]>([1, 3])

  // Calendar data
  const days = ["S", "M", "T", "W", "T", "F", "S"]
  const dates = [
    { day: 30, month: "prev", isToday: false },
    { day: 31, month: "prev", isToday: false },
    { day: 1, month: "current", isToday: false },
    { day: 2, month: "current", isToday: false },
    { day: 3, month: "current", isToday: false },
    { day: 4, month: "current", isToday: false },
    { day: 5, month: "current", isToday: false },
    { day: 6, month: "current", isToday: false },
    { day: 7, month: "current", isToday: false },
    { day: 8, month: "current", isToday: false },
    { day: 9, month: "current", isToday: false },
    { day: 10, month: "current", isToday: false },
    { day: 11, month: "current", isToday: true },
    { day: 12, month: "current", isToday: false },
    { day: 13, month: "current", isToday: false },
    { day: 14, month: "current", isToday: false },
    { day: 15, month: "current", isToday: false, hasEvent: true },
    { day: 16, month: "current", isToday: false },
    { day: 17, month: "current", isToday: false },
    { day: 18, month: "current", isToday: false, hasEvent: true },
    { day: 19, month: "current", isToday: false },
    { day: 20, month: "current", isToday: false, hasEvent: true },
    { day: 21, month: "current", isToday: false },
    { day: 22, month: "current", isToday: false },
    { day: 23, month: "current", isToday: false },
    { day: 24, month: "current", isToday: false },
    { day: 25, month: "current", isToday: false, hasEvent: true },
    { day: 26, month: "current", isToday: false },
    { day: 27, month: "current", isToday: false },
    { day: 28, month: "current", isToday: false },
    { day: 29, month: "current", isToday: false },
    { day: 30, month: "current", isToday: false },
    { day: 1, month: "next", isToday: false },
    { day: 2, month: "next", isToday: false },
    { day: 3, month: "next", isToday: false },
  ]

  // To-do data
  const todos = [
    { id: 1, text: "Complete Research Proposal", completed: false },
    { id: 2, text: "Study for Network Exam", completed: false },
    { id: 3, text: "Submit Life Skills Assignment", completed: false },
    { id: 4, text: "Prepare for Group Presentation", completed: false },
    { id: 5, text: "Review Lecture Notes", completed: false },
  ]

  // Announcements data
  const announcements = [
    {
      id: 1,
      text: "You are required to attend the Computer Studies Life Skills Development Program",
      course: "Computer Studies Life Skills",
      date: "2 hours ago",
      isNew: true,
    },
    {
      id: 2,
      text: "Urians, election season is approaching",
      course: "Computer Studies Life Skills",
      date: "Yesterday",
      isNew: true,
    },
    {
      id: 3,
      text: "Hi, Attached in the link is the Elements of Research - IT32",
      course: "Elements of Research - IT32",
      date: "2 days ago",
      isNew: false,
    },
    {
      id: 4,
      text: "Hi everyone, For this subject Elements of Research - IT32",
      course: "Elements of Research - IT32",
      date: "3 days ago",
      isNew: false,
    },
    {
      id: 5,
      text: "Hi, We won't have meeting today Elements of Research - IT32",
      course: "Elements of Research - IT32",
      date: "1 week ago",
      isNew: false,
    },
  ]

  // Events for the selected date
  const events = [
    { id: 1, title: "IT 370 Lecture", time: "9:00 AM - 10:30 AM", location: "Room 305" },
    { id: 2, title: "Research Meeting", time: "1:00 PM - 2:30 PM", location: "Library" },
    { id: 3, title: "Assignment Deadline", time: "11:59 PM", location: "Online Submission" },
  ]

  const toggleTodoCompletion = (id: number) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter((taskId) => taskId !== id))
    } else {
      setCompletedTasks([...completedTasks, id])
    }
  }

  const previousMonth = () => {
    setCurrentMonth("March 2025")
    // In a real app, you would update the dates array here
  }

  const nextMonth = () => {
    setCurrentMonth("May 2025")
    // In a real app, you would update the dates array here
  }

  if (isCollapsed) {
    return (
      <div className="hidden border-l bg-white md:flex flex-col items-center py-4 w-12">
        <button
          onClick={() => setIsCollapsed(false)}
          className="mb-6 flex h-6 w-6 items-center justify-center rounded-full bg-[#0B4619] text-white shadow-md hover:bg-[#0a3d16] transition-colors"
        >
          <ChevronLeft className="h-3 w-3" />
        </button>

        <div className="flex flex-col gap-6 items-center">
          <button className="text-[#0B4619] hover:bg-gray-100 p-2 rounded-full transition-colors">
            <Calendar className="h-5 w-5" />
          </button>
          <button className="text-[#0B4619] hover:bg-gray-100 p-2 rounded-full transition-colors">
            <CheckCircle className="h-5 w-5" />
          </button>
          <button className="text-[#0B4619] hover:bg-gray-100 p-2 rounded-full transition-colors">
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="hidden w-80 flex-col border-l bg-white md:flex"
      initial={{ width: 80 }}
      animate={{ width: 320 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-end p-2">
        <button
          onClick={() => setIsCollapsed(true)}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
        >
          <ChevronRight className="h-3 w-3" />
        </button>
      </div>

      <Card className="mx-2 mb-4 border shadow-sm">
        <CardHeader className="p-3 pb-0">
          <div className="flex items-center justify-between">
            <button className="rounded-full p-1 hover:bg-gray-100 transition-colors">
              <ChevronLeft className="h-5 w-5" onClick={previousMonth} />
            </button>
            <h3 className="font-medium">{currentMonth}</h3>
            <button className="rounded-full p-1 hover:bg-gray-100 transition-colors">
              <ChevronRight className="h-5 w-5" onClick={nextMonth} />
            </button>
          </div>
        </CardHeader>
        <CardContent className="p-3">
          <div className="mt-2 grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500">
            {days.map((day, i) => (
              <div key={i} className="py-1">
                {day}
              </div>
            ))}
            {dates.map((date, i) => (
              <button
                key={i}
                className={`relative aspect-square rounded-full p-1 text-sm transition-colors
                  ${date.month !== "current" ? "text-gray-400" : ""}
                  ${date.isToday ? "bg-[#0B4619] text-white" : ""}
                  ${date.day === selectedDate && !date.isToday ? "bg-gray-200" : ""}
                  ${date.month === "current" && !date.isToday && date.day !== selectedDate ? "hover:bg-gray-100" : ""}
                `}
                onClick={() => setSelectedDate(date.day)}
              >
                {date.day}
                {date.hasEvent && (
                  <span className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#FFD700]"></span>
                )}
              </button>
            ))}
          </div>

          {selectedDate === 11 && (
            <div className="mt-3 space-y-2 border-t pt-2">
              <h4 className="text-xs font-medium text-gray-500">TODAY'S EVENTS</h4>
              {events.map((event) => (
                <div key={event.id} className="rounded-md bg-gray-50 p-2 text-xs">
                  <div className="font-medium">{event.title}</div>
                  <div className="text-gray-500">{event.time}</div>
                  <div className="text-gray-500">{event.location}</div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <button className="text-[#0B4619] hover:underline">full calendar</button>
            <button className="hover:underline">hide</button>
          </div>
        </CardContent>
      </Card>

      <Card className="mx-2 mb-4 border shadow-sm">
        <CardHeader className="p-3 pb-0">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">To-do</CardTitle>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-3">
          <div className="space-y-2">
            {todos.map((todo) => (
              <div key={todo.id} className="flex items-start gap-2 rounded-md p-1 hover:bg-gray-50 transition-colors">
                <div
                  className={`mt-0.5 h-4 w-4 rounded border cursor-pointer flex items-center justify-center
                    ${
                      completedTasks.includes(todo.id)
                        ? "border-[#0B4619] bg-[#0B4619] text-white"
                        : "border-gray-300 hover:border-[#0B4619]"
                    }`}
                  onClick={() => toggleTodoCompletion(todo.id)}
                >
                  {completedTasks.includes(todo.id) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
                <span className={`text-sm ${completedTasks.includes(todo.id) ? "line-through text-gray-400" : ""}`}>
                  {todo.text}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 text-center">
            <Button
              variant="outline"
              size="sm"
              className="h-7 w-full text-xs border-[#0B4619] text-[#0B4619] hover:bg-[#0B4619]/5"
            >
              View All Tasks
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mx-2 mb-4 border shadow-sm">
        <CardHeader className="p-3 pb-0">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">Site-wide Game</CardTitle>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-3">
          <div className="flex items-center justify-center">
            <div className="relative">
              <Avatar className="h-16 w-16 border-4 border-gray-200">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-[#0B4619] text-white">UC</AvatarFallback>
              </Avatar>
              <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700] text-sm font-bold text-[#0B4619] shadow-md">
                20
              </div>
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <Heart className="h-4 w-4 text-red-500" />
                <span className="ml-1 text-sm">88 of 100</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">You are at the last level</p>
              <div className="mt-2 w-full">
                <Progress value={88} className="h-1.5" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex-1 overflow-auto p-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-sm">Announcements</h3>
          <Badge className="bg-[#0B4619]">2 new</Badge>
        </div>
        <div className="space-y-3">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="flex gap-2 group">
              <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-100 text-[#0B4619]">
                <Bell className="h-3 w-3" />
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-1">
                  <p className="text-sm line-clamp-2 group-hover:text-[#0B4619] transition-colors">
                    {announcement.text}
                  </p>
                  {announcement.isNew && <span className="flex h-2 w-2 rounded-full bg-[#0B4619]"></span>}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">{announcement.course}</p>
                  <p className="text-xs text-gray-500">{announcement.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button
            variant="outline"
            size="sm"
            className="h-7 w-full text-xs border-[#0B4619] text-[#0B4619] hover:bg-[#0B4619]/5"
          >
            View All Announcements
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
