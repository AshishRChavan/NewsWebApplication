// this.setState()
// this.setState() method work asynchronously .. so thas why we avoid to write code after this.setState() method because if we write code after th this.setState() method then may be that code will execute first before the execution of this.setState() method And thas why we avoid to write code after the this.setState() method or we write that code inside the second parameter of this.setState() method as callback function
//e.g
// this.setState({loading:false})
// this.updateNews()                                  // Wrong 
// this.setState({loading:false},this.updateNews)     // Right

// React Component LifeCycle -- React Component LifeCycle can be divided into three phases
// Mount --- Birth of the Component
// Update --- Update of the component
// UnMount --- Death of the component

// Mounting or Mount of the component its process in which first render method start to execute and then jsx inside the render method will convert into html and then place into UI
// or Mount of the component its process in which on UI there is already jsx present in form html and after clicking on button then the props, states and jsx also will changed and then again render method will start executing and convert that jsx with changed props and state in form of html and place on UI and that also be considered as Mount of Component

// Updating or Update of the component its process in which on UI there is already jsx present in form html and after clicking on button then the only props and states will change (jsx will not change if in this case jsx also changed then that will be considered as Mount of Component) and then again render method will start executing and convert that jsx with changed props and state in form of html and place on UI

// Unmount of component its process in which  --- Im  nOt sure about this 

// React Component LifeCycle methods - (4)
// render() -- this method call automatically for first time and then whenever jsx, props and state will change that time this render method will call again
// CompomnentDidMount() -- this method call after mount of the component (see Mounting Defination)
// ComponentDidUpdate() -- this method call after update of the component (see Upade Defination)
// ComponentWillMount() -- this method call just before UnMount of the component (see Mount Defination)


// Whole Process -
/***
 Firstly constructor will Run ( print console.log("Constructor Run"); )
 Then render method will execute and convert jsx (in this case-Heading and Buttons) into html and place into UI
 and now component is mounted thats why ComponentDidMount() method will call and now jsx(Heading,Cards,Buttons), props and state will change and thats why render method will call again and convert new jsx with updated props and state into html and place into UI and now again ComponentDidMount Method will call because previously jsx was different and now jsx also updated (if here only props and state only changed then ComponentDidMount will not call again ) ... after calling ComponentDiDMount() now only props and state will cahnge and due to this render method will call and it will convert newly updated jsx with changed props and state into html and placed on UI and now jsx is not changed but props and state are changed so if threre is ComponentDidUpdate Method is present then that method will call
 */