// dependencies

import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// data
import products from "./data/products.js";

// components and pages
import Nav from "./components/Nav.js";
import HomePage from "./pages/HomePage.js";
import GalleryPage from "./pages/GalleryPage.js";
import StaffPage from "./pages/StaffPage.js";
import OrderPage from "./pages/OrderPage.js";
// import ContactPage from "./pages/ContactPage.js";
import EventPage from "./pages/EventPage.js";
import CreatePage from "./pages/CreatePage.js"
import EditPage from "./pages/EditPage.js"
import TopicsPage from "./pages/TopicsPage.js"

// styles and images
import logo from './logo.svg';
import './App.css';

function App() {
  const [event, setEvent] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        {/* <header className="App-header">
          <h1>Ernie Lum</h1>
        </header> */}

        <Nav />

        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/order" element={<OrderPage products={products} />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/log" element={<EventPage setEvent={setEvent} />} />
              <Route path="/add-event" element={<CreatePage />} />
              <Route path="/edit-event" element={<EditPage eventToEdit={event} />} />
              <Route path="/topics" element={<TopicsPage />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 <i>Ernie Lum</i></p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
