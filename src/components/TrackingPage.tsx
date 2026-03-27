import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Step from "../components/Step";
import type { TrackingItem } from "../types";

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState<string>("");
  const [result, setResult] = useState<TrackingItem | "not_found" | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!trackingId) return;

    setLoading(true);

    try {
      const docRef = doc(db, "tracking", trackingId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();

        setResult({
          id: trackingId,
          carName: data.carName,
          status: data.status,
          progress: data.progress,
          estimated: data.estimated,
          steps: {
            loaded: data.loaded,
            onWay: data.onWay,
            arrived: data.arrived,
            delivered: data.delivered,
          },
        });
      } else {
        setResult("not_found");
      }
    } catch (error) {
      console.error(error);
      setResult("not_found");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white p-[80px]">

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/videos/trackingvideo.mp4" type="video/mp4" />
      </video>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* 🔥 HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Track Your Vehicle 🚗
          </h1>
          <p className="text-gray-400 mt-2">
            Real-time tracking system powered by live updates
          </p>
        </div>

        {/* 🔍 SEARCH */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="flex gap-2 bg-white/5 backdrop-blur-lg p-2 rounded-xl border border-white/10 shadow-lg">
            <input
              type="text"
              placeholder="Enter Tracking ID..."
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="flex-1 p-3 bg-transparent outline-none text-white placeholder-gray-400"
            />

            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>

        {/* ❌ NOT FOUND */}
        {result === "not_found" && (
          <p className="text-center text-red-400 text-lg">
            ❌ Tracking ID not found
          </p>
        )}

        {/* ✅ RESULT */}
        {result && result !== "not_found" && (
          <div className="max-w-md mx-auto p-[1px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">

            <div className="bg-black/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl">

              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {result.carName}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    ID: {result.id}
                  </p>
                </div>

                <span className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                  {result.status}
                </span>
              </div>

              {/* PROGRESS */}
              <div className="mb-4">
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-700"
                    style={{ width: `${result.progress}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-400 mt-1">
                  {result.progress}%
                </p>
              </div>

              {/* DELIVERY */}
              <p className="text-sm text-gray-400 mb-6">
                📅 Estimated: {result.estimated}
              </p>

              {/* TIMELINE */}
              <div className="space-y-5">
                <Step label="Loaded in Truck 🚚" active={result.steps.loaded} />
                <Step label="On The Way 🛣️" active={result.steps.onWay} />
                <Step label="Arrived at Destination 📍" active={result.steps.arrived} />
                <Step label="Delivered ✅" active={result.steps.delivered} />
              </div>
            </div>

            {/* FOOTER MESSAGE */}
            <p className="text-center mt-4 text-gray-300 text-sm">
              ⚠️ If you have any concerns, feel free to CONTACT US 📞
            </p>

          </div>
        )}

      </div>
    </div>
  );
}