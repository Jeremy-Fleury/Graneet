import { useState } from "react";

import { Card } from "../components/card";
import { SearchBar } from "../components/search-bar";
import { Cities, City } from "../types/types";

/**
 * WARN: Move this to a .env file
 */
const API_URL = "http://localhost:3000";

export default function Home() {
  const [cities, setCities] = useState<Cities | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFetchData = async (searchTerm: string) => {
    const response = await fetch(`${API_URL}/v1/city/${searchTerm}`);

    if (!response.ok) {
      throw new Error("Une erreur est survenue lors de la récupération des données");
    }

    const json: City[] = await response.json();
    return json;
  };

  const handleSearch = async (searchTerm: string) => {
    setError(null);

    if (!searchTerm) {
      setCities(null);
      return;
    }

    const data = await handleFetchData(searchTerm);

    setCities({
      metropole: data.filter((city) => city.postalCode.substring(0, 2) <= "95"),
      outreMer: data.filter((city) => city.postalCode.substring(0, 2) > "95"),
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col gap-8 bg-custom-lightGrayBlue p-8">
      <SearchBar handleSearch={handleSearch} />
      {error && <p className="rounded-md bg-red-200 py-2 px-8 text-red-500">{error}</p>}
      {cities ? (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card title="Villes de métropole" cities={cities.metropole} />
          <Card title="Villes d'outre-mer" cities={cities.outreMer} />
        </div>
      ) : null}
    </div>
  );
}
