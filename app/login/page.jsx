"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase";
import { useAuth } from "@/components/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("Test@123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (user) {
    // Already logged in
    if (typeof window !== "undefined") {
      router.replace("/dashboard");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100">
      <div className="w-full max-w-md bg-slate-950/80 border border-slate-700 rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold mb-1">Admin Login</h1>
        <p className="text-xs text-slate-300 mb-4">
          Login to view commercial LPG leads dashboard.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-xs font-medium text-slate-200">
              Email
            </label>
            <input
              type="email"
              className="input mt-1 bg-slate-900 border-slate-700 text-slate-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-200">
              Password
            </label>
            <input
              type="password"
              className="input mt-1 bg-slate-900 border-slate-700 text-slate-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full bg-red-600 hover:bg-red-700 mt-1"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-[10px] text-slate-400 mt-3">
          Use the admin email and password you created in Firebase
          Authentication (Email/Password).
        </p>
      </div>
    </main>
  );
}
