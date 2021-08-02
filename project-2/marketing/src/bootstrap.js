import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const mount = (el)=> {

	console.log("Mounting Marketing Mfe");

	ReactDOM.render(
		<App />, el
	);
} 


// Context 1: Local development mode
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#__localapp-marketing-container');

	if(devRoot){
		mount(devRoot);
	}
	
}

// Context 2: Remote container mode. Export mount so it can be explicitly called when container is ready
export { mount };