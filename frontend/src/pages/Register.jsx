import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import ProcessingSuccess from "../components/common/ProcessSuccess";
import { register } from "../services/auth.service";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) return;

    register({
      name: registerData.firstName + " " + registerData.lastName,
      email: registerData.email,
      password: registerData.password,
    });
    console.log(registerData);
  };
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4 py-10">
      {isProcessing ? (
        <ProcessingSuccess
          loading={true}
          loadingText="Creating your account..."
        />
      ) : (
        <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="w-fit">
            {/* Left Section */}
            <div>
              {/* Logo */}
              <h1 className="text-3xl font-semibold mb-6">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </h1>
              <h2 className="text-3xl font-normal text-gray-900">
                Create your Google Account
              </h2>
              <p className="text-gray-600 mt-2 mb-8">to continue to YouTube</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={registerData.firstName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-3 outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={registerData.lastName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-3 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={registerData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-3 outline-none focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    You'll need to confirm that this email belongs to you.
                  </p>
                </div>
                <button
                  type="button"
                  className="text-blue-600 font-medium text-sm hover:underline"
                >
                  Create a new Gmail address instead
                </button>
                {/* Password */}
                <div>
                  <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-4">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={registerData.password}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-3 py-3 outline-none focus:border-blue-500"
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm"
                      value={registerData.confirmPassword}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-3 py-3 outline-none focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="flex items-center justify-center text-gray-500"
                    >
                      {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols
                  </p>
                </div>
                {/* Footer */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 gap-4">
                  <Link
                    to="/login"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Sign in instead
                  </Link>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
            {/* Right Section */}
            {/* <div className="hidden lg:flex flex-col items-center text-center">
            
            <img
              src="/google-auth-side.png"
              alt="Google"
              className="w-64"
            />
            <p className="mt-6 text-gray-700 text-lg">
              
              One account. All of Google <br /> working for you.
            </p>
          </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
