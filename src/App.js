import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import ProjectDetails from './Component/ProjectDetails';
import Main from './Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'home/:id',
          element:<ProjectDetails></ProjectDetails>
        },
        {
          path:'/:id',
          element:<ProjectDetails></ProjectDetails>
        },
      ] 
    }
  ])
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
