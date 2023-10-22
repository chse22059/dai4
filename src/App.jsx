import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
    return (
      <div>
        <Header>
        <img src="public/dove.png" />
        </Header>
        <Main>
        <img src="public/favorite-1.jpg" />
        <img src="public/favorite-2.jpg" />
        <img src="public/favorite-3.jpg" />
        <img src="public/favorite-4.jpg" />
        </Main>
        <Footer />
      </div>
    );
  }