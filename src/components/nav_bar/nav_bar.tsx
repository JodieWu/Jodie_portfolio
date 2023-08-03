import styles from "../../styles/nav_bar.module.css";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav_container}>
        <div>
          <Link href="/">
            <Image src="/logos/Logo.svg" width={172} height={50} alt="logo" />
          </Link>
        </div>

        <div className={styles.nav_list}>
          <ul>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <Link href="/">Logos</Link>
            </li>
            <li>
              <Link href="/">Illustrations</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
