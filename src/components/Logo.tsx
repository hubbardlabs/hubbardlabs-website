import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <div className="bg-primary p-1.5 rounded">
        <Code2 className="w-6 h-6 text-white" />
      </div>
      <span className="email-masthead_name">
        <span className="hubbard">Hubbard</span>
        <span className="labs">Labs</span>
      </span>
    </Link>
  );
};

export default Logo;