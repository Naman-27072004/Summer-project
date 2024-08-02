import '../Styles/shipping.css'
function Shipping(){
    return<div className="shipping-policy-container">
    <h1 className="shipping-policy-title">Shipping Policy</h1>
    <p className="shipping-policy-date"><strong>Effective Date:</strong> [Insert Date]</p>
    <p className="shipping-policy-welcome">
      Welcome to Tech Bazaar. We are dedicated to ensuring that your shopping experience is as smooth and efficient as possible, including the delivery of your purchased items. Please review our shipping policy below.
    </p>
    
    <h2 className="shipping-policy-section-title">1. Shipping Destinations</h2>
    <ul className="shipping-policy-list">
      <li className="shipping-policy-list-item">
        <strong>1.1 Domestic Shipping:</strong> We ship to addresses within [Your Country/Region]. Please provide a complete and accurate shipping address to avoid delays.
      </li>
      <li className="shipping-policy-list-item">
        <strong>1.2 International Shipping:</strong> Currently, we do not offer international shipping. [Optional: If you do offer international shipping, include details about countries served, potential customs duties, etc.]
      </li>
    </ul>

    <h2 className="shipping-policy-section-title">2. Shipping Methods and Costs</h2>
    <ul className="shipping-policy-list">
      <li className="shipping-policy-list-item">
        <strong>2.1 Shipping Options:</strong> We offer a variety of shipping methods to meet your needs, including standard, expedited, and express shipping. Shipping options and costs will be displayed at checkout.
      </li>
      <li className="shipping-policy-list-item">
        <strong>2.2 Free Shipping:</strong> We offer free standard shipping on orders over [Insert Amount] within [Your Country/Region]. This offer applies to eligible items and will be automatically applied at checkout.
      </li>
    </ul>

    <h2 className="shipping-policy-section-title">3. Order Processing</h2>
    <ul className="shipping-policy-list">
      <li className="shipping-policy-list-item">
        <strong>3.1 Processing Time:</strong> Orders are processed within [1-2] business days. Orders placed on weekends or holidays will be processed the next business day.
      </li>
      <li className="shipping-policy-list-item">
        <strong>3.2 Order Confirmation:</strong> Once your order is placed, you will receive an order confirmation email. You will receive another email with tracking information once your order has shipped.
      </li>
    </ul>

    <h2 className="shipping-policy-section-title">4. Delivery Times</h2>
    <ul className="shipping-policy-list">
      <li className="shipping-policy-list-item">
        <strong>4.1 Estimated Delivery:</strong> Delivery times vary based on the shipping method selected and the destination. Estimated delivery times will be provided at checkout.
      </li>
      <li className="shipping-policy-list-item">
        <strong>4.2 Delays:</strong> While we strive to deliver your order within the estimated time frame, please note that delivery times are not guaranteed and may be affected by factors beyond our control, such as carrier delays or weather conditions.
      </li>
    </ul>

    <h2 className="shipping-policy-section-title">5. Tracking Your Order</h2>
    <p className="shipping-policy-paragraph">
      Once your order has shipped, you will receive an email with a tracking number and a link to track your shipment. You can also track your order through your ElectroHub account.
    </p>

    <h2 className="shipping-policy-section-title">6. Shipping Restrictions</h2>
    <ul className="shipping-policy-list">
      <li className="shipping-policy-list-item">
        <strong>6.1 P.O. Boxes:</strong> We do not ship to P.O. boxes. Please provide a physical address for delivery.
      </li>
      <li className="shipping-policy-list-item">
        <strong>6.2 Restricted Items:</strong> Certain items may have shipping restrictions due to size, weight, or regulatory requirements. Any restrictions will be noted on the product page.
      </li>
    </ul>

    <h2 className="shipping-policy-section-title">7. Lost or Damaged Packages</h2>
    <ul className="shipping-policy-list">
      <li className="shipping-policy-list-item">
        <strong>7.1 Lost Packages:</strong> If your package is lost in transit, please contact our customer service team at [Insert Email] or [Insert Phone Number]. We will work with the carrier to locate your package or provide a replacement.
      </li>
      <li className="shipping-policy-list-item">
        <strong>7.2 Damaged Packages:</strong> If your item arrives damaged, please contact us within [7] days of receipt. Provide photos of the damaged item and packaging. We will arrange for a replacement or refund as appropriate.
      </li>
    </ul>

    <h2 className="shipping-policy-section-title">8. Incorrect Address</h2>
    <p className="shipping-policy-paragraph">
      If you provide an incorrect shipping address and the package is returned to us, you will be responsible for the additional shipping costs to resend the package. Please ensure your shipping address is accurate before completing your order.
    </p>

    <h2 className="shipping-policy-section-title">9. Contact Us</h2>
    <p className="shipping-policy-paragraph">
      If you have any questions about our shipping policy or need assistance with your order, please contact us at:
    </p>
    <address className="shipping-policy-contact">
     Tech Bazaar<br />
      [Insert Address]<br />
      Email: [Insert Email]<br />
      Phone: [Insert Phone Number]
    </address>
    <p className="shipping-policy-thanks">
      Thank you for shopping with ElectroHub. We appreciate your business and are committed to providing you with the best possible service.
    </p>
  </div>
    }
    export default Shipping; 