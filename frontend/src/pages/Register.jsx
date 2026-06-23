import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [registerData, setRegisterData] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!registerData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!registerData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/\S+@\S+\.\S+/.test(registerData.email)
    ) {
      newErrors.email = "Invalid email";
    }

    if (!registerData.password) {
      newErrors.password =
        "Password is required";
    } else if (
      registerData.password.length < 6
    ) {
      newErrors.password =
        "Minimum 6 characters";
    }

    if (
      registerData.confirmPassword !==
      registerData.password
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      console.log(
        "User Registered:",
        registerData
      );

      // const response = await api.post("/register", registerData);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[var(--bg-primary)]
        px-4
      "
    >
      <div
        className="
          w-full
          max-w-md

          rounded-3xl
          border
          border-[var(--border-color)]

          bg-[var(--bg-primary)]

          shadow-xl

          p-8
        "
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <h1
            className="
              text-3xl
              font-bold
              text-red-600
            "
          >
            YouTube
          </h1>

          <h2
            className="
              text-2xl
              font-semibold
              mt-4
            "
          >
            Create Account
          </h2>

          <p
            className="
              text-sm
              text-[var(--text-secondary)]
              mt-2
            "
          >
            Continue to YouTube Clone
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={registerData.name}
              onChange={handleChange}
              className="
                w-full
                px-4
                py-3

                rounded-xl

                border
                border-[var(--border-color)]

                bg-transparent

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20

                outline-none
              "
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registerData.email}
              onChange={handleChange}
              className="
                w-full
                px-4
                py-3

                rounded-xl

                border
                border-[var(--border-color)]

                bg-transparent

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20

                outline-none
              "
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleChange}
              className="
                w-full
                px-4
                py-3

                rounded-xl

                border
                border-[var(--border-color)]

                bg-transparent

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20

                outline-none
              "
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={
                registerData.confirmPassword
              }
              onChange={handleChange}
              className="
                w-full
                px-4
                py-3

                rounded-xl

                border
                border-[var(--border-color)]

                bg-transparent

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/20

                outline-none
              "
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="
              w-full

              py-3

              rounded-xl

              bg-blue-600
              hover:bg-blue-700

              text-white
              font-medium

              transition
            "
          >
            Create Account
          </button>
        </form>

        <div
          className="
            mt-6
            text-center
            text-sm
          "
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="
              text-blue-500
              hover:underline
            "
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}