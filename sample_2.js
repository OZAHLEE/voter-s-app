const express=require('express');
const app=express();
const grapql=require('graphql');
const bodyParser=require('body-parser');
// reference to local module:
var log=require('./log.js');

app.use(bodyParser.urlencoded({extended:false}))

//year config

var date= new Date();
var curYear=date.getFullYear();
app.get('/',function(req,res){
res.sendFile(__dirname +'/add.html')
 
})

// pick the the posted data:
app.post('/submit-data',function(req,res){

    var firstName=req.body.fname.toUpperCase();
    var lastName=req.body.lname.toUpperCase();
    var birthYear=req.body.byear;
    var nationality=req.body.nationality.toUpperCase();
    var district=req.body.district.toUpperCase();
    var occupation=req.body.occupation;
    var phone=req.body.phone;

    console.log('Welcome:');
    console.log('+++++++++++++++++++++');
   
    console.log('Fullname: '+ firstName+' '+lastName);
    console.log('Nationality: '+ nationality);
    console.log('District: '+ district);
    console.log('Birth Year: '+ birthYear);
    var age;
    var message=`Operation Failed :Birth Year  ${birthYear} cannot be greater ${curYear}`

    if(birthYear<=curYear){
     age=curYear-birthYear;
     console.log(`Age: ${age}`);
    }
   else{
    console.log(message);
   }
   console.log(`Phone: ${phone}`);
   
    var voteEligibility;
    if(age>=18){
        voteEligibility="Yes"
        console.log('Occupation: ',occupation);
    }else{
        voteEligibility="No"
        console.log('Occupation: ','School Going Age');
    }
    
   
    console.log(`Voter's Eligibility: ${voteEligibility}`);
    console.log('+++++++++++++++++++++');
    res.writeHead(200,{'Content-Type':'text/html'});
    var resp= "<a href='/'>Clear Record</a>";
   
    res.write('<b><h2>Data recieved successfully</h2></b>'+" "+'<div><br><b>Fullname: </b>'+firstName+' '+lastName+'<br><b>Nationality:</b> '+nationality+'<br><b>District:</b> '+district+'<br><b>Birth Year:</b> '+birthYear+'<br><b>Age: </b>'+age+'<br><b>Occupation: </b> '+occupation+'<br><b>Phone:</b>'+phone +'<br><b>Voter Eligibility'+voteEligibility+'</div><br>');
    res.write(resp);
     
})

app.listen(8080.,()=>{ 
log.status("HWS Server Running...");
//log.serverDetails();
 
}
); 