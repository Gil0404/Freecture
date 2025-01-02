import { useContext, useState } from "react";
import { SearchContext } from "../../Context";

export default function Hero() {
  const { search, setSearch } = useContext(SearchContext) || {
    search: "",
    setSearch: () => {},
  };
  const [statesearch, setStateSearch] = useState<string>(search);
  const searchs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateSearch(e.target.value);
  };
  const SValue = () => {
    setSearch(statesearch);
    console.log(search);
  };
  return (
    <div className="w-screen  h-[550px] bg-[url('/wallpaper.jpg')] bg-fixed bg-cover -z-0  bg-slate-950 flex flex-col justify-center items-center">
      <div className="flex flex-row  w-full items-center justify-center gap-1">
        <input
          type="text"
          className="w-1/3 h-10 px-4 justify-center flex border-0 outline-none font-light rounded-md bg-gray-300 focus:bg-white duration-200 placeholder:text-black font-Lexend text-xl"
          placeholder="Search"
          onChange={searchs}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              SValue();
            }
          }}
        ></input>
        <button
          type="button"
          className="h-10 w-10 bg-red-400 rounded-md"
          onClick={SValue}
        >
          🔍
        </button>
      </div>
    </div>
  );
}
