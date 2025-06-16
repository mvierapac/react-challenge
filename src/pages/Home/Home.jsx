import { useState } from "react";
import { SearchBar } from "@components/SearchBar/SearchBar";
import { SearchResults } from "@components/SearchResults/SearchResults";
import { PhonesResult } from "@/components/PhonesResult/PhonesResult";
import { usePhones } from "@/hooks/usePhones";
import { useDebounce } from "@hooks/useDebounce.js";
import "./Home.css";

export const Home = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const { phones, loading } = usePhones(debouncedSearch);
  const totalResults = phones.length;
  return (
    <>
      <div className="search-wrapper">
        <SearchBar onSearch={setSearch} />
        <SearchResults results={totalResults} />
        <PhonesResult phones={phones}></PhonesResult>
      </div>
    </>
  );
};
