"use client";

import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const router = useRouter();
  const adminEmail =
    typeof window !== "undefined" ? localStorage.getItem("adminEmail") : "";

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    localStorage.removeItem("adminEmail");
    router.push("/admin/login");
  };

  return (
    <header className="flex justify-between items-center bg-white shadow-md p-4">
      <h1 className="text-xl font-bold text-[#003366]">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium">{adminEmail}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
