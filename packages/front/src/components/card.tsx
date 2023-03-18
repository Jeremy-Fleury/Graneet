import { City } from "../types/types";

interface CardProps {
  title: string;
  cities: City[];
}

export function Card({ title, cities }: CardProps) {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-md bg-custom-mediumGrayBlue p-8">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div
        className={`${
          cities.length ? "bg-custom-green" : "bg-custom-red"
        } min-h-16 flex w-full items-center justify-center py-6 px-8 text-center font-bold text-white`}
      >
        {cities.length
          ? `${cities.length} villes correspondant au texte saisi`
          : "Aucune ville correspondant au texte saisi"}
      </div>

      <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-2">
        {cities
          .sort((a, b) => a.cityName.localeCompare(b.cityName))
          .map((city) => (
            <div
              key={city.id}
              className="flex h-16 w-full flex-row items-center justify-between rounded-md bg-custom-darkGrayBlue p-8 font-bold text-white opacity-60"
            >
              <p>{city.cityName}</p>
              <p className="font-bold text-gray-400">{city.postalCode}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
