import React from "react";

export default function SimpleCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Card */}
      <div className="w-80 h-60 m-4 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-xl text-gray-600 font-semibold mb-2">Judul Card</h2>
        <p className="text-gray-600 mb-4">
          Ini adalah contoh card sederhana menggunakan margin, padding, dan sizing di Tailwind CSS.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer">
          Klik Saya
        </button>
      </div>
    </div>
  );
}
