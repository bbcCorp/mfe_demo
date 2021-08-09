# Developing Micro-Frontend (MFE)

This application demonstrates how to build MFE applications. This is based on Stephen Grider's the excellent Udemy course - [Microfrontends with React: A Complete Developer's Guide](https://www.udemy.com/course/microfrontend-course/). 

If you are new to micro-frontends, I would highly recommend this course. 

--------------
## Requirements

### Navigation
1. Both the container + individual subapps need routing features. 
    * Users can navigate around to different subapps using routing logic built into the Container. 
    * Users can navigate around in a subapp using routng logic built into the subapp itself.
    * Not all subapps will require routing.
2. Sub-apps might need to add in new pages/routes all the time. New routes added to a subapp shouldn't require a redeploy of the container!
3. We might need to show two or more microfrontend at the same time.
4. We want to use off-the-shelf routing solutions
5. We need navigation features for the subapp in both hosted mode and in isolation.
6. If different apps nee to communicate information about routing, it should be done in as generic a fashion as possible.
    * Each app might be using a completely different navigation framework.
    * We might swap out or upgrade navigation libraries all the time - shouldn't require a rewrite of the rest of the app.
  
Container's routing will decide which microfrontend to show. 
For example:

----------------------
route       |   app
------      |   --------
/           |   marketing
/pricing    |   marketing
/ auth      |   auth

Now, child app needs to communicate navigation history present in Memory history to the container so Browser History can be updated. The opposite might also be needed in some scenarios.

Container needs to pass `onNavigate` callback function to the child app when it calls the `mount` function.

#### Navigation History
In order to update update navigation history properly, we will do the following:
* Container will be the only app updating Browser History
* Child apps will update Memory History


--------------

## Setup and Execution
To understand how to setup and execute this project, follow the instructions mentioned [here](./SETUP.md)

--------------
## References:

* Udemy course - [Microfrontends with React: A Complete Developer's Guide](https://www.udemy.com/course/microfrontend-course/)


* [React Router documentation](https://reactrouter.com/web/guides/quick-start)
