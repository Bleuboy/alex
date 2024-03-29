import { Route, Routes } from 'react-router-dom';

import AddDocumentPage from './pages/AddDocumentPage';
import { DemoVideo } from './pages/DemoVideo';
import Facts from './pages/Facts';
import { Home } from './pages/Home';

const AbsoluteBackground = () => {
  return <div className="background w-full h-full fixed"></div>;
};

const App = () => {
  return (
    <div className="relative w-full h-screen">
      <AbsoluteBackground />
      <main className="w-full flex flex-col">
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/upload" element={<AddDocumentPage />}></Route>
          <Route path="/facts" element={<Facts />}></Route>
          <Route path="/demo-video" element={<DemoVideo />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
