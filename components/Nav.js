import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  const showNav = () => {
    const ham = document.getElementById("ham_cont");
    const links = document.getElementById("lower");
    const link = document.getElementById("href");
    ham.onclick = function () {
      links.style.transform = "scale(1)";
    };
    link.onclick = function () {
      links.style.transform = "scale(0)";
    };
  };

  const Cross = () => {
    const btn = document.getElementById("ham_cont");
    const ham = document.querySelector(".hamburger");
    btn.addEventListener("click", (e) => {
      switch (e.target.value) {
        case "cross":
          ham.classList.toggle("cross");
          break;
        default:
          alert("cross isnt available");
          break;
      }
    });
  };

  return (
    <section className={styles.nav__links__container}>
      <nav className={styles.nav__container}>
        <span className={styles.nav__brand}></span>
        <button
          className={styles.ham__container}
          value="cross"
          id="ham_cont"
          onClick={showNav}
          onClick={Cross}
        >
          <span
            className={styles.ham__icon.hamburger}
            className="hamburger"
            id="ham"
          ></span>
        </button>
      </nav>
      <section className={styles.lower} id="lower">
        <div className={styles.links__container}>
          <Link href="/">
            <div className={styles.nav__link} id="href">
              <i className="bi bi-house-fill"></i> Home
            </div>
          </Link>
          <Link href="/books">
            <div className={styles.nav__link}>
              <i className="bi bi-book-half"></i> Books
            </div>
          </Link>
          <Link href="/videos">
            <div className={styles.nav__link}>
              <i className="bi bi-collection-play"></i> Videos
            </div>
          </Link>
          <Link href="/more">
            <div className={styles.nav__link}>
              <i className="bi bi-list"></i> More
            </div>
          </Link>
        </div>
        <footer className={styles.footer}>
          <p>
            Scholarfy&trade; Copyrights &copy; reserved <br /> powered by sm
            designs{" "}
          </p>
        </footer>
      </section>
    </section>
  );
};

export default Nav;
