import React, { Component } from 'react';
import './App.css';

//Importando los Componentes
import Todo_Activity from './components/Todo_Activity';

class App extends Component
{
  render(){
    return <div>
      <Todo_Activity/> 
    </div>
  }
}

export default App;
