import './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Log_In from './components/Main/Log_In/Log_in';
import Tutores from './components/Tutores/Tutores'
import Information from './components/Tutores/Informacion/Informacion';
import Cursos from './components/Cursos/Cursos';
import FAQ from './components/FAQ/FAQ';
import Subtema from './components/Cursos/Subtemas/Subtema';
import Subtema1 from './components/Cursos/Subtemas/Subtema1';
import Subtema2 from './components/Cursos/Subtemas/Subtema2';
import Subtema3 from './components/Cursos/Subtemas/Subtema3';
import Subtema4 from './components/Cursos/Subtemas/Subtema4';
import Subtema5 from './components/Cursos/Subtemas/Subtema5';

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
          <Route path='sub1' index element={ <Subtema1 /> } />
          <Route path='sub2' index element={ <Subtema2 /> } />
          <Route path='sub3' index element={ <Subtema3 /> } />
          <Route path='sub4' index element={ <Subtema4 /> } />
          <Route path='sub5' index element={ <Subtema5 /> } />
        </Routes>

    </div>
  )
}

export default App
