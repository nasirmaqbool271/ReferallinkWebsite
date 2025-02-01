import React from "react";

const Navbar1 = () => {
  return (
    <div>
      <nav className="bg-black p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-orange-500 font-bold">
            Welcome To <b>Pak Easy Business Survey.</b> Please check your
            Account Activation Status to get Started{" "}
          </div>
          <ul className="flex space-x-4">
            <button className="text-black bg-orange-500 h-10 w-28">
              <a>Check Status</a>
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar1;
