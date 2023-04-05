import { Player } from "@lottiefiles/react-lottie-player";
import QuoteSlider from "./QuoteSlider";
import "assets/scss/signin.scss";
import { FC } from "react";
const LeftContainer: FC = () => {
  return (
    <div className="h-screen bg-customGreen-200 container-left relative">
      <div className="circle1 "></div>
      <div className="circle2 "></div>
      <div className="w-full h-full pt-8 flex flex-col justify-around">
        <div className="w-26 h-26 mx-auto px-4">
          <Player
            src="https://assets4.lottiefiles.com/packages/lf20_ugr97rcl.json"
            background="transparent"
            speed={1}
            loop
            autoplay
          ></Player>
        </div>
        <div className="pt-4">
          <QuoteSlider />
        </div>
        <div className="py-4 justify-between justify-self-end">
          <h5 className="text-center text-white font-bold">
            Contact :{" "}
            <span className="font-normal underline pl-3">
              hello@crossval.com
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default LeftContainer;
