import React from "react";

const socialEnd = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 z-40">
      <p className="text-blue-200 text-[19px]">
        Feel free to reach out to me on :
      </p>
      <div className="flex justify-center items-center gap-6 z-40">
        <a href="https://github.com/Amine-Nova" target='_blank' rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github h-8 w-8 hover:scale-125 stroke-[0.75] hover:fill-blue-200 stroke-blue-200 duration-500 ease-in-out z-40"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/amine-ben-moussa-3667442a0/" target='_blank' rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github h-8 w-8 hover:scale-125 stroke-[0.75] hover:fill-blue-900 stroke-blue-200 duration-500 ease-in-out"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a href="https://www.instagram.com/aminebenm_" target='_blank' rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github h-8 w-8 hover:scale-125 stroke-[0.75] hover:fill-pink-700 stroke-blue-200 duration-500 ease-in-out"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
        </a>
        <a
        id="mail"
        href="mailto:bmamine52@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="hover:fill-yellow-500 stroke-blue-200 w-9 h-9 stroke-[1.8px] hover:scale-125 transition-transform duration-500"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.47,10.71a2,2,0,0,0-2,2V35.32a2,2,0,0,0,2,2H41.53a2,2,0,0,0,2-2V12.68a2,2,0,0,0-2-2H6.47Zm33.21,3.82L24,26.07,8.32,14.53" />
        </svg>
      </a>
        <a href="https://wa.me/+212681212573" target='_blank' rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github h-8 w-8 hover:scale-125 stroke-[0.75] hover:fill-green-500 stroke-blue-200 duration-500 ease-in-out"
          >
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default socialEnd;
