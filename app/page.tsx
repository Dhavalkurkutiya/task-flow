"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

const features = [
  {
    icon: () => (
      <svg
        className="h-12 w-12 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    title: "Task Management",
    description:
      "Organize and track your tasks efficiently with our intuitive interface",
  },
  {
    icon: () => (
      <svg
        className="h-12 w-12 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Team Collaboration",
    description:
      "Work together seamlessly with real-time updates and communication",
  },
  {
    icon: () => (
      <svg
        className="h-12 w-12 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Analytics",
    description:
      "Make data-driven decisions with comprehensive insights and reports",
  },
  {
    icon: () => (
      <svg
        className="h-12 w-12 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Security",
    description:
      "Enterprise-grade security with advanced encryption and compliance",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "https://i.pravatar.cc/150?u=sarah",
    content:
      "TaskFlow has revolutionized how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.",
  },
  {
    name: "Michael Chen",
    role: "Senior Software Engineer at DevCo",
    image: "https://i.pravatar.cc/150?u=michael",
    content:
      "As a developer, I appreciate TaskFlow's clean architecture and robust feature set. It's become an essential part of our development workflow.",
  },
  {
    name: "Emily Davis",
    role: "Marketing Director at BrandX",
    image: "https://i.pravatar.cc/150?u=emily",
    content:
      "TaskFlow transformed our marketing operations. The analytics features help us make better decisions and track campaign performance effectively.",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$0",
    highlight: false,
    features: [
      "Up to 5 team members",
      "Basic task management",
      "1GB storage",
      "Email support",
      "Basic reporting",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    highlight: true,
    features: [
      "Up to 20 team members",
      "Advanced task management",
      "10GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom workflows",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    highlight: false,
    features: [
      "Unlimited team members",
      "Custom workflows",
      "Unlimited storage",
      "24/7 phone support",
      "Advanced security",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
    ],
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Streamline Your Workflow with TaskFlow
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200">
                Boost productivity and collaboration with our intelligent task
                management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  <Link href="/dashboard">Go to Dashboard</Link>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Image
                  src="/dashboard-preview.png"
                  width={600}
                  height={400}
                  alt="TaskFlow Dashboard"
                  className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage your projects effectively
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6">{feature.icon()}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-12">
                    <div className="flex flex-col items-center text-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-full mb-6 border-4 border-white shadow-lg"
                      />
                      <p className="text-xl text-gray-700 italic mb-6">
                        {testimonial.content}
                      </p>
                      <h3 className="text-xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="absolute top-1/2 -translate-y-1/2 -left-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
              className="absolute top-1/2 -translate-y-1/2 -right-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan thats right for your team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                  plan.highlight
                    ? "ring-2 ring-blue-500 transform scale-105"
                    : ""
                }`}
              >
                {plan.highlight && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-base font-normal text-gray-600">
                      /month
                    </span>
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <svg
                        className="h-5 w-5 text-green-500 mr-3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
