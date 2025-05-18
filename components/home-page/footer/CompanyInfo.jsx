import React from "react";
import { Building2, Mail, Phone } from "lucide-react";

const CompanyInfo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 text-gray-400">
        <Building2 className="w-5 h-5" />
        <span>خلف مستشفي السعودي الالمانى شارع الشعراوى جسر السويس</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-400">
        <Phone className="w-5 h-5" />
        <span>01222238755</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-400">
        <Mail className="w-5 h-5" />
        <span>Tacticsdigitalagency@gmail.com</span>
      </div>
    </div>
  );
};

export default CompanyInfo;
