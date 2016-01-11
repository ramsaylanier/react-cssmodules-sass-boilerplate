import React from 'react';
import Relay from 'react-relay';

import styles from './thumbnail.scss';
import CSSModules from 'react-css-modules';

import settings from '../../../settings/dev.json';

console.log(settings);

@CSSModules(styles, {allowMultiple: true})
class Thumbnail extends React.Component{

  render(){

    const { thumbnail } = this.props;
    const image = thumbnail.post_meta.edges[0].node.meta_value;
    const src = settings.uploads + image;

    console.log(image);

    return(
      <img src={src} styleName="background"/>
    )
  }
}

export default Relay.createContainer(Thumbnail, {

	fragments: {
		thumbnail: () => Relay.QL`
			fragment on Post {
				id
        post_meta(keys:attachedFile first:1){
          edges{
            node{
              id
              meta_value
            }
          }
        }
			}
    `,
  },
});
