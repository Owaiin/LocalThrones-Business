import React, { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  children: ReactNode;
};

export default function Modal({ children }: ModalProps) {
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 z-10 bg-black bg-opacity-40 p-5 flex items-center justify-center">
        <div className=" bg-neutral p-5 text-black prose w-full rounded-3xl relative">
          <IoMdClose className="text-3xl absolute top-0 right-0 mr-5 mt-5 " />
          {children}
        </div>
      </div>
    </>
  );
}
