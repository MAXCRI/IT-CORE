import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwrsWookYyCt67nEEjfdfZTmHMKRI58oA",
  authDomain: "it-core-10ddb.firebaseapp.com",
  projectId: "it-core-10ddb",
  storageBucket: "it-core-10ddb.appspot.com",
  messagingSenderId: "577039306101",
  appId: "1:577039306101:web:ed1904377a67218b7b173c"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
