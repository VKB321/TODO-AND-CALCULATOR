
import './App.css';
import Todo from './Todo/Todo';
import Calculator from './Calculator/Calculator'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Todo/>}/>
        <Route path='calculator' element={  <Calculator/>}/>
      </Routes>
      </BrowserRouter>

   
   
    </div>

  );
}

export default App;
