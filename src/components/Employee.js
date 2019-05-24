import React, { useState, useEffect } from 'react';

const Employee = ({person, changed}) => {
  const [salary, setSalary] = useState(person.salary);

  const onChange = (e, id) => {
    setSalary(e.target.value);
    changed(e.target.value, id);
  }

  return (
    <div style={{border: '1px solid green', margin: '10px', padding: '10px'}}>
      <h3>Name: { person.first_name } { person.last_name }</h3>
      <p>{ person.email }</p>
      <input type="text" value={salary} onChange={(e) => onChange(e, person.id)} />
    </div>
  );

}

export default Employee;