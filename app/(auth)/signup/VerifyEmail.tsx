
import AuthGlassContainerLayout from "../sections/AuthGlassContainerLayout";

const VerifyEmail = () => {
  return (
    <AuthGlassContainerLayout className="mx-auto mt-20">
      <h1 className="text-center text-white text-h5 leading-h5 font-bold">
      E-poçtunu yoxla
      </h1>
      <p className="text-center text-white mt-5 text-b1 leading-b1 font-medium">
        {" "}
         E-poçtuna təsdiq linki göndərdik — zəhmət olmasa  <span className="text-primary-700">FitNest@mail.com</span> ünvanını yoxla və keçidə klik et.
      </p>
    </AuthGlassContainerLayout>
  );
};

export default VerifyEmail;
