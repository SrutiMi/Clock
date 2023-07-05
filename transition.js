//to transition the background of content div after each second

const content= document.querySelector('.content');
//adding a class to the content div after every 1 second 

      setInterval(()=>{
          content.classList.add('transition');
      },1000)
       
      setInterval(()=>{
        content.classList.remove('transition');
      },2000)
   
    
        

    
