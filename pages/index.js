import React from "react";
import Gallery from "react-photo-gallery"

// components

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Sponsor from "components/Sections/Sponsor";

export async function getStaticProps() {
  const res = await fetch('https://raw.githubusercontent.com/oden636/nextjs/master/public/static/sponsors.json')
  const sponsor = await res.json();

  const photos = [
    {
      src: '/img/a3-738x665.jpg',
      width: 4,
      height: 3
    },
    {
      src: "/img/a1-1-738x665.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/img/wall-20.jpg",
      width: 1,
      height: 1
    },
    {
      src: "/img/wall-21.jpg",
      width: 3,
      height: 4
    },
    {
      src: "/img/IMG_0069-002-770x665.jpg",
      width: 3,
      height: 4
    },
    {
      src: "/img/wall-12-e1505409770389.jpg",
      width: 3,
      height: 4
    },
    {
      src: "/img/wall-10-e1505409721214.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/img/2-770x586.jpg",
      width: 3,
      height: 2
    },
    {
      src: "/img/1-439x665.jpg",
      width: 3,
      height: 3
    },
    {
      src: "/img/0-439x665.jpg",
      width: 4,
      height: 3
    },
    {
      src: '/img/a2-738x665.jpg',
      width: 2,
      height: 1
    },
    {
      src: "/img/904784_10151622373007146_2011714067_o-770x665.jpg",
      width: 3,
      height: 2
    },
    {
      src: "/img/J2-770x665.jpg",
      width: 4,
      height: 3
    },
    {
      src: "/img/Jake-running-SNICE-770x665.jpg",
      width: 6,
      height: 4
    }
  ];

  return {
    props: {
      sponsor,
      photos
    },
  }
}

export default function Index({ sponsor, photos }) {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('/img/Jake2.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    The Jake Shaw climbing trust
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                  Life is not measured by the number of breaths we take, but by the moments that take our breath away
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
        </div>

        <section className="pb-20 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Our Goals
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                The Jake Shaw Climbing Trust is set up to support and encourage climbing and outdoor pursuits, 
                enabling others to enjoy the activity that was such an inspiration and passion for Jake. 
                Our first objective was to raise over £30,000 for the construction of a climbing wall at William Farr School, 
                Welton, Lincoln which we are proud to say is now up and running enabling the joy and inspiration 
                of climbing to be shared in safe conditions.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Jake’s wall is now a fine tribute to an exceptionally gifted and popular young man, who loved life and lived it to the full. 
                  It may also inspire others to enjoy climbing and the great outdoors as much as Jake did.
                </p>
                <h3 className="text-xl mb-2 font-semibold leading-normal">
                  Next steps
                </h3>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"> 
                 Donations are always gratefully received!
                  We will continue to work with new and existing contacts in the climbing community, 
                  enabling others to discover the joy, challenge, and freedom of the great outdoors. 
                  Our support will be directed to those who, for all kinds of reasons, 
                  may find access to the outdoors more difficult.
                </p>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    src="/img/wall-20-480x480.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      The wall
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    Modern purpose built climbing walls provide an excellent environment for exhilarating, 
                    enjoyable and demanding exercise, they are suitable for virtually all ages and abilities, 
                    any gender and aptitude. Indoor climbing develops fitness, coordination and flexibility, 
                    creates confidence and encourages teamwork, but does not require a particular 
                    entry level of fitness or strength.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="/img/10494571_836373743105076_500912564032924024_n.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">About Jake</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Jake Shaw was a student at William Farr, going on to graduate from Sheffield University 
                  with a degree in Maths. He was an enthusiastic sportsman but his greatest 
                  passion was climbing and mountaineering. In 2014 Jake commenced a gap year at the Kandersteg 
                  International Scout Centre, near Interlaken, spending the summer as a volunteer 
                  climbing instructor, and intending to spend the winter season in the French Alps. 
                  Tragically he was injured in an accident on 2nd August 2014 and passed away in Bern Hospital eight days later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Donations?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      All donations gratefully received!
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-8">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Gallery</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Just some of the amazing moments on our journey building the wall.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full">
                <Gallery photos={photos} />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Sponsors
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Below are just some of the amazing companies that have helped us reach our goal.
                </p>
              </div>
            </div>
            <Sponsor sponsors={sponsor.sponsors}/>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
