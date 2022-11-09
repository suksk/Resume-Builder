function infochange(){

var dname=document.getElementById("name");
var dyourself=document.getElementById("yourself");
var demail=document.getElementById("email");
var dnumber=document.getElementById("number");
var ddegree=document.getElementById("degree");
var dtwelth=document.getElementById("twelth");
var dtenth=document.getElementById("tenth");
var dskill=document.getElementById("skill");
var dproject=document.getElementById("project");
var dexperience=document.getElementById("experience");
var dlinkedin=document.getElementById("linkedin");
var dgithub=document.getElementById("github");

// var check
if(dname.value.length == 0)
  {
    alert("Please Enter name*");
    return false;
    // check
    }
  else{
   var name1=document.getElementById("name1");
  name1.innerHTML=dname.value;
  }
  


  if(dyourself.value.length == 0)
  {
    alert("Please Enter Objective");
    return false;
    // check
    }
    else{
  var yourself1=document.getElementById("yourself1");
  yourself1.innerHTML=dyourself.value;
    }

    if(demail.value.length == 0)
    {
      alert("Please Enter Email*");
      return false;
      // check
      }
      else{
  var email1=document.getElementById("email1");
  email1.innerHTML=demail.value;
      }


      if(dnumber.value.length == 0)
      {
        alert("Please Enter your Phone number*");
        return false;
        // check
        }
        else{
  var number1=document.getElementById("number1");
  number1.innerHTML=dnumber.value;
        }


        if(ddegree.value.length == 0)
        {
          alert("Please Enter your degree details*");
          return false;
          // check
          }
          else{
  var degree1=document.getElementById("degree1");
  degree1.innerHTML=ddegree.value;
          }

          if(dtwelth.value.length == 0)
          {
            alert("Please Enter Your 12th class details*");
            return false;
            // check
            }
            else{
  var twelth1=document.getElementById("twelth1");
  twelth1.innerHTML=dtwelth.value;
            }


            if(dtenth.value.length == 0)
            {
              alert("Please Enter Your 10th class details*");
              return false;
              // check
              }
              else{
  var tenth1=document.getElementById("tenth1");
  tenth1.innerHTML=dtenth.value;
              }
              
              var skillarray=document.getElementsByClassName("addskill");
              if(skillarray[0].value.length==0){
                document.getElementById("skillremove").style.display='none';
                }
              else{
              var str1="";
              for( let e of skillarray){
                str1=str1+`<li> ${e.value} </li>`;
              }}
              document.getElementById("skill1").innerHTML=str1;


              var projectarray=document.getElementsByClassName("addproject");
              if(projectarray[0].value.length==0){
                document.getElementById("projectremove").style.display='none'; 
              }
              else{
              var str2="";
              for( let e of projectarray){
                str2=str2+`<li> ${e.value} </li>`;
              }}
              document.getElementById("project1").innerHTML=str2;

              
              if(dexperience.value.length==0){
                document.getElementById("experienceremove").style.display='none'; 
              }
              else{
              var experience1=document.getElementById("experience1");
                experience1.innerHTML=dexperience.value;
              }

              
              if(dlinkedin.value.length==0){
                document.getElementById("linkedinremove").style.display='none'; 
              }
              else{
              var linkedin1=document.getElementById("linkedin1");
              linkedin1.innerHTML=dlinkedin.value;
              }

              
              if(dgithub.value.length==0){
                document.getElementById("githubremove").style.display='none'; 
              }
              else{
              var github1=document.getElementById("github1");
              github1.innerHTML=dgithub.value;
              }
              
               
              
               

  
// if(check>)
document.getElementById("form").style.display='none';


document.getElementById("template").style.display='block';

}


function addNewSkill(){
let newNode=document.createElement("input");
newNode.classList.add("form-control");
newNode.classList.add("addskill");
newNode.classList.add("mb-3");
newNode.setAttribute("rows",10);
newNode.setAttribute("placeholder","Enter here");



let sk1=document.getElementById("skaddbutton");
let skbutton=document.getElementById("skillbutton");

sk1.insertBefore(newNode,skbutton);
}


function addNewProject(){
  let newprNode=document.createElement("input");
newprNode.classList.add("form-control");
newprNode.classList.add("addproject");
newprNode.classList.add("mb-3");
newprNode.setAttribute("rows",10);
newprNode.setAttribute("placeholder","Enter here");



let pr1=document.getElementById("praddbutton");
let prbutton=document.getElementById("projectbutton");

pr1.insertBefore(newprNode,prbutton);

}

