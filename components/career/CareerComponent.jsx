"use client";

import React, { useState } from "react";
import {
  Card,
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  Image,
} from "@nextui-org/react";
import {
  FaBriefcase,
  FaRocket,
  FaUsers,
  FaFileUpload,
  FaGraduationCap,
  FaHandshake,
  FaCoffee,
} from "react-icons/fa";

const CareerComponent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "",
    message: "",
    cv: null,
  });

  const positions = [
    "Senior Web Developer",
    "UX/UI Designer",
    "Digital Marketing Specialist",
    "Project Manager",
    "Content Strategist",
    "Data Analyst",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      position: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (
        file.type.startsWith("image/") ||
        file.name.endsWith(".pdf") ||
        file.name.endsWith(".doc") ||
        file.name.endsWith(".docx")
      ) {
        setFormData((prevState) => ({
          ...prevState,
          cv: file,
        }));
      } else {
        alert("Please upload a valid image or document file.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
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
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 w-full bg-neutral-800 text-white">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-6xl text-[rgb(255,228,0)] mb-4">
          Join Our Team at Tactics Digital Agency
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 container mx-auto">
        {[
          {
            icon: <FaBriefcase />,
            title: "Exciting Projects",
            description:
              "Work on cutting-edge digital solutions for diverse clients.",
          },
          {
            icon: <FaRocket />,
            title: "Career Growth",
            description: "Continuous learning and advancement opportunities.",
          },
          {
            icon: <FaUsers />,
            title: "Collaborative Culture",
            description: "Join a team of passionate professionals.",
          },
          {
            icon: <FaGraduationCap />,
            title: "Learning Opportunities",
            description:
              "Access to workshops, conferences, and online courses.",
          },
          {
            icon: <FaHandshake />,
            title: "Inclusive Environment",
            description: "Diverse and welcoming workplace for all.",
          },
          {
            icon: <FaCoffee />,
            title: "Work-Life Balance",
            description: "Flexible hours and remote work options available.",
          },
        ].map((item, index) => (
          <Card
            key={index}
            className="p-8 hover:shadow-2xl transition-all duration-300 bg-[rgb(43,43,43)]  border border-gray-700 group"
          >
            <div className="text-4xl text-[#ffe400] mb-6 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              {item.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{item.description}</p>
          </Card>
        ))}
      </div>

      <Card className="p-8 bg-[rgb(43,43,43)] backdrop-blur-sm border border-gray-700 mb-16 container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Current Openings
        </h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {positions.map((position, index) => (
            <li
              key={index}
              className="flex items-center p-4 rounded-lg bg-[rgb(63,63,63)] hover:bg-[rgb(53,53,53)] transition-colors"
            >
              <FaBriefcase className="mr-3 text-[#ffe400] text-xl" />
              <span className="text-lg text-white">{position}</span>
            </li>
          ))}
        </ul>
      </Card>

      <div className="flex flex-col lg:flex-row gap-12 container mx-auto">
        <Card className="p-8 bg-[rgb(43,43,43)] backdrop-blur-sm border border-gray-700 lg:w-1/2 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Apply Now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              name="fullName"
              label="Full Name"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              radius="lg"
              size="lg"
              variant="bordered"
            />
            <Input
              name="email"
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              radius="lg"
              size="lg"
              variant="bordered"
            />
            <Select
              name="position"
              label="Position"
              placeholder="Select the position you're applying for"
              selectedKeys={formData.position ? [formData.position] : []}
              onChange={handleSelectChange}
              radius="lg"
              size="lg"
              variant="bordered"
            >
              {positions.map((position) => (
                <SelectItem key={position} value={position}>
                  {position}
                </SelectItem>
              ))}
            </Select>
            <Textarea
              name="message"
              label="Why do you want to join Tactics?"
              placeholder="Tell us about yourself and why you'd be a great fit"
              value={formData.message}
              onChange={handleInputChange}
              variant="bordered"
              radius="lg"
              size="lg"
              minRows={4}
            />
            <div className="flex items-center gap-4 flex-wrap">
              <Input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.png"
                onChange={handleFileChange}
                className="hidden"
                id="cv-upload"
                variant="bordered"
              />
              <Button
                as="label"
                htmlFor="cv-upload"
                className="bg-gray-700/50 text-white hover:bg-gray-600 transition-all duration-300 h-14 px-6"
                radius="lg"
                startContent={<FaFileUpload className="text-lg" />}
              >
                Upload CV/Image
              </Button>
              <span className="text-sm text-gray-300 flex-grow">
                {formData.cv ? formData.cv.name : "No file chosen"}
              </span>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#ffe400] text-gray-900 font-semibold hover:bg-yellow-300 transition-all duration-300 h-14 text-lg shadow-xl hover:shadow-yellow-500/20"
              radius="lg"
            >
              Submit Application
            </Button>
          </form>
        </Card>
        <div className="flex items-center justify-center">
          <Image
            src="/family.jpg"
            alt="Tactics Digital Agency"
            className="rounded-2xl lg:h-[500px] shadow-2xl border border-gray-700 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerComponent;
