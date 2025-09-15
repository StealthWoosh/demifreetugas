import React from "react";

export default function FlexGridDemo() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar (Flexbox) */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-gray-600 hover:text-blue-500 cursor-pointer text-xl font-bold">Nomor 2, Friends!</h1>
        <ul className="flex gap-6">
          <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Home</li>
          <li className="text-gray-600 hover:text-blue-500 cursor-pointer">About</li>
          <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Galeri Foto (Grid) */}
      <section className="p-6">
        <h2 className="text-gray-600 text-2xl font-semibold mb-4">Galeri Foto</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-40 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600"
            >
              Foto {i + 1}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
