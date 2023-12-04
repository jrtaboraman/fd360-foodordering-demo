import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <>
      <section className="mt-8 hero">
        <div className="py-12">
          <h1 className="text-4xl font-semibold">
            Everything <br /> is made with&nbsp; <br />
            <span className="text-primary">Love</span>
          </h1>
          <p className="my-6 text-sm text-gray-500">
            Food is the missing piece that makes everyday complete, a simple yet
            delicious joy in life
          </p>
          <div className="flex gap-4 text-sm">
            <button className="flex items-center gap-2 px-4 py-2 text-white uppercase rounded-full bg-primary">
              Order now <Right />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 font-semibold text-gray-800">
              learn more
              <Right />
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/food.jpg"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"food"}
            className="p-2"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
