import BackSvg from "/meet-team.svg";
import ArtistCard from './ArtistCard'
import Artist1 from '/artist1.jpg'

export default function Learn() {
  return (
    <section
      className="flex flex-col short:h-[110vh] vshort:h-[120vh] h-screen bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url(${BackSvg})`,
      }}
    >
         <>
        <div className="flex flex-col ">
          <div>
            <p className=" text-white text-center text-[2.8rem] font-semibold pb-4 pt-10">
              Meet Our Team
            </p>
          </div>
          <div>
            <div>
              <p className="text-white text-center vshort:mb-[0em] short:mb-[3em] tracking-wide text-2l mb-[7em] pt-2 px-12">
                Learn more about the talented people behind our artwork
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-6">
            <ArtistCard src={Artist1} alt={"Jane Smith smiling"} name={"Jane Smith"} job={"Portrait Artist"} description={"Jane is a talented painter known for her stunning portrait artwork."} />
        </div>

        <div className="flex justify-center items-center h-dvh flex-col">
            <p className="text-black text-[1.3em] font-bold mb-4">We're hiring!</p>
            <p className="text-black  font-bold mb-4">Join our team of talented painters.</p>
          <button className="cursor-pointer h-[3em] w-[9em] p-4 border border-black rounded-md bg-[#1c5a87] text-white font-semibold">
            Apply Now
          </button>
        </div>
        <span className="border-b border-solid border black mx-9 mt-4 mb-10"></span>
      </>
    </section>
  );
}
