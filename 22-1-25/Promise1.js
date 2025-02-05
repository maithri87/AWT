function fetchUserData(userID){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const user={id:userID,name:"john Doe",type:'premium'};
            resolve(user);
        }, 1000);
    });
}
fetchUserData(1).then(user=>{
    console.log(user);

}).catch(error=>{
    console.error(error);
});