import React from "react";

export default function ResponsiveLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Kolom kiri */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-gray-600 text-2xl font-bold mb-2">Kolom Kiri</h2>
          <p className="text-gray-600">
            Konten ini akan tampil penuh di layar kecil, dan jadi kolom kiri di layar sedang ke atas.
          </p>
        </div>

        {/* Kolom kanan */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-gray-600 text-2xl font-bold mb-2">Kolom Kanan</h2>
          <p className="text-gray-600">
            Konten ini akan tampil penuh di layar kecil, dan jadi kolom kanan di layar sedang ke atas.
          </p>
        </div>
      </div>
    </div>
  );
}
