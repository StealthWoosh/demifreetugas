import React from "react";

export default function BorderRadiusCards() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-6 bg-gray-100 p-6">
      
      {/* Card dengan border tipis */}
      <div className="w-72 p-6 bg-white border border-gray-400 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Card Border Tipis</h2>
        <p className="text-gray-600 mb-4">
          Card ini menggunakan <code>border</code> dengan{" "}
          <code>border-gray-400</code> dan sudut <code>rounded-lg</code>.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Aksi
        </button>
      </div>

      {/* Card dengan border tebal */}
      <div className="w-72 p-6 bg-white border-2 border-gray-600 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Card Border Tebal</h2>
        <p className="text-gray-600 mb-4">
          Card ini menggunakan <code>border-2</code> dengan{" "}
          <code>border-gray-600</code> dan sudut <code>rounded-2xl</code>.
        </p>
        <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
          Aksi
        </button>
      </div>
    </div>
  );
}
