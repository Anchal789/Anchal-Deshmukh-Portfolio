import AboutMe from "./Component/AboutMe";
import Header from "./Component/Header";
import NameSection from "./Component/NameSection";

function App() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>
      <main className="flex-1 pl-24 md:pl-24 lsm:pl-0 sm:pl-0 xs:pl-0">
        <NameSection/>
        <AboutMe/>
      </main>
    </div>
  );
}

export default App;
