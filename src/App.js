import logo from './logo.svg';
import './App.css';
import Pricing from './Price.js'

function App() {
  return (
    <div className="App">
      <Pricing  name="5GB" name1= 'Single' name3='No - ' name4='0'></Pricing>
      <Pricing  name="50GB" name1= 'Ten' name3 = 'Limited' name4='10'></Pricing>
      <Pricing name="500GB" name1= 'Unlimited' name3 = 'UnLimited' name4='20'></Pricing>
    </div>
  );
}

export default App;
