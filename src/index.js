// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App.js';
import InputField from './components/InputField.js';
import TextareaField from './components/TextareaField.js';
import Employee from './components/Employee';

// Mockup data
let components = [
  {
    id: 1,
    title: 'Im react component 1',
    type: 'InputField',
    value: '111'
  },
  {
    id: 2,
    title: 'Im react component 2',
    type: 'TextareaField',
    value: '222'
  },
  {
    id: 3,
    title: 'Im react component 3',
    type: 'InputField',
    value: '333'
  }
];
import { data as employeesList } from './data';

// for (let person of employeesList) {
//   ReactDOM.render(
//     <Employee person={person} changed={onEmployeeUpdate} />,
//     document.getElementById('react-container4')
//   );
// }

function onEmployeeUpdate(value, id) {
  console.log('update', value, id);
  const updated = employeesList.map(item => {
    if (item.id === id) {
      item.salary = value;
    }
    return item;
  });
  console.log('list', updated);
}

const EmployeesList = ({children}) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('react-container5')
  );
};

const EmployeesApp = ({data}) => (
  <div>
    <EmployeesList children={data}>
      {
        data.map(person => {
          return <Employee key={person.id} person={person} changed={onEmployeeUpdate} />;
        })
      }
    </EmployeesList>
  </div>
);

ReactDOM.render(<EmployeesApp data={employeesList} />, document.getElementById('react-container4'));




var componentsData = document.getElementById('components-data');
componentsData.innerHTML = JSON.stringify(components);

var btnGenerate = document.getElementById('generate');
var output = document.getElementById('number');
var variable = document.getElementById('variable');
let num = {value: 0};
let comp1 = 0;

btnGenerate.addEventListener('click', function(event) {
  num.value = Math.floor(Math.random() * 1000) + 1;
  output.innerHTML = num.value;
  renderInput.forceUpdate();
});

const renderInput = ReactDOM.render(
  <InputField data={num} func={f} />,
  document.getElementById('react-container1')
);

const renderTextarea = () => {
  ReactDOM.render(
    <TextareaField data={{value: comp1}} />,
    document.getElementById('react-container2')
  );
}

function f(val) {
  comp1 = val.target.value;
  variable.innerHTML = comp1;
  renderTextarea();
}

renderTextarea();

ReactDOM.render(
  <App data={components} onUpdate={updateComponents} />,
  document.getElementById('react-container3')
);

function updateComponents(items) {
  components = [...items];
  componentsData.innerHTML = JSON.stringify(components);
}