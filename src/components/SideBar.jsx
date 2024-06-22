import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const SideBar = () => {
  return (
    <>
      <div className="my-14 h-screen w-52 bg-indigo-400">
        <ul className="flex flex-col gap-6 text-white font-sans font-10 font-semibold fixed px-5">
          <li className="hover:cursor-pointer text-lg font-medium font-serif">
            <Link className="flex mt-10 align-baseline gap-1" to="/">
              <AiFillHome className="hover:cursor-pointer" />
              Home
            </Link>
          </li>
          <li className="hover:cursor-pointer hover:underline text-lg font-medium font-serif">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:cursor-pointer hover:underline text-lg font-medium font-serif">
            <Link
              to="/notifications"
              className="flex flex-wrap items-center justify-center gap-2 "
            >
              <IoNotifications className="hover:cursor-pointer" />
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
