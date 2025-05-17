"use client"

import { useState } from "react"
import { TopNavbar } from "@/components/top-navbar"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { LogOut } from "lucide-react"
import { resetOnboardingTour } from "@/utils/reset-tour"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Settings")

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab="Settings" setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-auto">
          <div className="border-b border-gray-200 bg-white shadow-sm">
            <div className="container mx-auto">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="h-14 w-full justify-start rounded-none bg-transparent p-0">
                  <TabsTrigger
                    value="account"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Account
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Security
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger
                    value="appearance"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Appearance
                  </TabsTrigger>
                </TabsList>

                <div className="container mx-auto p-4 md:p-6">
                  <TabsContent value="account" className="mt-0">
                    <div className="mb-6">
                      <h1 className="text-2xl font-bold text-[#0B4619]">Account Settings</h1>
                      <p className="text-gray-600">Manage your account information and preferences</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="md:col-span-2">
                        <Card className="border shadow-sm">
                          <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                            <CardDescription>Update your personal details</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <form className="space-y-4">
                              <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                  <label htmlFor="first-name" className="text-sm font-medium">
                                    First Name
                                  </label>
                                  <Input id="first-name" defaultValue="zabbyy" />
                                </div>
                                <div className="space-y-2">
                                  <label htmlFor="last-name" className="text-sm font-medium">
                                    Last Name
                                  </label>
                                  <Input id="last-name" defaultValue="" />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                  Email Address
                                </label>
                                <Input id="email" type="email" defaultValue="zabbyy@example.com" />
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="student-id" className="text-sm font-medium">
                                  Student ID
                                </label>
                                <Input id="student-id" defaultValue="2023-12345" disabled />
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="program" className="text-sm font-medium">
                                  Program
                                </label>
                                <Input
                                  id="program"
                                  defaultValue="Bachelor of Science in Information Technology"
                                  disabled
                                />
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="year-level" className="text-sm font-medium">
                                  Year Level
                                </label>
                                <select
                                  id="year-level"
                                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                  <option>1st Year</option>
                                  <option>2nd Year</option>
                                  <option selected>3rd Year</option>
                                  <option>4th Year</option>
                                </select>
                              </div>

                              <Button className="bg-[#0B4619] hover:bg-[#0a3d16]">Save Changes</Button>
                            </form>
                          </CardContent>
                        </Card>

                        <Card className="mt-6 border shadow-sm">
                          <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>Update your contact details</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <form className="space-y-4">
                              <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">
                                  Phone Number
                                </label>
                                <Input id="phone" type="tel" defaultValue="+63 912 345 6789" />
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="address" className="text-sm font-medium">
                                  Address
                                </label>
                                <Input id="address" defaultValue="123 University Ave." />
                              </div>

                              <div className="grid gap-4 md:grid-cols-3">
                                <div className="space-y-2">
                                  <label htmlFor="city" className="text-sm font-medium">
                                    City
                                  </label>
                                  <Input id="city" defaultValue="Butuan City" />
                                </div>
                                <div className="space-y-2">
                                  <label htmlFor="province" className="text-sm font-medium">
                                    Province
                                  </label>
                                  <Input id="province" defaultValue="Agusan del Norte" />
                                </div>
                                <div className="space-y-2">
                                  <label htmlFor="zip" className="text-sm font-medium">
                                    ZIP Code
                                  </label>
                                  <Input id="zip" defaultValue="8600" />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="emergency-contact" className="text-sm font-medium">
                                  Emergency Contact
                                </label>
                                <Input id="emergency-contact" defaultValue="Parent's Name: +63 987 654 3210" />
                              </div>

                              <Button className="bg-[#0B4619] hover:bg-[#0a3d16]">Save Changes</Button>
                            </form>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <Card className="border shadow-sm">
                          <CardHeader>
                            <CardTitle>Profile Picture</CardTitle>
                            <CardDescription>Update your profile image</CardDescription>
                          </CardHeader>
                          <CardContent className="flex flex-col items-center">
                            <Avatar className="h-32 w-32 border-4 border-white shadow-md">
                              <AvatarImage src="/placeholder.svg" alt="User" />
                              <AvatarFallback className="bg-[#0B4619] text-white text-2xl">ZB</AvatarFallback>
                            </Avatar>
                            <div className="mt-4 flex gap-2">
                              <Button variant="outline">Upload New</Button>
                              <Button variant="outline" className="text-red-500 hover:bg-red-50 hover:text-red-600">
                                Remove
                              </Button>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="mt-6 border shadow-sm">
                          <CardHeader>
                            <CardTitle>Account Status</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Status</span>
                                <Badge className="bg-green-500">Active</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Account Type</span>
                                <span className="text-sm">Student</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Joined</span>
                                <span className="text-sm">June 15, 2023</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Last Login</span>
                                <span className="text-sm">Today, 10:30 AM</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="mt-6 border shadow-sm">
                          <CardHeader>
                            <CardTitle className="text-red-600">Danger Zone</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <Button
                                variant="outline"
                                className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                              >
                                <LogOut className="mr-2 h-4 w-4" />
                                Log Out of All Devices
                              </Button>
                              <Button
                                variant="outline"
                                className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                              >
                                Deactivate Account
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="security" className="mt-0">
                    <div className="mb-6">
                      <h1 className="text-2xl font-bold text-[#0B4619]">Security Settings</h1>
                      <p className="text-gray-600">Manage your account security and privacy</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <Card className="border shadow-sm">
                        <CardHeader>
                          <CardTitle>Change Password</CardTitle>
                          <CardDescription>Update your password regularly for better security</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <form className="space-y-4">
                            <div className="space-y-2">
                              <label htmlFor="current-password" className="text-sm font-medium">
                                Current Password
                              </label>
                              <Input id="current-password" type="password" />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="new-password" className="text-sm font-medium">
                                New Password
                              </label>
                              <Input id="new-password" type="password" />
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="confirm-password" className="text-sm font-medium">
                                Confirm New Password
                              </label>
                              <Input id="confirm-password" type="password" />
                            </div>
                            <Button className="bg-[#0B4619] hover:bg-[#0a3d16]">Update Password</Button>
                          </form>
                        </CardContent>
                      </Card>

                      <Card className="border shadow-sm">
                        <CardHeader>
                          <CardTitle>Two-Factor Authentication</CardTitle>
                          <CardDescription>Add an extra layer of security to your account</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">SMS Authentication</h3>
                                <p className="text-sm text-gray-500">Receive a code via SMS to verify your identity</p>
                              </div>
                              <div className="flex items-center">
                                <input type="checkbox" id="sms-auth" className="h-4 w-4 rounded border-gray-300" />
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">Email Authentication</h3>
                                <p className="text-sm text-gray-500">
                                  Receive a code via email to verify your identity
                                </p>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="email-auth"
                                  className="h-4 w-4 rounded border-gray-300"
                                  defaultChecked
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">Authenticator App</h3>
                                <p className="text-sm text-gray-500">
                                  Use an authenticator app to generate verification codes
                                </p>
                              </div>
                              <div className="flex items-center">
                                <input type="checkbox" id="app-auth" className="h-4 w-4 rounded border-gray-300" />
                              </div>
                            </div>

                            <Button className="w-full">Set Up Two-Factor Authentication</Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border shadow-sm">
                        <CardHeader>
                          <CardTitle>Privacy Settings</CardTitle>
                          <CardDescription>Control who can see your information</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">Profile Visibility</h3>
                                <p className="text-sm text-gray-500">Who can see your profile information</p>
                              </div>
                              <select className="rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                <option>Everyone</option>
                                <option selected>Classmates Only</option>
                                <option>Private</option>
                              </select>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">Online Status</h3>
                                <p className="text-sm text-gray-500">Show when you're active on the platform</p>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="online-status"
                                  className="h-4 w-4 rounded border-gray-300"
                                  defaultChecked
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">Activity Status</h3>
                                <p className="text-sm text-gray-500">Show your recent activity to others</p>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="activity-status"
                                  className="h-4 w-4 rounded border-gray-300"
                                />
                              </div>
                            </div>

                            <Button className="bg-[#0B4619] hover:bg-[#0a3d16]">Save Privacy Settings</Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border shadow-sm">
                        <CardHeader>
                          <CardTitle>Login History</CardTitle>
                          <CardDescription>Recent account access</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="rounded-lg border p-3">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="font-medium">Current Session</h3>
                                  <p className="text-xs text-gray-500">Today, 10:30 AM</p>
                                </div>
                                <Badge className="bg-green-500">Active</Badge>
                              </div>
                              <div className="mt-2 text-sm text-gray-600">
                                <p>Chrome on Windows • Butuan City, Philippines</p>
                              </div>
                            </div>

                            <div className="rounded-lg border p-3">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="font-medium">Previous Login</h3>
                                  <p className="text-xs text-gray-500">Yesterday, 3:45 PM</p>
                                </div>
                              </div>
                              <div className="mt-2 text-sm text-gray-600">
                                <p>Safari on iPhone • Butuan City, Philippines</p>
                              </div>
                            </div>

                            <div className="rounded-lg border p-3">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="font-medium">Previous Login</h3>
                                  <p className="text-xs text-gray-500">Apr 10, 2025, 9:15 AM</p>
                                </div>
                              </div>
                              <div className="mt-2 text-sm text-gray-600">
                                <p>Chrome on Windows • Butuan City, Philippines</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="notifications" className="mt-0">
                    <div className="mb-6">
                      <h1 className="text-2xl font-bold text-[#0B4619]">Notification Settings</h1>
                      <p className="text-gray-600">Manage how you receive notifications</p>
                    </div>

                    <Card className="border shadow-sm">
                      <CardHeader>
                        <CardTitle>Email Notifications</CardTitle>
                        <CardDescription>Configure which emails you receive</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Assignment Reminders</h3>
                              <p className="text-sm text-gray-500">Receive reminders about upcoming assignments</p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="email-assignments"
                                className="h-4 w-4 rounded border-gray-300"
                                defaultChecked
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Grade Updates</h3>
                              <p className="text-sm text-gray-500">Receive emails when grades are posted</p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="email-grades"
                                className="h-4 w-4 rounded border-gray-300"
                                defaultChecked
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Course Announcements</h3>
                              <p className="text-sm text-gray-500">Receive emails about course announcements</p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="email-announcements"
                                className="h-4 w-4 rounded border-gray-300"
                                defaultChecked
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Discussion Replies</h3>
                              <p className="text-sm text-gray-500">
                                Receive emails when someone replies to your discussion posts
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="email-discussions"
                                className="h-4 w-4 rounded border-gray-300"
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">System Updates</h3>
                              <p className="text-sm text-gray-500">
                                Receive emails about system maintenance and updates
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="email-system" className="h-4 w-4 rounded border-gray-300" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6 border shadow-sm">
                      <CardHeader>
                        <CardTitle>Push Notifications</CardTitle>
                        <CardDescription>Configure notifications on your device</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Assignment Reminders</h3>
                              <p className="text-sm text-gray-500">Receive reminders about upcoming assignments</p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="push-assignments"
                                className="h-4 w-4 rounded border-gray-300"
                                defaultChecked
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Grade Updates</h3>
                              <p className="text-sm text-gray-500">Receive notifications when grades are posted</p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="push-grades"
                                className="h-4 w-4 rounded border-gray-300"
                                defaultChecked
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Course Announcements</h3>
                              <p className="text-sm text-gray-500">Receive notifications about course announcements</p>
                            </div>
                            <input
                              type="checkbox"
                              id="push-announcements"
                              className="h-4 w-4 rounded border-gray-300"
                              defaultChecked
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Discussion Replies</h3>
                              <p className="text-sm text-gray-500">
                                Receive notifications when someone replies to your discussion posts
                              </p>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="push-discussions"
                                className="h-4 w-4 rounded border-gray-300"
                                defaultChecked
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">System Updates</h3>
                              <p className="text-sm text-gray-500">
                                Receive notifications about system maintenance and updates
                              </p>
                            </div>
                            <input type="checkbox" id="push-system" className="h-4 w-4 rounded border-gray-300" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6 border shadow-sm">
                      <CardHeader>
                        <CardTitle>Notification Frequency</CardTitle>
                        <CardDescription>Control how often you receive notifications</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="freq-realtime"
                              name="frequency"
                              className="h-4 w-4 border-gray-300"
                              defaultChecked
                            />
                            <label htmlFor="freq-realtime" className="ml-2">
                              Real-time
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="freq-daily" name="frequency" className="h-4 w-4 border-gray-300" />
                            <label htmlFor="freq-daily" className="ml-2">
                              Daily digest
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="freq-weekly" name="frequency" className="h-4 w-4 border-gray-300" />
                            <label htmlFor="freq-weekly" className="ml-2">
                              Weekly digest
                            </label>
                          </div>
                        </div>

                        <Button className="bg-[#0B4619] hover:bg-[#0a3d16] mt-4">Save Notification Settings</Button>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="appearance" className="mt-0">
                    <div className="mb-6">
                      <h1 className="text-2xl font-bold text-[#0B4619]">Appearance Settings</h1>
                      <p className="text-gray-600">Customize how the LMS looks for you</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <Card className="border shadow-sm">
                        <CardHeader>
                          <CardTitle>Text Size</CardTitle>
                          <CardDescription>Adjust the size of text throughout the application</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Text Size</span>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                  <span className="text-xs">A</span>
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                  <span>A</span>
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                                  <span className="text-lg">A</span>
                                </Button>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label htmlFor="font-size" className="text-sm font-medium">
                                Custom Size
                              </label>
                              <div className="flex items-center gap-4">
                                <input
                                  type="range"
                                  id="font-size"
                                  min="80"
                                  max="120"
                                  defaultValue="100"
                                  className="w-full"
                                />
                                <span className="text-sm">100%</span>
                              </div>
                            </div>

                            <Button className="bg-[#0B4619] hover:bg-[#0a3d16]">Apply Text Size</Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border shadow-sm">
                        <CardHeader>
                          <CardTitle>Color Scheme</CardTitle>
                          <CardDescription>Choose accent colors for the interface</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="grid grid-cols-4 gap-2">
                              <div className="cursor-pointer rounded-full h-10 w-10 bg-[#0B4619] ring-2 ring-offset-2 ring-[#0B4619]"></div>
                              <div className="cursor-pointer rounded-full h-10 w-10 bg-blue-600"></div>
                              <div className="cursor-pointer rounded-full h-10 w-10 bg-purple-600"></div>
                              <div className="cursor-pointer rounded-full h-10 w-10 bg-red-600"></div>
                              <div className="cursor-pointer rounded-full h-10 w-10 bg-amber-500"></div>
                              <div className="cursor-pointer rounded-full h-10 w-10 bg-pink-600"></div>
                              <div className="cursor-pointer rounded-full h-10 w-10 bg-teal-600"></div>
                              <div className="cursor-pointer rounded-full h-10 w-10 bg-gray-600"></div>
                            </div>

                            <Button className="bg-[#0B4619] hover:bg-[#0a3d16]">Apply Color Scheme</Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border shadow-sm">
                        <CardHeader>
                          <CardTitle>Layout Preferences</CardTitle>
                          <CardDescription>Customize the layout of your dashboard</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">Compact View</h3>
                                <p className="text-sm text-gray-500">Reduce spacing to show more content</p>
                              </div>
                              <div className="flex items-center">
                                <input type="checkbox" id="compact-view" className="h-4 w-4 rounded border-gray-300" />
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">Show Welcome Banner</h3>
                                <p className="text-sm text-gray-500">Display the welcome section on dashboard</p>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="show-welcome"
                                  className="h-4 w-4 rounded border-gray-300"
                                  defaultChecked
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">Show Right Sidebar</h3>
                                <p className="text-sm text-gray-500">Display the sidebar with additional information</p>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="show-sidebar"
                                  className="h-4 w-4 rounded border-gray-300"
                                  defaultChecked
                                />
                              </div>
                            </div>

                            <Button className="bg-[#0B4619] hover:bg-[#0a3d16]">Save Layout Preferences</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </div>

                <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-[#0B4619]">Onboarding Tour</h2>
                  <p className="mt-2 text-gray-600">Reset the onboarding tour to see it again on your next visit.</p>

                  <div className="mt-4">
                    <Button onClick={resetOnboardingTour} className="bg-[#0B4619] hover:bg-[#0a3d16]">
                      Reset Onboarding Tour
                    </Button>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
