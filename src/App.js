import logo from './logo.svg';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    }
  ])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
