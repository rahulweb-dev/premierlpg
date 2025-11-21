"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function LeadTable() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "commercial_lpg_leads"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLeads(data);
    } catch (err) {
      console.error("Error fetching leads", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 md:p-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base md:text-lg font-semibold text-slate-900">
          Commercial LPG Leads
        </h2>
        <button
          onClick={fetchLeads}
          className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50"
        >
          Refresh
        </button>
      </div>

      {loading ? (
        <p className="text-xs text-slate-600">Loading leads...</p>
      ) : leads.length === 0 ? (
        <p className="text-xs text-slate-600">No leads found yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-3 py-2 border-b">Name</th>
                <th className="px-3 py-2 border-b">Phone</th>
                <th className="px-3 py-2 border-b">Business</th>
                <th className="px-3 py-2 border-b">Usage</th>
                <th className="px-3 py-2 border-b">Location</th>
                <th className="px-3 py-2 border-b">Created</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b last:border-b-0">
                  <td className="px-3 py-2">
                    {lead.name || "-"}
                  </td>
                  <td className="px-3 py-2">
                    {lead.phone || "-"}
                  </td>
                  <td className="px-3 py-2">
                    {lead.businessType || "-"}
                  </td>
                  <td className="px-3 py-2">
                    {lead.monthlyUsage || "-"}
                  </td>
                  <td className="px-3 py-2">
                    {lead.location || "-"}
                  </td>
                  <td className="px-3 py-2 text-[11px] text-slate-500">
                    {lead.createdAt?.toDate
                      ? lead.createdAt.toDate().toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
