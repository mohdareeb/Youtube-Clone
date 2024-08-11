
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import {Provider} from "react-redux"
import store from "./utils/store"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import WatchPage from './component/WatchPage';
import VideoContainer from './component/VideoContainer';


const router = createBrowserRouter([
  { path : "/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<VideoContainer/>
      },{
        path:"/watch",
        element:<WatchPage/>
      }
    ]

  }
])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
