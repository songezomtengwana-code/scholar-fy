const fallback = () => {
  return (
    <main className="layout">
      <section className="book-display"></section>
      <section className="about-display">
        <div className="title"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="text"></div>
        <div className="btn"></div>
      </section>
      <style jsx>{`
        .layout {
          height: 92vh !important;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-content: center;
          place-content: center;
        }
        .book-display {
          width: 25vw;
          height: 70vh;
          background: #b9b9b959;
          display: grid;
          place-content: center;
          margin: auto;
          border-radius: 5px;
        }
        .about-display {
          display: flex;
          flex-flow: column;
          justify-content: space-evenly;
        }
        .title {
          width: 35vw;
          height: 8vh;
          background: #b9b9b959;
        }
        .text {
          width: 8vw;
          height: 4vh;
          background: #b9b9b959;
        }
      `}</style>
    </main>
  );
};

export default fallback;
