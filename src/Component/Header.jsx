import React from "react";
import { Link } from "react-router-dom";
import AvatarImage from "../Assets/Avatar.jpg";

const Header = () => {
  return (
    <aside className="lg:w-24 md:w-24 border border-black min-h-screen h-screen text-white fixed sm:w-full lsm:w-full lsm:min-h-10 xs:w-full">
      <header>
        <div className="bg-white shadow">
          <div className="py-5 lsm:py-2 px-2 flex flex-col lsm:flex-row xs:flex-row">
            <div className="flex justify-end">
              <img src={AvatarImage} className="rounded-full w-full lsm:w-16 xs:w-16" alt="" />
            </div>
            <div className="flex items-center justify-end w-[50%]">
              <div>
                <Link
                  to="/"
                  className="text-gray-700 font-bold text-md hover:text-blue-500"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </aside>
  );
};

export default Header;
