import { Provider } from "react-redux";
import Router from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import store from "../redux/store";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
