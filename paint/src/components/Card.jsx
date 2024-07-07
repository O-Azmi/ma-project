import { Link } from "react-router-dom";

export default function Card({ src, alt, label }) {
  return (
    <div className="flex flex-col">
      <div className=" p-4 rounded bg-[#ffffff]">
        <img
          className="rounded box-border w-[300px] h-[200px] hover:scale-100 ease-in-out mb-4"
          src={src}
          alt={alt}
        />
        <div className="flex justify-between ">
          <p className="">{label}</p>
          <Link>
            <button className="font-semibold">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
