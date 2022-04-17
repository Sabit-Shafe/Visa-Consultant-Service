import './App.css';
import Header from './pages/Shared/Header';
import Footer from './pages/Shared/Footer'
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
