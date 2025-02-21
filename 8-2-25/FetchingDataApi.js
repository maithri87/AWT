const xhr=new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/users')
xhr.onload=function(){
    if(xhr.status>=200&&xhr.status<300)
        res=JSON.parse(xhr.parse(xhr.responseText))
    console.log(res)
}
xhr.send();