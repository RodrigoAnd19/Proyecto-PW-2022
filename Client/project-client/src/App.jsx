import './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Log_In from './components/Main/Log_In/Log_in';
import Tutores from './components/Tutores/Tutores'
import Information from './components/Tutores/Informacion/Informacion';
import Cursos from './components/Cursos/Cursos';
import FAQ from './components/FAQ/FAQ';
import Subtema from './components/Cursos/Subtemas/Subtema';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <Header /> 
      <Main />
      
        <Routes>
          <Route path='main' index element={ <Main /> } />
          <Route path='login' index element={ <Log_In /> } />
          <Route path='tutores' index element={ <Tutores /> } />
          <Route path='info' index element={ <Information /> } />
          <Route path='cursos' index element={ <Cursos /> } />
          <Route path='faq' index element={ <FAQ /> } />
          <Route path='sub' index element={ <Subtema /> } />
        </Routes>

    </div>
  )
}

export default App
