import { MenuProps } from 'antd';
import { signOut } from 'next-auth/react';

const handleMenuClick: MenuProps['onClick'] = async (e) => {
  await signOut();
};

export const items: MenuProps['items'] = [
  {
    label: 'Sign out',
    key: '1',
  },
];

export const menuProps = {
  items,
  onClick: handleMenuClick,
};
