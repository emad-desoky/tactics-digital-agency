import Footer from "@/components/home-page/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

export default function AboutUsLayout({ children }) {
  return (
    <>
      <Head>
        <title>About Us - Tactics Digital Agency</title>
        <meta
          name="description"
          content="Learn more about Tactics Digital Agency, our mission, values, and the services we offer for effective media buying."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="About Us - Tactics Digital Agency" />
        <meta
          property="og:description"
          content="Learn more about Tactics Digital Agency, our mission, values, and the services we offer for effective media buying."
        />
        <meta
          property="og:image"
          content="https://marketing-agency-website-psi.vercel.app/slide1.png" // Update to your actual image URL
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://marketing-agency-website-psi.vercel.app/about-us" // Update to your actual URL
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - Tactics Digital Agency"
        />
        <meta
          name="twitter:description"
          content="Learn more about Tactics Digital Agency, our mission, values, and the services we offer for effective media buying."
        />
        <meta
          name="twitter:image"
          content="https://marketing-agency-website-psi.vercel.app/slide1.png" // Update to your actual image URL
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
