import React from "react";

export default function GlassmorphismCard() {
  return (
    <div className="min-h-screen bg-[url('gambar.jpg')] bg-cover bg-center flex items-center justify-center p-6">
      <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-xl p-8 shadow-lg max-w-sm">
        <h2 className="text-2xl font-bold text-white mb-4">Glassmorphism</h2>
        <p className="text-white">
          Efek blur transparan ini sering dipakai di desain modern (contoh: iOS, macOS).
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500/80 hover:bg-blue-600 text-white rounded-lg transition cursor-pointer">
          Jelajahi
        </button>
      </div>
    </div>
  );
}
