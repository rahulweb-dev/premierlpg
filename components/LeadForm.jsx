"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "commercial_lpg_leads"), {
        ...data,
        createdAt: serverTimestamp(),
      });

      toast.success("Enquiry submitted! We will contact you shortly.");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative p-6 md:p-8 rounded-3xl bg-white/25 backdrop-blur-xl border border-white/40 shadow-[0_8px_40px_rgba(255,255,255,0.15)] overflow-hidden">

      {/* Floating bubbles */}
      <div className="absolute w-20 h-20 rounded-full -top-8 -left-8 bg-white/10 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full bg-white/10 blur-xl"></div>

      <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
        Get Commercial LPG Quote
      </h3>
      <p className="mt-1 text-xs md:text-sm text-white/80">
        Share your requirements and our team will call you within 30 minutes.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3 text-white">
        
        {/* NAME */}
        <div>
          <label className="text-xs font-medium text-white">Name *</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full px-3 py-2 mt-1 text-black border rounded-xl bg-white/20 border-white/40 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300/60 backdrop-blur-lg"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-yellow-200">{errors.name.message}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <label className="text-xs font-medium text-white">Phone Number *</label>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
            className="w-full px-3 py-2 mt-1 text-black border rounded-xl bg-white/20 border-white/40 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300/60 backdrop-blur-lg"
            maxLength={10}
            placeholder="e.g. 9876543210"
            onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-yellow-200">{errors.phone.message}</p>
          )}
        </div>

        {/* BUSINESS TYPE & USAGE */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-white">Business Type *</label>
            <select
              {...register("businessType", { required: "Select business type" })}
              className="w-full px-3 py-2 mt-1 text-black border rounded-xl bg-white/20 border-white/40 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-yellow-300/60"
              defaultValue=""
            >
              <option value="" disabled className="bg-slate-900">
                Select business type
              </option>
              <option>Restaurant / Cafe</option>
              <option>Hotel / Resort</option>
              <option>Cloud Kitchen</option>
              <option>Canteen / Mess</option>
              <option>Bakery / Sweet Shop</option>
              <option>Industrial / Factory</option>
            </select>
            {errors.businessType && (
              <p className="mt-1 text-xs text-yellow-200">
                {errors.businessType.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-xs font-medium text-white">
              Monthly LPG Usage (Approx.) *
            </label>
            <select
              {...register("monthlyUsage", { required: "Select monthly usage" })}
              className="w-full px-3 py-2 mt-1 text-black border rounded-xl bg-white/20 border-white/40 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-yellow-300/60"
              defaultValue=""
            >
              <option value="" disabled className="bg-slate-900">
                Select usage
              </option>
              <option>Up to 10 cylinders</option>
              <option>10 - 30 cylinders</option>
              <option>30 - 60 cylinders</option>
              <option>60+ cylinders</option>
              <option>Bulk Tank</option>
            </select>
            {errors.monthlyUsage && (
              <p className="mt-1 text-xs text-yellow-200">
                {errors.monthlyUsage.message}
              </p>
            )}
          </div>
        </div>

        {/* LOCATION */}
        <div>
          <label className="text-xs font-medium text-white">Business Location *</label>
          <input
            {...register("location", { required: "Location is required" })}
            className="w-full px-3 py-2 mt-1 text-black border rounded-xl bg-white/20 border-white/40 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300/60 backdrop-blur-lg"
            placeholder="Area / Locality, Hyderabad"
          />
          {errors.location && (
            <p className="mt-1 text-xs text-yellow-200">{errors.location.message}</p>
          )}
        </div>

        {/* OPTIONAL */}
        <div>
          <label className="text-xs font-medium text-white">
            Additional Requirements (Optional)
          </label>
          <textarea
            {...register("requirements")}
            className="mt-1 w-full rounded-xl px-3 py-2 min-h-[70px] bg-white/20 border border-white/40 text-black placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300/60 backdrop-blur-lg"
            placeholder="Pipeline, cylinder size, timings, etc."
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 font-semibold rounded-xl bg-yellow-300 text-slate-900 hover:bg-yellow-400 transition shadow-[0_3px_15px_rgba(255,255,255,0.3)] border border-white/40"
        >
          {loading ? "Submitting..." : "Get Free Quote"}
        </button>

        <p className="text-[10px] text-white/70 text-center mt-1">
          By submitting, you agree to be contacted via call / WhatsApp regarding commercial LPG services.
        </p>
      </form>
    </div>
  );
}
