import { Link } from "react-router-dom";

export default function Card({ src, alt, name, job, description }) {
  return (
    <div className="flex flex-col text-white">
      <div className=" flex flex-col items-center justify-center">
        <img
          className="rounded-[60%] box-border w-[300px] h-[300px] p-2 "
          src={src}
          alt={alt}
        />
        </div>
        <div className="flex text-center justify-between flex-col ">
          <p className="text-xl font-semibold mb-3">{name}</p>
          <p className="mb-6">{job}</p>
          <p className="px-14">{description}</p>
        </div>
      </div>
  );
}
