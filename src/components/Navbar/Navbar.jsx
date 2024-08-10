import { useState } from 'react';
import LOGO_BIG from '../Navbar/../../assets/images/logo-big.svg';
import LOGO_SMALL from '../Navbar/../../assets/images/logo-small.png';

import { useEffect } from 'react';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import NavLinks from './NavLinks';
import AppMenu from './Menu';

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
          <div className="block md:hidden">
            <AppMenu className="text-black dark:text-white" />
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
}

export default AppNavbar;
