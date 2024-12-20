import React from "react";

interface CardProps {}

export default function Card(props: CardProps) {
  return (
    <div className="relative group cursor-pointer overflow-hidden duration-500 bg-zinc-800 text-gray-50">
      <div className="">
        <div className="group-hover:scale-110 w-full h-96 bg-blue-400 duration-500">
          {props}
        </div>
        <div className="absolute w-full left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
          <div className="absolute -z-10 left-0 w-full h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-red-900"></div>
          <span className="text-xl font-bold">{props}</span>
          <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
            {props}
          </p>
        </div>
      </div>
    </div>
  );
}
