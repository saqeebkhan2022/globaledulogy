"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminSidebar from "../AdminSidebar";
import { LogOut } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const adminEmail =
    typeof window !== "undefined" ? localStorage.getItem("adminEmail") : "";

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    localStorage.removeItem("adminEmail");
    router.push("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "block" : "hidden"} sm:block`}>
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow px-6 h-16">
          <button
            className="sm:hidden text-gray-700 text-2xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <h1 className="text-xl font-bold">ADMIN DASHBOARD</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">{adminEmail}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-red-500 hover:text-red-600"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
