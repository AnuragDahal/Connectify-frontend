import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";

const SideBar = () => {
  return (
    <>
      <div className="h-screen w-fit px-4 py-4 pt-2 bg-indigo-400 fixed">
        <ul className="flex flex-col gap-6 text-white font-sans font-10 font-semibold px-5 pt-14 ">
          <li className="hover:cursor-pointer text-lg font-medium font-serif">
            <Link to="/" className="flex mt-10 align-baseline gap-1">
              <AiFillHome className="hover:cursor-pointer mt-1" />
              Home
            </Link>
          </li>
          <li className="hover:cursor-pointer hover:underline text-lg font-medium font-serif">
            <Link to="/about" className="flex flex-row gap-1">
              <FaPeopleGroup className="hover:cursor-pointer mt-1" />
              About
            </Link>
          </li>
          <li className="hover:cursor-pointer hover:underline text-lg font-medium font-serif">
            <Link to="/notifications" className="flex flex-row gap-1">
              <IoNotifications className="hover:cursor-pointer mt-1" />
              Notifications
            </Link>
          </li>
          <li>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <IoSettingsSharp />
                  Settings
                </AccordionTrigger>
                <AccordionContent>Change password</AccordionContent>
                <AccordionContent>Verify Email</AccordionContent>
                <AccordionContent>Logout</AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SideBar;
