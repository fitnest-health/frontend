import React from "react";
import ResetPassClient from "./ResetPassClient";
import VerifyEmail from "../signup/VerifyEmail";
import ResetSuccess from "./ResetSuccess";

interface Params {
  params: Promise<{
    slug: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

const SignUp: React.FC<Params> = async ({ searchParams }) => {
  const search = await searchParams;

  console.log(search);

  return (
    <div className="text-gray-400 loginCnt flex justify-start items-center ">
      <div className="mt-20 w-full lg:w-1/2">
        {!search.success && (
          <div className="w-3/4 mx-auto">
            {" "}
            <h1 className="text-center text-white text-h5 leading-h5 font-bold">
              Yeni şifrəni təyin et
            </h1>
           
          </div>
        )}

        {!search.success && <ResetPassClient /> || <ResetSuccess/> }
      </div>
    </div>
  );
};

export default SignUp;
