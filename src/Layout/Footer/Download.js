import React from 'react';

export default function Download() {
  const fields = [
    {
      _id: 0,
      title: 'Download Brochure',
      url: 'https://firebasestorage.googleapis.com/v0/b/headsupb2b-v2.appspot.com/o/Brochure%2FB2B%20Brochure2025-26.pdf?alt=media',
      active: true,
    },
  ];

  return (
    <div>
      <ul className="flex items-center space-x-4 whitespace-nowrap">
        {fields.map((ele, index) => (
          <li key={index}>
            <a
              href={ele.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg leading-5 cursor-pointer relative inline-block group 4k:text-2xl
                         bg-gradient-to-r from-[#80EBF7] to-purple-500
                         bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x"
            >
              {ele.title}
              <span className="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Custom styles for animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </div>
  );
}
