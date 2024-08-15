import Header from "./Header";
import { Link } from "react-router-dom";

export default function EditProfile() {
    const StoredfullName = localStorage.getItem("full_name");
    const StoredEmail = localStorage.getItem("email_address");
    const StoredMobile = localStorage.getItem("phone_number");
  return (
    <section className="">
      <Header />
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
      <div className="flex border-2  m-4 rounded border-gray-200">
        <ul className="w-full">
          <li className="flex justify-between w-[100%] mb-4 py-4 px-4 border-b-2 border-gray-300 hover:bg-gray-200 transition-colors duration-300">
            <div className=" flex-col">
              <p className=" mb-3 font-bold">Name</p>
              <p className="text-gray-700">
                {StoredfullName}
              </p>
            </div>
            <button className="py-2 px-8 text-[#1b5a87] border  border-[#1b5a87] rounded-[100px]">Edit</button>
          </li>
          
          <li className="flex justify-between w-[100%] mb-4 py-4 px-4 border-b-2 border-gray-300 hover:bg-gray-200 transition-colors duration-300">
            <div className=" flex-col">
              <p className=" mb-3 font-bold">Email</p>
              <p className="text-gray-700">
                {StoredEmail}
              </p>
            </div>
            <button className="py-2 px-8 text-[#1b5a87] border  border-[#1b5a87] rounded-[100px]">Edit</button>
          </li>
          
          <li className="flex justify-between w-[100%] mb-4 py-4 px-4 border-b-2 border-gray-300 hover:bg-gray-200 transition-colors duration-300">
            <div className=" flex-col">
              <p className=" mb-3 font-bold">Phone number</p>
              <p className="text-gray-700">
                +{StoredMobile}
              </p>
            </div>
            <button className="py-2 px-8 text-[#1b5a87] border  border-[#1b5a87] rounded-[100px]">Edit</button>
          </li>
          
        </ul>
      </div>
    </section>
  );
}
