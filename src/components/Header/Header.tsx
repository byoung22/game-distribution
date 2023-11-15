import HeaderButton from '../HeaderButton/HeaderButton';
import styles from './Header.module.css';
import logoUrl from '../../assets/logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img src={logoUrl} className={styles.logo} alt="Dream Logo" />
          <h1 className={styles.title}>
            DREAM
            <sup className={styles.sup}>®</sup>
          </h1>
        </div>
        <div className={styles.menuContainer}>
          <HeaderButton title="STORE" sub={['Home', 'Discovery Queue', 'Wishlist', 'Point Shop', 'News', 'Stats']} />
          <HeaderButton title="COMMUNITY" sub={['Home', 'Discussions', 'Workshop', 'Market', 'Broadcasts']} />
          <HeaderButton title="ABOUT" />
          <HeaderButton title="SUPPORT" />
        </div>
        <div className={styles.loginContainer}>
          <button type="button" className={styles.button}>login</button>
          <p>|</p>
          <button type="button" className={styles.button}>language ▼</button>
        </div>
      </div>
    </header>
  );
}
