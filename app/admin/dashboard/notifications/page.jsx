"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../../AdminSidebar";
import AdminHeader from "../../AdminHeader";

export default function Notifications({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Redirect if not logged in
    // const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    // if (!isAuthenticated) {
    //   router.push("/admin/login");
    // }
  }, [router]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* <AdminSidebar /> */}
      <div className="flex-1 flex flex-col">
        {/* <AdminHeader /> */}
        <main className="p-6 flex-1">
          <h2 className="text-2xl font-bold mb-4">Welcome to Notifications</h2>
          <p className="text-gray-700">
            Here you can manage notifications for users and system alerts.
          </p>
          {/* Add dashboard content here */}
        </main>
      </div>
    </div>
  );
}
