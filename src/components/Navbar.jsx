import { useState } from 'react';
import LOGO_BIG from '../assets/images/logo-big.svg';
import LOGO_SMALL from '../assets/images/logo-small.png';
import HAMBURGER_MENU from '../assets/images/icon-hamburger.svg';

import { useEffect } from 'react';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import NavLinks from './NavLinks/NavLinks';

function AppNavbar() {
  const [navLogo, setNavLogo] = useState(LOGO_BIG);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 1024) {
        setNavLogo(LOGO_BIG);
      } else if (window.innerWidth < 1024) {
        setNavLogo(LOGO_SMALL);
      }
    };
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            className={navLogo === LOGO_SMALL ? 'w-[26px]' : ''}
            src={navLogo}
            alt=""
          />
        </div>
        {/* Nav links */}

        <div className="hidden items-center space-x-10 text-sm  md:flex">
          <NavLinks text="How it works" />
          <NavLinks text="Download" />
          <NavLinks text="Upgrade" />
          <NavLinks text="Feedback" />
          <NavLinks text="Login / Register" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <ThemeSwitch />
          <div className="block md:hidden">
            <img
              src={HAMBURGER_MENU}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppNavbar;
