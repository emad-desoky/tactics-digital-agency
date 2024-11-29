import React from "react";
import { Building2, Mail, Phone } from "lucide-react";

const CompanyInfo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 text-gray-400">
        <Building2 className="w-5 h-5" />
        <span>123 Innovation Street, Tech City, TC 12345</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-400">
        <Phone className="w-5 h-5" />
        <span>+1 (555) 123-4567</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-400">
        <Mail className="w-5 h-5" />
        <span>contact@company.com</span>
      </div>
    </div>
  );
};

export default CompanyInfo;
