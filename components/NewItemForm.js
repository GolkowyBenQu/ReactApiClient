import React from 'react'

class NewItemForm extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" onChange={this.props.onChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default NewItemForm