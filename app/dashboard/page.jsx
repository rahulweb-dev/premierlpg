"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";
import LeadTable from "@/components/LeadTable";

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-sm text-slate-600">Checking authentication...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-slate-900 text-slate-50 py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="text-lg md:text-xl font-bold">
              Commercial LPG Dashboard
            </h1>
            <p className="text-[11px] md:text-xs text-slate-300">
              Logged in as {user.email}
            </p>
          </div>
          <button
            onClick={async () => {
              await logout();
              router.push("/login");
            }}
            className="text-xs px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 space-y-4">
          <LeadTable />
        </div>
      </section>
    </main>
  );
}
