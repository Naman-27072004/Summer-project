import '../Styles/refund.css'
function Refund(){
    return<div>
    <div className="refund-policy-container">
    <h1 className="refund-policy-title">Refund Policy</h1>
    <p className="refund-policy-date"><strong>Effective Date:</strong> [Insert Date]</p>
    <p className="refund-policy-welcome">
      Thank you for shopping at ElectroHub. We are committed to ensuring your satisfaction with your purchase. If you are not completely satisfied, we are here to help.
    </p>
    
    <h2 className="refund-policy-section-title">1. Returns</h2>
    <ul className="refund-policy-list">
      <li className="refund-policy-list-item">
        <strong>1.1 Eligibility:</strong> To be eligible for a return, your item must be unused, in the same condition that you received it, and in the original packaging. Certain items such as software, downloadable products, and personal care items may not be eligible for return.
      </li>
      <li className="refund-policy-list-item">
        <strong>1.2 Return Period:</strong> You have [30] days from the date of purchase to initiate a return.
      </li>
      <li className="refund-policy-list-item">
        <strong>1.3 Return Process:</strong> To initiate a return, please contact our customer service team at [Insert Email] or [Insert Phone Number]. Provide your order number, a description of the issue, and any relevant photos. We will provide you with instructions for returning your item.
      </li>
    </ul>

    <h2 className="refund-policy-section-title">2. Refunds</h2>
    <ul className="refund-policy-list">
      <li className="refund-policy-list-item">
        <strong>2.1 Refund Process:</strong> Once we receive your returned item, we will inspect it and notify you of the status of your refund. If your return is approved, we will process a refund to your original method of payment within [7-10] business days.
      </li>
      <li className="refund-policy-list-item">
        <strong>2.2 Partial Refunds:</strong> In certain situations, only partial refunds may be granted (e.g., if the item is not in its original condition, is damaged, or is missing parts for reasons not due to our error).
      </li>
      <li className="refund-policy-list-item">
        <strong>2.3 Non-Refundable Items:</strong> Certain items are non-refundable, including:
        <ul className="refund-policy-sublist">
          <li className="refund-policy-sublist-item">Gift cards</li>
          <li className="refund-policy-sublist-item">Downloadable software products</li>
          <li className="refund-policy-sublist-item">Items purchased on clearance or final sale</li>
        </ul>
      </li>
    </ul>

    <h2 className="refund-policy-section-title">3. Shipping Costs</h2>
    <ul className="refund-policy-list">
      <li className="refund-policy-list-item">
        <strong>3.1 Return Shipping:</strong> You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
      </li>
      <li className="refund-policy-list-item">
        <strong>3.2 Damaged or Defective Items:</strong> If your item was damaged or defective upon arrival, we will cover the return shipping costs. Please contact our customer service team immediately for assistance.
      </li>
    </ul>

    <h2 className="refund-policy-section-title">4. Exchanges</h2>
    <p className="refund-policy-paragraph">
      If you need to exchange an item for a different model or a replacement, please contact our customer service team. Exchanges are subject to product availability and must meet the same eligibility criteria as returns.
    </p>

    <h2 className="refund-policy-section-title">5. Restocking Fees</h2>
    <p className="refund-policy-paragraph">
      Certain items may be subject to a restocking fee of [15%] of the purchase price. This fee will be deducted from your refund amount. Restocking fees apply to items returned due to buyer’s remorse or items that do not meet our return criteria.
    </p>

    <h2 className="refund-policy-section-title">6. Contact Us</h2>
    <p className="refund-policy-paragraph">
      If you have any questions about our refund policy or need assistance with a return, please contact us at:
    </p>
    <address className="refund-policy-contact">
      ElectroHub<br />
      [Insert Address]<br />
      Email: [Insert Email]<br />
      Phone: [Insert Phone Number]
    </address>
    <p className="refund-policy-thanks">
      Thank you for choosing ElectroHub. We value your business and strive to provide the best possible service.
    </p>
  </div>
  </div>
    }
    export default Refund; 