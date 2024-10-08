import Card from "./Card";
import Abstract from "/Abstract.jpg";
import Oil from "/Waves.jpg";
import SVG from "/2-Section.svg";

export default function Section() {
  return (
    <section
      className="flex flex-col short:h-[120vh] vshort:h-[140vh] h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${SVG})`,
      }}
    >
      <div className="flex flex-col flex-grow">
        <div>
          <p className="text-white text-center text-3xl font-semibold pb-8 pt-10">
            Explore Our Wide Range Of Paintings.
          </p>
        </div>
        <div>
          <p className="text-white text-center tracking-wide text-2l pt-2 pb-[6em] px-12">
            At our company, we offer a diverse selection of painting
            categories to suit every taste and style.
          </p>
        </div>
        <div className="flex justify-center mb-6">
          <Card label={"Abstract Paintings"} src={Abstract} />
        </div>
        <div className="flex justify-center mb-4">
          <Card label={"Oil Paintings"} src={Oil} />
        </div>
        <div className="flex justify-center pb-4">
          <button className="cursor-pointer p-4 border border-black rounded-md bg-[#1c5a87] text-white font-semibold">
            Explore Our Collection
          </button>
        </div>
      </div>
    </section>
  );
}
