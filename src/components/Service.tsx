import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Star,
  Zap,
  Shield,
  Palette,
  Target,
  Award,
  Scissors,
} from "lucide-react";

export default function ServicesSection() {
  return (
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
  );
}
