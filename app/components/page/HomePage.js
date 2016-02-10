import React from 'react';
import Page from './page.js';
import Section from '../sections/section.js';

class HomePage extends React.Component{


	render(){
		return (
			<Page>
				<Section title="Ramsay" type="primary">

				</Section>
				<Section title="Work" type="secondary">

				</Section>
				<Section title="Play" type="dark">

				</Section>
				<Section title="Hire" type="tertiary" backgroundImage="http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png">

				</Section>
			</Page>
		)
	}
}

export default HomePage;
