"use client"

import type React from "react"

import { useState } from "react"
import { TopNavbar } from "@/components/top-navbar"
import { Sidebar } from "@/components/sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Bell, Calendar, BookOpen, CheckCircle, Settings, Filter, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("Home")
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState("All")

  const notifications = [
    {
      id: 1,
      title: "Assignment Due",
      message: "Research Paper due in 2 days",
      time: "1 hour ago",
      read: false,
      type: "assignment",
      course: "Elements of Research - IT32",
    },
    {
      id: 2,
      title: "New Course Material",
      message: "New lecture slides available for IT 370",
      time: "Yesterday",
      read: false,
      type: "course",
      course: "IT 370 - Advance Networking",
    },
    {
      id: 3,
      title: "Grade Posted",
      message: "Your quiz has been graded - 85/100",
      time: "Apr 12",
      read: false,
      type: "grade",
      course: "IT 381 - Application Development",
    },
    {
      id: 4,
      title: "System Maintenance",
      message: "LMS will be down for maintenance on Sunday",
      time: "Apr 11",
      read: true,
      type: "system",
    },
    {
      id: 5,
      title: "New Announcement",
      message: "Important announcement from the Dean",
      time: "Apr 10",
      read: true,
      type: "announcement",
    },
    {
      id: 6,
      title: "Group Invitation",
      message: "You've been invited to join 'Advanced Networking Study Group'",
      time: "Apr 9",
      read: true,
      type: "group",
      course: "IT 370 - Advance Networking",
    },
    {
      id: 7,
      title: "Calendar Event",
      message: "New event: Midterm Exam on Apr 20",
      time: "Apr 8",
      read: true,
      type: "calendar",
      course: "Elements of Research - IT32",
    },
    {
      id: 8,
      title: "Resource Update",
      message: "Library has added new books on Database Design",
      time: "Apr 7",
      read: true,
      type: "resource",
    },
  ]

  const filteredNotifications =
    filter === "All" ? notifications : notifications.filter((n) => n.type === filter.toLowerCase())

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Calendar className="h-4 w-4" />
          </div>
        )
      case "course":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <BookOpen className="h-4 w-4" />
          </div>
        )
      case "grade":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle className="h-4 w-4" />
          </div>
        )
      case "system":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600">
            <Settings className="h-4 w-4" />
          </div>
        )
      case "calendar":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
            <Calendar className="h-4 w-4" />
          </div>
        )
      case "group":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-600">
            <Users className="h-4 w-4" />
          </div>
        )
      case "resource":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <BookOpen className="h-4 w-4" />
          </div>
        )
      default:
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-[#0B4619]">
            <Bell className="h-4 w-4" />
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab="Notifications" setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-auto">
          <div className="border-b border-gray-200 bg-white shadow-sm">
            <div className="container mx-auto">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="h-14 w-full justify-start rounded-none bg-transparent p-0">
                  <TabsTrigger
                    value="all"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    All Notifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="unread"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Unread <Badge className="ml-1 bg-[#0B4619]">{notifications.filter((n) => !n.read).length}</Badge>
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Notification Settings
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="container mx-auto p-4 md:p-6">
            <TabsContent value="all" className="mt-0">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#0B4619]">Notifications</h1>
                  <p className="text-gray-600">Stay updated with important announcements and events</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="text"
                      placeholder="Search notifications..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="gap-2">
                        <Filter className="h-4 w-4" />
                        <span>{filter}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setFilter("All")}>All</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilter("Assignment")}>Assignments</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilter("Course")}>Courses</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilter("Grade")}>Grades</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilter("System")}>System</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilter("Calendar")}>Calendar</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilter("Group")}>Groups</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilter("Resource")}>Resources</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <Card className="border shadow-sm">
                <CardContent className="p-0">
                  <div className="divide-y">
                    {filteredNotifications.length > 0 ? (
                      filteredNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 transition-colors hover:bg-gray-50 ${
                            !notification.read ? "bg-green-50" : ""
                          }`}
                        >
                          <div className="flex gap-3">
                            {getNotificationIcon(notification.type)}
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <h3 className={`font-medium ${!notification.read ? "text-[#0B4619]" : ""}`}>
                                  {notification.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-gray-500">{notification.time}</span>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>Mark as read</DropdownMenuItem>
                                      <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600">{notification.message}</p>
                              {notification.course && (
                                <div className="mt-1 flex items-center gap-1">
                                  <BookOpen className="h-3 w-3 text-gray-500" />
                                  <span className="text-xs text-gray-500">{notification.course}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex h-32 items-center justify-center">
                        <p className="text-gray-500">No notifications found</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="unread" className="mt-0">
              <Card className="border shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-semibold">Unread Notifications</CardTitle>
                  <Button variant="outline" size="sm">
                    Mark all as read
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {notifications.filter((n) => !n.read).length > 0 ? (
                      notifications
                        .filter((n) => !n.read)
                        .map((notification) => (
                          <div key={notification.id} className="bg-green-50 p-4 transition-colors hover:bg-green-100">
                            <div className="flex gap-3">
                              {getNotificationIcon(notification.type)}
                              <div className="flex-1">
                                <div className="flex items-start justify-between">
                                  <h3 className="font-medium text-[#0B4619]">{notification.title}</h3>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500">{notification.time}</span>
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                          <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end">
                                        <DropdownMenuItem>Mark as read</DropdownMenuItem>
                                        <DropdownMenuItem>Delete</DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600">{notification.message}</p>
                                {notification.course && (
                                  <div className="mt-1 flex items-center gap-1">
                                    <BookOpen className="h-3 w-3 text-gray-500" />
                                    <span className="text-xs text-gray-500">{notification.course}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="flex h-32 items-center justify-center">
                        <p className="text-gray-500">No unread notifications</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-3 font-medium">Email Notifications</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label htmlFor="email-assignments" className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-amber-500" />
                            <span>Assignment Deadlines</span>
                          </label>
                          <input
                            type="checkbox"
                            id="email-assignments"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="email-grades" className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Grade Updates</span>
                          </label>
                          <input
                            type="checkbox"
                            id="email-grades"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="email-announcements" className="flex items-center gap-2">
                            <Bell className="h-4 w-4 text-[#0B4619]" />
                            <span>Course Announcements</span>
                          </label>
                          <input
                            type="checkbox"
                            id="email-announcements"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="email-system" className="flex items-center gap-2">
                            <Settings className="h-4 w-4 text-purple-500" />
                            <span>System Updates</span>
                          </label>
                          <input
                            type="checkbox"
                            id="email-system"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 font-medium">Push Notifications</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label htmlFor="push-assignments" className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-amber-500" />
                            <span>Assignment Deadlines</span>
                          </label>
                          <input
                            type="checkbox"
                            id="push-assignments"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="push-grades" className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Grade Updates</span>
                          </label>
                          <input
                            type="checkbox"
                            id="push-grades"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="push-announcements" className="flex items-center gap-2">
                            <Bell className="h-4 w-4 text-[#0B4619]" />
                            <span>Course Announcements</span>
                          </label>
                          <input
                            type="checkbox"
                            id="push-announcements"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="push-system" className="flex items-center gap-2">
                            <Settings className="h-4 w-4 text-purple-500" />
                            <span>System Updates</span>
                          </label>
                          <input
                            type="checkbox"
                            id="push-system"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 font-medium">Notification Frequency</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="freq-realtime"
                            name="frequency"
                            className="h-4 w-4 border-gray-300"
                            defaultChecked
                          />
                          <label htmlFor="freq-realtime" className="ml-2">
                            Real-time
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="freq-daily" name="frequency" className="h-4 w-4 border-gray-300" />
                          <label htmlFor="freq-daily" className="ml-2">
                            Daily digest
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="freq-weekly" name="frequency" className="h-4 w-4 border-gray-300" />
                          <label htmlFor="freq-weekly" className="ml-2">
                            Weekly digest
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-[#0B4619] hover:bg-[#0a3d16]">Save Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
