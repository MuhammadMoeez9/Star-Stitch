"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "./ui/badge";
import {
  Zap,
  Shield,
  TrendingUp,
  Heart,
  Globe,
  Lightbulb,
  Users,
  Award,
  Star,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function About() {
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-100px",
  });
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };
  const slideInFromBottom = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };
  return (
    <>
      <section className="py-20 bg-white" ref={valuesRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                valuesInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
                About Us
              </Badge>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={
                valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ delay: 0.3 }}
            >
              What Drives Us Forward
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={
                valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.4 }}
            >
              Our core values shape every decision we make and every service we
              provide.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate={valuesInView ? "animate" : "initial"}
          >
            {[
              {
                icon: Shield,
                title: "Quality First",
                description:
                  "We never compromise on quality. Every design undergoes rigorous testing to ensure perfect embroidery results.",
                color: "bg-blue-100 text-blue-600",
                gradient: "from-blue-50 to-blue-100",
              },
              {
                icon: Zap,
                title: "Speed & Efficiency",
                description:
                  "Fast turnaround times without sacrificing quality. Most projects completed within 24 hours.",
                color: "bg-yellow-100 text-yellow-600",
                gradient: "from-yellow-50 to-yellow-100",
              },
              {
                icon: Heart,
                title: "Customer Focus",
                description:
                  "Your success is our success. We build lasting relationships through exceptional service and support.",
                color: "bg-red-100 text-red-600",
                gradient: "from-red-50 to-red-100",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "Constantly evolving our techniques and technology to deliver cutting-edge digitizing solutions.",
                color: "bg-purple-100 text-purple-600",
                gradient: "from-purple-50 to-purple-100",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description:
                  "Serving clients worldwide with 24/7 support and understanding of diverse market needs.",
                color: "bg-green-100 text-green-600",
                gradient: "from-green-50 to-green-100",
              },
              {
                icon: TrendingUp,
                title: "Continuous Growth",
                description:
                  "Always learning, improving, and expanding our capabilities to better serve our clients.",
                color: "bg-indigo-100 text-indigo-600",
                gradient: "from-indigo-50 to-indigo-100",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group"
              >
                <Card
                  className={`h-full bg-gradient-to-br ${value.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <CardHeader className="text-center">
                    <motion.div
                      className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="h-8 w-8" />
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 overflow-x-hidden" ref={timelineRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={
              timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                timelineInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
                Our Journey
              </Badge>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={
                timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ delay: 0.3 }}
            >
              Milestones & Achievements
            </motion.h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate={timelineInView ? "animate" : "initial"}
          >
            {[
              {
                year: "2008",
                title: "Star Stitch Founded",
                description:
                  "Started with a vision to provide high-quality embroidery digitizing services.",
                icon: Star,
                color: "bg-blue-500",
              },
              {
                year: "2012",
                title: "Team Expansion",
                description:
                  "Grew to 10 expert digitizers and introduced 24-hour turnaround service.",
                icon: Users,
                color: "bg-green-500",
              },
              {
                year: "2016",
                title: "Global Reach",
                description:
                  "Expanded internationally, serving clients across 25+ countries worldwide.",
                icon: Globe,
                color: "bg-purple-500",
              },
              {
                year: "2020",
                title: "Technology Innovation",
                description:
                  "Implemented AI-assisted quality control and advanced digitizing software.",
                icon: Lightbulb,
                color: "bg-yellow-500",
              },
              {
                year: "2023",
                title: "3500+ Projects",
                description:
                  "Reached milestone of 3500+ completed projects with 99% satisfaction rate.",
                icon: Award,
                color: "bg-red-500",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className="relative flex items-center mb-12 last:mb-0"
                variants={slideInFromBottom}
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline line */}
                {index !== 4 && (
                  <motion.div
                    className="absolute left-6 top-16 w-0.5 h-16 bg-gray-300"
                    initial={{ scaleY: 0 }}
                    animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  />
                )}

                {/* Timeline dot */}
                <motion.div
                  className={`w-12 h-12 ${milestone.color} rounded-full flex items-center justify-center text-white shadow-lg z-10`}
                  initial={{ scale: 0 }}
                  animate={timelineInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <milestone.icon className="h-6 w-6" />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="ml-8 flex-1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    timelineInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 50 }
                  }
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-gray-900">
                          {milestone.title}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className="text-blue-600 border-blue-600"
                        >
                          {milestone.year}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
