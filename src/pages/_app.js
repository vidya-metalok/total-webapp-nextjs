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
import "../styles/tansactionHist.css"



import { Provider } from 'react-redux';

import { store, persistor } from '@/components/redux/store';
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  console.log("store...+++++++++++.", store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />

      </PersistGate>

    </Provider>

  )
}
