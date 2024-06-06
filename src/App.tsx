import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gradient-to-t from-slate-950 to-slate-900 overflow-hidden">
      <div className="container mx-auto">
        <Carousel />
      </div>
    </div>
  );
}

export default App;