/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "assets.aceternity.com",
      "placehold.co",
      "aceternity.com",
      "images.unsplash.com",
      "media.istockphoto.com",
      "www.shutterstock.com",
      "i.pinimg.com",
    ], // Add the domain here
    dangerouslyAllowSVG: true, // Allow SVG images
  },
};

export default nextConfig;
