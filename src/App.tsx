import { Route, Routes } from 'react-router-dom';

import AddDocumentPage from './pages/AddDocumentPage';
import Facts from './pages/Facts';
import Home from './pages/Home';

const AbsoluteBackground = () => {
  return <div className="background w-full h-full fixed"></div>;
};

const App = () => {
  return (
    <div className="relative w-full h-screen">
      <AbsoluteBackground />
      <main className="w-full flex flex-col justify-center items-center">
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/upload" element={<AddDocumentPage />}></Route>
          <Route path="/facts" element={<Facts />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
