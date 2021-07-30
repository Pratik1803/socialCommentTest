import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Body from './Body';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Body />
    </div>
  );
}

export default App;
