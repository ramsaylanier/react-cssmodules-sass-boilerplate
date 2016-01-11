import React from 'react';

import PageAnimations from './PageAnimations.js';
import { AnimateItem } from '../../animations.js'

import CSSModules from 'react-css-modules';
import styles from './page.scss';
import wrapperStyles from '../../styles/wrapper.scss';


// Write your package code here!
@CSSModules(styles, {allowMultiple: true})
class Page extends React.Component{

	componentDidMount(){
		let animation = this.props.animation || PageAnimations.animateIn;
		AnimateItem(this._page, PageAnimations.animateIn);
	}

	render(){

		const { children } = this.props;

		return(
			<div ref={ (c) => this._page = c } styleName="base">
				{children}
			</div>
		)
	}
};

const PageContent = React.createClass({
	render(){

		let className = styles.content;
		let wrapperClassName = wrapperStyles[this.props.wrapperType] || wrapperStyles.main;

		return(
			<div className={className}>
				<div className={wrapperClassName}>
					{this.props.children}
				</div>
			</div>
		)
	}
})

class PageHero extends React.Component{
	render(){
		return(
			<div className={styles.hero}>
				{this.props.children}
			</div>
		)
	}
}

export { Page, PageContent, PageHero };
