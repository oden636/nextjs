import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Want to reach us?</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Contact us on any of the links below.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <a
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  href="https://www.facebook.com/jakeshawclimbingtrust"
                >
                  <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
                </a>
                <a
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  href="tel:07772468836"
                >
                  <FontAwesomeIcon icon={['fas', 'phone']} size="lg" />
                </a>
                <a
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  href="mailto:stevehall129@gmail.com"
                >
                  <FontAwesomeIcon icon={['fas', 'envelope']} size="lg" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  {/* <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=nnjs-footer"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=nnjs-footer"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=nnjs-footer"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nnjs-footer"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          {/* <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Notus NextJS by{" "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div> */}
        </div>
      </footer>
    </>
  );
}
