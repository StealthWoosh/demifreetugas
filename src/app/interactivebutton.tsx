import React from "react";

export default function InteractiveButton() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* Tombol interaktif */}
      <button
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl 
                   transition duration-300 ease-in-out 
                   transform hover:scale-110 hover:rotate-2 
                   hover:bg-blue-700 shadow-md hover:shadow-xl"
      >
        Hover Saya 🚀
      </button>

      {/* Contoh animasi bawaan */}
      <div className="ml-6 flex flex-col items-center gap-4">
        <div className="w-10 h-10 bg-green-500 rounded-full animate-bounce"></div>
        <div className="w-10 h-10 bg-pink-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
