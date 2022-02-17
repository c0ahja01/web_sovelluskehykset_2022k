
import './App.css';
import Title from './components/Title'
import Header from './components/Header'
import AdvertisementTitle from './components/AdvertisementTitle';



function App() {

// Haetaan palvelimelta ostoslistan sisältö
//const newsListItems = [
 // 'Maitoa',
  //'Leipää',
  
//];
 
  return (
    <div className="App">
      <Header/>
      <Title/>
      <AdvertisementTitle />
      <img src="Korona.jpg"alt="k"/>
      <img src="Korona1.jpg"alt="k1"/>
      
    </div>
  );
}

export default App;
 