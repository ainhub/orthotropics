"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();

  const [isSearchBarOpen, setSearchBarOpen] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchBar = useRef<HTMLDivElement | null>(null);
  const searchWrapper = useRef<HTMLDivElement | null>(null);

  const toggleSearchBar = () => {
    searchBar?.current?.classList.toggle("hidden");
    searchBar?.current?.classList.toggle("flex");
    searchWrapper?.current?.classList.toggle("absolute");
    setSearchBarOpen((value) => !value);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.length) {
      return;
    }
    setSearching(true);
    setTimeout(() => {
      router.push(`/search?query=${value}`);
      setSearching(false);
      inputRef?.current?.blur();
    }, 500);
  };

  useEffect(() => {
    if (isSearchBarOpen) {
      inputRef?.current?.focus();
    }
  }, [isSearchBarOpen]);

  return (
    <div
      ref={searchWrapper}
      className="md:relative md:right-0 flex items-center transition-all right-4"
    >
      <div ref={searchBar} className="md:flex hidden transition-all">
        <form
          onSubmit={handleSearch}
          className="flex items-center transition-all"
        >
          <input
            ref={inputRef}
            defaultValue={value}
            onInput={handleInput}
            type="search"
            className="focus:outline-none bg-brand-light-100 px-4 py-[15px] text-brand-dark-200"
          />
          <button
            type="submit"
            className="px-4 py-[15px] md:inline-flex hidden items-center justify-center bg-brand-green-dark disabled:cursor-not-allowed"
            disabled={searching}
          >
            {searching ? (
              <span className="material-symbols-outlined text-brand-light-100 animate-spin">
                progress_activity
              </span>
            ) : (
              <span className="material-symbols-outlined text-brand-light-100">
                search
              </span>
            )}
          </button>
        </form>
      </div>
      <button
        onClick={toggleSearchBar}
        className="md:hidden px-4 py-[15px] inline-flex items-center justify-center bg-brand-green-dark disabled:cursor-not-allowed"
        disabled={searching}
      >
        {searching ? (
          <span className="material-symbols-outlined text-brand-light-100 animate-spin">
            progress_activity
          </span>
        ) : (
          <span className="material-symbols-outlined text-brand-light-100">
            {isSearchBarOpen ? "close" : "search"}
          </span>
        )}
      </button>
    </div>
  );
};

export default Search;
