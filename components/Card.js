import Image from "next/image";
import styles from "../styles/Card.module.css";

const Card = ({ title, BookDetails }) => {
  return (
    <div className={styles.body}>
      <h2 className={styles.row__title}>{title}</h2>
      <div className={styles.inner}>
        {BookDetails.map((details) => {
          return (
            <div className={styles.card} key={details.id}>
              <div className={styles.thumb}>
                <img src={details.img} alt="book" style={{ height: "200px" }} />
              </div>
              <section className={styles.content}>
                <h3 className={styles.title}>{details.title}</h3>
                <p className={styles.author}>{details.author}</p>
                <span className={styles.grade}>Grade {details.grade}</span>
                <a href={"/books/" + details.id} className={styles.btn}>
                  Details
                </a>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
