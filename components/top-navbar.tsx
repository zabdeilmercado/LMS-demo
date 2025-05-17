"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Bell, Calendar, Search, Mail, Menu, X, LogOut, Settings, User, HelpCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function TopNavbar() {
  const router = useRouter()
  const [unreadEmails, setUnreadEmails] = useState(3)
  const [unreadNotifications, setUnreadNotifications] = useState(5)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const emails = [
    { id: 1, sender: "Dr. Smith", subject: "Assignment Feedback", time: "10:30 AM", read: false, avatar: "S" },
    {
      id: 2,
      sender: "Prof. Johnson",
      subject: "Class Cancelled Tomorrow",
      time: "Yesterday",
      read: false,
      avatar: "J",
    },
    { id: 3, sender: "System Admin", subject: "Password Reset", time: "Yesterday", read: false, avatar: "A" },
    { id: 4, sender: "IT Department", subject: "System Maintenance", time: "Apr 10", read: true, avatar: "I" },
    { id: 5, sender: "Library", subject: "Book Return Reminder", time: "Apr 8", read: true, avatar: "L" },
  ]

  const notifications = [
    {
      id: 1,
      title: "Assignment Due",
      message: "Research Paper due in 2 days",
      time: "1 hour ago",
      read: false,
      type: "assignment",
    },
    {
      id: 2,
      title: "New Course Material",
      message: "New lecture slides available for IT 370",
      time: "Yesterday",
      read: false,
      type: "course",
    },
    {
      id: 3,
      title: "Grade Posted",
      message: "Your quiz has been graded - 85/100",
      time: "Apr 12",
      read: false,
      type: "grade",
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
  ]

  const events = [
    { id: 1, title: "IT 370 Lecture", time: "9:00 AM - 10:30 AM", location: "Room 305", date: "Today" },
    { id: 2, title: "Research Meeting", time: "1:00 PM - 2:30 PM", location: "Library", date: "Today" },
    { id: 3, title: "Assignment Deadline", time: "11:59 PM", location: "Online Submission", date: "Today" },
    { id: 4, title: "Elements of Research", time: "10:00 AM - 11:30 AM", location: "Room 201", date: "Tomorrow" },
    { id: 5, title: "Group Project Meeting", time: "3:00 PM - 4:30 PM", location: "Study Hall", date: "Tomorrow" },
  ]

  const searchCategories = [
    { id: "courses", name: "Courses" },
    { id: "people", name: "People" },
    { id: "resources", name: "Resources" },
  ]

  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true)
      const timer = setTimeout(() => {
        const results = [{ id: 6, title: "Network Design Project", type: "assignment" }].filter((item) =>
          item.title?.toLowerCase().includes(searchQuery.toLowerCase()),
        )

        setSearchResults(results)
        setIsSearching(false)
      }, 500)

      return () => clearTimeout(timer)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const markEmailAsRead = (id: number) => {
    setUnreadEmails((prev) => Math.max(0, prev - 1))
  }

  const markNotificationAsRead = (id: number) => {
    setUnreadNotifications((prev) => Math.max(0, prev - 1))
  }

  const markAllNotificationsAsRead = () => {
    setUnreadNotifications(0)
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]/20 text-[#FFD700]">
            <Calendar className="h-4 w-4" />
          </div>
        )
      case "course":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]/20 text-[#FFD700]">
            <Book className="h-4 w-4" />
          </div>
        )
      case "grade":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]/20 text-[#FFD700]">
            <CheckCircle className="h-4 w-4" />
          </div>
        )
      case "system":
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]/20 text-[#FFD700]">
            <Settings className="h-4 w-4" />
          </div>
        )
      default:
        return (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]/20 text-[#FFD700]">
            <Bell className="h-4 w-4" />
          </div>
        )
    }
  }

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-[#0B4619] px-4 shadow-md md:px-6">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-[#0a3d16]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image src="/images/csu-logo.png" alt="CSU Logo" fill className="object-contain" priority />
        </div>
        <div className="hidden md:block">
          <h1 className="text-xl font-bold text-white">CARAGA STATE UNIVERSITY</h1>
          <p className="text-xs text-[#FFD700]">Competence, Service, and Uprightness</p>
        </div>
        <div className="md:hidden">
          <h1 className="text-lg font-bold text-white">CSU</h1>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute inset-x-0 top-16 z-50 flex flex-col bg-[#0B4619] p-4 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#0a3d16]">
                <Mail className="mr-2 h-5 w-5" />
                Messages
                {unreadEmails > 0 && <Badge className="ml-auto bg-[#FFD700] text-[#0B4619]">{unreadEmails}</Badge>}
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#0a3d16]">
                <Bell className="mr-2 h-5 w-5" />
                Notifications
                {unreadNotifications > 0 && (
                  <Badge className="ml-auto bg-[#FFD700] text-[#0B4619]">{unreadNotifications}</Badge>
                )}
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#0a3d16]">
                <Calendar className="mr-2 h-5 w-5" />
                Calendar
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#0a3d16]">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent text-white border-[#FFD700]/30 hover:bg-[#0a3d16] hover:text-[#FFD700]"
                  onClick={() => router.push("/login")}
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Logout
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden items-center space-x-1 md:flex md:space-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-[#0a3d16] transition-colors">
              <Mail className="h-5 w-5" />
              {unreadEmails > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD700] text-xs font-medium text-[#0B4619] shadow-sm">
                  {unreadEmails}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end" sideOffset={5}>
            <div className="flex items-center justify-between border-b p-3">
              <h3 className="font-medium">Messages</h3>
              <Button variant="ghost" size="sm" className="h-8 text-xs">
                Mark all as read
              </Button>
            </div>
            <div className="max-h-[350px] overflow-auto">
              {emails.map((email) => (
                <div
                  key={email.id}
                  className={`border-b p-3 hover:bg-[#f5f5f5] transition-colors cursor-pointer ${!email.read ? "bg-[#f0f9f0]" : ""}`}
                  onClick={() => markEmailAsRead(email.id)}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-9 w-9 border border-gray-200">
                      <AvatarFallback className="bg-[#0B4619] text-white">ZB</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className={`text-sm font-medium truncate ${!email.read ? "text-[#0B4619]" : ""}`}>
                          {email.sender}
                        </p>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{email.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{email.subject}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t p-2">
              <Button
                variant="ghost"
                className="w-full justify-center text-[#0B4619] hover:bg-[#f0f9f0] hover:text-[#0B4619]"
              >
                View all messages
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-[#0a3d16] transition-colors">
              <Bell className="h-5 w-5" />
              {unreadNotifications > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD700] text-xs font-medium text-[#0B4619] shadow-sm">
                  {unreadNotifications}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end" sideOffset={5}>
            <div className="flex items-center justify-between border-b p-3">
              <h3 className="font-medium">Notifications</h3>
              <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={markAllNotificationsAsRead}>
                Mark all as read
              </Button>
            </div>
            <div className="max-h-[350px] overflow-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`border-b p-3 hover:bg-[#f5f5f5] transition-colors cursor-pointer ${!notification.read ? "bg-[#f0f9f0]" : ""}`}
                  onClick={() => markNotificationAsRead(notification.id)}
                >
                  <div className="flex gap-3">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p className={`text-sm font-medium truncate ${!notification.read ? "text-[#0B4619]" : ""}`}>
                          {notification.title}
                        </p>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t p-2">
              <Button
                variant="ghost"
                className="w-full justify-center text-[#0B4619] hover:bg-[#f0f9f0] hover:text-[#0B4619]"
              >
                View all notifications
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#0a3d16] transition-colors">
              <Calendar className="h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end" sideOffset={5}>
            <div className="border-b p-3">
              <h3 className="font-medium">Today's Schedule</h3>
            </div>
            <div className="max-h-[350px] overflow-auto">
              {events.map((event) => (
                <div key={event.id} className="border-b p-3 hover:bg-[#f5f5f5] transition-colors">
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f9f0] text-[#0B4619]">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">{event.title}</p>
                        <Badge variant="outline" className="h-5 text-xs border-[#FFD700] text-[#0B4619]">
                          {event.date}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500">{event.time}</p>
                      <p className="text-xs text-gray-500">{event.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t p-2">
              <Button
                variant="ghost"
                className="w-full justify-center text-[#0B4619] hover:bg-[#f0f9f0] hover:text-[#0B4619]"
              >
                View full calendar
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#0a3d16] transition-colors">
              <Search className="h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-3" align="end" sideOffset={5}>
            <div className="space-y-3">
              <h3 className="font-medium">Quick Search</h3>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search courses, assignments..."
                  className="w-full pl-8 pr-4 focus-visible:ring-[#0B4619]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {isSearching ? (
                <div className="py-4 text-center">
                  <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-[#0B4619] border-r-transparent"></div>
                  <p className="mt-2 text-sm text-gray-500">Searching...</p>
                </div>
              ) : searchQuery.length > 0 ? (
                searchResults.length > 0 ? (
                  <div className="space-y-2">
                    {searchCategories.map((category) => {
                      const categoryResults = searchResults.filter((result) => result.type === category.id.slice(0, -1))
                      if (categoryResults.length === 0) return null

                      return (
                        <div key={category.id}>
                          <h4 className="mb-1 text-xs font-medium text-gray-500 uppercase">{category.name}</h4>
                          <ul className="space-y-1">
                            {categoryResults.map((result) => (
                              <li key={result.id} className="rounded-md p-2 text-sm hover:bg-[#f0f9f0] cursor-pointer">
                                {result.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="py-4 text-center">
                    <p className="text-sm text-gray-500">No results found</p>
                  </div>
                )
              ) : (
                <div>
                  <h4 className="mb-2 text-xs font-medium text-gray-500">RECENT SEARCHES</h4>
                  <ul className="space-y-1">
                    <li className="rounded-md p-2 text-sm hover:bg-[#f0f9f0] cursor-pointer">IT 370 Assignment</li>
                    <li className="rounded-md p-2 text-sm hover:bg-[#f0f9f0] cursor-pointer">Research Methods</li>
                    <li className="rounded-md p-2 text-sm hover:bg-[#f0f9f0] cursor-pointer">Programming Lab</li>
                  </ul>
                </div>
              )}
            </div>
          </PopoverContent>
        </Popover>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2 hover:bg-[#0a3d16] transition-colors">
              <Avatar className="h-8 w-8 border-2 border-[#FFD700]/50">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-[#FFD700] text-[#0B4619]">ZB</AvatarFallback>
              </Avatar>
              <span className="hidden md:inline-block text-white">zabbyy</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56" sideOffset={5}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer text-red-600 focus:text-red-600"
              onClick={() => router.push("/login")}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

function Book(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
