"use client"

import { BookOpen, Calendar, CheckCircle, Clock, Award, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function DashboardStats() {
  const stats = [
    {
      title: "Enrolled Courses",
      value: "8",
      icon: <BookOpen className="h-5 w-5" />,
      change: "+2 this semester",
      color: "bg-blue-500",
    },
    {
      title: "Assignments Due",
      value: "5",
      icon: <Calendar className="h-5 w-5" />,
      change: "Next due: Apr 15",
      color: "bg-amber-500",
    },
    {
      title: "Completed Tasks",
      value: "12",
      icon: <CheckCircle className="h-5 w-5" />,
      change: "+3 this week",
      color: "bg-green-500",
    },
    {
      title: "Study Hours",
      value: "24",
      icon: <Clock className="h-5 w-5" />,
      change: "+5 from last week",
      color: "bg-purple-500",
    },
    {
      title: "Current GPA",
      value: "3.8",
      icon: <Award className="h-5 w-5" />,
      change: "+0.2 from last term",
      color: "bg-[#0B4619]",
    },
    {
      title: "Progress",
      value: "68%",
      icon: <TrendingUp className="h-5 w-5" />,
      change: "On track for graduation",
      color: "bg-indigo-500",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index} className="overflow-hidden border shadow-sm transition-all hover:shadow-md">
          <CardContent className="p-0">
            <div className="flex items-center">
              <div className={`flex h-full w-16 items-center justify-center p-4 text-white ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="flex-1 p-4">
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
