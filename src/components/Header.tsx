import React from 'react';
import { Fish, Microscope, Home, BookOpen, MessageSquare } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Fish className="h-8 w-8" />
            <span className="text-2xl font-bold">AquaHealth AI</span>
          </div>
          <div className="hidden md:flex space-x-8"></div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a
      href="#"
      className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}
