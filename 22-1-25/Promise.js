function fetchUserData(){
    return new Promise((resolve,reject)=>{
        resolve({"userID": "1","name":"john","age":" 50 "})
    })
    }
    fetchUserData()
    .then(result=>{
        console.log(result)
    })
    
