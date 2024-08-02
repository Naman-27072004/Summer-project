import '../Styles/privacy.css'
function Privacy() {
    return <div className="privacy-policy-container">
    <h1 className="privacy-policy-title">Privacy Policy</h1>
    <h2 className="privacy-policy-date">Effective Date: [Insert Date]</h2>
    <p className="privacy-policy-intro">
      Welcome to Tech Bazaar. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website and make purchases.
    </p>
    
    <h2 className="privacy-policy-section-title">Information We Collect</h2>
    <ul className="privacy-policy-list">
      <li className="privacy-policy-list-item">
        <strong>Personal Information:</strong> When you create an account, make a purchase, or interact with our site, we may collect personal information such as your name, email address, shipping address, billing address, phone number, and payment information.
      </li>
      <li className="privacy-policy-list-item">
        <strong>Non-Personal Information:</strong> We may collect non-personal information about your visit, such as your IP address, browser type, operating system, and browsing behavior.
      </li>
    </ul>

    <h2 className="privacy-policy-section-title">How We Use Your Information</h2>
    <ul className="privacy-policy-list">
      <li className="privacy-policy-list-item">
        <strong>To Process Transactions:</strong> We use your personal information to process and fulfill your orders, communicate with you about your purchases, and provide customer support.
      </li>
      <li className="privacy-policy-list-item">
        <strong>To Improve Our Services:</strong> We may use non-personal information to analyze site usage, enhance our website's functionality, and improve our products and services.
      </li>
      <li className="privacy-policy-list-item">
        <strong>Marketing Communications:</strong> With your consent, we may send you promotional emails about new products, special offers, and other updates. You can opt-out of these communications at any time.
      </li>
    </ul>

    <h2 className="privacy-policy-section-title">Information Sharing and Disclosure</h2>
    <ul className="privacy-policy-list">
      <li className="privacy-policy-list-item">
        <strong>Third-Party Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website, processing payments, and delivering orders. These providers are obligated to protect your information and use it only for the services they provide.
      </li>
      <li className="privacy-policy-list-item">
        <strong>Legal Requirements:</strong> We may disclose your information if required by law, or if we believe that such action is necessary to comply with legal processes, protect our rights, or ensure the safety of our users.
      </li>
    </ul>

    <h2 className="privacy-policy-section-title">Data Security</h2>
    <p className="privacy-policy-paragraph">
      We implement robust security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. Our website uses SSL encryption to safeguard your personal and payment information during transmission.
    </p>

    <h2 className="privacy-policy-section-title">Cookies and Tracking Technologies</h2>
    <p className="privacy-policy-paragraph">
      We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings.
    </p>

    <h2 className="privacy-policy-section-title">Your Rights and Choices</h2>
    <p className="privacy-policy-paragraph">
      You have the right to access, update, or delete your personal information. You can manage your account settings or contact us directly for assistance. You may also opt-out of receiving marketing communications by following the unsubscribe instructions in our emails.
    </p>

    <h2 className="privacy-policy-section-title">Changes to This Privacy Policy</h2>
    <p className="privacy-policy-paragraph">
      We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be revised accordingly. We encourage you to review this policy periodically.
    </p>

    <h2 className="privacy-policy-section-title">Contact Us</h2>
    <p className="privacy-policy-paragraph">
      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
    </p>
    <address className="privacy-policy-contact">
      Tech Bazaar<br />
      [Insert Address]<br />
      Email: [Insert Email]<br />
      Phone: [Insert Phone Number]
    </address>
    <p className="privacy-policy-thanks">
      Thank you for choosing Tech Bazaar. We appreciate your trust and are committed to protecting your privacy.
    </p>
  </div>
}
export default Privacy;