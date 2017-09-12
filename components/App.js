import React from 'react'
import About from "./About";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";

class App extends React.Component {

  render() {
    return (
      <div>
        <About />
        <NewItemForm />
        <ItemList />
      </div>
    )
  }
}

export default App