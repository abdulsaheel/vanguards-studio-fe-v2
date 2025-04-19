export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bebas text-5xl md:text-7xl tracking-wide mb-6">Privacy Policy</h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-8">Last updated: April 18, 2023</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>
              At Vanguards Studio, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="font-oswald text-2xl mt-8 mb-4">Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you express an interest in
              obtaining information about us or our products and services, when you participate in activities on our
              website, or otherwise when you contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of your interactions with us and the
              website, the choices you make, and the products and features you use. The personal information we collect
              may include:
            </p>
            <ul>
              <li>Name and contact information (email address, phone number, etc.)</li>
              <li>Billing and payment information</li>
              <li>Information you provide in forms and surveys</li>
              <li>Information about your business or organization</li>
              <li>Technical information about your device and internet connection</li>
            </ul>

            <h2 className="font-oswald text-2xl mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our website and services</li>
              <li>Improve, personalize, and expand our website and services</li>
              <li>Understand and analyze how you use our website and services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, including for customer service, updates, and marketing purposes</li>
              <li>Process transactions and send related information</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="font-oswald text-2xl mt-8 mb-4">Sharing Your Information</h2>
            <p>We may share your information with third parties in certain situations, including:</p>
            <ul>
              <li>With service providers who perform services for us</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2 className="font-oswald text-2xl mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies to collect information about your browsing activities
              and to improve your experience on our website. You can set your browser to refuse all or some browser
              cookies, but this may limit your ability to use certain features of our website.
            </p>

            <h2 className="font-oswald text-2xl mt-8 mb-4">Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the
              security of any personal information we process. However, please also remember that we cannot guarantee
              that the internet itself is 100% secure.
            </p>

            <h2 className="font-oswald text-2xl mt-8 mb-4">Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the
              right to access, correct, or delete your personal information. To exercise these rights, please contact us
              using the information provided below.
            </p>

            <h2 className="font-oswald text-2xl mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date at the top of this page.
            </p>

            <h2 className="font-oswald text-2xl mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy or our practices with regards to your
              personal information, please contact us at:
            </p>
            <p>
              Vanguards Studio
              <br />
              123 Design Avenue
              <br />
              San Francisco, CA 94103
              <br />
              United States
              <br />
              Email: privacy@vanguardsstudio.com
              <br />
              Phone: +1 (234) 567-890
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
