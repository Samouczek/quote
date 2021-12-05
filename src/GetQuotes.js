
 export const GetQuotes = (successCallback) => {
     fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json', {
         method: "GET",
     })
         .then((response) => response.json())
         .then((data) =>{
             const array = [];
             for (const item of data){
                 array.push(item.quote);
             }
             successCallback(data);
         })
         .catch((err) => console.log(err))
 }




