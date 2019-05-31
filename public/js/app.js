console.log('css file loaded');

fetch('/weatherApp?address=!').then((response)=>{
    
    console.log(response);
   response.json().then((data)=>{
   
    if(data.error){
           
           console.log(data.error)
       }
       else{
         console.log(data.location);
         console.log(data.forecast);
       }
   })
});

const weatherForm=document.querySelector('form');
const search=document.querySelector('input');

const msg1=document.querySelector('#msg-1');
const msg2=document.querySelector('#msg-2');

//message.textContent='From JavaScript';
weatherForm.addEventListener('submit',(e)=>{
   e.preventDefault();

   msg1.textContent='Loading ....';
   fetch('http://localhost:7575/weatherApp?address='+search.value).then((response)=>{
    
    
   response.json().then((data)=>{
   
    if(data.error){
        msg1.textContent=data.error;
        msg2.textContent="";       
         
       }
       else{
         msg1.textContent=data.location;
         msg2.textContent=data.forecast;
       }
   })
});
})