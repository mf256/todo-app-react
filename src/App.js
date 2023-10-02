import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';
import Items from './components/Items';
import { MOCK_ITEMS } from './mockData';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(MOCK_ITEMS);
  }, []);

  const addItem = (inputValue) => {
    if (inputValue) {
      setItems([...items, { name: inputValue, isCompleted: false }]);
    }
  };

  const toggleItem = (index) => {
    setItems([
      ...items.map((v, i) =>
        i === index ? { ...v, isCompleted: !v.isCompleted } : v
      ),
    ]);
  };

  const deleteItem = (index) => {
    setItems([...items.filter((v, i) => i !== index)]);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-4">
          <Input onAdd={addItem}></Input>
          <Items
            items={items}
            onToggle={toggleItem}
            onDelete={deleteItem}
          ></Items>
        </div>
      </div>
    </div>
  );
}

export default App;
