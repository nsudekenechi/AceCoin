/* eslint-disable react/no-unknown-property */
import { BsCreditCardFill, BsPencilFill } from "react-icons/bs";
import { VscVerifiedFilled } from "react-icons/vsc";
import { TimeBox } from "../components/timeBox";
import { AtmLogo } from "../components/AtmLogo";
import { InputDesc } from "../components/InputDesc";
import { CardInput } from "../components/CardInput";
import { Input } from "../components/Input";
export const Home = () => {
  return (
    <div className="px-20 py-10 grid grid-cols-3  gap-x-20">
      {/* Left Panel */}
      <section className="col-span-2 flex flex-col gap-y-7">
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
            <CardInput placeholder={"2365"} />
            <CardInput placeholder={"7512"} />
            <CardInput placeholder={"3412"} />
            <CardInput placeholder={"3456"} last={true} />
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
            <Input length={4} placeholder={"CVV"} />
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <InputDesc
              title={"Expiry Date"}
              desc={"Enter the expiration date of the card"}
            />
          </div>
          <div className="col-span-1 grid grid-cols-5 ">
            <div className="col-span-2">
              <Input icon="false" placeholder={"MM"} length={2} />
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <h1 className="text-2xl">/</h1>
            </div>
            <div className="col-span-2">
              <Input icon="false" placeholder={"YY"} length={2} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <InputDesc
              title={"Password"}
              desc={"Enter Your  Dynamic Password"}
            />
          </div>
          <div className="col-span-1">
            <Input length={4} placeholder={"Password"} />
          </div>
        </div>

        <button className="bg-[#025EFE] py-5 text-xl text-white rounded-xl">
          Pay Now
        </button>
      </section>

      {/* RIght Panel */}
      <section className=""></section>
    </div>
  );
};
