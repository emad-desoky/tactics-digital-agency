import { Mail, Phone, MapPin } from "lucide-react";

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
  ];

  return (
    <div className="space-y-6">
      {/* Locations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-300 mb-3">
          Our Locations
        </h3>
        {locations.map((location, index) => (
          <div key={index} className="flex items-start space-x-3 text-gray-400">
            <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-300">{location.name}</p>
              <p className="text-sm">{location.address}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Info */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-gray-400">
          <Phone className="w-5 h-5" />
          <span>+20 122 223 8755</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-400">
          <Mail className="w-5 h-5" />
          <span>ask@tacticsdigitalagency.net</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
