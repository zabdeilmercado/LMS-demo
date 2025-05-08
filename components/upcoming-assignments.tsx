"use client"

import { useState } from "react"
import { Calendar, Clock, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function UpcomingAssignments() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Research Proposal",
      course: "Elements of Research - IT32",
      dueDate: "Apr 15, 2025",
      daysLeft: 4,
      status: "pending",
      priority: "high",
    },
    {
      id: 2,
      title: "Network Design Project",
      course: "Advance Networking",
      dueDate: "Apr 18, 2025",
      daysLeft: 7,
      status: "in-progress",
      priority: "medium",
    },
    {
      id: 3,
      title: "Life Skills Reflection Paper",
      course: "Computer Studies Life Skills",
      dueDate: "Apr 20, 2025",
      daysLeft: 9,
      status: "not-started",
      priority: "low",
    },
    {
      id: 4,
      title: "Summative Exam Review",
      course: "Guidelines for Taking the Summative Exams",
      dueDate: "Apr 25, 2025",
      daysLeft: 14,
      status: "not-started",
      priority: "medium",
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-amber-500">Pending</Badge>
      case "in-progress":
        return <Badge className="bg-blue-500">In Progress</Badge>
      case "not-started":
        return <Badge variant="outline">Not Started</Badge>
      default:
        return null
    }
  }

  const getPriorityIndicator = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <div className="flex items-center gap-1 text-red-500">
            <AlertCircle className="h-3 w-3" />
            <span className="text-xs">High</span>
          </div>
        )
      case "medium":
        return (
          <div className="flex items-center gap-1 text-amber-500">
            <AlertCircle className="h-3 w-3" />
            <span className="text-xs">Medium</span>
          </div>
        )
      case "low":
        return (
          <div className="flex items-center gap-1 text-green-500">
            <AlertCircle className="h-3 w-3" />
            <span className="text-xs">Low</span>
          </div>
        )
      default:
        return null
    }
  }

  const getProgressValue = (status: string) => {
    switch (status) {
      case "pending":
        return 25
      case "in-progress":
        return 50
      case "not-started":
        return 0
      default:
        return 0
    }
  }

  return (
    <Card className="h-full border shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Upcoming Assignments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="rounded-lg border p-3 transition-all hover:bg-gray-50 hover:shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium">{assignment.title}</h3>
                  {getStatusBadge(assignment.status)}
                </div>
                <p className="text-xs text-gray-500">{assignment.course}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    <span>{assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{assignment.daysLeft} days left</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex-1 pr-4">
                    <Progress value={getProgressValue(assignment.status)} className="h-1.5" />
                  </div>
                  {getPriorityIndicator(assignment.priority)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full rounded-md border border-[#0B4619] py-2 text-sm font-medium text-[#0B4619] transition-colors hover:bg-[#0B4619]/5">
          View All Assignments
        </button>
      </CardContent>
    </Card>
  )
}
