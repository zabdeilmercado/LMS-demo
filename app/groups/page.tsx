"use client"

import { useState } from "react"
import { TopNavbar } from "@/components/top-navbar"
import { Sidebar } from "@/components/sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Users, MessageSquare, FileText, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function GroupsPage() {
  const [activeTab, setActiveTab] = useState("Home")
  const [searchQuery, setSearchQuery] = useState("")

  const myGroups = [
    {
      id: 1,
      name: "Advanced Networking Study Group",
      members: 8,
      course: "IT 370 - Advance Networking",
      lastActivity: "Today",
      unreadMessages: 3,
    },
    {
      id: 2,
      name: "Research Methods Team",
      members: 5,
      course: "Elements of Research - IT32",
      lastActivity: "Yesterday",
      unreadMessages: 0,
    },
    {
      id: 3,
      name: "Programming Project Team",
      members: 4,
      course: "IT 381 - Application Development",
      lastActivity: "2 days ago",
      unreadMessages: 5,
    },
  ]

  const availableGroups = [
    {
      id: 4,
      name: "Database Design Study Group",
      members: 12,
      course: "Information Management",
      description: "A group for discussing database design principles and working on assignments together.",
    },
    {
      id: 5,
      name: "Web Development Club",
      members: 20,
      course: "University Club",
      description: "Learn and practice modern web development technologies and frameworks.",
    },
    {
      id: 6,
      name: "Cybersecurity Interest Group",
      members: 15,
      course: "University Club",
      description: "Discuss the latest in cybersecurity trends, threats, and defenses.",
    },
  ]

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab="Groups" setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-auto">
          <div className="border-b border-gray-200 bg-white shadow-sm">
            <div className="container mx-auto">
              <Tabs defaultValue="my-groups" className="w-full">
                <TabsList className="h-14 w-full justify-start rounded-none bg-transparent p-0">
                  <TabsTrigger
                    value="my-groups"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    My Groups
                  </TabsTrigger>
                  <TabsTrigger
                    value="discover"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Discover Groups
                  </TabsTrigger>
                  <TabsTrigger
                    value="create"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Create Group
                  </TabsTrigger>
                </TabsList>

                <div className="container mx-auto p-4 md:p-6">
                  <TabsContent value="my-groups" className="mt-0">
                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h1 className="text-2xl font-bold text-[#0B4619]">My Groups</h1>
                        <p className="text-gray-600">
                          Collaborate with your classmates in study groups and project teams
                        </p>
                      </div>
                      <div className="relative w-full sm:w-64">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                          type="text"
                          placeholder="Search groups..."
                          className="pl-8"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {myGroups.map((group) => (
                        <Card
                          key={group.id}
                          className="overflow-hidden border shadow-sm transition-all hover:shadow-md"
                        >
                          <div className="h-3 w-full bg-[#0B4619]"></div>
                          <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-lg">{group.name}</CardTitle>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Group</DropdownMenuItem>
                                  <DropdownMenuItem>Leave Group</DropdownMenuItem>
                                  <DropdownMenuItem>Mute Notifications</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                            <CardDescription>{group.course}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-600">{group.members} members</span>
                              </div>
                              <div className="text-sm text-gray-500">Last active: {group.lastActivity}</div>
                            </div>

                            <div className="mt-4 flex -space-x-2">
                              {[...Array(Math.min(4, group.members))].map((_, i) => (
                                <Avatar key={i} className="border-2 border-white">
                                  <AvatarFallback className="bg-[#0B4619] text-white">
                                    {String.fromCharCode(65 + i)}
                                  </AvatarFallback>
                                </Avatar>
                              ))}
                              {group.members > 4 && (
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs font-medium">
                                  +{group.members - 4}
                                </div>
                              )}
                            </div>

                            <div className="mt-4 flex gap-2">
                              <Button className="flex-1 gap-2 bg-[#0B4619] hover:bg-[#0a3d16]">
                                <MessageSquare className="h-4 w-4" />
                                Chat
                                {group.unreadMessages > 0 && (
                                  <Badge className="ml-1 bg-[#FFD700] text-[#0B4619]">{group.unreadMessages}</Badge>
                                )}
                              </Button>
                              <Button variant="outline" className="flex-1 gap-2">
                                <FileText className="h-4 w-4" />
                                Files
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="discover" className="mt-0">
                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h1 className="text-2xl font-bold text-[#0B4619]">Discover Groups</h1>
                        <p className="text-gray-600">Find and join study groups and interest groups</p>
                      </div>
                      <div className="relative w-full sm:w-64">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                          type="text"
                          placeholder="Search groups..."
                          className="pl-8"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {availableGroups.map((group) => (
                        <Card
                          key={group.id}
                          className="overflow-hidden border shadow-sm transition-all hover:shadow-md"
                        >
                          <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-lg">{group.name}</CardTitle>
                            </div>
                            <CardDescription>{group.course}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">{group.description}</p>

                            <div className="mt-3 flex items-center gap-2">
                              <Users className="h-4 w-4 text-gray-500" />
                              <span className="text-sm text-gray-600">{group.members} members</span>
                            </div>

                            <Button className="mt-4 w-full gap-2 bg-[#0B4619] hover:bg-[#0a3d16]">
                              <Plus className="h-4 w-4" />
                              Join Group
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="create" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Create a New Group</CardTitle>
                        <CardDescription>Set up a study group or project team</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form className="space-y-4">
                          <div className="space-y-2">
                            <label htmlFor="group-name" className="text-sm font-medium">
                              Group Name
                            </label>
                            <Input id="group-name" placeholder="Enter group name" />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="group-description" className="text-sm font-medium">
                              Description
                            </label>
                            <textarea
                              id="group-description"
                              placeholder="Describe the purpose of your group"
                              className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="related-course" className="text-sm font-medium">
                              Related Course (Optional)
                            </label>
                            <Input id="related-course" placeholder="Select a course" />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium">Privacy</label>
                            <div className="flex gap-4">
                              <div className="flex items-center">
                                <input type="radio" id="public" name="privacy" className="mr-2" />
                                <label htmlFor="public" className="text-sm">
                                  Public
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input type="radio" id="private" name="privacy" className="mr-2" />
                                <label htmlFor="private" className="text-sm">
                                  Private
                                </label>
                              </div>
                            </div>
                          </div>

                          <Button className="bg-[#0B4619] hover:bg-[#0a3d16]">Create Group</Button>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}
