import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import CompanyInfo from "./CompanyInfo";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
          {/* Left Side - Logo, Social Links, and Partners */}
          <div className="space-y-8">
            <Logo />
            <SocialLinks />
          </div>

          {/* Right Side - Contact Info and Locations */}
          <div>
            <CompanyInfo />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {["About", "Services", "Portfolio", "Blogs", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="border-t border-gray-800 py-8"> */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TACTICS® Digital Agency. All rights
              reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="#privacy"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
