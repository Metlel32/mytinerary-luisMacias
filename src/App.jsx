import Home from './pages/Home'
import Cities from './pages/Cities'
import NotFound from './pages/NotFound'
import './App.css'
import StandartdLayaout from './layaouts/StandardLayaout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CityDetail from './components/CityDetails'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {



  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <StandartdLayaout />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "/home",
            element: <Home />
          },
          {
            path: "/cities",
            element: <Cities />
          },
          {
            path: "/cities/:id",
            element: <CityDetail />
          }
        ]
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  )






  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} ></RouterProvider>
      </Provider>


    </>
  )
}

export default App
