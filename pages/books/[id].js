import Fallback from "../../components/fallback";
import Data from "../../data/b-data.json";

export const getStaticPaths = async () => {
  const data = Data;

  const paths = data.map((book) => {
    return {
      params: { id: book.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = Data + id;

  return {
    props: { book: data },
  };
};

const Details = ({ book }) => {
  if (!book) return <Fallback />;
  return <Fallback />;
};

export default Details;
