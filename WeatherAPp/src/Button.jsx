// non- Click event I used
function dblClick(){
    console.log("DOuble Clicked");
}
function printmaa(){
console.log("MAA");
}
//onClick Event I used
function printhello(){
    console.log("Hello!");

}
function printBye(){
    console.log("Bye ");
}
export default function Button(){
    return (
        <div>
<div>
  <button onClick={printhello}>
    Clickme</button>  
<p onClick={printBye}> Are they handle</p>

   
</div>
//non-Click events
<p onMouseOver={printmaa}> Aditya maaaaa...</p>
// double- Click events
<p onDoubleClick={dblClick}>DOuble Click function occured</p>


<div>

</div>
</div>
    );
}