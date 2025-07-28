"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./globals.css";
import hero_image from "@/../public/hero_image.webp";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Zap,
  Shield,
  Palette,
  Menu,
  X,
  Scissors,
  Target,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/ui/Loader";

export const AuthButton = () => {
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <Loader />;

  return user ? (
    <Button onClick={logout} className="bg-red-600 hover:bg-red-700">
      Logout
    </Button>
  ) : (
    <Button className="bg-blue-600 hover:bg-blue-700">
      <Link href="/Login">Login</Link>
    </Button>
  );
};
export default function EmbroideryDigitizingWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                Star Stitch
              </span>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#Portfolio"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <AuthButton />
            </div>
            {/* Mobile Menu Icon */}
            {/* <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div> */}
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Nav */}
      {/* {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-blue-600 flex flex-col p-l-5 justify-center space-y-8 text-xl font-medium text-gray-800">
          <Link href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <hr style={{ color: "gray", width: "100%" }} />
          <Link href="#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <hr />
          <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <hr />
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Button>
        </div>
      )} */}
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        {/* Responsive background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-[url('/images/embroidery-process.png')] bg-cover bg-center opacity-10"></div>

        {/* Responsive floating elements */}
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 md:w-36 md:h-36 lg:w-56 lg:h-56 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-indigo-200 rounded-full opacity-15 blur-2xl animate-pulse delay-500"></div>

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

      {/* Services Section */}
      <section id="services" className="py-20 mx-auto bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 mb-12 px-4 sm:px-6 md:px-8 lg:px-0">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4 text-sm sm:text-base">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Professional Digitizing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in converting your artwork into high-quality
              embroidery files with precision and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Logo Digitizing</CardTitle>
                <CardDescription>
                  Convert your company logos into perfect embroidery files with
                  precise stitch placement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/logo-digitizing.png"
                  alt="Logo embroidery digitizing"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Vector and raster logo conversion</li>
                  <li>• Multiple format outputs</li>
                  <li>• Color matching expertise</li>
                  <li>• Scalable for different sizes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Patch Digitizing</CardTitle>
                <CardDescription>
                  Specialized digitizing for patches, badges, and emblems with
                  clean borders.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/patch-embroidery.png"
                  alt="Patch embroidery digitizing"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Military and uniform patches</li>
                  <li>• Custom badge designs</li>
                  <li>• Merrowed borders</li>
                  <li>• Heat seal backing options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>3D Puff Embroidery</CardTitle>
                <CardDescription>
                  Create dimensional embroidery with foam backing for a raised,
                  premium look.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/3d-puff-embroidery.png"
                  alt="3D puff embroidery digitizing"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Raised foam embroidery</li>
                  <li>• Perfect for caps and hats</li>
                  <li>• Premium dimensional effect</li>
                  <li>• Custom foam thickness</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Applique Digitizing</CardTitle>
                <CardDescription>
                  Combine fabric pieces with embroidery for unique, textured
                  designs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/applique-work.png"
                  alt="Applique embroidery digitizing"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Fabric combination designs</li>
                  <li>• Reduced stitch count</li>
                  <li>• Cost-effective for large areas</li>
                  <li>• Creative texture options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Scissors className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Vector Tracing</CardTitle>
                <CardDescription>
                  Convert low-quality images into crisp vector files ready for
                  digitizing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/vector-tracing.png"
                  alt="Vector tracing service"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Image cleanup and enhancement</li>
                  <li>• Vector file creation</li>
                  <li>• Multiple format outputs</li>
                  <li>• Print-ready artwork</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Rush Orders</CardTitle>
                <CardDescription>
                  Need it fast? We offer expedited services for urgent projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/rush-order.png"
                  alt="Rush order embroidery digitizing"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 2-4 hour turnaround available</li>
                  <li>• Same-day delivery</li>
                  <li>• Priority processing</li>
                  <li>• 24/7 support</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Process
              </h3>
              <p className="text-lg text-gray-600">
                Simple, fast, and professional workflow
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Submit Design
                </h4>
                <p className="text-sm text-gray-600">
                  Upload your artwork or logo through our secure portal
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Expert Digitizing
                </h4>
                <p className="text-sm text-gray-600">
                  Our skilled digitizers convert your design with precision
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Quality Check
                </h4>
                <p className="text-sm text-gray-600">
                  Thorough testing and optimization for perfect results
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Fast Delivery
                </h4>
                <p className="text-sm text-gray-600">
                  Receive your files within 24 hours or less
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today for a free quote and experience the difference of
              professional embroidery digitizing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Send Us Your Project</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 2
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Logo Digitizing</option>
                      <option>Patch Digitizing</option>
                      <option>3D Puff Embroidery</option>
                      <option>Applique Digitizing</option>
                      <option>Vector Tracing</option>
                      <option>Rush Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <Textarea
                      placeholder="Please describe your project, including size, colors, and any special requirements..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Phone Support
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Call us for immediate assistance
                    </p>
                    <p className="font-medium text-blue-600">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-sm text-gray-500">
                      Mon-Fri: 8AM-8PM EST
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Email Support
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Send us your files and requirements
                    </p>
                    <p className="font-medium text-green-600">
                      orders@starstitch.com
                    </p>
                    <p className="text-sm text-gray-500">
                      Response within 2 hours
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Office Location
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Visit our digitizing studio
                    </p>
                    <p className="font-medium text-purple-600">
                      123 Embroidery Lane
                    </p>
                    <p className="text-sm text-gray-500">
                      Design City, DC 12345
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    24-Hour Turnaround
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Most projects completed within 24 hours. Rush orders
                    available in 2-4 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Star Stitch</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional embroidery digitizing services with expert quality
                and fast turnaround.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Logo Digitizing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Patch Digitizing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    3D Puff Embroidery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Applique Digitizing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Vector Tracing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>orders@starstitch.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Embroidery Lane, Design City, DC</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Star Stitch. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
