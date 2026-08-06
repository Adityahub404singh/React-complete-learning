function hello(){
  let myname = "Aditya";  //dinamic data can be used in react using js variable and it can be used inside jsx using {}
  let myage = ()=>{       //method can be used inside jsx using {} and it can return any value
    return 22;
  }
  return ( <div>  
    <h1> hello this is {myname}. I am {myage()} years old and  </h1>
    <h1> this is my first react component </h1>
   </div>)
}
export default hello;     // used for to show this inside app