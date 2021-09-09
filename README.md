# Developing Micro-Frontend (MFE)

This application demonstrates how to build MFE applications. This is based on Stephen Grider's the excellent Udemy course - [Microfrontends with React: A Complete Developer's Guide](https://www.udemy.com/course/microfrontend-course/). 

If you are new to micro-frontends, I would highly recommend this course. It's an absolute gem of a course.

-------------------------------------------------------------------------------

## Really Big Takeaways

* Your requirement drives your architecture
* MFE's might cause production issue that you do not see in development
* Do not forget to scope your CSS
* Don't make assumptions about one UI framework like React

-------------------------------------------------------------------------------
## Requirements

### Core principles

1. Each team can choose any frontend framework that works for them as long as they support Webpack and module federation concepts.
2. Each team/application needs to standardize the names for the MFE application. 
3. There should be zero couplings between child components
   * No importing functions/objects/classes
   * No shared state
   * Shared libraries through MF is OK
4. There should be near zero coupling between container and child applications
   * The container should not assume that the child application is using a particular framework
   * Any necessary callback is done with callback or simple events
5. CSS from one project should never affect another
6. Version control should not have any impact on the overall project. It is advised to keep separate repos for each project
   * The container should be able to decide to always use a specific version of a micro-frontend or the latest version
7. The container app should enforce authentication and top-level authorization.

-------------------------------------------------------------------------------
### Navigation
1. Both the container + individual subapps need routing features. 
    * Users can navigate around to different subapps using routing logic built into the Container. 
    * Users can navigate around in a subapp using routng logic built into the subapp itself.
    * Not all subapps will require routing.
2. Sub-apps might need to add in new pages/routes all the time. New routes added to a subapp shouldn't require a redeploy of the container!
3. We might need to show two or more microfrontend at the same time.
4. We want to use off-the-shelf routing solutions
5. We need navigation features for the subapp in both hosted mode and in isolation.
6. If different apps need to communicate information about routing, it should be done in as generic a fashion as possible.
    * Each app might be using a completely different navigation framework.
    * We might swap out or upgrade navigation libraries all the time - shouldn't require a rewrite of the rest of the app.
  
Container's routing will decide which microfrontend to show. 
For example:

----------------------
route       |   app
------      |   --------
/           |   marketing
/pricing    |   marketing
/auth       |   auth
/dashboard  |   dashboard

Now, child app needs to communicate navigation history present in Memory history to the container so Browser History can be updated. The opposite might also be needed in some scenarios.

Container needs to pass `onNavigate` callback function to the child app when it calls the `mount` function.

-------------------------------------------------------------------------------
#### Navigation History
In order to update update navigation history properly, we will do the following:
* Container will be the only app updating Browser History
* Child apps will update Memory History

-------------------------------------------------------------------------------
## Authentication

When it comes to authentication, there are two approaches
1. Each app is aware of authentication
2. Centralize authentication in Container. Container tells each sub app when user logs in and then notifies the child apps when user logs in. 

We will go with option#2.

-------------------------------------------------------------------------------

## Setup and Execution
To understand how to setup and execute this project, follow the instructions mentioned [here](./SETUP.md)

-------------------------------------------------------------------------------
## References:

* Udemy course - [Microfrontends with React: A Complete Developer's Guide](https://www.udemy.com/course/microfrontend-course/)
* Udemy course - [Modern React with Redux ](https://www.udemy.com/course/react-redux/)
* [React Router documentation](https://reactrouter.com/web/guides/quick-start)

-------------------------------------------------------------------------------