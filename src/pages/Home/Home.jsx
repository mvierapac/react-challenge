import { useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { PhonesResult } from "./components/PhonesResult/PhonesResult";
import { usePhonesQuery } from "@/hooks/usePhonesQuery";
import { useDebounce } from "@hooks/useDebounce.js";
import { useLoading } from "@/hooks/useLoading";
import { LoadingBar } from "@/components/LoadingBar/LoadingBar";
import "./Home.css";

export const Home = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const { data: phones = [], isLoading } = usePhonesQuery(debouncedSearch);
  const isInitialLoad = isLoading && phones.length === 0;

  const { progress, showBar } = useLoading(isInitialLoad, phones.length > 0);
  const totalResults = phones.length;

  return (
    <div className="search-wrapper">
      {showBar && <LoadingBar progress={progress} />}

      {!showBar && (
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
