function fetchUserDetails(userID,callback){
    const user={id:1,name:'abc',type:"admin"}
    callback(user.type)
}
function fetchPrevilages(type,callback)
{
    const previlages={"read":true,"write":true,"print":true};
    callback(previlages);
}

function  display(previlages){
    console.log(previlages)
}
const userID=1;

fetchUserDetails(userID,(type)=>{
    fetchPrevilages(type,display);
});