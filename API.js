export const API_DEV= {
  get:  (fieldId)=>"http://backend.i-project.by/getCounter.php?page="+fieldId,
  set : (fieldId)=>"http://backend.i-project.by/setCounter.php?page="+fieldId
}
export const API_PROD= {
  get:  (fieldId)=>"/getCounter.php?page="+fieldId,
  set : (fieldId)=>"/setCounter.php?page="+fieldId
}