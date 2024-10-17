

'use client';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Buttons from '../ui/buttonsUi';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <section className="bg-white text-customBrown font-openSans p-8 md:p-16 mt-[100px]">
        <div className="max-w-4xl mx-auto font-normal">
          <h1 className="text-4xl font-semibold text-customLightBrown mb-4">Privacy <span className="text-customBrown">Policy</span></h1>
          <p className="text-sm text-customLightBrown mb-8">Last updated: July 27, 2024.</p>
          <p className="mb-4">
            iBeauty Center values ​​your privacy. This privacy policy describes how we collect, use, and protect the personal information you provide to us when you use our website.
          </p>
          <h2 className="text-2xl font-semibold text-customLightBrown mt-8 mb-4">1. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-customLightBrown mt-4 mb-2">1.1. Information You Provide Voluntarily</h3>
          <p className="mb-4">
            <strong>Personal Data:</strong> When you register on our site, make a purchase or contact us, we may collect information such as your name, email address, phone number, and payment information.
            <br />
            <strong>User Content:</strong> Any comments, reviews, or other content you post on our site.
          </p>
          <h3 className="text-xl font-semibold text-customLightBrown mt-4 mb-2">1.2. Information Collected Automatically</h3>
          <p className="mb-4">
            <strong>Cookies:</strong> We use cookies and similar technologies to collect information about your browsing on the website, including pages visited, time spent on the website, and your preferences. You can manage your cookie preferences through your browser settings.
            <br />
            <strong>Usage Data:</strong> Information about the device you use to access the website, including the device type, operating system, browser type, and IP address.
          </p>
          <h2 className="text-2xl font-semibold text-customLightBrown mt-8 mb-4">2. How We Use Information</h2>
          <p className="mb-4">
            We use the information we collect to:
            <br />
            <strong>Providing and Improving Our Services:</strong> Including personalizing content and recommendations, processing transactions, and providing customer service.
            <br />
            <strong>Communications:</strong> Sending you updates, newsletters, and other communications related to our services. You may opt out of receiving these communications at any time.
            <br />
            <strong>Security and Fraud Prevention:</strong> To protect our users and our website from fraudulent and malicious activity.
            <br />
            <strong>Legal Compliance:</strong> Complying with legal obligations and responding to requests from government authorities.
          </p>
          <h2 className="text-2xl font-semibold text-customLightBrown mt-8 mb-4">3. Information Sharing</h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            <br />
            <strong>Service Providers:</strong> Third parties who perform services on our behalf, such as payment processing, website hosting, and data analysis.
            <br />
            <strong>Business Partners:</strong> For joint marketing purposes, where applicable and authorized.
            <br />
            <strong>Legal Requirements:</strong> Where necessary to comply with applicable law, regulation, legal process, or governmental request.
          </p>
          <h2 className="text-2xl font-semibold text-customLightBrown mt-8 mb-4">4. Data Security</h2>
          <p className="mb-4">
            We have implemented security measures to protect your personal information from unauthorized access, alteration, disclosure or destruction. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure.
          </p>
          <h2 className="text-2xl font-semibold text-customLightBrown mt-8 mb-4">5. Data Retention</h2>
          <p className="mb-4">
            We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including for legal compliance and internal reporting purposes.
          </p>
          <h2 className="text-2xl font-semibold text-customLightBrown mt-8 mb-4">6. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. Changes will be posted on this page, and the revision date will be updated.
          </p>
          <h2 className="text-2xl font-semibold text-customLightBrown mt-8 mb-4">7. Contact</h2>
          <p className="mb-4">
            If you have any questions or concerns about our privacy policy, please contact us at 
            <a href="mailto:ibeautycenterch@gmail.com" className="text-customLightBrown"> ibeautycenterch@gmail.com</a> or <a href="tel:+41762283656" className="text-customLightBrown">+41 762283656</a>.
          </p>
        </div>
      </section>
      <div className="fixed bottom-4 right-4 z-[200]">
        <Buttons />
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
