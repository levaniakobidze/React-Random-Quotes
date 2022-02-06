import React,{useState,useEffect} from 'react';
const url = 'https://type.fit/api/quotes'
    
    
    
    
    
    
    function Quotes() {
       
        const [index,setIndex] = useState(0);
        const [quotes,setQuotes] = useState([])
        const [loading,setLoading] = useState(true);
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
                    <h1>loading...</h1>
                )
           }


           const handleClick = () => {
            const newIndex = Math.floor(Math.random() * (quotes.length + 1 - 0 + 1)) + 0;
               console.log(newIndex)
            
               setIndex(newIndex);
           }
    
           
        

         
       

         const { text , author } = quotes[index]


     return (
         <>
           <div className="wrapper">
               <div className="text-cont">
           <h1>{text}</h1>
           <p>{author}</p>
           </div>
           <div className="button-cont">
           <button onClick={handleClick}>Next</button>
           </div>
       
           </div>
         
         </>
     )
}

export default Quotes;
