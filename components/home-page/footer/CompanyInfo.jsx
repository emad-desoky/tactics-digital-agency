import { Email } from "@mui/icons-material";
import { Mail, Phone, MapPin } from "lucide-react";
import Map from "@/components/home-page/footer/Map";
const CompanyInfo = () => {
  const locations = [
    {
      name: "Digital Kitchen - Cairo",
      address: "Joseph Tito Axis - Nozha - Cairo, Egypt",
    },
    {
      name: "Media Studio - Cairo",
      address: "10th district - Zahraa Nasr City - Cairo, Egypt",
    },
    {
      name: "Business Dev. Office - Giza",
      address: "Plaza España Mall, Second Al Shiekh Zayed - Giza, Egypt",
    },
    // {
    //   name: "Creative Hub - Alexandria",
    //   address: "Corniche Road - Sidi Gaber - Alexandria, Egypt",
    // },
  ];

  return (
    <div className="space-y-8 mt-7">
      {/* <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Locations Grid - 2x2 */}
        <div className="lg:col-span-2">
          <h4 className="text-lg font-medium text-gray-300 mb-4">
            Our Locations
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 text-gray-400 p-3 rounded-lg"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-400" />
                <div>
                  <p className="font-medium text-gray-300 text-sm">
                    {location.name}
                  </p>
                  <p className="text-xs leading-relaxed">{location.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div className="lg:col-span-1">
          <h4 className="text-lg font-medium text-gray-300 mb-4">
            Get In Touch
          </h4>
          <div className="space-y-10">
            <div className="flex items-center space-x-3 text-gray-400 p-3  rounded-lg">
              <Phone className="w-7 h-7 text-yellow-400" />
              <div>
                <p className="text-sm font-medium text-gray-300">Phone</p>
                <p className="text-sm">+20 122 223 8755</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 p-3  rounded-lg">
              <Email className="w-7 h-7 text-yellow-400" />
              <div>
                <p className="text-sm font-medium text-gray-300">Email</p>
                <p className="text-sm">ask@tacticsdigitalagency.net</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Map />
      </div>
    </div>
  );
};

export default CompanyInfo;
