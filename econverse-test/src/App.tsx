import "./styles/global.scss";

import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;