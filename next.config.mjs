/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['assets.aceternity.com', 'placehold.co'], // Add the domain here
      dangerouslyAllowSVG: true, // Allow SVG images
    },
  };
  
  export default nextConfig;
  