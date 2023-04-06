import { FC } from "react";
import Typewriter from "typewriter-effect";
import SendSVG from "assets/images/send/send.svg";
const CrossvalAi: FC = () => {
  return (
    <>
      <div className="bg-gray-100 p-4 text-md rounded-lg">
        <div className="bg-white py-6 px-4 mt-2 rounded-lg">
          <p>Choose an option for CrossVal AI report </p>
          <div className="flex mt-4">
            <button
              style={{
                backgroundImage:
                  "linear-gradient(89.09deg, #0E7469 3.31%, #2BAE95 95.19%)",
              }}
              className="py-3 w-full mr-12 rounded-lg  text-white"
            >
              Simpler & Shorter
            </button>

            <button
              style={{
                backgroundImage:
                  "linear-gradient(89.09deg, #0E7469 3.31%, #2BAE95 95.19%)",
              }}
              className="py-3 w-full mr-12 rounded-lg text-white"
            >
              Technical & Longer
            </button>

            <button
              style={{
                backgroundImage:
                  "linear-gradient(89.09deg, #0E7469 3.31%, #2BAE95 95.19%)",
              }}
              className="py-3 w-full  mr-12 rounded-lg  text-white"
            >
              Structure it as an Email
            </button>
          </div>
          <div
            className="flex mt-3"
            style={{
              height: "300px",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <p className="text-emerald-600 text-lg font-bold mt-2">CrossVal.</p>

            <div className="typewriter mx-4 w-full text-gray-500 text-lg mt-2 leading-10">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
                    )
                    .pauseFor(100)
                    .start();
                }}
                options={{
                  delay: 60,
                }}
              />

              <div className=" my-10">
                <span> Try asking me about</span>
                <div className="flex justify-center">
                  <div className=" cursor-pointer ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-hard-drive mr-2"
                    >
                      <line x1="22" y1="12" x2="2" y2="12"></line>
                      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                      <line x1="6" y1="16" x2="6.01" y2="16"></line>
                      <line x1="10" y1="16" x2="10.01" y2="16"></line>
                    </svg> */}
                    Finace
                  </div>
                  <div className=" cursor-pointer ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
                    Finace
                  </div>
                  <div className=" cursor-pointer ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
                    Finace
                  </div>
                  <div className=" cursor-pointer ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
                    Finace
                  </div>
                  <div className=" cursor-pointer ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
                    Finace
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Ask me anything"
              className="
            form-control h-11
            block
            w-full
            px-3
            py-1.5
            text-sm
            font-medium
            text-gray-700
            bg-white bg-clip-padding
            border  border-neutral
            rounded-lg
            transition
            ease-in-out
            my-5"
            />
            <span className="flex justify-center items-center -m-12">
              <img src={SendSVG} alt="send-query" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrossvalAi;
