import React from 'react'
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import fetch from 'isomorphic-fetch'

class ItemsComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      newItem: {}
    }
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

    const item = encodeURIComponent(this.state.newItem)

    const config = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        item: item
      })
    }

    const promise = fetch('http://127.0.0.1:8000/items.php', config)

    promise
      .catch(error => console.log(error))
      .then(result => {
        let items = this.state.items
        items.push(item)

        this.setState({
          items: items
        })
      })
  }

  onChange(event) {
    const item = event.target.value

    this.setState({
      newItem: item
    })
  }

  onDeleteClick(event) {
    let item = event.target.dataset.value
    let items = this.state.items

    for (const itemKey of Object.keys(items)) {
      if (items[itemKey] == item) {
        console.log(items[itemKey])
        items.splice(itemKey, 1)
      }
    }

    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div>
        <NewItemForm
          onSubmit={this.onSubmit.bind(this)}
          onChange={this.onChange.bind(this)}
        />
        <ItemList
          items={this.state.items}
          onDeleteClick={this.onDeleteClick.bind(this)}
        />
      </div>
    )
  }
}

export default ItemsComponent