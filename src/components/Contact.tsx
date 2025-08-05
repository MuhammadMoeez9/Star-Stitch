"use client";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useAuth } from "@/app/context/AuthContext"; // Make sure this is correct
import { db } from "@/components/ui/Firebase"; // Adjust import path to your Firebase config
import { doc, addDoc, collection } from "firebase/firestore";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Footer() {
  const { user } = useAuth();
  const userEmail = user?.email || "";

  // 01 Send Email

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "Logo Digitizing",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "Emails"), {
        ...formData,
        email: userEmail,
        createdAt: new Date(),
      });

      Swal.fire({
        icon: "success",
        title: "Submitted!",
        text: "Your project has been submitted.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        service: "Logo Digitizing",
        details: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  // 02 Send Email

  return (
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
                Fill out the form below and we&apos;ll get back to you within 2
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={userEmail}
                    placeholder="john@example.com"
                    disabled
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
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
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    required
                    placeholder="Please describe your project, including size, colors, and any special requirements..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                >
                  Send Mail
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaFacebook className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    FaceBook Support
                  </h3>
                  <p className="text-gray-600 mb-2">
                    DM us for immediate assistance
                  </p>
                  <p className="font-medium text-blue-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 8AM-8PM EST</p>
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
                    info.starstitch@gmail.com
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
                  <FaInstagram className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Instagram Support
                  </h3>
                  <p className="text-gray-600 mb-2">
                    DM us for immediate assistance
                  </p>
                  <p className="font-medium text-purple-600">
                    123 Embroidery Lane
                  </p>
                  <p className="text-sm text-gray-500">Design City, DC 12345</p>
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
                  Most projects completed within 24 hours. Rush orders available
                  in 2-4 hours.
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
  );
}
