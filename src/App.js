import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={'max-w-1600 mx-auto flex flex-col gap-10'}>
       <Header />
       <Body />
       <Footer />
    </div>
  );
}

export default App;
