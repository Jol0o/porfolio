import React from "react";
import { appConfig, profile } from "../data/portfolio";

const footerLinks = appConfig.navigation.filter(({ href }) =>
  ["#home", "#about", "#contact"].includes(href)
);

export default function Footer() {
  return (
    <div className="w-full min-h-[20vh] text-gray-300 mt-3">
      <div className="max-w-[95%] flex-col md:flex-row flex flex-row py-10 justify-between items-center h-full mx-auto border-violet-900 border-t-2">
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <h1 className="font-bold text-3xl mb-10">{appConfig.logo}</h1>
          <p className="font-semibold text-xs text-violet-400">
            Designed by {profile.name}.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-col md:flex-row gap-8 font-thin text-sm">
            {footerLinks.map(({ href, label }) => (
              <li
                key={href}
                className="hover:border-2 hover:border-violet-500 h-10 w-24 rounded-full flex items-center justify-center transition"
              >
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
