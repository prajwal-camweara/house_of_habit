import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import Popup from '../../common/Popup/AuthPopup';
import SearchPanel from './SearchPanel/SearchPanel';
import MenuPanel from './MenuPanel/MenuPanel';
import CartPanel from './CartPanel/CartPanel';

import LogoIcon from '../../../assets/icons/hoh-logo.svg?react';
import SearchIcon from '../../../assets/icons/SearchIcon.svg?react';
import UserIcon from '../../../assets/icons/UserIcon.svg?react';
import BagIcon from '../../../assets/icons/BagIcon.svg?react';
import MenuIcon from '../../../assets/icons/MenuIcon.svg?react';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.logo} onClick={() => navigate('/')}>
      <LogoIcon />
    </div>
  );
};

const NAV_ICONS = [
  { icon: SearchIcon, label: 'Search' },
  { icon: UserIcon, label: 'Account' },
  { icon: BagIcon, label: 'Cart' },
  { icon: MenuIcon, label: 'Menu' },
];

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleIconClick = (label) => {
    if (label === 'Account') setIsPopupOpen(true);
    if (label === 'Search') setIsSearchOpen(true);
    if (label === 'Menu') setIsMenuOpen(true);
    if (label === 'Cart') setIsCartOpen(true);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Logo />
          <nav className={styles.actions} aria-label='Site actions'>
            {NAV_ICONS.map(({ icon: Icon, label }) => (
              <button key={label} className={styles.iconBtn} aria-label={label} onClick={() => handleIconClick(label)}>
                <Icon width={32} height={32} />
              </button>
            ))}
          </nav>
        </div>
      </header>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <SearchPanel isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MenuPanel isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
