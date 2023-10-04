import { BsSendFill } from "react-icons/bs";
const HireMe = () => {
  return (
    <div className="bg-[#02cfb4] text-[#22252c] py-[5rem]">
      <div className="flex justify-center items-center w-[80%] mx-auto">
        <BsSendFill className="text-[4rem] -mt-5" />
        <div className="w-[60%] text-center">
          <h1 className="font-bold text-4xl">HIRE ME FOR YOUR AWESOME PROJECT</h1>
          <p>I am available for Freelance projects that depends on your project value.</p>
          <p>Hire me and get your project done!</p>
        </div>
        <button className="bg-[#22252c] text-[#02cfb4] py-4 px-10 text-2xl">HIRE ME</button>
      </div>
    </div>
  );
};

export default HireMe;
