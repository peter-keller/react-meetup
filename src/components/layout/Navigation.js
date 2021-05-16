import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
