import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='navigation' element = { <Navigation /> } />
    </Routes>
  )
}

export default App;