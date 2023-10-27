const ContactForm = () => {
  return (
    <div className="mt-[2rem]">
      <h1 className="edu font-bold text-3xl md:text-5xl text-center py-[5rem] md:py-[8rem]">
        CONTACT ME{" "}
      </h1>
      <form className="w-[90%] md:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-5">
          <input
            type="text"
            placeholder="Name"
            className="text-white text-xl bg-transparent border-b-[2px] border-slate-300 focus:border-[#02cfb4] py-4 px-0 outline-none w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-white text-xl bg-transparent border-b-[2px] border-slate-300 focus:border-[#02cfb4] py-4 px-0 outline-none w-full"
          />
        </div>
        <textarea
          placeholder="MESSAGE"
          className="text-white text-xl w-full h-[30vh] bg-transparent border-b-[2px] border-slate-300 focus:border-[#02cfb4] py-4 px-0 outline-none"></textarea>
        <div className="flex justify-center">
          <button className="send-btn">SEND MESSAGE</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
