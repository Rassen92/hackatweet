import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import user from "../reducers/user";
import tweet from "../reducers/tweet";
import hashtag from "../reducers/hashtag";
const reducers = combineReducers({ user, tweet, hashtag });

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Twitter fait Maison</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
