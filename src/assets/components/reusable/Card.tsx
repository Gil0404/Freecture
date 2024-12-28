export interface CardProps {
  id: string;
  alt_description: string;
  urls: { raw: string; thumb: string };
  user: {
    name: string;
    profile_image: {
      small: string;
    };
  };
}

export default function Card({ id, alt_description, urls, user }: CardProps) {
  return (
    <div className="relative group cursor-pointer overflow-hidden duration-500 bg-zinc-800 text-gray-50 rounded-lg">
      <div className="">
        <div className="group-hover:scale-110 w-full  bg-blue-400 duration-500">
          <div className="absolute w-full h-full bg-black group-hover:opacity-30 opacity-0"></div>
          <img className="w-full h-full" src={urls.thumb}></img>
        </div>
        <div className="absolute w-full left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
          <div className="absolute -z-10 left-0 w-full h-full opacity-100 duration-500 group-hover:opacity-50 group-hover:bg-slate-900"></div>
          <span className="text-lg font-bold">{alt_description}</span>
          <div className="group-hover:opacity-100  duration-500 opacity-0  flex flex-row items-center w-full pb-3 pt-1">
            <img
              src={user.profile_image.small}
              className="rounded-full w-10 aspect-square"
              alt={id}
            />
            <p className="ml-3">{user.name}</p>
            <a
              href={urls.raw}
              className="h-10 rounded-md bg-green-900 flex items-center p-2 justify-center ml-10"
              download
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
