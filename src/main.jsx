import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { Countercustom } from './01-useState/Countercustom'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormulariosCustom } from './02-useEffect/FormulariosCustom'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < MultipleCustomHooks/>
  </React.StrictMode>,
)