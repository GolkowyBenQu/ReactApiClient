import React from 'react'
import About from "./About";
import ItemsComponent from "./ItemsComponent";

class App extends React.Component {

  render() {
    return (
      <div>
        <About />
        <ItemsComponent />
      </div>
    )
  }
}

export default App