"use client"

import { useState, useEffect } from "react"
import { Home, BookOpen, Users, FileText, Bell, Calendar, Settings, HelpCircle, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const menuItems = [
    { name: "Home", icon: <Home className="h-5 w-5" />, badge: null },
    { name: "Classes", icon: <BookOpen className="h-5 w-5" />, badge: 8 },
    { name: "Groups", icon: <Users className="h-5 w-5" />, badge: 3 },
    { name: "Resources", icon: <FileText className="h-5 w-5" />, badge: null },
    { name: "Calendar", icon: <Calendar className="h-5 w-5" />, badge: 2 },
    { name: "Notifications", icon: <Bell className="h-5 w-5" />, badge: 5 },
  ]

  const bottomMenuItems = [
    { name: "Settings", icon: <Settings className="h-5 w-5" /> },
    { name: "Help", icon: <HelpCircle className="h-5 w-5" /> },
    { name: "Logout", icon: <LogOut className="h-5 w-5" /> },
  ]

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-[#0B4619] text-white transition-all duration-300 ease-in-out",
        isExpanded ? "w-64" : "w-20",
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col items-center py-6">
        <div className="relative">
          <Avatar className={cn("border-2 border-[#FFD700] transition-all", isExpanded ? "h-16 w-16" : "h-10 w-10")}>
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback className="bg-[#FFD700] text-[#0B4619] font-bold">ZB</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD700] text-[#0B4619] text-xs font-bold">
            20
          </div>
        </div>

        {isExpanded && (
          <div className="mt-3 text-center">
            <h3 className="font-medium">zabbyy</h3>
            <p className="text-xs text-white/70">Student</p>
            <div className="mt-2 px-4">
              <div className="flex items-center justify-between text-xs">
                <span>Level 20</span>
                <span>88/100 XP</span>
              </div>
              <Progress value={88} className="h-1.5 mt-1 bg-white/20" indicatorClassName="bg-[#FFD700]" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-2 flex-1 overflow-y-auto px-2">
        <nav className="flex flex-col space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm transition-colors w-full",
                activeTab === item.name
                  ? "bg-[#FFD700]/20 text-[#FFD700]"
                  : "text-white/80 hover:bg-white/10 hover:text-[#FFD700]",
                !isExpanded && "justify-center",
              )}
              onClick={() => setActiveTab(item.name)}
            >
              <span className="flex h-5 w-5 items-center justify-center flex-shrink-0">{item.icon}</span>
              {isExpanded && <span className="ml-3 text-left">{item.name}</span>}
              {item.badge && (
                <Badge
                  className={cn(
                    "bg-[#FFD700] text-[#0B4619] hover:bg-[#FFD700]/90",
                    isExpanded
                      ? "ml-auto"
                      : "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full",
                  )}
                >
                  {item.badge}
                </Badge>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto border-t border-[#FFD700]/20 px-2 py-2">
        <nav className="flex flex-col space-y-1">
          {bottomMenuItems.map((item) => (
            <button
              key={item.name}
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm transition-colors w-full",
                "text-white/80 hover:bg-white/10 hover:text-[#FFD700]",
                !isExpanded && "justify-center",
              )}
            >
              <span className="flex h-5 w-5 items-center justify-center flex-shrink-0">{item.icon}</span>
              {isExpanded && <span className="ml-3 text-left">{item.name}</span>}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
