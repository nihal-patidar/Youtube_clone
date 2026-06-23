
import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-3xl shadow-sm p-6 sm:p-10">
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
              Sign in
            </h2>

            <p className="text-gray-600 mt-2 mb-8">
              to continue to YouTube
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email or phone"
                  value={loginData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <button
                type="button"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Forgot email?
              </button>

              <p className="text-sm text-gray-600 leading-6">
                Not your computer? Use Guest mode to sign in privately.
              </p>

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 gap-4">
                <Link
                  to="/register"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Create account
                </Link>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded font-medium transition"
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
              alt="signin"
              className="w-52"
            />

            <p className="mt-6 text-gray-700">
              Sign in to access your
              <br />
              subscriptions, uploads,
              <br />
              playlists and history.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

