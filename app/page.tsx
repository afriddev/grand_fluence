"use client"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import Hamburger from "hamburger-react";

export default function Home() {
  return (
    <>
      <main className=" bg-black">
        <section>
          <div>
            {/* <div>
                        <MobileViewMenu />
                    </div> */}
            <div className="p-3 flex justify-between items-center">
              <div>
                <img src="mainLogo.png" className="bg-white rounded-xl" />
              </div>
              <div className="mr-1" >
                <a className="text-white ">
                  <Hamburger size={30} />
                </a>{" "}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function MobileViewMenu() {
  return (
    <>
      <div className=" fixed h-[100vh] w-[70vw] bg-blackShade text-white drop-shadow-2xl shadow-2xl  font-roboto">
        <div className="flex justify-between  pr-4 ">
          <div className=" p-3 ">
            <img
              src="mainLogo.png"
              className="bg-white rounded-xl h-fit w-fit"
            />
          </div>
          <div className="shadow-xl text-xl w-8 h-8 rounded-full whiteShadow bg-white flex items-center justify-center mt-4">
            <label className="text-black flex items-center text-center ">
              <IoMdClose />
            </label>
          </div>
        </div>

        <div className="flex flex-col justify-between h-[70vh]">
          <div className=" list-none mt-[6vh] flex flex-col items-center ">
            <ul className="flex flex-col justify-center items-center space-y-6 w-full">
              <li
                className=" text-xl rounded-lg w-[60vw] flex justify-between 
                            items-center ml-4 mr-4 bg-blackShade  py-2 pl-3 pr-3 topShadow
                            "
              >
                <a>Career</a>
                <span className="text-3xl">
                  <MdOutlineKeyboardArrowRight />
                </span>
              </li>
              <li
                className=" text-lg rounded-lg w-[60vw] flex justify-between 
                            items-center ml-4 mr-4 bg-blackShade  py-2 pl-3 pr-3 topShadow
                            "
              >
                <a>Event Calender</a>
                <span className="text-3xl">
                  <MdOutlineKeyboardArrowRight />
                </span>
              </li>
              <li
                className=" text-xl rounded-lg w-[60vw] flex justify-between 
                            items-center ml-4 mr-4 bg-blackShade  py-2 pl-3 pr-3 topShadow
                            "
              >
                <a>Brand Store</a>
                <span className="text-3xl">
                  <MdOutlineKeyboardArrowRight />
                </span>
              </li>
              <li
                className=" text-xl rounded-lg w-[60vw] flex justify-between 
                            items-center ml-4 mr-4 bg-blackShade  py-2 pl-3 pr-3 topShadow
                            "
              >
                <a>Promotion Plans</a>
                <span className="text-3xl">
                  <MdOutlineKeyboardArrowRight />
                </span>
              </li>
            </ul>
            <div
              className="w-[60vw] h-[1px] border-b border-white opacity-10 mt-6 text-center
                             flex items-center justify-center"
            ></div>
          </div>
          <div className="flex justify-center items-center">
            <div
              className=" bg-white h-fit w-[55vw] text-black px-6 py-1 rounded-lg text-center flex justify-between pl-4 pr-4 items-center 
                    font-bold topShadow "
            >
              <a className="text-xl ">Login</a>
              <label className=" text-2xl">
                <AiOutlineLogin />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
