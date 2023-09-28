import { useEffect, useState } from 'react';
import './App.css';
import './components/AddItem';
import AddItem from './components/AddItem';
import './components/Items';
import Items from './components/Items';
import { MOCK_ITEMS } from './mockData';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(MOCK_ITEMS);
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <AddItem></AddItem>
          <Items items={items}></Items>
        </div>
      </div>
    </div>
  );
}

export default App;
