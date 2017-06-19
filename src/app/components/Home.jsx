import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0
  };
  setTimeout(() => {
    this.setState({
      status: 1
    });
  }, 3000);
}

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }
  render() {
    return(
      <div>
        <p>In the Home Component!!</p>
        <p>My name is {this.props.name}, my age is {this.state.age}</p>
        <p>Status: {this.state.status}</p>
        <hr/>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me 3 yrs  older!</button>
        <hr/>
        <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
      </div>
    )
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  greet: React.PropTypes.func
};






{/* <div>
  <h4>Hobbies</h4>
  <ul>
  {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
</ul>
</div> */}
