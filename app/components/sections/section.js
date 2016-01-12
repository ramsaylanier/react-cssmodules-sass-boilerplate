import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './section.scss';

@CSSModules(styles, {allowMultiple: true})
class Section extends React.Component{

  _renderPostTitle(){
    const title = this.props.title.match(/.{1,2}/g);
    return title.map( fragment => {
      return <span>{fragment}<br></br></span>
    })
  }

  render(){

    const { type, backgroundImage } = this.props;
    const bg = {
      backgroundImage: "url('" + backgroundImage + "')",
    };

    const bgClass = backgroundImage ? 'with_background' : '';

    return(
      <div styleName={type + ' ' + bgClass} style={bg}>
        <h2 styleName="title">{this._renderPostTitle()}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default Section;
