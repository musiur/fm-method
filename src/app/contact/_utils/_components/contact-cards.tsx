import { ContactCardData } from "../_data/contact-card-data";

const ContactCards = () => {
  return (
    <div className="container section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ContactCardData.map((card) => {
        return (
          <div
            key={card.id}
            className="flex items-center gap-4 border rounded-lg p-4 md:p-8"
          >
            <div>{card.icon}</div>
            <div>
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactCards;
