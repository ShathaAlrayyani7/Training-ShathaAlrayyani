
export const fetching = async (url)=>{
    try{
        let response = await fetch(url);
        let data = await response.json()
        return data
    }catch(err){
        console.error(err);
    }
}