import { useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { PhonesResult } from "./components/PhonesResult/PhonesResult";
import { usePhones } from "@/hooks/usePhones";
import { useDebounce } from "@hooks/useDebounce.js";
import { useLoading } from "@/hooks/useLoading";
import { LoadingBar } from "@/components/LoadingBar/LoadingBar";
import "./Home.css";

export const Home = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const { phones, loading } = usePhones(debouncedSearch);
  const { reveal, progress } = useLoading(loading, phones.length > 0, {
    once: true,
  });
  const totalResults = phones.length;
  return (
    <div className="search-wrapper">
      <LoadingBar progress={progress} reveal={reveal} />

      {reveal && (
        <div className="home-content app-container fade-in">
          <div className="search-bar-sticky">
            <SearchBar onSearch={setSearch} />
            <SearchResults results={totalResults} />
          </div>
          <PhonesResult phones={phones} />
        </div>
      )}
    </div>
  );
};
