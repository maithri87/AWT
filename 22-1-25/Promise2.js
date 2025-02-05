function fetchUserData(userID){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const user={id:userID,name:"john Doe",type:'premium'};
            resolve(user);
        }, 1000);
    });
}
function fetchUserSettings(userType){
    return new Promise((resolve,reject)=>{
    console.log("fetching settings for user type:$(userType)");
        const settings=userType==='premium'
        ?{theme:'dark',Notification:true,accesslevel:'high'}

        :{theme:'light',Notification:fasle,accesslevel:'low'};
        resolve(settings);
 } );
}
   fetchUserData(1)
   .then(user=>fetchUserSettings(user.type))
   .then(details=>{console.log(details)})
   .catch(error=>{console.log(error)})
   