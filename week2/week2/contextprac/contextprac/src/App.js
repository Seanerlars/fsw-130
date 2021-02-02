import React from 'react'
import './index.css'
import FormInput from './components/FormInput'
import List from './components/list'
import Footer from './components/Footer'
import {DataProvider} from './components/DataProvder'


function App() {
  return(
    <DataProvider>
    <div className="App">
      <h1>Movie List</h1>
     
      <FormInput />
      <List />
      <Footer />


    </div>
    </DataProvider>
  )
}

export default App