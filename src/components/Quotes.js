import React,{useState,useEffect} from 'react';
import {Data} from './Data'
const url = 'https://type.fit/api/quotes'

    
    
    
    
    
    
    function Quotes() {
       
        const [index,setIndex] = useState(0);
        const [quotes,setQuotes] = useState([])
        const [loading,setLoading] = useState(true);
        const [imgIndex, setImgIndex] = useState(3)
        const [colorIndex, setColorIndex] = useState(0)

        const fetchData = async () => {
            const response = await fetch(url)
            const newQuotes = await response.json();
            setQuotes(newQuotes);
            setLoading(false)
            
           
            }

            useEffect(()=> {
                fetchData();
              
            
               },[]) 
          
          
               if(loading){
                return (
                    <h1></h1>
                )
                          
                    
                
           }
           
           


           const handleClick = (e) => {
            const newIndex = Math.floor(Math.random() * (quotes.length + 1 - 0 + 1)) + 0;
              e.preventDefault()

              if(newIndex === imgIndex){
                 newIndex++


              }
              const newColorIndex = Math.floor(Math.random() * (6  - 0 + 1)) + 1;
            setColorIndex(newColorIndex);
            console.log(colorIndex)

            if(newColorIndex === colorIndex){
                newColorIndex++


             }
           
              setIndex(newIndex);
              
           }
           const handleImgClick = (e) => {
            const newImgIndex = Math.floor(Math.random() * (12  - 0 + 1)) + 1;
            setImgIndex(newImgIndex)

            if(newImgIndex === imgIndex){
                newImgIndex++


             }
            
        
            
        }
      
        
        console.log(Data[1]);

        const color = Data[1];
        console.log(color)

       
           const styles = {

               backgroundColor:Data[colorIndex],
               
           }
        
        
       

         const { text , author } = quotes[index]


     return (
         <>
         {}
        
          <div className="main" style={styles}>
           
           <div className="wrapper">
               <div className="text-cont">
           <h1 style={{color:Data[colorIndex]}}>{text}</h1>
           <div className="author"> 
           
           <p style={{color:Data[colorIndex]}}>--- {author}</p>
           </div>
           </div>
           <div className="button-cont">
           <i class="fa-brands fa-facebook"></i>
           <i class="fa-brands fa-facebook-messenger"></i>
           <button style={{background:Data[colorIndex]}} onClick={handleClick}>Next</button>
           </div>
       
           </div>
           </div>
         
         </>
     )
}

export default Quotes;
