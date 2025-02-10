import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white border-t mb-10 py-8 mt-10">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">TrackBit</h2>
            <p className="text-sm text-gray-400">
              Your Habit Tracker Companion
            </p>
          </div>

          <div className="flex self-center space-x-6 mb-4 md:mb-0">
            {[
              { text: "Home", href: "/" },
              { text: "Login", href: "/auth" },
              { text: "Add", href: "/add" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {item.text}
              </a>
            ))}
          </div>

          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <IconBrandTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <IconBrandGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <IconBrandLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 TrackBit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
