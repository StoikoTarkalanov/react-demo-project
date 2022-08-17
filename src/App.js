import { Routes, Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/edit/:userId" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
