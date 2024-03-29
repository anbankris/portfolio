"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const HeroSection = () => {
  return (
    <section>
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I'm{" "}
          </span>{" "}
          <br></br>
          <TypeAnimation
            sequence={[
              "Anbankris Prakasam",
              1000,
              "Software Engineer",
              1000,
              "Full Stack Developer",
              1000,
              "DevOps Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Currently pursuing my Masters in Management Information Systems at Texas A&M University. Almost 3 years of professional expericence in the Software Development Industry with primary focus on DevOps and Cloud Computing.
        </p>
      </div>
    </section>
  )
}

export default HeroSection