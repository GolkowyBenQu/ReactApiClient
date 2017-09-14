import React from 'react'
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import fetch from 'isomorphic-fetch'

class ItemsComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {items: []}
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/items.php')
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response')
        }
        return response.json()
      })
      .then(newItems => {
        this.setState({items: newItems})
      })
  }

  onSubmit(event) {
    event.preventDefault()

    const email = encodeURIComponent(this.state.user.email)
    const password = encodeURIComponent(this.state.user.password)
    const formData = `email=${email}&password=${password}`

    const config = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // body: formData
      body: JSON.stringify({
        email: email,
        password: password
      })
    }

    const promise = fetch('http://127.0.0.1:8000/', config)

    promise
      .catch(error => console.log(error))
      .then(result => console.log(result))
  }

  onChange(event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value

    this.setState({
      user
    })
  }

  render() {
    return (
      <div>
        <NewItemForm onSubmit={this.onSubmit.bind(this)} onChange={this.onChange.bind(this)} />
        <ItemList items={this.state.items}/>
      </div>
    )
  }
}

export default ItemsComponent