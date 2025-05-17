"use client"

import { useState } from "react"
import { Search, Filter, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export function ClassesSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [sortOrder, setSortOrder] = useState("asc")

  const courses = [
    {
      id: 1,
      title: "Advance Networking",
      subtitle: "Course code IT 370 - Section code IT32",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-[#0B4619]",
      progress: 65,
      instructor: "Dr. Smith",
    },
    {
      id: 2,
      title: "Computer Studies Life Skills Development Program",
      subtitle: "SY 2024-2025",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-[#0B4619]",
      progress: 42,
      instructor: "Prof. Johnson",
    },
    {
      id: 3,
      title: "Elements of Research - IT32",
      subtitle: "",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-[#0B4619]",
      progress: 78,
      instructor: "Dr. Williams",
    },
    {
      id: 4,
      title: "Guidelines for Taking the Summative Exams",
      subtitle: "",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-gray-700",
      progress: 100,
      instructor: "Academic Affairs",
    },
    {
      id: 5,
      title: "INFORMATION MANAGEMENT",
      subtitle: "",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-[#0B4619]",
      progress: 35,
      instructor: "Prof. Garcia",
    },
    {
      id: 6,
      title: "IT 170 Computer Fundamentals and Operations",
      subtitle: "",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-[#0B4619]",
      progress: 50,
      instructor: "Dr. Chen",
    },
    {
      id: 7,
      title: "IT 31 - IT 381 - Application Development and Emerging Technologies",
      subtitle: "",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-[#0B4619]",
      progress: 25,
      instructor: "Prof. Martinez",
    },
    {
      id: 8,
      title: "IT 374-EL3 - Integrative Programming and Technologies",
      subtitle: "",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-gray-800",
      progress: 15,
      instructor: "Dr. Thompson",
    },
  ]

  // Filter courses based on search query
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === "name") {
      return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    } else if (sortBy === "progress") {
      return sortOrder === "asc" ? a.progress - b.progress : b.progress - a.progress
    } else if (sortBy === "instructor") {
      return sortOrder === "asc" ? a.instructor.localeCompare(b.instructor) : b.instructor.localeCompare(a.instructor)
    }
    return 0
  })

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  return (
    <div id="classes-section" className="rounded-lg border bg-white p-6 shadow-sm">
      <Card className="border shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="text-lg font-semibold">My Courses</CardTitle>
            <div className="flex flex-wrap gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  className="pl-8 h-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9 gap-1">
                    <Filter className="h-4 w-4" />
                    <span>Sort</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => {
                      setSortBy("name")
                      toggleSortOrder()
                    }}
                  >
                    By Name {sortBy === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortBy("progress")
                      toggleSortOrder()
                    }}
                  >
                    By Progress {sortBy === "progress" && (sortOrder === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSortBy("instructor")
                      toggleSortOrder()
                    }}
                  >
                    By Instructor {sortBy === "instructor" && (sortOrder === "asc" ? "↑" : "↓")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="enrolled" className="w-full">
            <TabsList className="mb-4 grid w-full grid-cols-2 bg-transparent p-0">
              <TabsTrigger
                value="enrolled"
                className="data-[state=active]:border-b-2 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Enrolled <span className="ml-1 rounded-full bg-gray-200 px-2 py-0.5 text-xs">8</span>
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="data-[state=active]:border-b-2 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                Completed <span className="ml-1 rounded-full bg-gray-200 px-2 py-0.5 text-xs">0</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="enrolled" className="mt-0">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {sortedCourses.length > 0 ? (
                  sortedCourses.map((course) => (
                    <Link
                      href={`/course/${course.id}`}
                      key={course.id}
                      className="group flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
                    >
                      <div className={`h-3 w-full ${course.color}`}></div>
                      <div className="flex flex-1 items-start gap-3 p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100">
                          <BookOpen className="h-6 w-6 text-[#0B4619]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium line-clamp-1">{course.title}</h3>
                          {course.subtitle && <p className="text-xs text-gray-500">{course.subtitle}</p>}
                          <p className="text-xs text-gray-500 mt-1">{course.instructor}</p>
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-xs">
                              <span>Progress</span>
                              <span className="font-medium">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-1.5 mt-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full py-8 text-center">
                    <p className="text-gray-500">No courses match your search criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            <TabsContent value="completed" className="mt-0">
              <div className="flex h-40 items-center justify-center">
                <p className="text-gray-500">You have no completed classes.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
