import {Route, Routes} from 'react-router-dom';
import Todos from './componentes/Todos';
import Nuevo from './componentes/Nuevo';
import Editar from './componentes/Editar';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Todos/>}/>
        <Route path='/nuevo' element={<Nuevo/>}/>
        <Route path='/editar/:id' element={<Editar/>}/>
      </Routes>
    </div>
  );
}

export default App;
