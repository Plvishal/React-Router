import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import ItemsDetails from './pages/ItemsDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        {
          path: 'itemsDetails',
          element: <ItemsDetails />,
          children: [{ path: 'itemsDetails/:id' }],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
