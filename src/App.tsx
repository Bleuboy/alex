import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AddDocumentPage from './pages/AddDocumentPage';
import Facts from './pages/Facts';

const App = () => {
  return (
    <main className="bg-background w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/upload" element={<AddDocumentPage />}></Route>
        <Route path="/facts" element={<Facts />}></Route>
      </Routes>
    </main>
  );
};

export default App;
