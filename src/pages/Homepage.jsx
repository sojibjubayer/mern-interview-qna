import Link from "next/link";


const Homepage = () => {
  return (
    <div className=" space-y-5 mt-5 w-[95%] mx-auto">
      <div className="flex flex-col md:flex-row gap-5">
        <Link
          className="bg-white rounded-sm   shadow-md md:h-20 h-14 text-sm md:text-base flex items-center justify-center w-full  font-semibold"
          href="/html5qna"
        >
          <span className="text-[#FF7777]">HTML5</span>&nbsp; Interview Question & Answers
        </Link>
        <Link
          className="bg-white rounded-sm  shadow-md md:h-20 h-14 text-sm md:text-base flex items-center justify-center w-full font-semibold"
          href="/css3qna"
        >
          <span className="text-[#FF7777]">CSS3</span>&nbsp; Interview Question & Answers
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Link
          className="bg-white rounded-sm  shadow-md md:h-20 h-14 text-sm md:text-base flex items-center justify-center w-full font-semibold"
          href="/javascriptqna"
        >
          <span className="text-[#FF7777]">JAVASCRIPT</span>&nbsp; Interview Question & Answers
        </Link>
        <Link
          className="bg-white rounded-sm  shadow-md md:h-20 h-14 text-sm md:text-base flex items-center justify-center w-full font-semibold"
          href="/reactqna"
        >
          <span className="text-[#FF7777]">REACT</span>&nbsp;Interview Question & Answers
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Link
          className="bg-white rounded-sm  shadow-md md:h-20 h-14 text-sm md:text-base flex items-center justify-center w-full font-semibold"
          href="/reduxqna"
        >
          <span className="text-[#FF7777]">REDUX</span>&nbsp; Interview Question & Answers
        </Link>
        <Link
          className="bg-white rounded-sm  shadow-md md:h-20 h-14 text-sm md:text-base flex items-center justify-center w-full font-semibold"
          href="/nextjsqna"
        >
          <span className="text-[#FF7777]">NEXTJS</span>&nbsp; Interview Question & Answers
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Link
          className="bg-white rounded-sm  shadow-md md:h-20 h-14 text-sm md:text-base flex items-center justify-center w-full font-semibold"
          href="/nodejsqna"
        >
          <span className="text-[#FF7777]">NODEJS</span>&nbsp; Interview Question & Answers
        </Link>
        <Link
          className="bg-white rounded-sm  shadow-md md:h-20 h-14 text-sm md:text-base flex items-center justify-center w-full font-semibold"
          href="/expressjsqna"
        >
          <span className="text-[#FF7777]">EXPRESSJS</span>&nbsp; Interview Question & Answers
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Link
          className="bg-white rounded-sm  shadow-md md:h-20 h-14 text-sm md:text-base flex items-center justify-center w-full font-semibold"
          href="/mongodbqna"
        >
          <span className="text-[#FF7777]">MONGODB</span>&nbsp; Interview Question & Answers
        </Link>
        <Link
          className="bg-white rounded-sm  shadow-md md:h-20 h-14 text-sm md:text-base flex items-center justify-center w-full font-semibold"
          href="/mongooseqna"
        >
          <span className="text-[#FF7777]">MONGOOSE</span>&nbsp; Interview Question & Answers
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Link
          className="bg-white rounded-sm  shadow-md md:h-20 h-14 text-sm md:text-base flex items-center justify-center w-full font-semibold"
          href="/firebaseqna"
        >
          <span className="text-[#FF7777]">FIREBASE</span>&nbsp; Interview Question & Answers
        </Link>
        <Link
          className="bg-white rounded-sm  shadow-md md:h-20 h-14 text-sm md:text-base flex items-center justify-center w-full font-semibold"
          href="/jwtqna"
        >
          <span className="text-[#FF7777]">JWT</span>&nbsp; Interview Question & Answers
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
