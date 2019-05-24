import React from 'react';

export default class InputField extends React.Component {

  change(e) {
    if (this.props.func) {
      this.props.func(e);
    }
  }
  render() {
    return (
      <div>
        <h2>Input component { this.props.data.value }</h2>
        <input type="text" onChange={(e) =>  this.change(e)}/>
      </div>
    );
  }

}