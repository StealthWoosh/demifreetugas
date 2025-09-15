import React from "react";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center text-white 
      bg-gradient-to-r from-purle-600 via-pink-600 to-red-500">
      
      {/* Judul */}
      <h1 className="text-5xl font-extrabold mb-4">
        Selamat Datang di Website Kami
      </h1>

      {/* Deskripsi */}
      <p className="text-lg font-light mb-6 max-w-xl">
        Bangun tampilan modern dengan cepat menggunakan Tailwind CSS.
        Desain responsif, fleksibel, dan mudah dikustomisasi.
      </p>

      {/* Tombol CTA */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 hover:transition cursor-pointer">
          Mulai Sekarang
        </button>
        <button className="px-6 py-3 bg-transparent border border-white font-semibold rounded-xl hover:bg-white hover:text-pink-600 transition hover cursor-pointer">
          Pelajari Lebih Lanjut
        </button>
      </div>
    </section>
  );
}
