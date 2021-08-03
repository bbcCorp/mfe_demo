# MFE Demo

This application demonstrates how to build MFE applications. This is based on Stephen Grider's the excellent Udemy course - [Microfrontends with React: A Complete Developer's Guide](https://delldigital.udemy.com/course/microfrontend-course). 

If you are new to micro-frontends, I would highly recommend this course. 

--------------
## Running the Project-1 application

Project-1 covers materials from Sessions - 1, 2 and 3. It uses Webpack to illustrate the basics of module federation and how container and child micro-frontends integrate.

This project consists of 3 sub-projects:
1. product
2. cart
3. container that uses product and cart.



* Run the `product` application. This can be accessed from  http://localhost:8081/
```
mfe_demo/project-1/products$ npm run start

> products@1.0.0 start
> webpack serve

ℹ ｢wds｣: Project is running at http://localhost:8081/

...
```

* Run the `cart` application. This can be accessed from  http://localhost:8082/
```
mfe_demo/project-1/cart$ npm run start

> cart@1.0.0 start
> webpack serve

ℹ ｢wds｣: Project is running at http://localhost:8082/

...
```

* Now, run the `container` application. This can be accessed from  http://localhost:8080/
```
mfe_demo/project-1/container$ npm run start

> container@1.0.0 start
> webpack serve

ℹ ｢wds｣: Project is running at http://localhost:8080/

...
```

--------------
## Running the Project-2 application


* Run the `marketing` application. This can be accessed from  http://localhost:8081/
```
mfe_demo/project-2/marketing$ npm run start

> marketing@1.0.0 start
> webpack serve --config config/webpack.dev.js

ℹ ｢wds｣: Project is running at http://localhost:8081/
...

```


* Now, run the `container` application. This can be accessed from  http://localhost:8080/

```
mfe_demo/project-2/container$ npm run start

> container@1.0.0 start
> webpack serve --config config/webpack.dev.js

ℹ ｢wds｣: Project is running at http://localhost:8080/
...

```

--------------
## References:

* Udemy course - [Microfrontends with React: A Complete Developer's Guide](https://delldigital.udemy.com/course/microfrontend-course)
