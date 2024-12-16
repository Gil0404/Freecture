import React from "react";
import Card from "./reusable/Card";

const map = new Array(100).fill(null);
export default function Container() {
  return (
    <div className="columns-2 sm:columns-1 md:columns-4 gap-4 space-y-4 p-4">
      <div className="w-96 h-96 bg-red-600"></div>
      {map.map((i, index) => {
        return <Card></Card>;
      })}
      <div className="w-96 h-96 bg-red-600"></div>
    </div>
  );
}
