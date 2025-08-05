"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  Timestamp, // ✅ import Timestamp
} from "firebase/firestore";
import { db } from "@/components/ui/Firebase";
import Loader from "@/components/ui/Loader";

interface EmailEntry {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  service: string;
  details: string;
  createdAt: Timestamp | null; // ✅ use correct type
}

const ITEMS_PER_PAGE = 30;

export default function AdminPage() {
  const [emails, setEmails] = useState<EmailEntry[]>([]);
  const [loading, setloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const q = query(collection(db, "Emails"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => {
          const entry = doc.data();
          return {
            id: doc.id,
            email: entry.email,
            firstName: entry.firstName,
            lastName: entry.lastName,
            phone: entry.phone,
            service: entry.service,
            details: entry.details,
            createdAt: entry.createdAt ?? null, // 🔒 safety for missing field
          };
        }) as EmailEntry[];
        setEmails(data);
      } catch (err) {
        console.error("Error fetching emails:", err);
      }
    };

    fetchEmails();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedEmails = emails.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(emails.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) return <Loader />;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Emails</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="p-3 border">S. No</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">First Name</th>
              <th className="p-3 border">Last Name</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Service</th>
              <th className="p-3 border">Details</th>
              <th className="p-3 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedEmails.length > 0 ? (
              paginatedEmails.map((entry, index) => (
                <tr key={entry.id} className="text-sm hover:bg-gray-50">
                  <td className="p-3 border">{startIndex + index + 1}</td>
                  <td className="p-3 border">{entry.email}</td>
                  <td className="p-3 border">{entry.firstName}</td>
                  <td className="p-3 border">{entry.lastName}</td>
                  <td className="p-3 border">{entry.phone}</td>
                  <td className="p-3 border">{entry.service}</td>
                  <td className="p-3 border whitespace-pre-line">
                    {entry.details}
                  </td>
                  <td className="p-3 border">
                    {entry.createdAt?.toDate
                      ? entry.createdAt.toDate().toLocaleString()
                      : "N/A"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  No submissions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center space-x-2">
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded border ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
