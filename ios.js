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

function App(props) {
  return <h1>Hello, {props.name}</h1>
} 

const element = <App name="xiaoming" />
ReactDOM.render(
  element,
  document.getElementById('root')
)




function Child(props) {
  return <h1>nihao, {props.name}</h1>
}

function Parent() {
  return (
    <div>
      <Child name="Sara" /> 
      <Child name="Mary" />
    </div>   // 在 组件嵌套中，父组件可以 render 子组件 很多次
  )
}
ReactDOM.render(
  <Parent />, // 组件的表示形式
  document.getElementById('root') // root 是根节点， 这里是用Parent代替 root
)



function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}



function Child(props) {
  return <h1>Hello, {props.name}</h1>
}

function Parent() {
  return (
    <div>
      <Child name="Mary" />
    </div>
  )
}

class Parent extends React.Component {
  render() {
    return <div>
      <Child name="Mary" />
    </div>
  }
}

ReactDOM.render (
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);



// 路由配置的return
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

