var React = require('react');
var ReactDOM = require('react-dom');

var CocktailFilter = React.createClass({
  render: function() {
  	console.log("Rendering CocktailFilter");
    return (
      <div>
        <h3>Filter</h3>
        Ingredients:
        <select value={this.state.ingredients} onChange={this.onChangeIngredients}>
          <option value="">(Any)</option>
          <option value="jugs	">jugs</option>
          <option value="everything">everything</option>
        </select>
        <br/>
        Name:
        <select value={this.state.name} onChange={this.onChangeName}>
          <option value="">(Any)</option>
          <option value="Bug Juice	">Bug Juice</option>
          <option value="High School">High School	</option>
        </select>
        <br/>
        <button onClick={this.submit}>Apply</button>
      </div>
    )
  },
  
  getInitialState: function() {
    return {ingredients: "", name: ""};
  },

  onChangeIngredients: function(e) {
    this.setState({ingredients: e.target.value});
  },
  
  onChangeName: function(e) {
    this.setState({name: e.target.value});
  },

  submit: function(e) {
    this.props.submitHandler({name: this.state.name, ingredients: this.state.ingredients});
  }
});

module.exports = CocktailFilter;