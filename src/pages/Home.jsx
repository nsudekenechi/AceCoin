/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { BsCreditCardFill, BsPencilFill, BsWifi } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io";
import { TbReceipt } from "react-icons/tb";
import { AtmLogo } from "../components/AtmLogo";
import { InputDesc } from "../components/InputDesc";
import { Input } from "../components/Input";
import { CardNumber } from "../components/CardNumber";
import { useEffect, useState } from "react";
import { TimeBox } from "../components/TimeBox";
export const Home = () => {
  let date = new Date();
  //Adding 0 to digits < 9 ==> 09,Converting time to an array, to loop tru the array and output it as elements
  const zeroTime = (time) => {
    let newTime = time < 10 ? `0${time}` : time;
    return newTime.toString().split("");
  };
  const element = (time) =>
    time.map((item, index) => <TimeBox num={item} key={index} />);

  const [time, setTime] = useState({
    hour: zeroTime(
      date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
    ),
    minute: zeroTime(date.getMinutes()),
  });

  useEffect(() => {
    let timer = setInterval(() => {
      date = new Date();
      setTime({
        hour: zeroTime(
          date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
        ),
        minute: zeroTime(date.getMinutes()),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className=" lg:h-screen  gap-y-20  md:gap-y-0 px-5 md:px-5  lg:px-20 py-10 grid grid-cols-1 md:grid-cols-3  ">
      {/* Left Panel */}
      <section className="col-span-1  md:col-span-2   flex flex-col gap-y-10 md:gap-y-7  px-0 md:px-6 lg:px-20">
        <nav>
          <ul className="flex gap-x-10 justify-between items-center">
            <li>
              <a href="" className="flex items-center gap-x-2 md:gap-x-5">
                <div className="relative shadow-weird shadow-blue-600/50  w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <BsCreditCardFill className="rotate-[-20deg] text-sm" />
                </div>
                <span className="text-lg md:text-xl">
                  <b>AceCoin</b>Pay
                </span>
              </a>
            </li>

            <ul className="flex gap-x-1 items-center">
              {element(time.hour)}
              <span>:</span>
              {element(time.minute)}
            </ul>
          </ul>
        </nav>
        <form action="" className="flex flex-col gap-y-7 ">
          <div className="flex  justify-between">
            <InputDesc
              title={"Card Number"}
              desc={"Enter 16-digit number on the card"}
            />
            <div className="flex items-center gap-x-3 text-blue-500 cursor-pointer">
              <BsPencilFill />
              <span>Edit</span>
            </div>
          </div>
          {/* Card  Number */}
          <CardNumber />
          {/* CVV */}
          <div className="grid  grid-cols-1 gap-y-5 lg:grid-cols-2">
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
          {/* Expiry  Date */}
          <div className="grid   grid-cols-1 gap-y-5 lg:grid-cols-2">
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
          {/* Password */}
          <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2">
            <div className="col-span-1">
              <InputDesc
                title={"Password"}
                desc={"Enter Your  Dynamic Password"}
              />
            </div>
            <div className="col-span-1">
              <Input length={10} placeholder={"Password"} type={"password"} />
            </div>
          </div>
          {/* Button */}
          <button
            className="bg-[#025EFE] py-3  shadow-lg md:py-5  mt-5 lg:mt-10 text-xl text-white rounded-full relative"
            id="btn"
          >
            Pay Now
          </button>
        </form>
      </section>

      {/* Right Panel */}
      <section className="flex flex-col px-2  md:px-0 lg:px-10 col-span-1 ">
        <div className="flex flex-col items-center   gap-y-[50px] ">
          <div className="py-3 rounded-md px-10 bg-[#025EFE]"></div>
          <div className="bg-[#E8ECEF]/40 relative h-[100%] w-[100%] rounded-xl flex flex-col  gap-y-5 lg:px-10 md:px-7 px-5  pb-5">
            {/* ATM Card*/}
            <div className=" relative  md:backdrop-blur-sm bg-white/10   rounded-3xl shadow-lg  md:-top-[14%]  -top-[13%] backdrop-blur-lg  px-5  md:px-4 lg:px-6 py-5 flex flex-col gap-y-10">
              <div className="flex justify-between items-center ">
                <img src="./Images/1.png" alt="" className="w-10 h-8  " />
                <BsWifi size={20} />
              </div>

              <div className="flex flex-col gap-y-5 text-[#1F2953]">
                <div className="flex flex-col gap-y-2 ">
                  <h1 className="">Jonathan Micheal</h1>
                  <div className="grid grid-cols-3 items-center font-bold">
                    <input
                      type="password"
                      value={"12345"}
                      className="col-span-1 bg-transparent outline-none"
                      disabled
                    />
                    <h1 className="col-span-2">2356</h1>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-bold">09/22</span>
                  <div className="flex flex-col  items-center gap-y-1">
                    <AtmLogo size={30} left={10} />
                    <p className="text-[9px] capitalize    text-black font-bold">
                      mastercard
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Receipt Details */}
            <div className="grid grid-cols-2   text-sm items-center mb-5">
              <div className="col-span-1 text-black/40 flex flex-col gap-y-3">
                <h1>Company</h1>
                <h1>Order Number</h1>
                <h1>Product</h1>
                <h1>VAT(20%)</h1>
              </div>
              <div className="col-span-1 flex gap-y-3 flex-col items-end  text-[#1F2953] font-bold">
                <div className="flex items-center gap-x-2">
                  <span className=" bg-[#1F2953] rounded-full  flex items-center justify-center text-white p-1">
                    <IoLogoApple size={10} />
                  </span>
                  <h1>Apple</h1>
                </div>
                <h1>234567</h1>
                <h1>MacBook Air</h1>
                <h1>$100.00</h1>
              </div>
            </div>
            <div className="relative  w-[100%]  left-0  flex items-center">
              <div className="w-5 h-5 bg-white rounded-full absolute -left-[20%] "></div>
              <div className="h-1  w-[100%] border-t border-dashed"></div>
              <div className="w-5 h-5 bg-white rounded-full absolute -right-[20%]"></div>
            </div>

            <div className="flex justify-between items-center text-[#1F2953]">
              <div>
                <p className="text-sm capitalize font-extralight">
                  You have to pay
                </p>
                <div>
                  <b className="text-3xl">
                    599<span className="text-sm">.99</span>
                  </b>
                  <span className="text-sm inline-block ml-2">USD</span>
                </div>
              </div>
              <TbReceipt size={25} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
