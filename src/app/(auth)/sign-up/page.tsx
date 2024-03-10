import { Icons } from "@/components/Icons";
import React from "react";

const page = () => {
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo />
        </div>
      </div>
    </div>
  );
};

export default page;
