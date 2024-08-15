import { Link } from "react-router-dom";

// This is a card component for paintings.
export default function Card({ src, alt, label }) {
  return (
    <div className="flex flex-col">
      <div className=" p-4 rounded bg-[#ffffff] shadow-sm shadow-[#c1c1c1]">
        <img
          className="rounded box-border w-[300px] h-[200px] hover:scale-100 ease-in-out mb-4"
          src={src}
          alt={alt}
        />
        <div className="flex justify-between ">
          <p className="">{label}</p>
          <Link>
            <button className="font-semibold text-[#1c5a87]">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
