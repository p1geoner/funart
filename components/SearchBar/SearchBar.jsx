import React, { useEffect, useRef, useState } from "react";
import classes from "./SearchBar.module.css";
import { useRouter } from "next/router";
const SearchBar = () => {
  const inputRef = useRef();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {}, [search]);

  const handleClick = () => {
    inputRef.current.focus();
    setIsFocus(true);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSearch = () => {
    if (search !== "") {
      const searchQuery = encodeURIComponent(search);
      router.push(`/search/${searchQuery}`);
    }
  };

  const handleBlur = () => {
    setIsFocus(false);
  };
  return (
    <div
      className={isFocus ? classes.focusWrapper : classes.wrapper}
      onClick={handleClick}>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.6 18.5L10.3 12.2C9.8 12.6 9.225 12.9167 8.575 13.15C7.925 13.3833 7.23333 13.5 6.5 13.5C4.68333 13.5 3.146 12.8707 1.888 11.612C0.63 10.3533 0.000666667 8.816 0 7C0 5.18333 0.629333 3.646 1.888 2.388C3.14667 1.13 4.684 0.500667 6.5 0.5C8.31667 0.5 9.854 1.12933 11.112 2.388C12.37 3.64667 12.9993 5.184 13 7C13 7.73333 12.8833 8.425 12.65 9.075C12.4167 9.725 12.1 10.3 11.7 10.8L18 17.1L16.6 18.5ZM6.5 11.5C7.75 11.5 8.81267 11.0623 9.688 10.187C10.5633 9.31167 11.0007 8.24933 11 7C11 5.75 10.5623 4.68733 9.687 3.812C8.81167 2.93667 7.74933 2.49933 6.5 2.5C5.25 2.5 4.18733 2.93767 3.312 3.813C2.43667 4.68833 1.99933 5.75067 2 7C2 8.25 2.43767 9.31267 3.313 10.188C4.18833 11.0633 5.25067 11.5007 6.5 11.5Z"
          fill="#4A4A4A"
        />
      </svg>
      <input
        ref={inputRef}
        value={search}
        onBlur={handleBlur}
        type="text"
        className={classes.input}
        placeholder="Поиск"
        onChange={(e) => handleInputChange(e)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
