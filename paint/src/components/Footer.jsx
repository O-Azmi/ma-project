import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="h-[67vh] p-4 short:h-[80vh] vshort:h-[95vh]">
      <div className="mb-4">
        <div className="flex items-center mb-2 text-[#1c5a87]">
        <FaPaintbrush className="mr-2" size={20} />
        <p className="text-2xl font-bold">Mariz Art</p>{" "}
        </div>
        <p className="">
          Stay up to date on the latest features and releases by joining our
          newsletter.
        </p>
      </div>
      <form action="submit" className="flex flex-col mb-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          className="p-3 mb-4 border border-black border-solid placeholder:text-gray-400"
        />
        <button className="p-3 border bg-[#1c5a87] text-white border-solid border-black">
          Subscribe
        </button>
      </form>
      <div className=" mb-8">
        <p>
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates from our company.
        </p>
      </div>
      <h2 className="font-bold text-[#1c5a87] text-[1.2rem] mb-5">Follow Us</h2>
      <ul className="flex flex-col">
        <ul className="flex ">
          <li className="pb-3 pr-3">
            <FaFacebook size={20} />
          </li>
          <p className="pt-[3px] text-[0.9em]">Facebook</p>
        </ul>
        <ul className="flex ">
          <li className="pb-3 pr-3">
            <FaInstagram size={20} />
          </li>
          <p className="pt-[3px] text-[0.9em]">Instagram</p>
        </ul>
        <ul className="flex ">
          <li className="pb-3 pr-3">
            <FaXTwitter size={20} />
          </li>
          <p className="pt-[3px] text-[0.9em]">Twitter</p>
        </ul>
        <ul className="flex border-b-2 border-black border-solid ">
          <li className="pb-3 pr-3">
            <FaLinkedin size={20} />
          </li>
          <p className="pt-[3px] text-[0.9em]">Linkedin</p>
        </ul>
      </ul>
      <div className="flex justify-between pt-4">
        <a className="text-[.9em] text-gray-600" href="#">
          Privacy Policy
        </a>
        <a className="text-[.9em] text-gray-600" href="#">
          Terms of Service
        </a>
        <a className="text-[.9em] text-gray-600" href="#">
          Cookies Settings
        </a>
      </div>
      <div className="flex pt-8">
        <FaRegCopyright className="mr-2" />
        <p className="text-[.9em] text-gray-600">
          2024 Mariz Art. All rights reserved.
        </p>
      </div>
    </div>
  );
}
