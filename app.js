const express=require('express')
var app=express()
let students=[{"id":"1","names":"raj","branch":"IT"},
              {"id":"2","names":"ram","branch":"CSE"}
]

app.get("/students",(req,res)=>{
    res.json(students)
})
// app.get("/student/:id",(req,res)=>{
//     const id=req.params.id
//     let student=students.find(s=>s.id==id)
//     if(student){
//         res.status(200).json({
//             "message":"student found","student":"student"})
//         }
//         else{
//             res.status(404).json({"message":"student not found"})
//         }

//     })



// for deleting  


app.delete("/deletestudents/:id",(req,res)=>{
    const id=req.params.id
   let  stud=students.find(s=>s.id==id)
   console.log(stud)
if(stud){
    students=students.filter(s=>s.id!=id)

    res.status(200).json({
        "message":"deleted succesfully","student":students
    })}
else{
     res.status(404).json({"message":"student not found"})
}
})

//     app.listen(3000,()=>{
//      console.log("server running on http://localhost:3000")
//     })


    //post 
//     app.use(express.json())
// app.post("/addstudent",(req,res)=>{
//     let student=req.body
//     students.push(student)
//     res.status(200).json({
//         "message":"student added succesfully","students":students
//     })
// }
// )
app.listen(3000,()=>{
         console.log("server running on http://localhost:3000")
        })
