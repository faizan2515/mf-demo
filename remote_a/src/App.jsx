import React from "react";

import "./App.css";

export default function () {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="relative flex flex-col items-center justify-center p-4 pb-[14px] shadow-0">
        <div className="mb-6 flex items-center justify-center">
          <div className="h-24 w-24 font-bold">
            <img
              src="https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg"
              className="rounded-full"
            />
          </div>
        </div>
        <p className="whitespace-nowrap text-[14px] font-medium">
          Abbott Keitch
        </p>
        <p className="whitespace-nowrap text-[13px] font-medium text-[#94a3b8]">
          admin@fusetheme.com
        </p>
      </div>
      <ul className="whitespace-nowrap px-3 py-0 flex-1">
        <a
          role="button"
          tabIndex="0"
          href="#"
          aria-current="page"
          className="flex relative items-center bg-white/10 min-h-[44px] w-full rounded-md mb-1 py-[10px] px-4 cursor-pointer"
        >
          <svg
            className="mr-4 shrink-0 w-6 h-6 text-2xl leading-6 min-w-6 min-h-6"
            xmlns="http://www.w3.org/2000/svg"
            id="clipboard-check"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>

          <span className="text-[13px] font-medium truncate">Project</span>
        </a>
        <a
          role="button"
          tabIndex="0"
          href="#"
          aria-current="page"
          className="flex relative items-center hover:bg-white/5 min-h-[44px] w-full rounded-md mb-1 py-[10px] px-4 cursor-pointer"
        >
          <svg
            className="mr-4 shrink-0 w-6 h-6 text-2xl leading-6 min-w-6 min-h-6"
            xmlns="http://www.w3.org/2000/svg"
            id="clipboard-check"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>

          <span className="text-[13px] font-medium truncate">Project</span>
        </a>
      </ul>
    </div>
  );
}
