import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Products />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
