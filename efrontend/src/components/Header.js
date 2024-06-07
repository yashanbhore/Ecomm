import React from "react";
import { GrSearch } from "react-icons/gr";
import Logo from "./Logo";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white  w-full z-40">
      <div className=" h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          {/* <Link to={"/"}>
          </Link> */}
          <Link to={"/"}>
            <Logo w={90} h={50} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
            // onChange={handleSearch}
            // value={search}
          />

          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div
            className="text-3xl cursor-pointer relative flex justify-center"
            // onClick={() => setMenuDisplay((preve) => !preve)}
          >
            {/* {user?.profilePic ? ( */}
            <img
              // src={user?.profilePic}
              className="w-10 h-10 rounded-full"
              // alt={user?.name}
            />
            {/* ) : ( */}
            <FaRegCircleUser />
            {/* )} */}
          </div>

          <div className="text-2xl relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm">69{/* {context?.cartProductCount} */}</p>
            </div>
          </div>

          <div>
            <Link to={"login"}>
              <button className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
