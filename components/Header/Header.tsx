import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'hooks';
import { Container } from 'components';
import { CloseIcon, MenuIcon } from 'components/icons';
import { IRouteLink } from 'types';
import logo from 'public/images/logo.png';
import { navbarItems } from './consts';
import variables from 'styles/variables.module.scss';
import styles from './Header.module.scss';

function Header() {
  const { pathname } = useRouter();
  const widthMdOrLess = useMediaQuery(`(max-width: ${variables.widthMd})`);
  const widthXs = useMediaQuery(`(max-width: ${variables.widthXs})`);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logo}>
            <Image
              src={logo}
              alt="logo"
              width={widthXs ? 150 : widthMdOrLess ? 200 : 250}
            />
          </Link>

          {widthMdOrLess && (
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <Link href="/contacts">Book a call</Link>
              </div>

              <button
                type="button"
                className={styles.menuButton}
                onClick={openMenu}>
                <MenuIcon className={styles.icon} />
              </button>
            </div>
          )}

          <nav
            className={
              menuOpen ? [styles.menu, styles._active].join(' ') : styles.menu
            }>
            {widthMdOrLess && (
              <button
                type="button"
                className={styles.closeButton}
                onClick={closeMenu}>
                <CloseIcon className={styles.icon} />
              </button>
            )}

            <ul className={styles.list}>
              {navbarItems.map(({ name, path, id }: IRouteLink) => (
                <li key={id} className={styles.menuItem}>
                  <Link
                    className={
                      pathname === path
                        ? [styles.link, styles._active].join(' ')
                        : styles.link
                    }
                    href={path}
                    onClick={closeMenu}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={styles.button}>
              <Link href="/contacts" onClick={closeMenu}>
                Book a call
              </Link>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
