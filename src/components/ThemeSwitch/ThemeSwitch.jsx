import { Space, Switch } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext';

const ThemeSwitch = () => {
  const { themeMode, switchMode } = useContext(ThemeContext);

  return (
    <Switch
      checkedChildren="Light"
      unCheckedChildren="Dark"
      checked={themeMode === 'dark'}
      onChange={switchMode}
    />
  );
};
export default ThemeSwitch;
