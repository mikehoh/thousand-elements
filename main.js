var components = [
  {
    id: 1,
    title: 'Im react component 1'
  },
  {
    id: 2,
    title: 'Im react component 2'
  },
  {
    id: 3,
    title: 'Im react component 3'
  }
];

var btnGenerate = document.getElementById('generate');
var output = document.getElementById('number');

btnGenerate.addEventListener('click', function(event) {
  var num = Math.floor(Math.random() * 1000) + 1;
  output.innerHTML = num;
});

ReactDOM.render(
  <Component title='Join the party!' />,
  document.getElementById('react-container1')
);