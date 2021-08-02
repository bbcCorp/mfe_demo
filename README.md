# MFE Demo

This application demonstrates how to build MFE applications. This is based on Stephen Grider's the excellent Udemy course - [Microfrontends with React: A Complete Developer's Guide](https://delldigital.udemy.com/course/microfrontend-course). 

If you are new to micro-frontends, I would highly recommend following this course. 


--------------
## Running the application

* Run the `product` application. This can be accessed from  http://localhost:8081/
```
mfe_demo/products$ npm run start

> products@1.0.0 start
> webpack serve

ℹ ｢wds｣: Project is running at http://localhost:8081/

...
```

* Run the `cart` application. This can be accessed from  http://localhost:8082/
```
mfe_demo/cart$ npm run start

> cart@1.0.0 start
> webpack serve

ℹ ｢wds｣: Project is running at http://localhost:8082/

...
```

* Now, run the `container` application. This can be accessed from  http://localhost:8080/
```
mfe_demo/container$ npm run start

> container@1.0.0 start
> webpack serve

ℹ ｢wds｣: Project is running at http://localhost:8080/

...
```

--------------
## References:

* Udemy course - [Microfrontends with React: A Complete Developer's Guide](https://delldigital.udemy.com/course/microfrontend-course)
