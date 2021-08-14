import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';


const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath })=> {

	console.log("Mounting Auth Mfe");

	// local dev mode will use defaultHistory (browser history) where as within container we will use memory history
	const history = defaultHistory || createMemoryHistory({
		initialEntries: [initialPath]
	});
	
	// This registers the container's callback function whenever history changes.
	if(onNavigate){
		history.listen(onNavigate);
	}
	

	ReactDOM.render(
		<App history={history} onSignIn={onSignIn} />, el
	);

	return {

		// Callback function on the Child app that Container app will use to communicate navigation
		onParentNavigate(location) {
			console.log('Container app just navigated');

			const { pathname } = history.location;
			if(location && location.pathname && pathname !== location.pathname){
				console.log(location.pathname);
				history.push(location.pathname);
			}
		}

	};
} 

const devRoot = document.querySelector('#__localapp-auth-container');

// Context 1: Local development mode
if (process.env.NODE_ENV === 'development' || devRoot) {
	

	if(devRoot){
		mount(devRoot, { defaultHistory: createBrowserHistory() });
	}
	
}

// Context 2: Remote container mode. Export mount so it can be explicitly called when container is ready
export { mount };