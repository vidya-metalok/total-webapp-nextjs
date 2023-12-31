import "../styles/globals.css"
import "../styles/sidebar.css"
import "../styles/navbar.css";
import "../styles/league.css";
import "../styles/quickTrade.css";
import "../styles/layout.css";
import "../styles/wallet.css";
import "../styles/teamsPage.css";
import "../styles/tradeComponent.css"
import "../styles/loginpage.css";
import "../styles/portfolio.css";
import "../styles/candleStick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/tansactionHist.css";
import "../styles/feedback.css"
import "../styles/community.css"
import "../styles/refferal.css"
import '../styles/profile.css'
import '../styles/faq.css'
import "../styles/profile-link.css"
import "../styles/news.css"
import { useEffect } from "react";



import { Provider } from 'react-redux';

import { store, persistor } from '@/components/redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "@/components/redux/store";
import Head from 'next/head';
// import Router from "next/router";
const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <link rel="icon" href="/images/web-app-fav-icon.svg" />
          <title>Sportsverse</title>
        </Head>
        <Component {...pageProps} />

      </PersistGate>

    </Provider>

  )
}

export default wrapper.withRedux(App)
