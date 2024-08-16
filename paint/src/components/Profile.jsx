import { Link } from "react-router-dom";
import { GiPaintBucket } from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import { FaRegAddressBook } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";

export default function Profile() {
  return (
    <section className="">
      <div className="pl-4 mt-8 mb-4 flex w-[50wh]">
        <h1 className="font-bold text-2xl text-[#1b5a87]">Your Account</h1>
      </div>
      <div className="flex">
        <ul className="p-4">
          <li className="flex mb-4 py-8 px-4 border-2 border-gray-300 rounded-lg hover:bg-gray-200 transition-colors duration-300">
            <GiPaintBucket size={50} color="#1b5a87" className="mr-2" />
            <div className="h-[5em-">
            <p className=" mb-3 text-[1.2em]">Your Orders</p>
            <p className="text-gray-700">View orders, order again, cancel an order or download invoice.</p>
            </div>
          </li>
          <Link to="/Edit-Profile">
          <li className="flex mb-4 py-8 px-4 border-2 border-gray-300 rounded-lg hover:bg-gray-200 transition-colors duration-300">
            <GrShieldSecurity size={40} color="#1b5a87" className="mr-2" />
            <div className="h-[5em-">
            <p className=" mb-3 text-[1.2em]">Login and Security</p>
            <p className="text-gray-700">Manage password, emails and phone numbers.</p>
            </div>
          </li>
          </Link>
          <li className="flex mb-4 py-8 px-4 border-2 border-gray-300 rounded-lg hover:bg-gray-200 transition-colors duration-300">
            <FaRegAddressBook size={34} color="#1b5a87" className="mr-2" />
            <div className="h-[5em-">
            <p className=" mb-3 text-[1.2em]">Your addresses</p>
            <p className="text-gray-700">Edit, remove or set default address.</p>
            </div>
          </li>
          <li className="flex mb-4 py-8 px-4 border-2 border-gray-300 rounded-lg hover:bg-gray-200 transition-colors duration-300">
            <BiMessageSquareDetail size={34} color="#1b5a87" className="mr-2" />
            <div className="h-[5em-">
            <p className=" mb-3 text-[1.2em]">Your Messages</p>
            <p className="text-gray-700">View or respond to messages from Mariz.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
