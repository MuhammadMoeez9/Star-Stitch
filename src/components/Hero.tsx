"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Award } from "lucide-react";
import hero_image from "@/../public/hero_image.webp";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      <div className="absolute inset-0 bg-[url('/images/embroidery-process.png')] bg-cover bg-center opacity-10"></div>

      {/* Floating animated elements */}
      <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 md:w-36 md:h-36 lg:w-56 lg:h-56 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-indigo-200 rounded-full opacity-15 blur-2xl animate-pulse delay-500"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                Professional Embroidery Digitizing
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Designs Into
                <span className="text-blue-600"> Perfect Embroidery</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert embroidery digitizing services with 24-hour turnaround.
                High-quality, professional results for logos, designs, and
                custom artwork.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-transparent"
              >
                View Portfolio
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">24hr Turnaround</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">100% Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-600" />
                <span className="text-sm font-medium">Expert Quality</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 p-3">
              <Image
                src={hero_image}
                alt="Professional embroidery digitizing process"
                width={500}
                height={450}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
