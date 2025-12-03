import SignupClient from "./SignupClient";
import SignUpSuccess from "./SignUpSuccess";
import VerifyEmail from "./VerifyEmail";

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
        {!search.mail && !search.success && (
          <>
            {" "}
            <h1 className="text-center text-white text-h5 leading-h5 font-bold">
              Qeydiyyatdan keç
            </h1>
            <p className="text-center text-white mt-5 text-b1 leading-b1 font-medium">
              {" "}
              <span className="text-primary-700">Fitnest</span> ekosisteminə
              qoşul və fərdi proqramlarını yarat.
            </p>
          </>
        )}

        {(!search.mail && !search.success && <SignupClient />) ||
          (!search.success && <VerifyEmail mail={search?.mail} />) || <SignUpSuccess />}
      </div>
    </div>
  );
};

export default SignUp;
