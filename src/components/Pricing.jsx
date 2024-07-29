import { FaTimes, FaCheck } from "react-icons/fa";

function Pricing() {
  const plans = [
    {
      tier: "Silver",
      price: "9.99",
      features: [
        { text: "HTML5 and CSS3", included: true },
        { text: "Bootstrap4", included: true },
        { text: "Well-commented code", included: true },
        { text: "IonIcons integrated", included: false },
        { text: "Free Google Font integrated", included: false },
        { text: "Responsive design", included: false },
      ],
      buttonText: "Buy Now",
      backgroundColor: "cta-size-2-gray",
    },
    {
      tier: "Gold",
      price: "19.99",
      features: [
        { text: "HTML5 and CSS3", included: true },
        { text: "Bootstrap4", included: true },
        { text: "Well-commented code", included: true },
        { text: "IonIcons integrated", included: true },
        { text: "Free Google Font integrated", included: true },
        { text: "Responsive design", included: false },
      ],
      buttonText: "Buy Now",
      backgroundColor: "cta-size-2",
    },
    {
      tier: "Platinum",
      price: "29.99",
      features: [
        { text: "HTML5 and CSS3", included: true },
        { text: "Bootstrap4", included: true },
        { text: "Well-commented code", included: true },
        { text: "IonIcons integrated", included: true },
        { text: "Free Google Font integrated", included: true },
        { text: "Responsive design", included: true },
      ],
      buttonText: "Buy Now",
      backgroundColor: "cta-size-2-gray",
    },
  ];

  const PricingCard = ({ tier, price, features, buttonText, backgroundColor }) => {
    return (
      <div className="pricing-card">
        <div className={`pricing-card-header ${backgroundColor === "cta-size-2-gray" ? "pricing-gray-background" : "pricing-green-background"} `}>
          <p className="secondary-header-white">{tier}</p>
          <p className="primary-header-white">{price}</p>
          <p className="desc-text-white">per month</p>
        </div>
        <div className="features-container">
          <ul>
            {features.map((feature, index) => (
              <li key={index} className="secondary-text-grey">
                {feature.included ? <FaCheck className="check" /> : <FaTimes className="times" />}
                {feature.text}
              </li>
            ))}
          </ul>
          <button className={`pricing-button ${backgroundColor === "cta-size-2-gray" ? "gray-button" : "green-button"}`}>{buttonText}</button>
        </div>
      </div>
    );
  };

  return (
    <div className="pricing-container">
      <h1 className="primary-header-black">Our Pricing</h1>
      <p className="secondary-text-grey">Nulla in est tincidunt, volutpat mi quis, gravida tortor. Suspendisse potenti. Nullam</p>
      <p className="secondary-text-grey">ornare, dui a vulputate mollis, est lorem ultrices neque.</p>
      <div className="pricing-card-container">
        {plans.map((plan, index) => (
          <PricingCard key={index} tier={plan.tier} price={plan.price} features={plan.features} buttonText={plan.buttonText} backgroundColor={plan.backgroundColor} />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
