const baseURL= "https://openlibrary.org/search.json?title="

const fetchBooks = async(query)=>{
    try{
        const response = await fetch(`${baseURL}${encodeURIComponent(query)}`);
         const data = await response.json();
         console.log('data',data.docs);
         return data.docs
         
    }catch(error){
        console.error(error);
        return[]
       
    }
}
export{fetchBooks}