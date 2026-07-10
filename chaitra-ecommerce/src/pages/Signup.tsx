import React, { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import BreadCrumb from "../components/BreadCrumb";
import axios from "axios";
import { useNavigate } from "react-router";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isSeller: boolean;
};

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const [error, setError] = useState("");

  const {
    setError,
    register,
    handleSubmit,
    watch,
    formState,
    formState: { errors },
  } = useForm<Inputs>();

  // const [form, setForm] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   isSeller: false,
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value, type, checked } = e.target;
  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  console.log(formState.errors);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // setError("");
    setLoading(true);

    axios
      .post(`${import.meta.env.VITE_API_URL}/signup`, data)
      // .post("https://ecom-zb9o.vercel.app/api/signup", data)
      .then((res) => {
        console.log("Registration successful", res.data);
        navigate("/login");
        // TODO: redirect or show success toast
        // react-router
      })
      .catch((err) => {
        const msg = err.response?.data?.msg || "Something went wrong.";
        err.response?.data?.errors;
        // setError(msg);

        err.response?.data?.errors.forEach((el) => {
          setError(el.field, { message: el.msg });
        });

        // setError("email", { message: "already use" });
        // setError("password", { message: "min 8 charc required" });
        // setError("email", { message: "already use", type: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  console.log({ errors });

  return (
    <>
      <BreadCrumb />
      <div className="py-12 bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm p-10 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Account
            </h1>
            <p className="text-gray-400 text-sm">
              Fill in the details below to get started.
            </p>
          </div>

          {/* Error */}
          {/* {error && (
            <div className="mb-4 text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
              {error}
            </div>
          )} */}

          {/* Fields */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name row */}
            <div className="flex gap-3">
              <div>
                <label>First Name *</label>
                <input
                  type="text"
                  // name="firstName"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "first name is required",
                    },
                    minLength: {
                      value: 3,
                      message: "atleast 3 characters needed",
                    },
                  })}
                  // value={form.firstName}
                  // onChange={handleChange}
                  // required
                  className="w-full border  border-gray-200 rounded-lg py-3.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
                />
                {errors.firstName && (
                  <span className="text-xs text-red-500 block">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div>
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                  // value={form.lastName}
                  // onChange={handleChange}
                  // required
                  className="w-full border border-gray-200 rounded-lg py-3.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
                />
                {errors.lastName && (
                  <span className="text-xs text-red-500 block">
                    {errors.lastName.message || "this field is required"}
                  </span>
                )}
              </div>
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              // required
              className="w-full border border-gray-200 rounded-lg py-3.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
            />
            {errors.email && (
              <span className="text-xs text-red-500 block">
                {errors.email.message || "this field is required"}
              </span>
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
              // required
              className="w-full border border-gray-200 rounded-lg py-3.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
            />
            {errors.password && (
              <span className="text-xs text-red-500 block">
                {errors.password.message || "this field is required"}
              </span>
            )}

            {/* isSeller checkbox */}
            <label className="flex items-center gap-3 cursor-pointer select-none group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  name="isSeller"
                  {...register("isSeller")}
                  // checked={form.isSeller}
                  // onChange={handleChange}
                  className="peer sr-only"
                />
                {/* Custom checkbox */}
                <div className="w-5 h-5 rounded border border-gray-300 peer-checked:bg-secondary peer-checked:border-secondary transition-colors duration-200 flex items-center justify-center">
                  {/* {form.isSeller && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )} */}
                </div>
              </div>
              <div>
                <span className="text-sm text-gray-700 font-medium">
                  Register as a Seller
                </span>
                <p className="text-xs text-gray-400 mt-0.5">
                  List and sell your own products on the platform.
                </p>
              </div>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-secondary hover:bg-pink-600 disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-colors duration-200"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          {/* Login link */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-secondary hover:underline font-medium"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
