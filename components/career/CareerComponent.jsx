"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  Rocket,
  Users,
  Upload,
  GraduationCap,
  Handshake,
  Coffee,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const jobPositions = [
  {
    title: "Senior Web Developer",
    department: "Development",
    location: "Remote/Hybrid",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    description:
      "Join our development team to build cutting-edge web applications using modern technologies and frameworks.",
    requirements: [
      "5+ years of experience in web development",
      "Proficiency in React, Next.js, and TypeScript",
      "Experience with Node.js and database management",
      "Strong understanding of responsive design principles",
      "Experience with version control (Git) and agile methodologies",
    ],
    responsibilities: [
      "Develop and maintain web applications",
      "Collaborate with design and product teams",
      "Write clean, maintainable code",
      "Participate in code reviews and technical discussions",
      "Mentor junior developers",
    ],
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote/Hybrid",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    description:
      "Create intuitive and visually appealing user experiences for our digital products and client projects.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Adobe Creative Suite",
      "Strong portfolio demonstrating design thinking",
      "Understanding of user-centered design principles",
      "Experience with prototyping and user testing",
    ],
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and design systems",
      "Collaborate with developers to ensure design implementation",
      "Present design concepts to clients and stakeholders",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote/Hybrid",
    type: "Full-time",
    salary: "$50,000 - $70,000",
    description:
      "Drive digital marketing strategies and campaigns to help our clients achieve their business objectives.",
    requirements: [
      "3+ years of digital marketing experience",
      "Proficiency in Google Analytics, Google Ads, Facebook Ads",
      "Experience with SEO/SEM and content marketing",
      "Strong analytical and data interpretation skills",
      "Excellent written and verbal communication skills",
    ],
    responsibilities: [
      "Develop and execute digital marketing campaigns",
      "Manage social media accounts and content calendars",
      "Analyze campaign performance and optimize strategies",
      "Create marketing reports and presentations",
      "Stay updated with digital marketing trends and best practices",
    ],
  },
  {
    title: "Project Manager",
    department: "Operations",
    location: "Remote/Hybrid",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    description:
      "Lead cross-functional teams to deliver high-quality projects on time and within budget for our clients.",
    requirements: [
      "4+ years of project management experience",
      "PMP or Agile certification preferred",
      "Experience with project management tools (Asana, Jira, Trello)",
      "Strong leadership and communication skills",
      "Experience in digital agency or tech environment",
    ],
    responsibilities: [
      "Plan, execute, and close projects successfully",
      "Coordinate with internal teams and external stakeholders",
      "Manage project timelines, budgets, and resources",
      "Identify and mitigate project risks",
      "Ensure quality deliverables and client satisfaction",
    ],
  },
  {
    title: "Content Strategist",
    department: "Marketing",
    location: "Remote/Hybrid",
    type: "Full-time",
    salary: "$55,000 - $75,000",
    description:
      "Develop comprehensive content strategies that align with our clients' brand objectives and engage their target audiences.",
    requirements: [
      "3+ years of content strategy experience",
      "Excellent writing and editing skills",
      "Experience with content management systems",
      "Understanding of SEO and content optimization",
      "Strong research and analytical skills",
    ],
    responsibilities: [
      "Develop content strategies and editorial calendars",
      "Create engaging content for various digital platforms",
      "Collaborate with design and marketing teams",
      "Analyze content performance and optimize strategies",
      "Manage content production workflows",
    ],
  },
  {
    title: "Data Analyst",
    department: "Analytics",
    location: "Remote/Hybrid",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    description:
      "Transform data into actionable insights to drive strategic decisions for our clients and internal operations.",
    requirements: [
      "3+ years of data analysis experience",
      "Proficiency in SQL, Python, or R",
      "Experience with data visualization tools (Tableau, Power BI)",
      "Strong statistical analysis skills",
      "Experience with Google Analytics and marketing analytics",
    ],
    responsibilities: [
      "Analyze large datasets to identify trends and insights",
      "Create comprehensive reports and dashboards",
      "Collaborate with teams to define KPIs and metrics",
      "Present findings to clients and stakeholders",
      "Develop data-driven recommendations for optimization",
    ],
  },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "",
    message: "",
    cv: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, position: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
        setFormData((prev) => ({ ...prev, cv: file }));
      } else {
        alert("Please upload a PDF file only.");
      }
    }
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setFormData((prev) => ({ ...prev, position: job.title }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("position", formData.position);
      formDataToSend.append("message", formData.message);
      if (formData.cv) {
        formDataToSend.append("cv", formData.cv);
      }

      const response = await fetch("/api/submit-application", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          position: "",
          message: "",
          cv: null,
        });
      } else {
        const errorData = await response.json();
        alert(`Failed to submit application: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 w-full bg-neutral-900 text-white">
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl text-yellow-400 mb-4 font-bold">
          Join Our Team at Tactics Digital Agency
        </h1>
        <p className="text-xl text-gray-300 mt-6">
          Build your career with us and work on exciting digital projects
        </p>
      </div>

      {/* Current Openings */}
      <Card className="p-8 bg-neutral-800 border-gray-700 mb-16 container mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">
            Current Openings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {jobPositions.map((job, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="flex items-center justify-between p-6 rounded-lg bg-neutral-700 hover:bg-neutral-600 transition-colors cursor-pointer group">
                    <div className="flex items-center">
                      <Briefcase className="mr-3 text-yellow-400 text-xl" />
                      <div>
                        <span className="text-lg text-white font-semibold">
                          {job.title}
                        </span>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {job.department}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      View Details
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-neutral-800 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-white">
                      {job.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{job.salary}</span>
                      </div>
                    </div>

                    <Separator className="bg-gray-700" />

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Description
                      </h3>
                      <p className="text-gray-300">{job.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Requirements
                      </h3>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Responsibilities
                      </h3>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        onClick={() => handleJobSelect(job)}
                        className="bg-yellow-400 text-black hover:bg-yellow-300"
                      >
                        Apply for this Position
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Application Form and Image */}
      <div className="flex flex-col lg:flex-row gap-12 container mx-auto mb-16">
        <Card className="p-8 bg-neutral-800 border-gray-700 lg:w-1/2 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-white text-center">
              Apply Now
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-white">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="bg-neutral-700 border-gray-600 text-white"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-neutral-700 border-gray-600 text-white"
                />
              </div>

              <div>
                <Label htmlFor="position" className="text-white">
                  Position
                </Label>
                <Select
                  value={formData.position}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className="bg-neutral-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select the position you're applying for" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-700 border-gray-600">
                    {jobPositions.map((job) => (
                      <SelectItem
                        key={job.title}
                        value={job.title}
                        className="text-white"
                      >
                        {job.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-white">
                  Why do you want to join Tactics?
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about yourself and why you'd be a great fit"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-neutral-700 border-gray-600 text-white min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="cv" className="text-white">
                  Upload CV (PDF only)
                </Label>
                <div className="flex items-center gap-4 mt-2">
                  <Input
                    id="cv"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("cv")?.click()}
                    className="bg-neutral-700 border-gray-600 text-white hover:bg-neutral-600"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload CV
                  </Button>
                  <span className="text-sm text-gray-300">
                    {formData.cv ? formData.cv.name : "No file chosen"}
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 h-12 text-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex items-center justify-center lg:w-1/2">
          <Image
            src="/careers.PNG"
            alt="Tactics Digital Agency Team"
            width={600}
            height={500}
            className="rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Benefits Section - Moved to the end */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {[
          {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Exciting Projects",
            description:
              "Work on cutting-edge digital solutions for diverse clients.",
          },
          {
            icon: <Rocket className="w-8 h-8" />,
            title: "Career Growth",
            description: "Continuous learning and advancement opportunities.",
          },
          {
            icon: <Users className="w-8 h-8" />,
            title: "Collaborative Culture",
            description: "Join a team of passionate professionals.",
          },
          {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Learning Opportunities",
            description:
              "Access to workshops, conferences, and online courses.",
          },
          {
            icon: <Handshake className="w-8 h-8" />,
            title: "Inclusive Environment",
            description: "Diverse and welcoming workplace for all.",
          },
          {
            icon: <Coffee className="w-8 h-8" />,
            title: "Work-Life Balance",
            description: "Flexible hours and remote work options available.",
          },
        ].map((item, index) => (
          <Card
            key={index}
            className="p-8 hover:shadow-2xl transition-all duration-300 bg-neutral-800 border-gray-700 group"
          >
            <CardContent className="text-center">
              <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
