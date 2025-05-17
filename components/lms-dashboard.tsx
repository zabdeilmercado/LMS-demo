"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { ClassesSection } from "@/components/classes-section"
import { RightSidebar } from "@/components/right-sidebar"
import { DashboardStats } from "@/components/dashboard-stats"
import { UpcomingAssignments } from "@/components/upcoming-assignments"
import { RecentAnnouncements } from "@/components/recent-announcements"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { OnboardingTour } from "@/components/onboarding-tour"

export function LMSDashboard() {
  const [activeTab, setActiveTab] = useState("Home")
  const [activePage, setActivePage] = useState("Dashboard")
  const [loading, setLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-auto">
          <div className="border-b border-gray-200 bg-white shadow-sm">
            <div className="container mx-auto">
              <Tabs defaultValue="Dashboard" value={activePage} onValueChange={setActivePage} className="w-full">
                <TabsList className="h-14 w-full justify-start rounded-none bg-transparent p-0">
                  <TabsTrigger
                    value="Dashboard"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Dashboard
                  </TabsTrigger>
                  <TabsTrigger
                    value="News"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    News
                  </TabsTrigger>
                  <TabsTrigger
                    value="Welcome"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Welcome
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="container mx-auto p-4 md:p-6">
            {loading ? (
              <div className="flex h-[60vh] items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#0B4619] border-t-transparent"></div>
                  <p className="mt-4 text-gray-600">Loading your dashboard...</p>
                </div>
              </div>
            ) : (
              <>
                {activePage === "Dashboard" && (
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DashboardStats />
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="md:col-span-2">
                        <ClassesSection />
                      </div>
                      <div>
                        <UpcomingAssignments />
                      </div>
                    </div>
                    <RecentAnnouncements />
                  </motion.div>
                )}

                {activePage === "Welcome" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="rounded-lg border bg-white p-6 shadow-sm">
                      <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FFD700] shadow-lg">
                          <span className="text-[#0B4619] text-3xl font-bold">CSU</span>
                        </div>
                        <h1 className="text-4xl font-bold text-[#0B4619]">Welcome to Caraga State University</h1>
                        <p className="max-w-2xl text-lg text-gray-600">
                          Caraga State University is committed to providing quality education through competence,
                          service, and uprightness. We're glad to have you as part of our academic community.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                          <button className="rounded-md bg-[#0B4619] px-6 py-3 text-white shadow-md transition-colors hover:bg-[#0a3d16]">
                            Explore Resources
                          </button>
                          <button className="rounded-md border border-[#0B4619] bg-white px-6 py-3 text-[#0B4619] shadow-md transition-colors hover:bg-gray-50">
                            View Campus Map
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activePage === "News" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="rounded-lg border bg-white p-6 shadow-sm">
                      <h2 className="text-2xl font-semibold text-[#0B4619]">University News</h2>
                      <p className="mt-2 text-gray-600">
                        Stay updated with the latest happenings at Caraga State University.
                      </p>

                      <div className="mt-6 space-y-6">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="rounded-lg border p-4 transition-shadow hover:shadow-md">
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium">University Announces New Research Grant</h3>
                                <span className="text-sm text-gray-500">April 15, 2025</span>
                              </div>
                              <p className="text-sm text-gray-600">
                                The university has received a significant research grant that will fund new projects in
                                environmental science and technology.
                              </p>
                              <button className="mt-2 self-start text-sm font-medium text-[#0B4619] hover:underline">
                                Read more
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </main>
        <RightSidebar />
      </div>
      <OnboardingTour />
    </div>
  )
}
