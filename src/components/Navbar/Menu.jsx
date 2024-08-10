import React, { useEffect, useState } from 'react';
import { Dropdown, Space } from 'antd';
import { CiMenuBurger } from 'react-icons/ci';

const items = [
  {
    label: 'How it works',
    key: '0',
  },
  {
    label: 'Download',
    key: '1',
  },
  {
    label: 'Upgrade',
    key: '3',
  },
  {
    label: 'Feedback',
    key: '4',
  },
  {
    type: 'divider',
  },
  {
    label: 'Login / Register',
    key: '5',
  },
];

const AppMenu = () => {
  const [closeDropDown, setCloseDropDown] = useState(false);

  useEffect(() => {
    const handleScreen = () => {
      if (window.innerWidth >= 768) {
        setCloseDropDown(false);
        console.log(closeDropDown);
      }
    };

    window.addEventListener('resize', handleScreen);

    return () => {
      window.removeEventListener('resize', handleScreen);
    };
  }, []);

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
      open={closeDropDown}
      onOpenChange={(open) => setCloseDropDown(open)}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <CiMenuBurger className="text-black dark:text-white w-6 h-6" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default AppMenu;
