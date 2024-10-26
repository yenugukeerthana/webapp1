import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './Components/Registration';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [msg, setMsg] = useState<boolean>(false);

  const onClick = () => {
    setMsg(true);
  };

  return (
    <BrowserRouter>
      <>
        <Header />
        <div className="App">
          <h1>Welcome to my website</h1>
          <main style={{ padding: '20px' }}>
            <Routes>
              <Route path="/help" element={<h2>Help Content</h2>} />
              <Route path="/about" element={<h2>About Page</h2>} />
              <Route path="/carrers" element={<h2>Careers Page</h2>} />
              <Route path="/profile" element={<h2>Profile Page</h2>} />
            </Routes>
          </main>
          <button onClick={onClick}>Register</button>
          {msg && <Registration />}
          <button onClick={onClick}>Login</button>
        </div>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
