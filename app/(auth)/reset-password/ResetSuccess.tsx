import { Button } from "@/components/ui/button";
import AuthGlassContainerLayout from "../sections/AuthGlassContainerLayout";
import Link from "next/link";

const ResetSuccess = () => {
  return (
    <AuthGlassContainerLayout className="mx-auto mt-20">
      <h1 className="text-center text-white text-h5 leading-h5 font-bold">
        Şifrən uğurla yeniləndi!
      </h1>
      <p className="text-center text-white mt-5 text-b1 leading-b1 font-medium">
       İndi hesabına yeni şifrə ilə daxil ola bilərsən.
      </p>
      <Button
        className=" mx-auto block mt-20 w-full"
        variant={"default"}
        size={"default"}
        asChild
      >
        <Link className="w-full h-full text-center" href="/">Başla</Link>
      </Button>
    </AuthGlassContainerLayout>
  );
};

export default ResetSuccess;
