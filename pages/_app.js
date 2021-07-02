import "../styles/globals.css";
import Navbar from "../components/navbar";
import Meta from "../components/Meta";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Meta />
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
