import faker from 'faker';

const mount = (el)=> {

	console.log("Mounting Mfe for product list");

	let products='';
	for (let i=0; i<5; i++) {
		const name = faker.commerce.productName();
		products += `<div>${name}</div>`;
	}
	
	el.innerHTML = products;
	
	console.log(products);

} 

// Context 1: Local development mode
if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#localapp-product-container');

	if(el){
		mount(el);
	}
	
}

// Context 2: Remote container mode. Export mount so it can be explicitly called when container is ready
export { mount };