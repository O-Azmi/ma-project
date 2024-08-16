import { Link } from "react-router-dom";

export default function EditProfile() {
  const StoredfullName = localStorage.getItem("full_name");
  const StoredEmail = localStorage.getItem("email_address");
  const StoredMobile = localStorage.getItem("phone_number");
  const PassLength = localStorage.getItem("Plength");
  let passPrint = "";
  const passLengthInStars = (passLength) => {
    let i = 0;
    while (i < passLength) {
      passPrint += "*";
      i++;
    }
    return passPrint;
  };

  return (
    <section >
      <div className=" flex flex-col pl-4 mt-8 mb-4 w-[50wh]">
        <div className="flex">
          <Link to="/Profile">
            <p className="text-[.8em] mr-2 mb-5 text-[#1b5a87] border-b hover:border-[#b8876c] hover:text-[#b8876c]">
              Your account {">"}
            </p>
          </Link>
          <p className="text-[.8em] text-[#b8876c]">Login and Security</p>
        </div>
        <h1 className="font-bold text-2xl text-[#1b5a87]">
          Login and Security
        </h1>
      </div>
      <div className="flex border m-4 rounded border-gray-300">
        <ul className="w-full">
          <li className="flex justify-between w-[100%] py-6 px-4 border-b border-gray-300 hover:bg-gray-200 transition-colors duration-300">
            <div className=" flex-col">
              <p className=" mb-3 font-bold">Name</p>
              <p className="text-gray-700 mb-2">{StoredfullName}</p>
            </div>
            <button className="h-10 px-10 hover:bg-[#1b5a87] hover:text-white text-[#1b5a87] border  border-[#1b5a87] rounded-[20px]">
              Edit
            </button>
          </li>

          <li className="flex justify-between w-[100%] py-6 px-4 border-b border-gray-300 hover:bg-gray-200 transition-colors duration-300">
            <div className=" flex-col">
              <p className=" mb-3 font-bold">Email</p>
              <p className="text-gray-700 mb-2">{StoredEmail}</p>
            </div>
            <button className="h-10 px-10 hover:bg-[#1b5a87] hover:text-white text-[#1b5a87] border  border-[#1b5a87] rounded-[20px]">
              Edit
            </button>
          </li>

          <li className="flex justify-between w-[100%] py-6 px-4 border-b border-gray-300 hover:bg-gray-200 transition-colors duration-300">
            <div className=" flex-col">
              <p className=" mb-3 font-bold">Phone number</p>
              <p className="text-gray-700 mb-2">+{StoredMobile}</p>
            </div>
            <button className="h-10 px-10 hover:bg-[#1b5a87] hover:text-white text-[#1b5a87] border  border-[#1b5a87] rounded-[20px]">
              Edit
            </button>
          </li>
          <li className="flex justify-between w-[100%] py-6 px-4  hover:bg-gray-200 transition-colors duration-300">
            <div className=" flex-col">
              <p className=" mb-3 font-bold">Password</p>
              <p className="text-gray-700 mb-2">{passLengthInStars(PassLength)}</p>
            </div>
            <button className="h-10 px-10 hover:bg-[#1b5a87] hover:text-white text-[#1b5a87] border  border-[#1b5a87] rounded-[20px]">
              Edit
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
