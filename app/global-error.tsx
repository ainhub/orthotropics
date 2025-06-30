"use client";

import Anchor from "./components/anchor";

const GlobalError = () => {
  return (
    <div className="bg-white grid h-screen place-content-center px-4">
      <div className="text-center flex flex-col items-center gap-4">
        <h1 className="text-9xl font-black text-brand-lightGreen-100">
          Uh-oh!
        </h1>
        <p className="mt-4 text-brand-dark-500">Something went wrong.</p>
        <Anchor link="/" text="Go back home" variant="light-green" />
      </div>
    </div>
  );
};

export default GlobalError;
