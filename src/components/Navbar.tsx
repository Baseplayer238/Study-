import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Bot, Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <Book className="h-8 w-8 mr-2 text-blue-500" />
                <span className="font-semibold text-gray-500 text-lg">Ultimate Study App</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Notes</Link>
            <Link to="/ai-assistant" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
              <Bot className="h-5 w-5 inline-block mr-1" />
              AI Assistant
            </Link>
            <Link to="/calendar" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
              <Calendar className="h-5 w-5 inline-block mr-1" />
              Calendar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;