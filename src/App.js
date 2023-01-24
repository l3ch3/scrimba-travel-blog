
import './App.css';
import "./index.css";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Data from "./components/Data"

function App() {

  const cards = Data.map(item =>{
    return(
      <Cards
         title={item.title} 
         location={item.location}
         description={item.description}
         image={item.image}
         startDate={item.startDate}
         endDate={item.endDate}
         
         />
         
    )
  })
  return (
    <div className="App">
          <Navbar />
          {cards}
          console.log(cards)
    </div>
  );
}

export default App;
