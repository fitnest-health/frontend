import React from "react";
import ForgetPassClient from "./ForgetPassClient";
import VerifyEmail from "../signup/VerifyEmail";

interface Params {
  params: Promise<{
    slug: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

const SignUp: React.FC<Params> = async ({ params, searchParams }) => {
  const search = await searchParams;

  console.log(search);

  return (
    <div className="text-gray-400 loginCnt flex justify-start items-center ">
      <div className="mt-20 w-full lg:w-1/2">
        {!search.mail && (
          <div className="w-3/4 mx-auto">
            {" "}
            <h1 className="text-center text-white text-h5 leading-h5 font-bold">
              Şifrəni sıfırla
            </h1>
            <p className="text-center text-white mt-5 text-b1 leading-b1 font-medium">
              {" "}
              <span className="text-primary-700">Fitnest</span> hesabına
              bağlı e-poçt ünvanını daxil et — biz sənə şifrəni sıfırlamaq üçün
              təlimat göndərəcəyik.
            </p>
          </div>
        )}

        {!search.mail && <ForgetPassClient /> || <VerifyEmail mail={search?.mail} />}
      </div>
    </div>
  );
};

export default SignUp;
