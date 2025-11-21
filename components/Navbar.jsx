"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* MOBILE TOP PHONE BAR */}
      <div className="md:hidden sticky top-0 z-[60] bg-red-600 text-white text-sm font-semibold flex items-center justify-center py-1">
        📞 <a href="tel:+919876543210" className="ml-1 underline">+91 98765 43210</a>
      </div>

      {/* MAIN NAVBAR */}
      <header className="sticky top-7 md:top-0 z-50 bg-white border-b border-red-100 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between h-16 max-w-6xl px-4 py-3 mx-auto md:px-6 lg:px-8">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center border border-red-600 rounded-md shadow-sm h-11 w-11 bg-red-50">
              <span className="text-xl font-extrabold text-red-600 group-hover:text-red-700">
                🔥
              </span>
            </div>
            <div className="leading-tight">
              <span className="text-[18px] font-bold text-slate-800 group-hover:text-red-600 transition">
                LPG Gas Agency
              </span>
              <p className="text-[11px] text-slate-500">Hyderabad</p>
            </div>
          </Link>

          {/* DESKTOP PHONE */}
          <a
            href="tel:+919876543210"
            className="items-center hidden gap-3 px-4 py-2 text-sm font-semibold text-white transition bg-red-600 rounded-lg shadow-sm md:flex hover:bg-red-700"
          >
            <span className="text-[17px]">📞</span>
            +91 98765 43210
          </a>
        </div>

        {/* MOBILE FLOATING CALL */}
        {/* <div className="md:hidden fixed bottom-4 right-4 z-[100] drop-shadow-xl">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition bg-red-600 rounded-full shadow-md hover:bg-red-700"
          >
            📞 Call Now
          </a>
        </div> */}
      </header>
    </>
  );
}
