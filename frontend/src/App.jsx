import { RouterProvider } from "react-router-dom";
import routes from "./routes/router";
import './styles/index.css'

function App(){
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App ;