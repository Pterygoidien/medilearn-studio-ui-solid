// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";
import LoadingSpinner from "./shared/LoadingSpinner";
import  Header  from "./layout/components/header/Header";
import Footer from "./layout/components/footer/Footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Header />
          <Suspense fallback={
            <LoadingSpinner />
          }>{props.children}</Suspense>
          <Footer />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
