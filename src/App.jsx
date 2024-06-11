import Header from "./Component/Header";
import NameSection from "./Component/NameSection";

function App() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header/>
      <main className="flex-1">
        <NameSection/>
      </main>
    </div>
  );
}

export default App;
