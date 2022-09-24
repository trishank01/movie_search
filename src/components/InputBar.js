import React, { Component } from 'react'

class InputBar extends Component {

  render() {
    return (
      <>
     <div className='search'>
      <input onChange={this.props.handleSubmit} type='text' placeholder='Search for movie title'/>
     </div>
      </>
    )
  }
}

export default InputBar