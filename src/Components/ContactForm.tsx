import React from "react";

const ContactForm = () => {
  return (
    <div className="mt-[2rem]">
      <h1 className="edu font-bold text-5xl text-center py-[8rem]">CONTACT ME </h1>
      <form className="w-[80%] mx-auto">
        <div>
          <div className="flex justify-center gap-10 mb-5">
            <input
              type="text"
              placeholder="Name"
              className=" bg-transparent border-b-4 border-[#02cfb4] py-4 px-0 outline-none w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className=" bg-transparent border-b-4 border-[#02cfb4] py-4 px-0 outline-none w-full"
            />
          </div>
          <textarea
            placeholder="MESSAGE"
            className="w-full h-[30vh] bg-transparent border-b-4 border-[#02cfb4] py-4 px-0 outline-none"></textarea>
          <div className="flex justify-center">
            <button className="bg-[#313741] gap-2 text-[#02cfb4] border-2 border-[#02cfb4]  py-5 font-semibold px-[5rem] mt-[5rem] text-sm">
              LOAD MORE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
