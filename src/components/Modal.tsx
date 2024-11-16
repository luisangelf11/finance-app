'use client'
import React from "react";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  return (
    <div
      className="fixed inset-0  flex items-center justify-center overflow-x-hidden overflow-y-hidden outline-none focus:outline-none w-screen h-screen "
      style={{
        zIndex: "1000",
      }}
    >
      <div className="relative w-[90%] sm:w-[400px] mx-auto my-6">
        <div
          className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none scale-up-center"
          style={{
            zIndex: "1000",
          }}
        >
          {children}
          <button
            className="transition-all hover:text-red-600 cursor-pointer absolute top-4 right-4 text-gray-800"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-90"></div>
    </div>
  );
}
