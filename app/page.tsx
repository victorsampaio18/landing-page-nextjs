import Header from "./components/Header";
import Banner from "./components/Banner";
import Info from "./components/Info";
import Forms from "./components/Forms";
import Filter from "./components/Filter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Info />
      <Forms />
      <Filter />
      <Footer />
    </main>
  );
}