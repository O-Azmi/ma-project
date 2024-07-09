
export default function Card({ src, alt, name, job, description }) {
  return (
    <div className="flex flex-col  text-black">
      <div className=" flex flex-col items-center pt-[4em] justify-center">
        <img
          className="rounded-[50%] box-border w-[240px] mb-4 h-[240px] "
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
