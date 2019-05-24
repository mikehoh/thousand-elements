import React from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.components = {
      InputField,
      TextareaField
    };
  }

  onUpdate(val, id) {
    if (this.props.onUpdate) {
      const updated = this.props.data.map(item => {
        if (item.id === id) {
          item.value = val.target.value;
        }
        return item;
      });
      this.props.onUpdate(updated);
    }
  }

  render() {
    const items = this.props.data.map((item) => {
      const TagName = this.components[item.type];
      return (
        <div key={item.id} style={{border: '1px solid orange', margin: '10px', padding: '10px'}}>
          {item.title}
          <TagName data={item} func={(e) => this.onUpdate(e, item.id)} />
        </div>
      );
    });

    return <div>{items}</div>
  }

}