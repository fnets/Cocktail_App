var CocktailFilter = React.createClass({
  render: function() {
    return (
      <div>A way to filter the list of Cocktails would come here.</div>
    )
  }
});

CocktailRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.cocktail.id}</td>
        <td>{this.props.cocktail.name}</td>
        <td>{this.props.cocktail.ingredients}</td>
        <td>{this.props.cocktail.instructions}</td>
      </tr>
    )
  }
});

var CocktailTable = React.createClass({
  render: function() {
    var cocktailRows = this.props.cocktails.map(function(cocktail) {
      return <CocktailRow key={cocktail.id} cocktail={cocktail} />
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
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

var CocktailAdd = React.createClass({
  render: function() {
    return (
      <div>A form to add a new Cocktail would come here.</div>
    )
  }
});

var cocktailData = [
          <CocktailRow id={1} name="Bug Juice" ingredients="bugs" instructions="smash up a bunch of bugs"  />
          <CocktailRow id={2} name="High School" ingredients="everything" instructions="be insecure"  />
];

var CocktailList = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Cocktail List</h1>
        <CocktailFilter />
        <hr />
        <CocktailTable cocktails={cocktailData}/>
        <hr />
        <CocktailAdd />
      </div>
    )
  }
});

ReactDOM.render(
  <CocktailList />,
  document.getElementById('main')
);