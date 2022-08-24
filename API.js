export const API_DEV= {
  get:  (fieldId)=>"http://backend.i-project.by/getCounter.php?page="+fieldId,
  set : (fieldId)=>"http://backend.i-project.by/setCounter.php?page="+fieldId,


}
export const API_PROD= {
  get:  (fieldId)=>"/getCounter.php?page="+fieldId,
  set : (fieldId)=>"/setCounter.php?page="+fieldId,
  calculator :'/sendCalculatorMail.php'
  // calculator :'http://mailto/mailTo.php'
  // calculator :'http://backend.i-project.by/mailto/mailTo.php'
}

// export const API_COMPLIMENT = {
//   set:'http://likecounter/setProvider.php',
//   get:'http://likecounter/getProvider.php'
// }
export const API_COMPLIMENT = {
  set:'/compliment/setProvider.php',
  get:'/compliment/getProvider.php'
}

export const     databaseIdFromUrl = ()=>{

  let id  =""
  try{
    if(typeof window !=="undefined"){
      const url = window.location.pathname;
     id= url.trim().replace(/\//g , "")
    }
  } catch {
    console.log("url is undefined")
  }
  return id
}