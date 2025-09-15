import React from "react";

export default function AdvancedUtilities() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-gray-600 text-xl font-bold mb-4">Video Container</h2>

        {/* Container video dengan aspect-video */}
        <div className="aspect-video overflow-hidden rounded-lg">
          <iframe
            className="w-full h-full"
            src="https://youtu.be/6zDYMLtVJ4g?si=HXq46hipEhTitsLH"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
