import styles from "../styles/navbar.module.css";

const navbar = () => {
  const showlinks = () => {
    const ham = document.getElementById("ham__icon");
    const links = document.getElementById("links");
    const nav = document.getElementById("top__nav");
    const close = document.getElementById("x");
    const brand = document.getElementById("brand");

    ham.onclick = function () {
      links.style.transform = "translateY(8vh)";
      links.style.transition = "1s";
      nav.style.transition = ".95s";
      nav.style.transform = "translateY(0vh)";
      nav.style.bottom = "unset";
      nav.style.background = "var(--light)";
      nav.style.color = "var(--dark)";
      brand.style.color = "var(--dark)";
      ham.style.display = "none";
    };
    close.onclick = function () {
      links.style.transform = "translateY(100vh)";
      nav.style.transform = "translateY(92vh)";
      nav.style.top = "unset";
      nav.style.background = "var(--dark)";
      brand.style.color = "var(--light)";
      ham.style.display = "block";
    };

    console.log("showlinks up and running , click that hamburger icon");
  };

  return (
    <navbar className={styles.navbar}>
      <nav className={styles.nav} id="top__nav">
        <div className={styles.nav__brand} id="brand"></div>
        <ul className={styles.desktop__links}>
          <a href="/">Home</a>
          <a href="books">Book Shelf</a>
          <a href="videos">Video Store</a>
          <a href="more">More</a>
        </ul>
        <div className="socials">
          <a href="">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <span className={styles.ham__icon} id="ham__icon" onClick={showlinks}>
          <i className="bi bi-list"></i>
        </span>
      </nav>
      <section className={styles.mobile__links} id="links">
        <div className={styles.x} id="x">
          <i className="bi bi-x-circle"></i>
        </div>
        <div className={styles.center}>
          <ul>
            <li id="indi_link">
              <a href="/">Home</a>
            </li>
            <li id="indi_link">
              <a href="/books">Book Shelf</a>
            </li>
            <li id="indi_link">
              <a href="/videos">Video Store</a>
            </li>
            <li id="indi_link">
              <a href="/more">More</a>
            </li>
            <div className={styles.socials}>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </ul>
        </div>
      </section>
      <style jsx>{`
        .socials {
          float: right;
          display: flex;
          flex-flow: row;
          justify-content: space-evenly;
          font-size: 20px;
          color: var(--primary);
          width: 15vw;
          margin: auto;
          margin-right: 0;
          cursor: pointer;
        }
        .socials > a > i:hover {
          transition: 0.5s;
          opacity: 0.5;
        }
        @media (max-width: 601px) {
          /* small screen */
          .socials {
            display: none;
          }
        }
      `}</style>
    </navbar>
  );
};

export default navbar;
