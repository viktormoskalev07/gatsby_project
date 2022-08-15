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