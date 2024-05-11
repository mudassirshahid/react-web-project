import React from 'react'

export function Card(props) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={props.imgUrl}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{props.title}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {props.text}
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {props.btn || "Visit Profile"} &rarr;
          {/* Above || condition set default value if we forget to pass btn props value when call component then it shows above value like "Visit Profile" */}
        </button>
      </div>
    </div>
  )
}
