"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext"; // ✅ make sure the path is correct
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Loader2, Scissors } from "lucide-react";
import Loader from "@/components/ui/Loader";
const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await login(email, password);
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
        setError("Invalid email or password.");
      } else {
        console.error("Unexpected error", err);
        setError("Something went wrong.");
      }
    }
  };
  if (loading) return <Loader />;
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-white dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg border border-gray-300 p-6 rounded-lg shadow-sm bg-white dark:bg-gray-800"
      >
        <div className="flex justify-center space-x-2 py-8">
          <Scissors className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Star Stitch
          </span>
        </div>
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
        <div className="mb-6 relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white pr-10"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-[38px] right-3 text-gray-600 dark:text-gray-300"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="pb-1">
          Need an Account?
          <span className="pl-1 text-blue-600 hover:underline dark:text-blue-500">
            <Link href="/Register">Sign Up</Link>
          </span>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className={`w-full flex items-center  justify-center gap-2 text-white font-semibold rounded mt-4 px-4 py-2 ${
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
