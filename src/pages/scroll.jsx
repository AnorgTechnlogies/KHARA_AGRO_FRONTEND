import React from 'react';

const packets = [
  {
    name: "Classic Salted",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/333b231c-cfcc-4807-ae4d-47fa96e282ce.__CR0,0,3880,2400_PT0_SX970_V1___.jpg",
    color: "bg-blue-700",
  },
  {
    name: "Peri Peri",
    image: "https://m.media-amazon.com/images/I/91ZfrPkPQkL.jpg",
    color: "bg-red-600",
  },
  {
    name: "Tandoori",
    image: "https://m.media-amazon.com/images/I/71n8f682snL._AC_UF894,1000_QL80_.jpg",
    color: "bg-orange-600",
  },
  {
    name: "Mint / Pudina",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d8e3add4-42ad-4bcf-8fe4-e7b947a8a358.__CR1,0,1599,989_PT0_SX970_V1___.jpeg",
    color: "bg-green-600",
  },
  {
    name: "Black Pepper & Salt",
    image: "https://5.imimg.com/data5/IOS/Default/2025/8/537300690/MK/SG/KY/159327079/product-jpeg.jpeg",
    color: "bg-gray-700",
  },
  {
    name: "Cream & Onion",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/af91c3ab-e91d-48fe-a972-0820c2a76bfa.__CR0,0,2021,1250_PT0_SX970_V1___.png",
    color: "bg-yellow-500",
  },
];

function MakhanaPacketsScroll() {
  // Duplicate array for infinite seamless loop
  const doubledPackets = [...packets, ...packets];

  return (
    <div className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-2">
          Makhana House Premium Products
        </h2>
        <p className="text-center text-gray-600 mb-8 font-bold text-2xl">
          Pure by Nature, Perfect by Taste.
        </p>

        <div className="relative overflow-hidden">
          <div
            className="
              flex animate-scroll whitespace-nowrap py-6 hover:pause-scroll
              inline-flex will-change-transform
            "
            style={{
              animation: 'scroll 35s linear infinite',
            }}
          >
            {doubledPackets.map((packet, index) => (
              <div
                key={index}
                // Yeh padding add kiya hai image ke around
                className="flex-shrink-0 w-64 sm:w-72 lg:w-80 mx-8 md:mx-10 lg:mx-12 p-3 md:p-4"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  {/* Top color strip */}
                  <div className={`h-2 ${packet.color}`}></div>

                  <div className="p-4 relative">
                    {/* Yeh image container hai - isme padding/margin add kiya */}
                    <div className="h-64 sm:h-72 overflow-hidden rounded-lg mb-4 p-1 bg-gray-50">
                      <img
                        src={packet.image}
                        alt={packet.name}
                        className="w-full h-full object-contain p-2" // Object-contain aur padding
                        loading="lazy"
                      />
                      {/* Flavor badge */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow">
                        {packet.name}
                      </div>
                    </div>

                    {/* Bottom color strip */}
                    <div className={`h-2 ${packet.color}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation Definitions */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .pause-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default MakhanaPacketsScroll;