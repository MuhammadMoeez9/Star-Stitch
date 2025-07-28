"use client";

import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext"; // ✅ make sure the path is correct
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await login(email, password);
      router.push("/"); // ✅ redirect to homepage after login
    } catch (err) {
      console.error(err.message);
      setError("Invalid email or password.");
    } finally {
      setSubmitting(false); // ⏳ re-enable form after login attempt
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Welcome Back,
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            placeholder="••••••••"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className={`w-full flex items-center justify-center gap-2 text-white font-semibold rounded px-4 py-2 ${
            submitting
              ? "bg-blue-500 opacity-70 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {submitting && <Loader2 className="animate-spin w-4 h-4" />}
          {submitting ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
