import { useState } from "react";

interface SearchBarProps {
  handleSearch: (searchTerm: string) => void;
}

export function SearchBar({ handleSearch }: SearchBarProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(searchTerm);
    }
  };

  return (
    <div className="flex w-full flex-col  gap-4 rounded-md bg-custom-mediumGrayBlue p-4 text-2xl md:h-20 md:flex-row md:items-center md:gap-8 md:p-8">
      <p className="whitespace-nowrap font-bold text-black">Je recherche...</p>
      <input
        name="search"
        className="h-16 w-full rounded-md bg-custom-lightGrayBlue p-8 font-bold"
        placeholder="...une ville, un code postal"
        value={searchTerm}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
