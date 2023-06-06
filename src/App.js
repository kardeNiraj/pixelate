import Footer from './components/Footer';
import GetImages from './components/GetImages';
import Header from './components/Header';

export default function App() {
  return (
    <div className="scroll-smooth md:scroll-auto bg-skin-body font-base">
      {/* <div className="loader w-full height-full fixed z-10 bg-slate-400 opacity-20"></div> */}
      <Header />
      <GetImages />
      <Footer />
    </div>
  );
}
