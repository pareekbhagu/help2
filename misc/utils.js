
const { database } = require('./query');

recordExists = (property) =>{
  return (typeof property !== 'undefined')?  (property.length > 0 ?1:0) :0
}
createTasksEntry = async (id)=>{
  try{
    var result = await database.query('INSERT INTO tasks (`task`, `subtask`, `userid`) VALUES (1,0,?)',[id],1)
    return result;
  }
   catch(error){
     console.log(error)
   }
}
  module.exports = {recordExists,createTasksEntry }