import { useState } from "react";
import { SearchContext } from "../../Context";
import Container from "./Container";
import Hero from "./Hero";

import Nav from "./reusable/Nav";

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Nav />
      <Hero />{" "}
      <div className="mx-auto w-screen max-w-max h-fit min-h-screen bg-yellow-300 overflow-hidden ">
        <Container />
      </div>
    </SearchContext.Provider>
  );
}
