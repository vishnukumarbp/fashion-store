import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import store from "../redux/store";

function App({ Component, pageProps }) {
  return (
    <>
      <SEO title={process.env.siteTitle} />
      <Provider store={store}>
        <div className="relative min-h-screen">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default App;
