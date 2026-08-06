function random(){
  let mynumber = Math.random() * 100;  //dinamic data can be used in react using js variable and it can be used inside jsx using {}
  return (
    <h1 style={{ 'color': '#234242' }}>Random Number is : {Math.round(mynumber)}</h1> //css can be used inside jsx using style and it can be used inside jsx using {} note no backtick is used for css and it is used as object only used here this is used for to show this inside app
  );
}
export default random;  