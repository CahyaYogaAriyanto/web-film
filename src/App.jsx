import Home from './Pages/Home';
import Routers from './Components/Routers';

function App() {
  return (
    <>
      <Routers path="/" element={<Home/>}/>
    </>
  )
}

export default App;
