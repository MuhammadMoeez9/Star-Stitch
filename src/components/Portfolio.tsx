import { Badge } from "./ui/badge";

export default function Portfolio() {
  return (
    <section className="py-20 mx-auto bg-gray-50">
      <div className="text-center mb-12 px-4 sm:px-6 md:px-8">
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4 text-sm sm:text-base">
          Our Portfolio
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Professional Digitizing Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We specialize in converting your artwork into high-quality embroidery
          files with precision and attention to detail.
        </p>
      </div>

      {/* Masonry layout */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 overflow-x-hidden">
        <div>
          <img
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src="https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full aspect-video max-w-full rounded-lg"
            src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80"
            alt="gallery-photo"
          />
        </div>
      </div>
    </section>
  );
}
