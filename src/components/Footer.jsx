import React from "react";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-6 text-center">
      © {new Date().getFullYear()} Parvej Hussain. All Rights Reserved.
    </footer>
  );
}
