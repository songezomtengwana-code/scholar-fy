import Card from "../components/Card";
import BookDetails from "../data/b-data.json";

const Books = () => {
  return (
    <div style={{ padding: "0 0 4em 0" }}>
      <div className="container">
        <h1 className="head">Books</h1>
        <div className="searchpair">
          <input type="search" className="search" placeholder="Search Books" />
          <button className="look" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <Card BookDetails={BookDetails} title="All Books" />
      <Card
        BookDetails={BookDetails.filter(
          (Details) => Details.author === "Siyavula"
        )}
        title="Siyavula Books"
      />
      <Card
        BookDetails={BookDetails.filter(
          (Details) => Details.title === "Mathematics"
        )}
        title="Mathematical Books"
      />
      <Card
        BookDetails={BookDetails.filter(
          (Details) => Details.author === "Pearson Education"
        )}
        title="Pearson Education"
      />
      <p className="copy">Copyrights &copy; 2021 Scholarfy</p>

      <style jsx>{`
        .head {
          color: var(--primary);
          font-weight: 500;
          margin: auto 0;
        }
        .container {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          background: var(--dark);
          box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
          padding: 1em 5em;
        }
        .searchpair {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          width: 23vw;
        }
        .search {
          padding: 1em;
          color: var(--light);
          background: #0071f341;
          border: 1px solid transparent;
          border-radius: 30px;
          font-size: 16px;
          outline: none;
        }
        .search:focus {
          box-shadow: 0 0 5px 1px rgba(0, 97, 208, 0.3);
          background: var(--primary);
          transition: 0.8s;
        }
        .look {
          padding: 0.5em 0.8em;
          background: transparent;
          border: 1px solid var(--primary);
          border-radius: 50%;
          color: var(--light);
          font-size: 20px;
          cursor: pointer;
        }
        .look:hover {
          background: var(--primary);
          transition: 1s;
        }
        @media (max-width: 600px) {
          .container {
            flex-flow: column;
            padding: 1em 0;
          }
          .searchpair {
            margin: 0 auto;
            width: fit-content;
          }
          .head {
            text-align: center;
            margin: 10px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Books;
