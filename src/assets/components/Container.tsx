import { useContext, useEffect, useState } from "react";

import { SearchContext } from "../../Context";
import Card from "./reusable/Card";

const map = new Array(100).fill(null);

export default function Container() {
  const { search } = useContext(SearchContext) || {
    search: "",
    setSearch: () => {},
  };
  const [projectsData, setProjectData] = useState([]);

  useEffect(() => {
    async function fetchDataFromServer() {
      try {
        const response = await fetch("http://localhost:3000/api");
        const data = await response.json();
        setProjectData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchDataFromServer();
  }, []);
  return (
    <div className="columns-2 sm:columns-1 md:columns-4 gap-4 space-y-4 p-4">
      <div className="w-96 h-96 bg-red-600 text-7xl">{search}</div>
      {projectsData &&
        projectsData.map((i, index) => {
          return (
            <>
              <Card>{i}</Card>
              <p>{index}</p>
            </>
          );
        })}
      <div className="w-96 h-96 bg-red-600"></div>
    </div>
  );
}
