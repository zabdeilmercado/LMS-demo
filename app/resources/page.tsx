"use client"

import { useState } from "react"
import { TopNavbar } from "@/components/top-navbar"
import { Sidebar } from "@/components/sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Download, BookOpen, Video, LinkIcon, Filter, Clock, Star } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("Home")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("recent")

  const courseResources = [
    {
      id: 1,
      title: "Network Protocols Overview",
      type: "pdf",
      course: "IT 370 - Advance Networking",
      size: "2.4 MB",
      date: "Apr 10, 2025",
      starred: true,
    },
    {
      id: 2,
      title: "Research Methods Lecture Slides",
      type: "ppt",
      course: "Elements of Research - IT32",
      size: "5.1 MB",
      date: "Apr 8, 2025",
      starred: false,
    },
    {
      id: 3,
      title: "Database Design Principles",
      type: "pdf",
      course: "Information Management",
      size: "1.8 MB",
      date: "Apr 5, 2025",
      starred: true,
    },
    {
      id: 4,
      title: "Programming Lab Exercise 3",
      type: "docx",
      course: "IT 381 - Application Development",
      size: "780 KB",
      date: "Apr 3, 2025",
      starred: false,
    },
  ]

  const libraryResources = [
    {
      id: 1,
      title: "Introduction to Computer Networks",
      type: "book",
      author: "Andrew S. Tanenbaum",
      year: "2021",
      available: true,
    },
    {
      id: 2,
      title: "Database Systems: The Complete Book",
      type: "book",
      author: "Hector Garcia-Molina",
      year: "2019",
      available: true,
    },
    {
      id: 3,
      title: "Software Engineering: A Practitioner's Approach",
      type: "book",
      author: "Roger S. Pressman",
      year: "2020",
      available: false,
    },
    {
      id: 4,
      title: "Artificial Intelligence: A Modern Approach",
      type: "book",
      author: "Stuart Russell & Peter Norvig",
      year: "2022",
      available: true,
    },
  ]

  const onlineResources = [
    {
      id: 1,
      title: "Introduction to TCP/IP",
      type: "video",
      platform: "University Learning Portal",
      duration: "45 min",
      instructor: "Dr. Smith",
    },
    {
      id: 2,
      title: "Research Methodology Workshop",
      type: "webinar",
      platform: "Academic Research Hub",
      duration: "1h 30min",
      instructor: "Prof. Johnson",
    },
    {
      id: 3,
      title: "Programming in Python - Complete Course",
      type: "course",
      platform: "CSU Online Learning",
      duration: "10 hours",
      instructor: "Dr. Williams",
    },
    {
      id: 4,
      title: "Database Design Best Practices",
      type: "article",
      platform: "Digital Library",
      duration: "15 min read",
      instructor: "Prof. Garcia",
    },
  ]

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "pdf":
      case "docx":
      case "ppt":
        return <FileText className="h-10 w-10 text-[#0B4619]" />
      case "book":
        return <BookOpen className="h-10 w-10 text-[#0B4619]" />
      case "video":
      case "webinar":
        return <Video className="h-10 w-10 text-[#0B4619]" />
      case "course":
      case "article":
        return <LinkIcon className="h-10 w-10 text-[#0B4619]" />
      default:
        return <FileText className="h-10 w-10 text-[#0B4619]" />
    }
  }

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab="Resources" setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-auto">
          <div className="border-b border-gray-200 bg-white shadow-sm">
            <div className="container mx-auto">
              <Tabs defaultValue="course-materials" className="w-full">
                <TabsList className="h-14 w-full justify-start rounded-none bg-transparent p-0">
                  <TabsTrigger
                    value="course-materials"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Course Materials
                  </TabsTrigger>
                  <TabsTrigger
                    value="library"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Library Resources
                  </TabsTrigger>
                  <TabsTrigger
                    value="online"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Online Resources
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="container mx-auto p-4 md:p-6">
            <TabsContent value="course-materials" className="mt-0">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#0B4619]">Course Materials</h1>
                  <p className="text-gray-600">Access lecture notes, slides, and other course materials</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="text"
                      placeholder="Search resources..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="gap-2">
                        <Filter className="h-4 w-4" />
                        <span>Sort</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setSortBy("recent")}>
                        <Clock className="mr-2 h-4 w-4" />
                        Most Recent
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy("name")}>
                        <FileText className="mr-2 h-4 w-4" />
                        Name
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy("course")}>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Course
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="grid gap-4">
                {courseResources.map((resource) => (
                  <Card key={resource.id} className="overflow-hidden border shadow-sm transition-all hover:shadow-md">
                    <CardContent className="p-0">
                      <div className="flex items-center">
                        <div className="flex h-full w-16 items-center justify-center p-4">
                          {resource.type === "pdf" && <FileText className="h-10 w-10 text-red-500" />}
                          {resource.type === "ppt" && <FileText className="h-10 w-10 text-orange-500" />}
                          {resource.type === "docx" && <FileText className="h-10 w-10 text-blue-500" />}
                        </div>
                        <div className="flex flex-1 items-center justify-between p-4">
                          <div>
                            <h3 className="font-medium">{resource.title}</h3>
                            <p className="text-sm text-gray-500">{resource.course}</p>
                            <div className="mt-1 flex items-center gap-3">
                              <Badge variant="outline" className="bg-gray-50">
                                {resource.type.toUpperCase()}
                              </Badge>
                              <span className="text-xs text-gray-500">{resource.size}</span>
                              <span className="text-xs text-gray-500">{resource.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#0B4619]">
                              <Star
                                className={`h-5 w-5 ${resource.starred ? "fill-yellow-400 text-yellow-400" : ""}`}
                              />
                            </Button>
                            <Button className="gap-2 bg-[#0B4619] hover:bg-[#0a3d16]">
                              <Download className="h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="library" className="mt-0">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#0B4619]">Library Resources</h1>
                  <p className="text-gray-600">Browse and borrow books from the university library</p>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search library..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {libraryResources.map((resource) => (
                  <Card key={resource.id} className="overflow-hidden border shadow-sm transition-all hover:shadow-md">
                    <CardContent className="p-0">
                      <div className="flex items-center">
                        <div className="flex h-full w-16 items-center justify-center p-4">
                          <BookOpen className="h-10 w-10 text-[#0B4619]" />
                        </div>
                        <div className="flex flex-1 items-center justify-between p-4">
                          <div>
                            <h3 className="font-medium">{resource.title}</h3>
                            <p className="text-sm text-gray-500">
                              By {resource.author}, {resource.year}
                            </p>
                            <div className="mt-1">
                              {resource.available ? (
                                <Badge className="bg-green-500">Available</Badge>
                              ) : (
                                <Badge variant="outline" className="text-red-500">
                                  Checked Out
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div>
                            <Button className="bg-[#0B4619] hover:bg-[#0a3d16]" disabled={!resource.available}>
                              {resource.available ? "Borrow" : "Reserve"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="online" className="mt-0">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#0B4619]">Online Resources</h1>
                  <p className="text-gray-600">Access videos, webinars, and online courses</p>
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search resources..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {onlineResources.map((resource) => (
                  <Card key={resource.id} className="overflow-hidden border shadow-sm transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-4">
                        <div className="rounded-md bg-gray-100 p-2">{getResourceIcon(resource.type)}</div>
                        <div>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          <CardDescription>{resource.platform}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Badge variant="outline" className="bg-gray-50">
                            {resource.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>{resource.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-gray-500" />
                          <span>{resource.instructor}</span>
                        </div>
                      </div>

                      <Button className="mt-4 w-full bg-[#0B4619] hover:bg-[#0a3d16]">Access Resource</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}
