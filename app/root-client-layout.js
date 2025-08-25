"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CallFloat from "./components/CallFloat";
import CTASection from "./components/cta-section";
import { ToastContainer } from "react-toastify";
import SocialFloat from "./components/SocialFloat";

export default function RootClientLayout({ children }) {
  const pathname = usePathname();
  // Hide components for admin or dashboard routes
  const hideComponents =
    pathname.startsWith("/login") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/dashboard");

  return (
    <>
      {!hideComponents && <Navbar />}
      {children}
      {!hideComponents && <SocialFloat />}
      {!hideComponents && <WhatsAppFloat />}
      {!hideComponents && <CallFloat />}
      {!hideComponents && <CTASection />}
      {!hideComponents && <Footer />}
      <ToastContainer />
    </>
  );
}
