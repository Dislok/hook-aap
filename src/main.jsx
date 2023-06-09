import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  
} from "react-router-dom"; 

import './index.css'


// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { Countercustom } from './01-useState/Countercustom'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormulariosCustom } from './02-useEffect/FormulariosCustom'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHooks } from './06-memos/CallbackHooks'
//import { Padre } from './07-tarea-memo/Padre'

import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import { HomePage } from './09-useContext/HomePage';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <MainApp />
    </BrowserRouter>
    
  </React.StrictMode>,
)
