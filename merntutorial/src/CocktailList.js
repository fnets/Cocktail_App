var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var CocktailFilter = require('./CocktailFilter');
var CocktailAdd = require('./CocktailAdd');

var CocktailRow = React.createClass({
  render: function() {
  	console.log("Rendering CocktailRow", this.props.cocktail);
    return (
      <tr>
        <td>{this.props.cocktail._id}</td>
        <td>{this.props.cocktail.name}</td>
        <td>{this.props.cocktail.strMeasure1}</td>
        <td>{this.props.cocktail.ingredients}</td>
        <td>{this.props.cocktail.instructions}</td>
      </tr>
    )
  }
});

var CocktailTable = React.createClass({
  render: function() {
  	console.log("Rendering CocktailTable, num items:", this.props.cocktails.length);
    var cocktailRows = this.props.cocktails.map(function(cocktail) {
      return <CocktailRow key={cocktail._id} cocktail={cocktail} />
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Measure</th>
            <th>Ingredients</th>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody>
          {cocktailRows}
        </tbody>
      </table>
    )
  }
});

var CocktailList = React.createClass({
  getInitialState: function() {
  	return {cocktails: []};
  },
  render: function() {
  	console.log("Rendering CocktailList, num items:", this.state.cocktails.length);
    return (
      <div>
        <h1>Cocktail List</h1>
        <CocktailFilter submitHandler={this.loadData}/>
        <hr />
        <CocktailTable cocktails={this.state.cocktails}/>
        <hr />
        <CocktailAdd addCocktail={this.addCocktail} />
      </div>
    )
  },
  
  componentDidMount: function() {
    this.loadData({});
  },

  loadData: function(filter) {
    $.ajax('/api/cocktails', {data: filter}).done(function(data) {
      this.setState({cocktails: data});
    }.bind(this));
    // In production, we'd also handle errors.
  },
  
  addCocktail: function(cocktail) {
    console.log("Adding cocktail:", cocktail);
    $.ajax({
      type: 'POST', url: '/api/cocktails', contentType: 'application/json',
      data: JSON.stringify(cocktail),
      success: function(data) {
        var cocktail = data;
        // We're advised not to modify the state, it's immutable. So, make a copy.
        var cocktailsModified = this.state.cocktails.concat(cocktail);
        this.setState({cocktails: cocktailsModified});
      }.bind(this),
      error: function(xhr, status, err) {
        // ideally, show error to user.
        console.log("Error adding cocktail:", err);
      }
    });
  }
});

module.exports = CocktailList;