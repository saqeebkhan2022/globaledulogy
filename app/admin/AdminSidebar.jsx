"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import { IoCall, IoSettings } from "react-icons/io5";
import { FaBookOpen, FaMoneyBillWave } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";

import Image from "next/image";
import logo from "../../public/images/logo.png";

const links = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: <MdDashboard className="w-5 h-5" />,
  },
  {
    name: "Enquiries",
    href: "/admin/dashboard/enquiries",
    icon: <IoCall className="w-5 h-5" />,
  },
  {
    name: "Courses",
    href: "/admin/dashboard/courses",
    icon: <FaBookOpen className="w-5 h-5" />,
  },
  {
    name: "Notifications",
    href: "/admin/dashboard/notifications",
    icon: <IoMdNotifications className="w-5 h-5" />,
  },

  {
    name: "Paid Counselling",
    href: "/admin/dashboard/paid-counselling",
    icon: <FaMoneyBillWave className="w-5 h-5" />,
  },
  {
    name: "Payments",
    href: "/admin/dashboard/payments",
    icon: <RiMoneyRupeeCircleFill className="w-5 h-5" />,
  },
  {
    name: "Settings",
    href: "/admin/dashboard/settings",
    icon: <IoSettings className="w-5 h-5" />,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col border-r border-gray-700">
      {/* Logo / Brand */}
      <div className="flex items-center gap-3 p-6 border-b border-gray-700">
        <Image
          src={logo}
          alt="Logo"
          width={190}
          height={60}
          className="rounded"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
              pathname === link.href
                ? "bg-gray-800 text-white font-semibold"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
