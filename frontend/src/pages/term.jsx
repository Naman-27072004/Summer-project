import '../Styles/term.css'
function Term() {
  return (
    <div className="terms-container">
    <h1 className="terms-title">Terms of Use</h1>
    <br />
    <h2 className="terms-effective-date">Effective Date: [Insert Date]</h2>
    <br />
    <p className="terms-paragraph">
      Welcome to Tech Bazaar. These Terms of Use govern your access to and use
      of our website and services. By using our website, you agree to comply
      with and be bound by these terms. Please read them carefully.
    </p>
    <br />
    <ul className="terms-list">
      <li className="terms-list-item">
        <strong>Acceptance of Terms:</strong> By accessing or using the Tech Bazaar website, you
        agree to these Terms of Use and our Privacy Policy. If you do not
        agree, please do not use our website.
      </li>
      <br />

      <li className="terms-list-item">
        <strong>Eligibility:</strong> You must be at least 18 years old to use our website and
        make purchases. By using our site, you represent that you are of legal
        age to form a binding contract.
      </li>
      <br />

      <li className="terms-list-item">
        <strong>Account Registration</strong>
        <ul className="terms-sublist">
          <li className="terms-sublist-item">
            <strong>Account Creation:</strong> To make a purchase, you may need to create an
            account. You agree to provide accurate and complete information and
            to keep your account information updated.
          </li>
          <br />
          <li className="terms-sublist-item">
            <strong>Account Security:</strong> You are responsible for maintaining the
            confidentiality of your account credentials and for all activities
            that occur under your account. Notify us immediately of any
            unauthorized use.
          </li>
          <br />
        </ul>
      </li>

      <li className="terms-list-item">
        <strong>Use of the Website</strong>
        <ul className="terms-sublist">
          <li className="terms-sublist-item">
            <strong>Permitted Use:</strong> You may use our website for lawful purposes and in
            accordance with these terms. You agree not to use the site in any
            way that could damage, disable, overburden, or impair it.
          </li>
          <br />
          <li className="terms-sublist-item">
            <strong>Prohibited Use:</strong> You agree not to:
            <ul className="terms-subsublist">
              <li className="terms-subsublist-item">Use the website for any fraudulent or unlawful purpose.</li>
              <br />
              <li className="terms-subsublist-item">Interfere with or disrupt the website or servers.</li>
              <br />
              <li className="terms-subsublist-item">
                Attempt to gain unauthorized access to any part of the website.
              </li>
              <br />
            </ul>
          </li>
          <br />
        </ul>
      </li>

      <li className="terms-list-item">
        <strong>Product Information and Orders</strong>
        <ul className="terms-sublist">
          <li className="terms-sublist-item">
            <strong>Product Descriptions:</strong> We strive to provide accurate product
            descriptions and images. However, we do not warrant that the
            descriptions or images are complete, accurate, or error-free.
          </li>
          <br />
          <li className="terms-sublist-item">
            <strong>Pricing:</strong> All prices are listed in [Currency] and are subject to
            change without notice. We are not responsible for typographical
            errors in pricing.
          </li>
          <br />
          <li className="terms-sublist-item">
            <strong>Order Acceptance:</strong> We reserve the right to refuse or cancel any order
            for any reason, including but not limited to product availability,
            errors in pricing, or issues identified by our fraud detection
            system.
          </li>
          <br />
        </ul>
      </li>

      <li className="terms-list-item">
        <strong>Payment and Shipping</strong>
        <ul className="terms-sublist">
          <li className="terms-sublist-item">
            <strong>Payment Methods:</strong> We accept various payment methods as indicated on
            our website. You agree to provide valid payment information and
            authorize us to charge the total amount of your order.
          </li>
          <br />
          <li className="terms-sublist-item">
            <strong>Shipping:</strong> We will ship products to the address you provide. Shipping
            times and costs may vary based on location and shipping method. We
            are not responsible for delays caused by shipping carriers.
          </li>
          <br />
        </ul>
      </li>

      <li className="terms-list-item">
        <strong>Returns and Refunds:</strong> Please refer to our Return Policy for detailed
        information on returns and refunds.
      </li>
      <br />

      <li className="terms-list-item">
        <strong>Intellectual Property:</strong> All content on our website, including text,
        graphics, logos, images, and software, is the property of Tech Bazaar
        or its licensors and is protected by copyright, trademark, and other
        intellectual property laws. You may not use any content without our
        prior written permission.
      </li>
      <br />

      <li className="terms-list-item">
        <strong>Limitation of Liability:</strong> To the fullest extent permitted by law,
        Tech Bazaar shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages arising out of or related to your
        use of the website or purchase of products, even if we have been
        advised of the possibility of such damages.
      </li>
      <br />

      <li className="terms-list-item">
        <strong>Indemnification:</strong> You agree to indemnify, defend, and hold harmless
        Tech Bazaar and its affiliates, officers, directors, employees, and
        agents from any claims, liabilities, damages, losses, and expenses
        arising out of or related to your use of the website or violation of
        these terms.
      </li>
      <br />

      <li className="terms-list-item">
        <strong>Governing Law:</strong> These Terms of Use and any disputes arising out of or
        related to them shall be governed by and construed in accordance with
        the laws of [Your Country/State], without regard to its conflict of
        laws principles.
      </li>
      <br />

      <li className="terms-list-item">
        <strong>Changes to Terms:</strong> We may update these Terms of Use from time to time.
        Any changes will be posted on this page, and the effective date will
        be revised accordingly. Your continued use of the website after any
        changes constitutes your acceptance of the new terms.
      </li>
      <br />

      <li className="terms-list-item">
        <strong>Contact Us:</strong> If you have any questions about these Terms of Use, please
        contact us at: Tech Bazaar [Insert Address] Email: [Insert Email]
        Phone: [Insert Phone Number] Thank you for shopping with Tech Bazaar.
        We appreciate your business and strive to provide you with the best
        service possible.
      </li>
    </ul>
  </div>
  );
}
export default Term;
