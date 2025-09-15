import React from "react";

export default function EffectsCard() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Card transparan dengan blur + bayangan */}
      <div className="w-80 p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-2">Effects Card</h2>
        <p className="text-white/90 mb-4">
          Card ini menggunakan kombinasi <code>shadow-2xl</code>,{" "}
          <code>opacity</code>, dan <code>backdrop-blur-md</code> untuk
          menghasilkan efek glassmorphism.
        </p>
        <button className="px-4 py-2 bg-white/80 text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-white transition cursor-pointer">
          Klik Saya
        </button>
      </div>
    </div>
  );
}
