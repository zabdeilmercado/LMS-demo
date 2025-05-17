"use client"

import { useState } from "react"
import { ArrowLeft, Mail, Phone, MapPin, BookOpen, Award, Edit, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { School } from "@/components/icons"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal")

  // Sample student data - in a real app, this would come from an API or database
  const studentData = {
    personal: {
      name: "Zabbyy",
      idNumber: "2020-CS-10234",
      level: 20,
      points: 88,
      maxPoints: 100,
      role: "Student",
      dateOfBirth: "May 15, 2002",
      gender: "Male",
      nationality: "Filipino",
      address: "123 University Avenue, Butuan City, Caraga",
    },
    academic: {
      program: "Bachelor of Science in Information System",
      year: "3rd Year",
      department: "College of Computing and Information Sciences",
      advisor: "Dr. John Doe",
      status: "Regular",
      gpa: "1.75",
      unitsCompleted: 87,
      unitsTotal: 150,
      scholarshipStatus: "Dean's Lister",
      enrollmentDate: "June 2020",
      expectedGraduation: "May 2024",
    },
    contact: {
      email: "zabbyy@student.carsu.edu.ph",
      alternateEmail: "zabbyy@gmail.com",
      phone: "+63 912 345 6789",
      emergencyContact: "Parent Name: +63 998 765 4321",
    },
    achievements: [
      { id: 1, title: "Dean's Lister", date: "2022-2023", description: "Academic Excellence Award" },
      {
        id: 2,
        title: "Programming Competition Winner",
        date: "October 2022",
        description: "1st Place in Regional Coding Competition",
      },
      {
        id: 3,
        title: "Research Paper Publication",
        date: "March 2023",
        description: "Published in Student Research Journal",
      },
    ],
  }

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">My Profile</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Summary Card */}
        <Card className="md:col-span-1">
          <CardHeader className="bg-[#0B4619] text-white rounded-t-lg pb-8 relative">
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
              <Avatar className="h-24 w-24 border-4 border-[#FFD700]">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="bg-[#FFD700] text-[#0B4619] text-xl font-bold">ZBY</AvatarFallback>
              </Avatar>
            </div>
          </CardHeader>
          <CardContent className="pt-16 text-center">
            <h2 className="text-xl font-bold mt-2">{studentData.personal.name}</h2>
            <p className="text-gray-500 text-sm">{studentData.academic.program}</p>
            <p className="text-gray-500 text-sm">{studentData.academic.year}</p>
            <Badge className="mt-2 bg-[#0B4619]">{studentData.personal.idNumber}</Badge>

            <div className="mt-6">
              <div className="flex items-center justify-between text-sm">
                <span>Level {studentData.personal.level}</span>
                <span>
                  {studentData.personal.points}/{studentData.personal.maxPoints} XP
                </span>
              </div>
              <Progress value={studentData.personal.points} className="h-2 mt-1" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                <BookOpen className="h-5 w-5 text-[#0B4619] mb-1" />
                <span className="text-sm font-medium">{studentData.academic.unitsCompleted}</span>
                <span className="text-xs text-gray-500">Units</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                <Award className="h-5 w-5 text-[#0B4619] mb-1" />
                <span className="text-sm font-medium">{studentData.academic.gpa}</span>
                <span className="text-xs text-gray-500">GPA</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-gray-600 truncate">{studentData.contact.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-gray-600">{studentData.contact.phone}</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-gray-600 truncate">{studentData.personal.address}</span>
              </div>
            </div>

            <Button className="mt-6 w-full bg-[#0B4619] hover:bg-[#0a3d16]">
              <Edit className="h-4 w-4 mr-2" /> Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <div className="md:col-span-2">
          <Tabs defaultValue="personal" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="personal" className="data-[state=active]:bg-[#0B4619] data-[state=active]:text-white">
                <User className="h-4 w-4 mr-2" />
                Personal
              </TabsTrigger>
              <TabsTrigger value="academic" className="data-[state=active]:bg-[#0B4619] data-[state=active]:text-white">
                <School className="h-4 w-4 mr-2" />
                Academic
              </TabsTrigger>
              <TabsTrigger
                value="achievements"
                className="data-[state=active]:bg-[#0B4619] data-[state=active]:text-white"
              >
                <Award className="h-4 w-4 mr-2" />
                Achievements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Your personal details and information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                        <p>{studentData.personal.name}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Student ID</h3>
                        <p>{studentData.personal.idNumber}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Date of Birth</h3>
                        <p>{studentData.personal.dateOfBirth}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Gender</h3>
                        <p>{studentData.personal.gender}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Nationality</h3>
                        <p>{studentData.personal.nationality}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Address</h3>
                        <p>{studentData.personal.address}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Email</h3>
                        <p>{studentData.contact.email}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                        <p>{studentData.contact.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Emergency Contact</h3>
                    <p>{studentData.contact.emergencyContact}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="academic">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                  <CardDescription>Your academic details and progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Program</h3>
                        <p>{studentData.academic.program}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Year Level</h3>
                        <p>{studentData.academic.year}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Department</h3>
                        <p>{studentData.academic.department}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Academic Advisor</h3>
                        <p>{studentData.academic.advisor}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Status</h3>
                        <p>{studentData.academic.status}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">GPA</h3>
                        <p>{studentData.academic.gpa}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Units Completed</h3>
                        <p>
                          {studentData.academic.unitsCompleted} of {studentData.academic.unitsTotal}
                        </p>
                        <Progress
                          value={(studentData.academic.unitsCompleted / studentData.academic.unitsTotal) * 100}
                          className="h-2 mt-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Scholarship Status</h3>
                        <p>{studentData.academic.scholarshipStatus}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Enrollment Date</h3>
                        <p>{studentData.academic.enrollmentDate}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Expected Graduation</h3>
                        <p>{studentData.academic.expectedGraduation}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements">
              <Card>
                <CardHeader>
                  <CardTitle>Achievements & Awards</CardTitle>
                  <CardDescription>Your academic and extracurricular achievements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {studentData.achievements.map((achievement) => (
                      <div key={achievement.id} className="flex items-start border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B4619]/10 text-[#0B4619] mr-4">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">{achievement.title}</h3>
                          <p className="text-sm text-gray-500">{achievement.date}</p>
                          <p className="text-sm mt-1">{achievement.description}</p>
                        </div>
                      </div>
                    ))}

                    {studentData.achievements.length === 0 && (
                      <div className="text-center py-6">
                        <Award className="h-12 w-12 mx-auto text-gray-300" />
                        <p className="mt-2 text-gray-500">No achievements recorded yet</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
