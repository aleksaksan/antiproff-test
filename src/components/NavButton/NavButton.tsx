import { ReactNode } from 'react';
import './NavButton.scss';

type NavButtonProps = {
  children: ReactNode
  onClick: () => void;
};

export const NavButton = ({children, onClick}: NavButtonProps) => {
  return (
    <button
      className='btn'
      onClick={onClick}
    >
      {children}
    </button>
  );
};
