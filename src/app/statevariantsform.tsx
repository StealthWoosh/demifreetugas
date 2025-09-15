import React from "react";

export default function StateVariantsForm() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-gray-600 text-2xl font-bold mb-6">Form State Variants</h2>

        {/* Input dengan efek focus */}
        <input
          type="text"
          placeholder="Ketik sesuatu..."
          className="text-gray-600 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
        />

        {/* Tombol aktif */}
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition cursor-pointer">
          Tombol Aktif
        </button>

        {/* Tombol disabled */}
        <button
          className="w-full bg-gray-400 text-white py-3 rounded-lg mt-3 cursor-not-allowed disabled:opacity-60 cursor-pointer"
          disabled
        >
          Tombol Disabled
        </button>
      </div>
    </div>
  );
}
