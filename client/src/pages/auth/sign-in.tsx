// app/signin/page.tsx or app/signin/page.jsx

import SignInForm from "./_component/signin-form";
import Logo from "@/components/logo/logo";

const SignIn = () => {
  return (
    <div className="grid min-h-screen ">
      <div className="flex flex-col gap-4 p-3 md:p-1">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Logo url="/" />
        </div>

        {/* Form Section */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs sm:max-w-sm">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
