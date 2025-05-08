"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { TopNavbar } from "@/components/top-navbar"
import { Sidebar } from "@/components/sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { courseData } from "@/lib/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { FileText, Video, MessageSquare, BookOpen, Calendar, CheckCircle } from "lucide-react"

export default function CoursePage() {
  const params = useParams()
  const courseId = Number(params.id)
  const course = courseData.find((c) => c.id === courseId)
  const [activeTab, setActiveTab] = useState("Home")

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className="flex h-screen flex-col">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab="Classes" setActiveTab={() => {}} />
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="relative">
            <div className="h-40 w-full bg-gradient-to-r from-blue-600 to-blue-800"></div>
            <div className="absolute inset-x-0 bottom-0 flex items-end px-6 py-4 text-white">
              <div>
                <h1 className="text-2xl font-bold">{course.title}</h1>
                <p className="text-blue-100">{course.instructor}</p>
              </div>
              <div className="ml-auto flex space-x-2">
                <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule
                </Button>
                <Button className="bg-white text-blue-700 hover:bg-white/90">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mark as Complete
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="mb-4 w-full justify-start bg-transparent p-0">
                <TabsTrigger
                  value="content"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                >
                  Content
                </TabsTrigger>
                <TabsTrigger
                  value="assignments"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                >
                  Assignments
                </TabsTrigger>
                <TabsTrigger
                  value="discussions"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                >
                  Discussions
                </TabsTrigger>
                <TabsTrigger
                  value="grades"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                >
                  Grades
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="mt-0">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Course Content</CardTitle>
                        <CardDescription>Access your course materials and resources</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="rounded-lg border p-4 hover:bg-gray-50">
                            <div className="flex items-center">
                              <div className="mr-4 rounded-full bg-blue-100 p-2 text-blue-600">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="font-medium">Module 1: Introduction</h3>
                                <p className="text-sm text-gray-500">Course overview and syllabus</p>
                              </div>
                              <Button variant="ghost" className="ml-auto">
                                View
                              </Button>
                            </div>
                          </div>

                          <div className="rounded-lg border p-4 hover:bg-gray-50">
                            <div className="flex items-center">
                              <div className="mr-4 rounded-full bg-blue-100 p-2 text-blue-600">
                                <Video className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="font-medium">Module 2: Core Concepts</h3>
                                <p className="text-sm text-gray-500">Video lectures and reading materials</p>
                              </div>
                              <Button variant="ghost" className="ml-auto">
                                View
                              </Button>
                            </div>
                          </div>

                          <div className="rounded-lg border p-4 hover:bg-gray-50">
                            <div className="flex items-center">
                              <div className="mr-4 rounded-full bg-blue-100 p-2 text-blue-600">
                                <BookOpen className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="font-medium">Module 3: Advanced Topics</h3>
                                <p className="text-sm text-gray-500">In-depth study materials</p>
                              </div>
                              <Button variant="ghost" className="ml-auto">
                                View
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Course Progress</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="mb-2 flex justify-between text-sm">
                              <span>Overall Progress</span>
                              <span className="font-medium">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>

                          <div className="rounded-lg bg-gray-50 p-4">
                            <h3 className="font-medium">Upcoming Deadlines</h3>
                            <div className="mt-2 space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Assignment 1</span>
                                <span className="text-red-500">Apr 15</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Quiz 2</span>
                                <span>Apr 18</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="assignments" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Assignments</CardTitle>
                    <CardDescription>View and submit your course assignments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <div>
                            <h3 className="font-medium">Assignment 1: Research Proposal</h3>
                            <p className="text-sm text-gray-500">Due: Apr 15, 2025</p>
                          </div>
                          <div className="ml-auto flex items-center space-x-2">
                            <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                              Pending
                            </span>
                            <Button>Submit</Button>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <div>
                            <h3 className="font-medium">Assignment 2: Project Implementation</h3>
                            <p className="text-sm text-gray-500">Due: Apr 22, 2025</p>
                          </div>
                          <div className="ml-auto flex items-center space-x-2">
                            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                              Not Started
                            </span>
                            <Button variant="outline">View</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discussions" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Discussions</CardTitle>
                    <CardDescription>Participate in course discussions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <div className="mr-4 rounded-full bg-blue-100 p-2 text-blue-600">
                            <MessageSquare className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Topic 1: Introduction Discussion</h3>
                            <p className="text-sm text-gray-500">15 replies • Last post 2 days ago</p>
                          </div>
                          <Button variant="ghost" className="ml-auto">
                            View
                          </Button>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <div className="mr-4 rounded-full bg-blue-100 p-2 text-blue-600">
                            <MessageSquare className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-medium">Topic 2: Research Methodology</h3>
                            <p className="text-sm text-gray-500">8 replies • Last post 1 week ago</p>
                          </div>
                          <Button variant="ghost" className="ml-auto">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="grades" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Grades</CardTitle>
                    <CardDescription>View your course grades and feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b text-left">
                              <th className="px-4 py-2 font-medium">Assignment</th>
                              <th className="px-4 py-2 font-medium">Due Date</th>
                              <th className="px-4 py-2 font-medium">Status</th>
                              <th className="px-4 py-2 font-medium">Grade</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="px-4 py-2">Quiz 1</td>
                              <td className="px-4 py-2">Apr 5, 2025</td>
                              <td className="px-4 py-2">
                                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                                  Completed
                                </span>
                              </td>
                              <td className="px-4 py-2">85/100</td>
                            </tr>
                            <tr className="border-b">
                              <td className="px-4 py-2">Assignment 1</td>
                              <td className="px-4 py-2">Apr 15, 2025</td>
                              <td className="px-4 py-2">
                                <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                                  Pending
                                </span>
                              </td>
                              <td className="px-4 py-2">-</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}
