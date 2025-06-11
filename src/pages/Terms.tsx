import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Shield, Users, Globe } from 'lucide-react';
import HomeNavbar from '../components/HomeComponents/HomeNavbar';
import Footer from '../components/Footer';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const CollapsibleSection: React.FC<SectionProps> = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          <div className="text-black">{icon}</div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="text-gray-500" size={20} />
        ) : (
          <ChevronDown className="text-gray-500" size={20} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="text-gray-700 leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
};

const Terms = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>
    <HomeNavbar/>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c9f21d] rounded-full mb-6">
              <FileText className="text-black" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using our service. By accessing our platform, you agree to be bound by these terms.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Quick Overview */}
        <div className="bg-[#c9f21d] bg-opacity-10 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms and Conditions outline the rules and regulations for the use of our website and services. 
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use 
            our website if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </div>

        {/* Collapsible Sections */}
        <div className="space-y-4">
          <CollapsibleSection 
            title="Acceptance of Terms" 
            icon={<Shield size={24} />}
          >
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision 
              of this agreement. Additionally, when using this website's particular services, you shall be 
              subject to any posted guidelines or rules applicable to such services.
            </p>
            <p>
              If you do not agree to abide by the above, please do not use this service. We reserve the right 
              to change these terms and conditions at any time without notice.
            </p>
          </CollapsibleSection>

          <CollapsibleSection 
            title="Use License" 
            icon={<FileText size={24} />}
          >
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials on our website for 
              personal, non-commercial transitory viewing only. This is the grant of a license, not a 
              transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on our website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may 
              be terminated by us at any time.
            </p>
          </CollapsibleSection>

          <CollapsibleSection 
            title="User Accounts and Responsibilities" 
            icon={<Users size={24} />}
          >
            <p className="mb-4">
              When you create an account with us, you must provide information that is accurate, complete, 
              and current at all times. You are responsible for safeguarding the password and for all 
              activities that occur under your account.
            </p>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Use the service for any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>Submit false or misleading information</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection 
            title="Privacy Policy" 
            icon={<Shield size={24} />}
          >
            <p className="mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
              your information when you use our service. By using our service, you agree to the collection 
              and use of information in accordance with our Privacy Policy.
            </p>
            <p>
              We are committed to protecting your personal data and respecting your privacy rights. We will 
              only collect and use personal information as outlined in our Privacy Policy.
            </p>
          </CollapsibleSection>

          <CollapsibleSection 
            title="Service Availability" 
            icon={<Globe size={24} />}
          >
            <p className="mb-4">
              We strive to provide uninterrupted access to our service, but we cannot guarantee that the 
              service will always be available or error-free. We reserve the right to suspend or terminate 
              the service at any time for maintenance, updates, or other operational reasons.
            </p>
            <p>
              We are not liable for any loss or damage that may result from service interruptions, whether 
              planned or unplanned.
            </p>
          </CollapsibleSection>

          <CollapsibleSection 
            title="Limitation of Liability" 
            icon={<Shield size={24} />}
          >
            <p className="mb-4">
              In no event shall our company, its directors, employees, partners, agents, suppliers, or 
              affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            <p>
              Our liability is limited to the maximum extent permitted by law. Some jurisdictions do not 
              allow the exclusion of certain warranties or limitation of liability for consequential or 
              incidental damages.
            </p>
          </CollapsibleSection>

          <CollapsibleSection 
            title="Governing Law" 
            icon={<FileText size={24} />}
          >
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the 
              jurisdiction in which our company is incorporated, and you irrevocably submit to the exclusive 
              jurisdiction of the courts in that location.
            </p>
            <p>
              Any disputes arising from these terms will be resolved through the appropriate legal channels 
              in our jurisdiction.
            </p>
          </CollapsibleSection>

          <CollapsibleSection 
            title="Changes to Terms" 
            icon={<FileText size={24} />}
          >
            <p className="mb-4">
              We reserve the right to modify or replace these terms at any time. If a revision is material, 
              we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p>
              Your continued use of the service after we post any modifications to the terms on this page 
              will constitute your acknowledgment of the modifications and your consent to abide by the 
              modified terms.
            </p>
          </CollapsibleSection>
        </div>

        {/* Acceptance Checkbox */}
        {/* <div className="mt-12 p-6 bg-gray-50 rounded-lg border-2 border-gray-200">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="accept-terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1 h-5 w-5 text-[#c9f21d] border-gray-300 rounded focus:ring-[#c9f21d] focus:ring-2"
            />
            <label htmlFor="accept-terms" className="text-gray-700 leading-relaxed">
              <span className="font-medium">I have read and agree to the Terms and Conditions.</span>
              <br />
              <span className="text-sm text-gray-600">
                By checking this box, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </span>
            </label>
          </div>
          
          <div className="mt-6 flex space-x-4">
            <button
              disabled={!acceptedTerms}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                acceptedTerms
                  ? 'bg-[#c9f21d] text-black hover:bg-[#b8e019] hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Accept Terms
            </button>
            <button className="px-6 py-3 rounded-lg font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
              Decline
            </button>
          </div>
        </div> */}

    
        {/* <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions About These Terms?</h3>
          <p className="text-gray-600 mb-4">
            If you have any questions about these Terms and Conditions, please contact us.
          </p>
          <div className="text-sm text-gray-500">
            <p>Email: legal@company.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Business St, City, State 12345</p>
          </div>
        </div> */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Terms;