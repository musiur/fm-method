import { CardData } from "./card-data";

export const Cards = () => {
  return (
    <div className="section bg-primary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CardData.map((card) => {
          return (
            <div
              key={card.id}
              className="flex items-center gap-4 border rounded-lg p-4 md:p-8 bg-white"
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
    </div>
  );
};
