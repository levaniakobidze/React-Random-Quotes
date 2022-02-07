import React,{useState,useEffect} from 'react';
const url = 'https://type.fit/api/quotes'

    
    
    
    
    
    
    function Quotes() {
       
        const [index,setIndex] = useState(0);
        const [quotes,setQuotes] = useState([])
        const [loading,setLoading] = useState(true);
        const [imgIndex, setImgIndex] = useState('2')

        const fetchData = async () => {
            const response = await fetch(url)
            const newQuotes = await response.json();
            setQuotes(newQuotes);
            setLoading(false)
            
           
            }

            useEffect(()=> {
                fetchData();
              
            
         console.log('sdada')
               },[]) 
          console.log('ok')
          
            if(loading){
                return (
                    <h1>loading...</h1>
                    
                )
           }
           
           


           const handleClick = (e) => {
            const newIndex = Math.floor(Math.random() * (quotes.length + 1 - 0 + 1)) + 0;
              e.preventDefault()
           
               setIndex(newIndex);
           }
           const handleImgClick = () => {
            const newImgIndex = Math.floor(Math.random() * (12  - 0 + 1)) + 1;
            setImgIndex(newImgIndex)
            console.log(newImgIndex)
            console.log(imgIndex)
            
        }
        
    
           
        
        
       

         const { text , author } = quotes[index]


     return (
         <>
         {}
        
          <div className="main">
              <div className="main-img-cont">
          <img src={require(`./images2/image${5}.jpg`)} alt="" />
          </div>
           <div className="wrapper">
               <div className="text-cont">
           <h1>{text}</h1>
           <div className="author"> 
           
           <p>--- {author}</p>
           </div>
           </div>
           <div className="button-cont">
               <button onClick={handleImgClick}>img</button>
           <button onClick={handleClick}>Next</button>
           </div>
       
           </div>
           </div>
         
         </>
     )
}

export default Quotes;
