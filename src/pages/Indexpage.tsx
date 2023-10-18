import Header from "../components/Header";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

const Indexpage = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </>
  );
};

export default Indexpage;
