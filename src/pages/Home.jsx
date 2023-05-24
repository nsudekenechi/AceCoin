/* eslint-disable react/no-unknown-property */
import { BsCreditCardFill, BsPencilFill } from "react-icons/bs";
import { VscVerifiedFilled } from "react-icons/vsc";
import { TimeBox } from "../components/timeBox";
import { AtmLogo } from "../components/AtmLogo";
import { InputDesc } from "../components/InputDesc";
export const Home = () => {
  return (
    <div className="p-20 grid grid-cols-3">
      {/* Left Panel */}
      <section className="col-span-2 flex flex-col gap-y-6">
        <nav>
          <ul className="flex justify-between items-center">
            <li>
              <a href="" className="flex items-center gap-x-5">
                <div className="relative shadow-weird shadow-blue-600/50 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <BsCreditCardFill className="rotate-[-20deg] " />
                </div>
                <span className="text-xl">
                  <b>AceCoin</b>Pay
                </span>
              </a>
            </li>

            <ul className="flex gap-x-1 items-center">
              <TimeBox num={0} />
              <TimeBox num={0} />
              <span>:</span>
              <TimeBox num={0} />
              <TimeBox num={0} />
            </ul>
          </ul>
        </nav>

        <div className="flex flex-col md:flex-row justify-between">
          <InputDesc
            title={"Card Number"}
            desc={"Enter 16-digit number on the card"}
          />
          <div className="flex items-center gap-x-3 text-blue-500 cursor-pointer">
            <BsPencilFill />
            <span>Edit</span>
          </div>
        </div>

        <div className="border p-5 rounded-md flex justify-between items-center">
          <div className="flex items-center gap-x-5">
            <div className="w-[30px]">
              <AtmLogo size={20} />
            </div>
            <input
              type="text"
              className="outline-none w-[50px] placeholder:text-black/40"
              placeholder="2412"
              maxLength={4}
            />
            <div className="h-0.5 w-1 bg-black/60"></div>
            <input
              type="text"
              className="outline-none w-[50px] placeholder:text-black/40"
              placeholder="7512"
              maxLength={4}
            />
            <div className="h-0.5 w-1 bg-black/60"></div>
            <input
              type="text"
              className="outline-none w-[50px] placeholder:text-black/40"
              placeholder="3412"
              maxLength={4}
            />
            <div className="h-0.5 w-1 bg-black/60"></div>
            <input
              type="text"
              className="outline-none w-[50px] placeholder:text-black/40"
              placeholder="3456"
              maxLength={4}
            />
          </div>
          <div className="">
            <VscVerifiedFilled size={25} className="text-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <InputDesc
              title={"CVV Number"}
              desc={"Enter 3 or 4 digit Number On Card"}
            />
          </div>
          <div className="col-span-1">
            <div className="border h-[100%]"></div>
          </div>
        </div>
      </section>

      {/* RIght Panel */}
      <section className=""></section>
    </div>
  );
};
