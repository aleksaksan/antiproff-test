import { FC, ReactNode } from 'react';
import './Header.scss';

type HeaderProps = {
  children: ReactNode;
}

export const Header: FC<HeaderProps> = ({children}) => {
  return (
    <header>
      <div className='max-width'>
        {children}
      </div>
    </header>
  );
};
