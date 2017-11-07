function Wanghuajian(props) {
  return <h1>display, {props.name}</h1>;
}

class Apple extends React.Component {
  render() {
    return <h1>Wanghuajian, {this.props.name}</h1>
  }
}





function Child(props) {
  return <h1>Sara, {props.name}</h1>;
} 

function Parent() {
  return (
    <div>
      <Child name="Sara" />
    </div>
  );
} 


class Parent extends React.Component {
  render() {
    return (
      <div>
        <Child name="Sara" />
      </div>
    );
  }
} 

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);// 3




