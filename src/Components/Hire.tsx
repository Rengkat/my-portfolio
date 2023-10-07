import { BsSendFill } from "react-icons/bs";
const HireMe = () => {
  return (
    <div className="bg-[#02cfb4] text-[#22252c] py-[5rem]">
      <div className=" flex flex-col md:flex-row justify-center items-center w-[90%] md:w-[80%] mx-auto">
        <div className="flex w-full md:w-[70%]">
          <BsSendFill className="text-[4rem] -mr-12 md:-mr-0 md:-mt-5" />
          <div className="w-[90%] text-center">
            <h1 className="font-bold text-2xl md:text-4xl">HIRE ME FOR YOUR AWESOME PROJECT</h1>
            <p>I am available for Freelance projects that depends on your project value.</p>
            <p>Hire me and get your project done!</p>
          </div>
        </div>
        <button className="bg-[#22252c] shadow text-[#02cfb4] py-4 px-12 text-2xl my-5 md:my-0">
          HIRE ME
        </button>
      </div>
    </div>
  );
};

export default HireMe;