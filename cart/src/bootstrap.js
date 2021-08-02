import faker from 'faker';

const mount = (el)=> {

	console.log("Mounting Mfe for cart");

    let cartText=`<div> You have ${faker.datatype.number()} items in your cart </div>`;

    el.innerHTML = cartText;
} 


// Context 1: Local development mode
if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#localapp-cart-container');

	if(el){
		mount(el);
	}
	
}

// Context 2: Remote container mode. Export mount so it can be explicitly called when container is ready
export { mount };