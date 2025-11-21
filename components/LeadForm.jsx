"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus(null);
    try {
      await addDoc(collection(db, "commercial_lpg_leads"), {
        ...data,
        createdAt: serverTimestamp(),
      });

      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur shadow-2xl rounded-2xl p-5 md:p-6 border border-slate-100">
      <h3 className="text-xl md:text-2xl font-bold text-slate-900">
        Get Commercial LPG Quote
      </h3>
      <p className="text-xs md:text-sm text-slate-500 mt-1">
        Share your requirements and our team will call you within 30 minutes.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3">
        <div>
          <label className="text-xs font-medium text-slate-700">Name *</label>
          <input
            {...register("name", { required: true })}
            className="input mt-1"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">Name is required</p>
          )}
        </div>

        <div>
          <label className="text-xs font-medium text-slate-700">
            Phone Number *
          </label>
          <input
            {...register("phone", { required: true })}
            className="input mt-1"
            placeholder="e.g. 98765 43210"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">Phone is required</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-slate-700">
              Business Type
            </label>
            <select
              {...register("businessType")}
              className="input mt-1"
              defaultValue=""
            >
              <option value="" disabled>
                Select business type
              </option>
              <option>Restaurant / Cafe</option>
              <option>Hotel / Resort</option>
              <option>Cloud Kitchen</option>
              <option>Canteen / Mess</option>
              <option>Bakery / Sweet Shop</option>
              <option>Industrial / Factory</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-medium text-slate-700">
              Monthly LPG Usage (Approx.)
            </label>
            <select
              {...register("monthlyUsage")}
              className="input mt-1"
              defaultValue=""
            >
              <option value="" disabled>
                Select usage
              </option>
              <option>Up to 10 cylinders</option>
              <option>10 - 30 cylinders</option>
              <option>30 - 60 cylinders</option>
              <option>60+ cylinders</option>
              <option>Bulk Tank</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-slate-700">
            Business Location (Hyderabad)
          </label>
          <input
            {...register("location")}
            className="input mt-1"
            placeholder="Area / Locality, Hyderabad"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-slate-700">
            Additional Requirements
          </label>
          <textarea
            {...register("requirements")}
            className="input mt-1 min-h-[70px]"
            placeholder="Share brief details (pipeline, cylinder size, delivery timings, etc.)"
          />
        </div>

        {status === "success" && (
          <p className="text-xs text-green-600">
            ✅ Thank you! We’ve received your enquiry. Our team will contact you
            shortly.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs text-red-600">
            ❌ Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full mt-1"
        >
          {loading ? "Submitting..." : "Get Free Quote"}
        </button>

        <p className="text-[10px] text-slate-500 text-center mt-1">
          By submitting, you agree to be contacted via call / WhatsApp regarding
          commercial LPG services.
        </p>
      </form>
    </div>
  );
}
