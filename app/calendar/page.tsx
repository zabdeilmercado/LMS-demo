"use client"

import { useState } from "react"
import { TopNavbar } from "@/components/top-navbar"
import { Sidebar } from "@/components/sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Plus, CalendarIcon, Clock, MapPin, BookOpen, FileText } from "lucide-react"

export default function CalendarPage() {
  const [activeTab, setActiveTab] = useState("Calendar")
  const [currentMonth, setCurrentMonth] = useState("April 2025")
  const [selectedDate, setSelectedDate] = useState(15)

  // Calendar data
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const weeks = [
    [
      { day: 30, month: "prev", events: 0 },
      { day: 31, month: "prev", events: 0 },
      { day: 1, month: "current", events: 0 },
      { day: 2, month: "current", events: 0 },
      { day: 3, month: "current", events: 0 },
      { day: 4, month: "current", events: 0 },
      { day: 5, month: "current", events: 0 },
    ],
    [
      { day: 6, month: "current", events: 0 },
      { day: 7, month: "current", events: 0 },
      { day: 8, month: "current", events: 0 },
      { day: 9, month: "current", events: 0 },
      { day: 10, month: "current", events: 0 },
      { day: 11, month: "current", events: 1 },
      { day: 12, month: "current", events: 0 },
    ],
    [
      { day: 13, month: "current", events: 0 },
      { day: 14, month: "current", events: 0 },
      { day: 15, month: "current", events: 3, isToday: true },
      { day: 16, month: "current", events: 0 },
      { day: 17, month: "current", events: 0 },
      { day: 18, month: "current", events: 2 },
      { day: 19, month: "current", events: 0 },
    ],
    [
      { day: 20, month: "current", events: 1 },
      { day: 21, month: "current", events: 0 },
      { day: 22, month: "current", events: 0 },
      { day: 23, month: "current", events: 0 },
      { day: 24, month: "current", events: 0 },
      { day: 25, month: "current", events: 1 },
      { day: 26, month: "current", events: 0 },
    ],
    [
      { day: 27, month: "current", events: 0 },
      { day: 28, month: "current", events: 0 },
      { day: 29, month: "current", events: 0 },
      { day: 30, month: "current", events: 0 },
      { day: 1, month: "next", events: 0 },
      { day: 2, month: "next", events: 0 },
      { day: 3, month: "next", events: 0 },
    ],
  ]

  // Events for the selected date
  const events = [
    {
      id: 1,
      title: "IT 370 Lecture",
      time: "9:00 AM - 10:30 AM",
      location: "Room 305",
      type: "class",
    },
    {
      id: 2,
      title: "Research Meeting",
      time: "1:00 PM - 2:30 PM",
      location: "Library",
      type: "meeting",
    },
    {
      id: 3,
      title: "Assignment Deadline: Research Proposal",
      time: "11:59 PM",
      course: "Elements of Research - IT32",
      type: "assignment",
    },
  ]

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Network Design Project",
      date: "Apr 18, 2025",
      time: "11:59 PM",
      course: "IT 370 - Advance Networking",
      type: "assignment",
    },
    {
      id: 2,
      title: "Midterm Exam",
      date: "Apr 20, 2025",
      time: "9:00 AM - 11:00 AM",
      location: "Examination Hall",
      course: "Elements of Research - IT32",
      type: "exam",
    },
    {
      id: 3,
      title: "Group Presentation",
      date: "Apr 25, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Room 201",
      course: "IT 381 - Application Development",
      type: "presentation",
    },
  ]

  const previousMonth = () => {
    setCurrentMonth("March 2025")
    // In a real app, you would update the calendar data here
  }

  const nextMonth = () => {
    setCurrentMonth("May 2025")
    // In a real app, you would update the calendar data here
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "class":
        return "bg-blue-500"
      case "meeting":
        return "bg-purple-500"
      case "assignment":
        return "bg-amber-500"
      case "exam":
        return "bg-red-500"
      case "presentation":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "class":
        return <BookOpen className="h-4 w-4" />
      case "meeting":
        return <CalendarIcon className="h-4 w-4" />
      case "assignment":
        return <FileText className="h-4 w-4" />
      case "exam":
        return <FileText className="h-4 w-4" />
      case "presentation":
        return <FileText className="h-4 w-4" />
      default:
        return <CalendarIcon className="h-4 w-4" />
    }
  }

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab="Calendar" setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4 md:p-6">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[#0B4619]">Calendar</h1>
                <p className="text-gray-600">Manage your schedule, classes, and deadlines</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Event
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <Card className="border shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg font-semibold">{currentMonth}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" onClick={previousMonth}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Today
                      </Button>
                      <Button variant="ghost" size="icon" onClick={nextMonth}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-7 gap-1">
                      {days.map((day) => (
                        <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                          {day}
                        </div>
                      ))}
                      {weeks.flatMap((week, weekIndex) =>
                        week.map((day, dayIndex) => (
                          <button
                            key={`${weekIndex}-${dayIndex}`}
                            className={`relative aspect-square rounded-md p-2 text-sm transition-colors
                              ${day.month !== "current" ? "text-gray-400" : ""}
                              ${day.isToday ? "bg-[#0B4619] text-white" : ""}
                              ${day.day === selectedDate && !day.isToday ? "bg-gray-200" : ""}
                              ${
                                day.month === "current" && !day.isToday && day.day !== selectedDate
                                  ? "hover:bg-gray-100"
                                  : ""
                              }
                            `}
                            onClick={() => setSelectedDate(day.day)}
                          >
                            <span>{day.day}</span>
                            {day.events > 0 && (
                              <div className="absolute bottom-1 left-0 right-0 flex justify-center">
                                <div className="flex gap-0.5">
                                  {Array.from({ length: Math.min(day.events, 3) }).map((_, i) => (
                                    <div
                                      key={i}
                                      className={`h-1 w-1 rounded-full ${day.isToday ? "bg-white" : "bg-[#0B4619]"}`}
                                    ></div>
                                  ))}
                                  {day.events > 3 && (
                                    <div
                                      className={`h-1 w-1 rounded-full ${day.isToday ? "bg-white" : "bg-[#0B4619]"}`}
                                    ></div>
                                  )}
                                </div>
                              </div>
                            )}
                          </button>
                        )),
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6 border shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold">Events for April {selectedDate}, 2025</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {events.length > 0 ? (
                        events.map((event) => (
                          <div
                            key={event.id}
                            className="flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-gray-50"
                          >
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-full ${getEventTypeColor(
                                event.type,
                              )} text-white`}
                            >
                              {getEventTypeIcon(event.type)}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium">{event.title}</h3>
                              <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{event.time}</span>
                                </div>
                                {event.location && (
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{event.location}</span>
                                  </div>
                                )}
                                {event.course && (
                                  <div className="flex items-center gap-1">
                                    <BookOpen className="h-4 w-4" />
                                    <span>{event.course}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <Badge className={`${getEventTypeColor(event.type)}`}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                          </div>
                        ))
                      ) : (
                        <div className="flex h-32 items-center justify-center rounded-lg border border-dashed">
                          <p className="text-gray-500">No events scheduled for this day</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="border shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div
                          key={event.id}
                          className="rounded-lg border p-3 transition-all hover:bg-gray-50 hover:shadow-sm"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${getEventTypeColor(
                                event.type,
                              )} text-white`}
                            >
                              {getEventTypeIcon(event.type)}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium">{event.title}</h3>
                              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                  <CalendarIcon className="h-3 w-3" />
                                  <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{event.time}</span>
                                </div>
                              </div>
                              {(event.location || event.course) && (
                                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
                                  {event.location && (
                                    <div className="flex items-center gap-1">
                                      <MapPin className="h-3 w-3" />
                                      <span>{event.location}</span>
                                    </div>
                                  )}
                                  {event.course && (
                                    <div className="flex items-center gap-1">
                                      <BookOpen className="h-3 w-3" />
                                      <span>{event.course}</span>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="mt-4 w-full border-[#0B4619] text-[#0B4619] hover:bg-[#0B4619]/5"
                    >
                      View All Events
                    </Button>
                  </CardContent>
                </Card>

                <Card className="mt-6 border shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold">Filters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="classes"
                          className="h-4 w-4 rounded border-gray-300"
                          defaultChecked
                        />
                        <label htmlFor="classes" className="ml-2 flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                          <span>Classes</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="assignments"
                          className="h-4 w-4 rounded border-gray-300"
                          defaultChecked
                        />
                        <label htmlFor="assignments" className="ml-2 flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                          <span>Assignments</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="exams" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                        <label htmlFor="exams" className="ml-2 flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-500"></div>
                          <span>Exams</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="meetings"
                          className="h-4 w-4 rounded border-gray-300"
                          defaultChecked
                        />
                        <label htmlFor="meetings" className="ml-2 flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                          <span>Meetings</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="presentations"
                          className="h-4 w-4 rounded border-gray-300"
                          defaultChecked
                        />
                        <label htmlFor="presentations" className="ml-2 flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <span>Presentations</span>
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}
