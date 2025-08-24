"use client";
import React, { useState, useEffect, useRef } from "react";
import "animate.css";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";
import plans from "../data/Plans.json"; // Assume this contains both UG & PG plans

function PlanCard({ plan, onBook, animation }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", animation);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [animation]);

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl border bg-white p-6 shadow-md hover:shadow-lg transition-shadow border-zinc-200 opacity-0"
    >
      <h3
        className="text-lg font-semibold text-center py-2 mb-3"
        style={{ color: "#003366" }}
      >
        {plan.name}
      </h3>
      <p className="text-sm text-zinc-600 text-center mb-4">{plan.blurb}</p>
      <div className="text-center text-sm">
        <p>
          ₹{plan.price.toLocaleString()}.00{" "}
          <span className="text-zinc-500">
            (+18% GST ₹{plan.gst.toLocaleString()}.00)
          </span>
        </p>
        <p className="font-bold text-lg mt-1" style={{ color: "#003366" }}>
          Total: ₹{plan.total.toLocaleString()}.00
        </p>
      </div>
      <button
        onClick={() => onBook?.(plan)}
        className="mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-medium shadow-md transition"
        style={{ backgroundColor: "#EA4E14", color: "white" }}
      >
        Book Now
      </button>
    </div>
  );
}

export default function PaidCounselling() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paid, setPaid] = useState(false);
  const [phone, setPhone] = useState("");
  const [utr, setUtr] = useState("");
  const [isUG, setIsUG] = useState(true); // UG by default

  const handleBook = (plan) => {
    setSelectedPlan(plan);
    setPaid(false);
    setPhone("");
    setUtr("");
  };

  const generateUpiLink = (plan) =>
    `upi://pay?pa=9560561900@ybl&pn=Counselling&am=${plan.total}&cu=INR&tn=${plan.name} Counselling Fee`;

  const handlePaymentConfirmation = async () => {
    if (!phone.trim() || !utr.trim()) {
      toast.error("Please enter your phone number and UTR before submitting.");
      return;
    }
    setPaid(true);
    await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        course: selectedPlan.name,
        amount: selectedPlan.total,
        phone,
        utr,
      }),
    });
  };

  // Filter UG vs PG plans
  const displayedPlans = plans.filter((p) =>
    isUG ? p.category === "UG" : p.category === "PG"
  );

  return (
    <section id="paid-counselling" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <header className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "#003366" }}
          >
            Paid Counselling Guidance
          </h2>
          <p className="mt-3 text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base">
            Choose your stream and get professional, personalized counselling
            with transparent pricing.
          </p>

          {/* UG / PG Toggle Button */}
          <button
            onClick={() => setIsUG(!isUG)}
            className="mt-4 px-6 py-2 rounded-lg font-medium shadow-md transition"
            style={{ backgroundColor: "#EA4E14", color: "white" }}
          >
            {isUG ? "Switch to PG Plans" : "Switch to UG Plans"}
          </button>
        </header>

        {/* Animate cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayedPlans.map((p) => (
            <PlanCard
              key={p.id}
              plan={p}
              onBook={handleBook}
              animation="animate__fadeInUp"
            />
          ))}
        </div>

        {/* Payment Modal */}
        {selectedPlan && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg ">
              <h3
                className="text-xl font-bold text-center mb-4"
                style={{ color: "#003366" }}
              >
                Paid for {selectedPlan.name}
              </h3>

              {!paid ? (
                <>
                  <div className="flex justify-center mb-4">
                    <QRCode value={generateUpiLink(selectedPlan)} size={200} />
                  </div>
                  <p className="text-center text-sm mb-4">
                    Scan this QR with <strong>GPay / PhonePe / Paytm</strong> to
                    pay <br />
                    <span className="font-semibold">
                      ₹{selectedPlan.total.toLocaleString()}
                    </span>
                  </p>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg mb-3"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Enter UTR number"
                    value={utr}
                    onChange={(e) => setUtr(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg mb-3"
                    required
                  />

                  <button
                    onClick={handlePaymentConfirmation}
                    className="w-full px-4 py-2 rounded-lg font-medium shadow-md"
                    style={{ backgroundColor: "#EA4E14", color: "white" }}
                  >
                    I've Paid
                  </button>
                </>
              ) : (
                <p className="text-center text-green-600 font-bold text-lg animate__animated animate__fadeInUp">
                  Thank you! We will contact you soon.
                </p>
              )}

              <button
                onClick={() => setSelectedPlan(null)}
                className="mt-4 w-full px-4 py-2 rounded-lg border"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
