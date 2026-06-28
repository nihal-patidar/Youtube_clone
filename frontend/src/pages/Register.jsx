import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import ProcessingSuccess from "../components/common/ProcessSuccess";
import { register } from "../services/auth.service";
import { registerSchema } from "../utils/validation";
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
  const navigate = useNavigate();
  const handleChange = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = registerSchema.safeParse(registerData);

    if (!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((error) => {
        fieldErrors[error.path[0]] = error.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    setIsProcessing(true);

    try {
      await register({
        name: `${registerData.firstName} ${registerData.lastName}`,
        email: registerData.email,
        password: registerData.password,
      });
    } catch (err) {
      console.error(err);
    } finally {
      navigate("/login");
      setIsProcessing(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 transition-colors"
      style={{
        background: "var(--bg-secondary)",
        color: "var(--text-primary)",
      }}
    >
      {isProcessing ? (
        <ProcessingSuccess
          loading={true}
          loadingText="Creating your account..."
        />
      ) : (
        <div
          className="w-full max-w-5xl rounded-3xl p-6 sm:p-10 transition-all"
          style={{
            background: "var(--bg-primary)",
            border: "1px solid var(--border-color)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-center">
            {/* Left Section */}
            <div>
              {/* Google Logo */}
              <h1 className="text-4xl font-medium mb-6 select-none">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </h1>

              <h2
                className="text-3xl font-normal leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Create your Google Account
              </h2>

              <p
                className="mt-2 mb-10"
                style={{ color: "var(--text-secondary)" }}
              >
                to continue to YouTube
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={registerData.firstName}
                      onChange={handleChange}
                      className="w-full rounded-lg px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500"
                      style={{
                        background: "var(--bg-primary)",
                        color: "var(--text-primary)",
                        border: errors.firstName
                          ? "1px solid #ef4444"
                          : "1px solid var(--border-color)",
                      }}
                    />

                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={registerData.lastName}
                      onChange={handleChange}
                      className="w-full rounded-lg px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500"
                      style={{
                        background: "var(--bg-primary)",
                        color: "var(--text-primary)",
                        border: errors.lastName
                          ? "1px solid #ef4444"
                          : "1px solid var(--border-color)",
                      }}
                    />

                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.lastName}
                      </p>
                    )}
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
                    className="w-full rounded-lg px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500"
                    style={{
                      background: "var(--bg-primary)",
                      color: "var(--text-primary)",
                      border: errors.email
                        ? "1px solid #ef4444"
                        : "1px solid var(--border-color)",
                    }}
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <button
                  type="button"
                  className="text-sm font-medium text-blue-500 hover:text-blue-600 hover:underline transition-colors"
                >
                  Create a new Gmail address instead
                </button>

                {/* Password */}
                <div>
                  <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-4">
                    <div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={registerData.password}
                        onChange={handleChange}
                        className="w-full rounded-lg px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500"
                        style={{
                          background: "var(--bg-primary)",
                          color: "var(--text-primary)",
                          border: errors.password
                            ? "1px solid #ef4444"
                            : "1px solid var(--border-color)",
                        }}
                      />

                      {errors.password && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.password}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={registerData.confirmPassword}
                        onChange={handleChange}
                        className="w-full rounded-lg px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-blue-500"
                        style={{
                          background: "var(--bg-primary)",
                          color: "var(--text-primary)",
                          border: errors.confirmPassword
                            ? "1px solid #ef4444"
                            : "1px solid var(--border-color)",
                        }}
                      />

                      {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="flex items-center justify-center px-2 transition-colors hover:text-blue-500"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                    </button>
                  </div>

                  <p
                    className="mt-2 text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols.
                  </p>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-6">
                  <Link
                    to="/login"
                    className="font-medium text-blue-500 hover:text-blue-600 hover:underline transition-colors"
                  >
                    Sign in instead
                  </Link>

                  <button
                    type="submit"
                    className="rounded-lg px-8 py-3 font-medium text-white transition-all hover:scale-[1.02] active:scale-95"
                    style={{
                      background: "var(--yt-red)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "var(--yt-red-hover)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "var(--yt-red)")
                    }
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="text-center max-w-xs">
                <img
                  src="/google-account.svg"
                  alt="Google"
                  className="w-64 mx-auto mb-6"
                />

                <h3
                  className="text-xl font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  One account. All of Google.
                </h3>

                <p
                  className="text-sm leading-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Access YouTube, Gmail, Drive, Photos, and more with one secure
                  Google Account.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
