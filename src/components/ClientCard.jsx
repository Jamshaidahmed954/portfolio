import React from "react";

function ClientCard() {
  return (
    <>
      <div className="w-[20rem] h-[40rem] flex justify-center items-center text-white ">
        <div className="w-[23rem] h-[35rem] bg-gray-700 rounded-md relative flex justify-center items-center flex-col ">
          <div className="h-40 w-40 rounded-full bg-transparent  overflow-hidden absolute top-3">
            <img
              className="object-cover overflow-hidden"
              src="../images/client.png.png"
              alt=""
            />
          </div>
          <div className="w-full h-1/2 flex justify-center items-center flex-col gap-4 p-2 absolute bottom-8">
            <h2 className="text-2xl">jamshaid mazari</h2>
            <p className="self-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              iste accusamus perspiciatis facilis omnis impedit.
            </p>
            <p>325-536-325</p>
            <button className="px-6 py-2 bg-red-500 rounded-md">Explore</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientCard;
