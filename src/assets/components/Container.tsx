import { useContext, useEffect, useState } from "react";

import { SearchContext } from "../../Context";
import Card, { CardProps } from "./reusable/Card";

export default function Container() {
  const { search } = useContext(SearchContext) || {
    search: "",
    setSearch: () => {},
  };
  const [projectsData, setProjectData] = useState<CardProps[]>([]);

  useEffect(() => {
    async function fetchDataFromServer() {
      try {
        const response = await fetch(
          `http://localhost:3000/api?query=${search}`
        );
        const data = await response.json();
        setProjectData(data.results || data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchDataFromServer();
  }, [search]);
  return (
    <>
      <div className="m-10 text-6xl capitalize">
        {search ? search : "Freepic"}
      </div>

      {projectsData.length == 0 ? (
        <div className="w-full flex text-red-400 h-40 items-center justify-center text-6xl font-semibold">
          {"There is no '" + search + "' found"}
        </div>
      ) : (
        <div className="columns-1  sm:columns-1 md:columns-3 gap-4 space-y-4 p-4">
          {projectsData &&
            projectsData.map((i, index) => {
              return (
                <Card
                  key={index}
                  id={i.id}
                  alt_description={i.alt_description}
                  urls={i.urls}
                  user={i.user}
                />
              );
            })}
        </div>
      )}
    </>
  );
}
