'use client';

import { useState } from 'react';

export default function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Background Image Parallax', href: '#' },
    { label: 'Portfolio-1', href: '#' },
    { label: 'Next.js', href: '#' },
    { label: 'React', href: '#' },
    { label: 'Framer Motion', href: '#' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-6 py-3 rounded-full text-white hover:bg-gray-700 transition-colors"
        style={{backgroundColor: "#4a4a4a"}}
      >
        <span className="font-normal text-lg">Background Image Parallax</span>
        <span className="text-lg">▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-gray-800 rounded-2xl shadow-lg z-50 overflow-hidden">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-6 py-4 text-white hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
