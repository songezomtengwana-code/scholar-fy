import styles from "../styles/More.module.css";

const more = () => {
  return (
    <main className={styles.more}>
      <div className={styles.section}>
        <section className={styles.form}>
          <div className={styles.formDisplay}>
            <div className={styles.box}>
              <h2>Contact Us</h2>
              <form
                action="MAILTO:mtengwanas@gmail.com"
                method="POST"
                encType="text/plain"
              >
                <div>
                  <input type="text" name="name" required />
                  <label>*Name</label>
                </div>
                <div>
                  <input type="email" name="" required />
                  <label>*Email</label>
                </div>
                <div>
                  <textarea name="subject" id="" cols="30" rows="10"></textarea>
                  <label>Comment</label>
                </div>

                <button type="submit" value="submit">
                  {" "}
                  Send Message{" "}
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className={styles.socials}>
          <div className="container">
            <div className="title">More From Us !</div>
            <div className="btns">
              <div className="btn">link</div>
              <div className="btn">link</div>
              <div className="btn">link</div>
              <div className="btn">link</div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          place-items: center;
        }
        .title {
          color: var(--primary);
        }
        .btns {
          display: flex;
          flex-flow: column;
          justify-content: space-around;
          height: 60vh;
          width: 90%;
        }
        .btn {
          padding: 1em;
          background: var(--light);
          text-align: center;
          border: 1px solid var(--grey);
          border-radius: 12px;
          color: var(--primary);
          width: 100%;
        }
        .btn:hover {
          background: var(--primary);
          color: var(--light);
          border: 1px solid;
          transition: all 1s;
        }
        .footer p {
          margin-top: 20px;
          color: var(--grey);
        }
      `}</style>
    </main>
  );
};

export default more;
