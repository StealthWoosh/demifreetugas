import React from "react";

export default function BlogPost() {
  return (
    <div className="mt-25 max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl">
      {/* Judul */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        Tailwind teman segala developer!
      </h1>

      {/* Subjudul */}
      <h2 className="text-xl font-semibold text-blue-600 mb-2">
        Kenapa Tailwind Populer?
      </h2>

      {/* Paragraf */}
      <p className="text-base text-gray-700 mb-4 leading-relaxed">
        Tailwind CSS adalah framework utility-first yang{" "}
        <span className="font-bold italic text-gray-900">
          sangat fleksibel
        </span>{" "}
        untuk membangun antarmuka. Dengan pendekatan{" "}
        <span className="underline">utility class</span>, kita bisa
        membuat desain modern dengan cepat.
      </p>

      {/* Kutipan */}
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
        "Belajar Tailwind itu seperti persiapan tidur: tinggal pasang class,
        desain jadi."
      </blockquote>

      {/* Heading lain */}
      <h3 className="text-lg font-medium text-gray-800 uppercase mb-2">
        Kelebihan Tailwind
      </h3>

      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li className="font-light">Kustomisasi cepat</li>
        <li className="font-normal">Dokumentasi lengkap</li>
        <li className="font-semibold">Komunitas besar</li>
      </ul>

      {/* Penutup */}
      <p className="text-sm text-gray-500">
        Ditulis oleh <span className="font-medium">Your Majesty, Daffa</span> ·
        <span className="italic"> 15 September 2025</span>
      </p>
    </div>
  );
}
