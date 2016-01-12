var Radium = require('radium');
var React = require('react');
var color = require('color');

@Radium
class View extends React.Component {

  render() {

    const { buttons } = this.props;

    return (

      {buttons.map( (button, index) => {
        const style = index === 0 ? styles.first : styles.base;
        return (
          <button
            style={style}>
            {this.props.children}
          </button>
        )
      })}
    )
  }
}

// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
  base: {
    color: '#fff',

    // Adding interactive state couldn't be easier! Add a special key to your
    // style object (:hover, :focus, :active, or @media) with the additional rules.
    ':hover': {
      background: color('#0074d9').lighten(0.2).hexString()
    }
  },

  .first{
    background: 'green',
    ':hover': {
      background: color('green').lighten(0.2).hexString()
    }
  }
};
