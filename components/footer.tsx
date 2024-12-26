import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
        <p className="pb-4">
          &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
