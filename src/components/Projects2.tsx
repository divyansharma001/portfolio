"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="grid xl:grid-cols-6 sm:grid-cols-1">
      <div className="h-[40rem] w-full flex items-center justify-center xl:col-span-2 sm:col-span-1">
        <PinContainer
          title="Github"
          href="https://github.com/divyansharma001/BloodLink"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
              BloodLink
            </h3>
            <div className="text-base m-0 p-0 font-normal">
              <span className="text-slate-500">
                Platform solving blood shortage problems.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        </div>

        <div className="h-[40rem] w-full flex items-center justify-center xl:col-span-2 sm:col-span-1">
        <PinContainer
          title="Github"
          href="https://github.com/divyansharma001/FoodFly"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
              Foodfly
            </h3>
            <div className="text-base m-0 p-0 font-normal">
              <span className="text-slate-500">
                A full stack web app to order food.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        </div>
       
        <div className="h-[40rem] w-full flex items-center justify-center xl:col-span-2 sm:col-span-1">
        <PinContainer
          title="Github"
          href="https://github.com/divyansharma001/CypherCraft"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
              CypherCraft
            </h3>
            <div className="text-base m-0 p-0 font-normal">
              <span className="text-slate-500">
                A frontend project for a Ed-tech company.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        </div>  

        <div className="h-[40rem] w-full flex items-center justify-center xl:col-span-2 sm:col-span-1">
        <PinContainer
          title="Github"
          href="https://github.com/divyansharma001/uvProtect"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
              UV Protect
            </h3>
            <div className="text-base m-0 p-0 font-normal">
              <span className="text-slate-500">
              Provides UV forecast to save user from harmful UV rays
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        </div>

        <div className="h-[40rem] w-full flex items-center justify-center xl:col-span-2 sm:col-span-1">
        <PinContainer
          title="Github"
          href="https://github.com/divyansharma001/blogProject"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
             Blog Project
            </h3>
            <div className="text-base m-0 p-0 font-normal">
              <span className="text-slate-500">
              Allows user to Read, Write, Edit and Delete blogs.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        </div>

        <div className="h-[40rem] w-full flex items-center justify-center xl:col-span-2 sm:col-span-1">
        <PinContainer
          title="Github"
          href="https://github.com/divyansharma001/TodoUsingReact"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
             Todo 
            </h3>
            <div className="text-base m-0 p-0 font-normal">
              <span className="text-slate-500">
              Todo webapp made using React.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        </div>
      
    </div>
  );
}
