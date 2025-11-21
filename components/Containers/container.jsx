"use client";
import React, { useState } from "react";
import Boxes from "../Items/boxes";
import data from "../../assets/indexs/boxesDataIndex";

const Container = () => {
  const [limit, setLimit] = useState(6);
  function addItems() {
    setLimit((prev) => Math.min(prev + 3, data.length));
  }
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-20 px-4 py-20">
        {data &&
          data
            .slice(0, limit)
            .map((item, index) => (
              <Boxes
                key={index}
                name={item.name}
                src={item.src}
                title={item.title}
                carimage={item.carimages}
                header={item.header}
                project={item.project}
                description={item.description}
                languages={item.Languages}
                link={item.link}
              />
            ))}
      </div>
      <div className="w-full flex justify-center">
        {limit < data.length ? (
          <button
            onClick={addItems}
            className="uiverse w-32 rounded-full text-[#111928]  h-[40px] bg-blue-200 z-20"
          >
            Load More
          </button>
        ) : (
          <div className="z-20 pb-16">
            <p className="flex capitalize text-blue-200 gap-2">
              Go to my Git Profile{" "}
              <a
                className=" w-6 h-6"
                stroke="#60A5FA"
                href="https://github.com/Amine-Nova"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 stroke-1 hover:fill-[#BFDBFE] scale-110 hover:scale-125 transition-transform duration-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      stroke="#BFDBFE"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      className="scale-[0.8]"
                      d="M9.375 19.792c-5.208 1.562-5.208-2.605-7.292-3.125m14.584 6.25v-4.032a3.51 3.51 0 0 0-.98-2.718c3.271-.365 6.709-1.605 6.709-7.292 0-1.454-.56-2.853-1.563-3.906a5.281 5.281 0 0 0-.093-3.927s-1.23-.365-4.073 1.541a13.938 13.938 0 0 0-7.292 0C6.531.677 5.302 1.042 5.302 1.042a5.281 5.281 0 0 0-.094 3.927 5.667 5.667 0 0 0-1.562 3.937c0 5.646 3.437 6.886 6.708 7.292a3.511 3.511 0 0 0-.979 2.687v4.032"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h25v25H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
