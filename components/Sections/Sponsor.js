import React from "react";

export default function Sponsor({ sponsors }) {
    return (
        <>
            <div className="flex flex-wrap">
                {sponsors.map((sponsor) => (
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img src={sponsor.imageUrl} className="shadow-lg rounded-full mx-auto max-w-120-px" />
                            <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold">{sponsor.name}</h5>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
}