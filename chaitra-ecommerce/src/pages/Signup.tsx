import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isSeller: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    axios
      .post("https://ecom-zb9o.vercel.app/api/signup", form)
      .then((res) => {
        console.log("Registration successful", res.data);
        // TODO: redirect or show success toast
        // react-router
      })
      .catch((err) => {
        const msg = err.response?.data?.msg || "Something went wrong.";
        setError(msg);
      })
      .finally(() => setLoading(false));
  };

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
          {error && (
            <div className="mb-4 text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          {/* Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name row */}
            <div className="flex gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-1/2 border border-gray-200 rounded-lg py-3.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-1/2 border border-gray-200 rounded-lg py-3.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-lg py-3.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-lg py-3.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
            />

            {/* isSeller checkbox */}
            <label className="flex items-center gap-3 cursor-pointer select-none group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  name="isSeller"
                  checked={form.isSeller}
                  onChange={handleChange}
                  className="peer sr-only"
                />
                {/* Custom checkbox */}
                <div className="w-5 h-5 rounded border border-gray-300 peer-checked:bg-secondary peer-checked:border-secondary transition-colors duration-200 flex items-center justify-center">
                  {form.isSeller && (
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
                  )}
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
