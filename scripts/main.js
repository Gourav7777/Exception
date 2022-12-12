// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
  // 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;

let notificationWrapper = document.getElementById("notifications-wrapper");



const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
 
// console.log(7)

  const loginuser = async ()=>{

   try {
     
     let obj ={
       username:loginUserUsername.value,
       password: loginUserPassword.value
      }
      
      let res = await fetch(userLoginURL,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
          "Content-Type":"application/json"
        }
    })
  
    if(res.ok==true){

      res = await res.json()
      console.log(res)
      let x = res.accessToken
      let y = res.user.id
      let z = res.user.username
      localStorage.setItem("localAccessToken",x)
      localStorage.setItem("userId",y)
  
      notificationWrapper.innerHTML= `<h5 class="notification info">
      hey ${z}, welcome back!
      </h5>`
      
    }
    else{
      alert("bad")
     }
    } catch (error) {
      console.log(error)
    }
    
    
  }
  
  let loginUserButton = document.getElementById("login-user"); 
  loginUserButton.addEventListener("click",loginuser)
  
  
  let userAuthToken = localStorage.getItem("localAccessToken") || null;
  let userId = +localStorage.getItem("userId") || null;
  // console.log(userAuthToken,userId)
  
  
  
  
  
  
  
   
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;

let mainSection = document.getElementById("data-list-wrapper"); 

  const fetchtodo = async ()=>{

  let res = await fetch (urlAllTodosOfUser,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${userAuthToken}`
      }
  })

   res = await res.json()
    console.log(res)
 
        
         mainSection.innerHTML=`<div id="todo-list-wrapper" class="todo-list-wrapper">
         <label><input class="todo-item-checkbox" data-id="107" type="checkbox">tame Persian</label>
         <label><input class="todo-item-checkbox" data-id="107" type="checkbox" checked="" >fickle Snowshoe</label>
         <label><input class="todo-item-checkbox" data-id="138" type="checkbox" checked="">actual Siberian</label>
         <label><input class="todo-item-checkbox" data-id="138" type="checkbox" >last Chartreux</label>
         <label><input class="todo-item-checkbox" data-id="107" type="checkbox">piercing Somali</label>
         <label><input class="todo-item-checkbox" data-id="138" type="checkbox">truthful American Bobtail</label>
         <label><input class="todo-item-checkbox" data-id="107" type="checkbox" checked="" >nimble Selkirk Rex</label>
         <label><input class="todo-item-checkbox" data-id="138" type="checkbox">repulsive LaPerm</label>
         <label><input class="todo-item-checkbox" data-id="107" type="checkbox">knotty Serengeti</label>
         <label><input class="todo-item-checkbox" data-id="138" type="checkbox" checked="">twin Munchkin</label>
        </div>`
     
     

  }


  let getTodoButton = document.getElementById("fetch-todos");

    getTodoButton.addEventListener("click",fetchtodo)



    const urlTodosBase = `${baseServerURL}/todos/`;

     
      

    


  
      

      