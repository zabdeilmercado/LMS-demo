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
import { Search, HelpCircle, BookOpen, MessageSquare, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react"

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState("Help")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const helpCategories = [
    {
      id: 1,
      title: "Getting Started",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Learn the basics of using the LMS",
      articles: 5,
    },
    {
      id: 2,
      title: "Courses & Enrollment",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Information about courses and enrollment",
      articles: 8,
    },
    {
      id: 3,
      title: "Assignments & Grades",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Help with assignments and viewing grades",
      articles: 6,
    },
    {
      id: 4,
      title: "Technical Support",
      icon: <HelpCircle className="h-6 w-6" />,
      description: "Troubleshooting technical issues",
      articles: 10,
    },
    {
      id: 5,
      title: "Account Settings",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Managing your account and profile",
      articles: 7,
    },
    {
      id: 6,
      title: "Mobile App",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Using the LMS mobile application",
      articles: 4,
    },
  ]

  const popularArticles = [
    {
      id: 1,
      title: "How to Submit Assignments",
      category: "Assignments & Grades",
      views: 1245,
    },
    {
      id: 2,
      title: "Resetting Your Password",
      category: "Account Settings",
      views: 982,
    },
    {
      id: 3,
      title: "Viewing Your Grades",
      category: "Assignments & Grades",
      views: 876,
    },
    {
      id: 4,
      title: "Joining Online Classes",
      category: "Courses & Enrollment",
      views: 754,
    },
    {
      id: 5,
      title: "Downloading Course Materials",
      category: "Courses & Enrollment",
      views: 621,
    },
  ]

  const faqs = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address, and you'll receive instructions to reset your password. Follow the link in the email to create a new password.",
    },
    {
      id: 2,
      question: "How do I submit an assignment?",
      answer:
        "To submit an assignment, navigate to the course page, find the assignment in the list, and click on it. On the assignment page, click the 'Submit Assignment' button. You can upload files or type your submission directly. Don't forget to click 'Submit' when you're done.",
    },
    {
      id: 3,
      question: "How can I check my grades?",
      answer:
        "You can check your grades by going to the course page and clicking on the 'Grades' tab. This will show all your graded assignments and exams for that course. You can also view all your grades across courses by clicking on 'Grades' in the main navigation menu.",
    },
    {
      id: 4,
      question: "How do I join an online class or meeting?",
      answer:
        "To join an online class, go to your course page at the scheduled time. Click on the 'Join Meeting' button that will appear when the class is about to start. Alternatively, you can find the meeting link in the course announcements or calendar.",
    },
    {
      id: 5,
      question: "How do I download course materials?",
      answer:
        "To download course materials, navigate to the course page and click on the 'Resources' or 'Materials' section. Find the file you want to download and click on the download icon or button next to it. The file will be saved to your device.",
    },
  ]

  const toggleFaq = (id: number) => {
    if (expandedFaq === id) {
      setExpandedFaq(null)
    } else {
      setExpandedFaq(id)
    }
  }

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab="Help" setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-auto">
          <div className="border-b border-gray-200 bg-white shadow-sm">
            <div className="container mx-auto">
              <Tabs defaultValue="help-center" className="w-full">
                <TabsList className="h-14 w-full justify-start rounded-none bg-transparent p-0">
                  <TabsTrigger
                    value="help-center"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Help Center
                  </TabsTrigger>
                  <TabsTrigger
                    value="faqs"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    FAQs
                  </TabsTrigger>
                  <TabsTrigger
                    value="contact"
                    className="h-full rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-[#0B4619] data-[state=active]:bg-transparent data-[state=active]:text-[#0B4619] data-[state=active]:shadow-none"
                  >
                    Contact Support
                  </TabsTrigger>
                </TabsList>

                <div className="container mx-auto p-4 md:p-6">
                  <TabsContent value="help-center" className="mt-0">
                    <div className="mb-6">
                      <h1 className="text-2xl font-bold text-[#0B4619]">Help Center</h1>
                      <p className="text-gray-600">Find answers to your questions and learn how to use the LMS</p>
                    </div>

                    <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                        <Input
                          type="text"
                          placeholder="Search for help articles..."
                          className="pl-10 py-6 text-lg"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Button className="bg-[#0B4619] hover:bg-[#0a3d16] py-6 px-8">Search</Button>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {helpCategories.map((category) => (
                        <Card key={category.id} className="border shadow-sm transition-all hover:shadow-md">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="rounded-full bg-green-100 p-3 text-[#0B4619]">{category.icon}</div>
                              <div>
                                <h3 className="font-medium">{category.title}</h3>
                                <p className="mt-1 text-sm text-gray-600">{category.description}</p>
                                <div className="mt-2 flex items-center justify-between">
                                  <Badge variant="outline" className="bg-gray-50">
                                    {category.articles} articles
                                  </Badge>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-[#0B4619] hover:bg-green-50 hover:text-[#0B4619]"
                                  >
                                    View All
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                      <div className="md:col-span-2">
                        <Card className="border shadow-sm">
                          <CardHeader>
                            <CardTitle>Video Tutorials</CardTitle>
                            <CardDescription>Watch step-by-step guides on using the LMS</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div className="overflow-hidden rounded-lg border bg-gray-100">
                                <div className="aspect-video relative bg-gray-200">
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="rounded-full bg-white/80 p-3 shadow-sm">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6 text-[#0B4619]"
                                      >
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="p-3">
                                  <h3 className="font-medium">Getting Started with the LMS</h3>
                                  <p className="text-sm text-gray-500">3:45 • 1,234 views</p>
                                </div>
                              </div>

                              <div className="overflow-hidden rounded-lg border bg-gray-100">
                                <div className="aspect-video relative bg-gray-200">
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="rounded-full bg-white/80 p-3 shadow-sm">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6 text-[#0B4619]"
                                      >
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="p-3">
                                  <h3 className="font-medium">How to Submit Assignments</h3>
                                  <p className="text-sm text-gray-500">2:30 • 987 views</p>
                                </div>
                              </div>
                            </div>

                            <Button variant="outline" className="mt-4 w-full">
                              View All Tutorials
                            </Button>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <Card className="border shadow-sm">
                          <CardHeader>
                            <CardTitle>Popular Articles</CardTitle>
                            <CardDescription>Most viewed help articles</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {popularArticles.map((article) => (
                                <div key={article.id} className="flex items-start gap-3">
                                  <div className="rounded-full bg-gray-100 p-1">
                                    <BookOpen className="h-4 w-4 text-gray-500" />
                                  </div>
                                  <div>
                                    <h3 className="text-sm font-medium hover:text-[#0B4619] hover:underline cursor-pointer">
                                      {article.title}
                                    </h3>
                                    <p className="text-xs text-gray-500">{article.category}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="faqs" className="mt-0">
                    <div className="mb-6">
                      <h1 className="text-2xl font-bold text-[#0B4619]">Frequently Asked Questions</h1>
                      <p className="text-gray-600">Find quick answers to common questions</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="md:col-span-2">
                        <Card className="border shadow-sm">
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              {faqs.map((faq) => (
                                <div key={faq.id} className="rounded-lg border">
                                  <button
                                    className="flex w-full items-center justify-between p-4 text-left font-medium"
                                    onClick={() => toggleFaq(faq.id)}
                                  >
                                    <span>{faq.question}</span>
                                    {expandedFaq === faq.id ? (
                                      <ChevronDown className="h-5 w-5 text-gray-500" />
                                    ) : (
                                      <ChevronRight className="h-5 w-5 text-gray-500" />
                                    )}
                                  </button>
                                  {expandedFaq === faq.id && (
                                    <div className="border-t bg-gray-50 p-4">
                                      <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <Card className="border shadow-sm">
                          <CardHeader>
                            <CardTitle>Can't find an answer?</CardTitle>
                            <CardDescription>Get help from our support team</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <Button className="w-full gap-2 bg-[#0B4619] hover:bg-[#0a3d16]">
                                <MessageSquare className="h-4 w-4" />
                                Start a Chat
                              </Button>
                              <Button variant="outline" className="w-full gap-2">
                                <Mail className="h-4 w-4" />
                                Email Support
                              </Button>
                            </div>

                            <div className="mt-6 rounded-lg border bg-gray-50 p-4">
                              <h3 className="font-medium">Support Hours</h3>
                              <p className="mt-1 text-sm text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                              <p className="text-sm text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
                              <p className="text-sm text-gray-600">Sunday: Closed</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="contact" className="mt-0">
                    <div className="mb-6">
                      <h1 className="text-2xl font-bold text-[#0B4619]">Contact Support</h1>
                      <p className="text-gray-600">Get help from our support team</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="md:col-span-2">
                        <Card className="border shadow-sm">
                          <CardHeader>
                            <CardTitle>Submit a Support Ticket</CardTitle>
                            <CardDescription>We'll respond to your inquiry as soon as possible</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <form className="space-y-4">
                              <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                  <label htmlFor="name" className="text-sm font-medium">
                                    Name
                                  </label>
                                  <Input id="name" defaultValue="Uriel Christian J." />
                                </div>
                                <div className="space-y-2">
                                  <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                  </label>
                                  <Input id="email" type="email" defaultValue="uriel.christian@example.com" />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                  Subject
                                </label>
                                <Input id="subject" placeholder="Enter the subject of your inquiry" />
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="category" className="text-sm font-medium">
                                  Category
                                </label>
                                <select
                                  id="category"
                                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                  <option>Technical Issue</option>
                                  <option>Account Access</option>
                                  <option>Course Enrollment</option>
                                  <option>Assignment Submission</option>
                                  <option>Grades</option>
                                  <option>Other</option>
                                </select>
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                  Message
                                </label>
                                <textarea
                                  id="message"
                                  placeholder="Describe your issue in detail"
                                  className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                ></textarea>
                              </div>

                              <div className="space-y-2">
                                <label htmlFor="attachment" className="text-sm font-medium">
                                  Attachment (Optional)
                                </label>
                                <Input id="attachment" type="file" />
                              </div>

                              <Button className="bg-[#0B4619] hover:bg-[#0a3d16]">Submit Ticket</Button>
                            </form>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <Card className="border shadow-sm">
                          <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>Other ways to reach our support team</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex items-start gap-3">
                                <div className="rounded-full bg-green-100 p-2 text-[#0B4619]">
                                  <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                  <h3 className="font-medium">Email Support</h3>
                                  <p className="text-sm text-gray-600">support@csu.edu.ph</p>
                                  <p className="text-xs text-gray-500">Response time: 24-48 hours</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3">
                                <div className="rounded-full bg-green-100 p-2 text-[#0B4619]">
                                  <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                  <h3 className="font-medium">Phone Support</h3>
                                  <p className="text-sm text-gray-600">+63 (85) 341-2296</p>
                                  <p className="text-xs text-gray-500">Available during support hours</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3">
                                <div className="rounded-full bg-green-100 p-2 text-[#0B4619]">
                                  <MessageSquare className="h-5 w-5" />
                                </div>
                                <div>
                                  <h3 className="font-medium">Live Chat</h3>
                                  <p className="text-sm text-gray-600">Available on the LMS portal</p>
                                  <p className="text-xs text-gray-500">Response time: 5-10 minutes</p>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 rounded-lg border bg-gray-50 p-4">
                              <h3 className="font-medium">IT Help Desk Location</h3>
                              <p className="mt-1 text-sm text-gray-600">2nd Floor, Administration Building</p>
                              <p className="text-sm text-gray-600">Caraga State University</p>
                              <p className="text-sm text-gray-600">Butuan City, Philippines</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="mt-6 border shadow-sm">
                          <CardHeader>
                            <CardTitle>Support Hours</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Monday - Friday</span>
                                <span className="text-sm font-medium">8:00 AM - 5:00 PM</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Saturday</span>
                                <span className="text-sm font-medium">9:00 AM - 12:00 PM</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Sunday</span>
                                <span className="text-sm font-medium">Closed</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
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
