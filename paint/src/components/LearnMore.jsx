import BackSvg from "../../Images/third.svg";
import ArtistCard from './ArtistCard'
import Artist1 from '../../Images/artist1.jpg'

export default function Learn() {
  return (
    <section
      className="flex flex-col h-screen bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url(${BackSvg})`,
      }}
    >
         <>
        <div className="flex flex-col">
          <div>
            <p className=" text-white text-center text-4xl font-semibold pb-8 pt-10">
              Meet Our Team
            </p>
          </div>
          <div>
            <div>
              <p className="text-white text-center tracking-wide text-2l pt-2 pb-[3em] px-12">
                Learn more about the talented people behind our artwork
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
            <ArtistCard src={Artist1} alt={"Jane Smith smiling"} name={"Jane Smith"} job={"Portrait Artist"} description={"Jane is a talented painter know for her stunning portrait artwork"} />
        </div>
        {/* <div className="flex justify-center pb-4">
          <button className="cursor-pointer p-4 border border-black rounded-md bg-[#2d2d2d] text-white font-semibold">
            Explore Our Collection
          </button>
        </div> */}
      </>
    </section>
  );
}
