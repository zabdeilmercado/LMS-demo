"use client"

import { useState } from "react"
import { Bell, ChevronRight, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function RecentAnnouncements() {
  const [filter, setFilter] = useState("All")

  const announcements = [
    {
      id: 1,
      title: "You are required to attend the Computer Studies Life Skills Development Program",
      course: "Computer Studies Life Skills",
      date: "Apr 10, 2025",
      read: false,
      category: "Required",
    },
    {
      id: 2,
      title: "Urians, election season is approaching",
      course: "Computer Studies Life Skills",
      date: "Apr 8, 2025",
      read: false,
      category: "General",
    },
    {
      id: 3,
      title: "Hi, Attached in the link is the Elements of Research - IT32",
      course: "Elements of Research - IT32",
      date: "Apr 5, 2025",
      read: true,
      category: "Course",
    },
    {
      id: 4,
      title: "Hi everyone, For this subject Elements of Research - IT32",
      course: "Elements of Research - IT32",
      date: "Apr 3, 2025",
      read: true,
      category: "Course",
    },
    {
      id: 5,
      title: "Hi, We won't have meeting today Elements of Research - IT32",
      course: "Elements of Research - IT32",
      date: "Apr 1, 2025",
      read: true,
      category: "Course",
    },
  ]

  const filteredAnnouncements = filter === "All" ? announcements : announcements.filter((a) => a.category === filter)

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Required":
        return <Badge className="bg-red-500">Required</Badge>
      case "Course":
        return <Badge className="bg-blue-500">Course</Badge>
      case "General":
        return <Badge className="bg-gray-500">General</Badge>
      default:
        return null
    }
  }

  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Recent Announcements</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              <Filter className="h-4 w-4" />
              <span>{filter}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setFilter("All")}>All</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter("Required")}>Required</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter("Course")}>Course</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter("General")}>General</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className={`rounded-lg border p-3 transition-all hover:bg-gray-50 hover:shadow-sm ${
                !announcement.read ? "border-l-4 border-l-[#0B4619]" : ""
              }`}
            >
              <div className="flex gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-[#0B4619]">
                  <Bell className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium">{announcement.title}</h3>
                    {getCategoryBadge(announcement.category)}
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-xs text-gray-500">{announcement.course}</p>
                    <p className="text-xs text-gray-500">{announcement.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="gap-1 border-[#0B4619] text-[#0B4619] hover:bg-[#0B4619]/5">
            View All Announcements
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
