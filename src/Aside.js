import React, { useState } from "react";
import avatar from "./assets/image-avatar.jpg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as MoonIcon } from "./assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "./assets/icon-sun.svg";

export const Aside = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const element = document.body;
    element.classList.toggle("dark-mode");
  };

  return (
    <aside>
      <div className="logo">
        <Logo />
        <div className="empty"></div>
      </div>
      <div className="aside-bottom">
        <div className="mode-toogle" onClick={toggleDarkMode}>
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" width={40} />
        </div>
      </div>
    </aside>
  );
};
