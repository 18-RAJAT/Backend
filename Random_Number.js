const getRandomNumber=()=>{
    // const tmp=`${Math.random()*100}%`;
    
    // const tmp=Math.random()*100;
    // return Math.floor(tmp);
    
    return `${~~(Math.random()*100)}%`;        
}
export {getRandomNumber};