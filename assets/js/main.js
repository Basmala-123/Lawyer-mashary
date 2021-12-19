function scrollToTop(){
    window.scrollTo({
        top:0,
        behaviour:'smooth'
    })
}
// ------animated text-home--------
const txts=document.querySelector(".animate-text").children,
txtsLen=txts.length;
let index=0;
const textInTimer=3000,
 textOutTimer=2800;

function animateText() {
for(let i=0; i<txtsLen; i++){
txts[i].classList.remove("text-in","text-out");  
}
txts[index].classList.add("text-in");

setTimeout(function(){
 txts[index].classList.add("text-out");              
},textOutTimer)
setTimeout(function(){
if(index == txtsLen-1){
   index=0;
 }
else{
    index++;
  }
 animateText();
},textInTimer); 
}
window.onload=animateText;

// Validation form of contact
function validateForm() {
    var name =  document.getElementById('form-name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
  }


// show top btn

mybtn = document.getElementById("top-btn");
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop > 20){
        mybtn.style.display="block";
    }
    else{
        mybtn.style.display="none";
    }

}
function topFunction(){
    document.documentElement.scrollTop = 0;
}


/////////////
const button=document.getElementById('toggle');
document.addEventListener("click",function (){
    var elem=document.querySelector(".home");
    
    elem.style.display = (elem.style.display != 'none') ? 'none' : 'block';
console.log("hi")
})
