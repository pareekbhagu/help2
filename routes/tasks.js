
app.post('/next', async function (req, res) {
    var id = req.body.userid;
    var task = req.body.task;
    var subtask = req.body.subtask;
    console.log(subtask);
    // console.log(task);
    var sql = "UPDATE tasks SET task =?, subtask =? WHERE userid =?";
  
    var result = database.query(sql, [task, req.body.subtask, id]);
    res.json({ message: "success" });
  
  });
  app.post('/task', async function (req, res) {
    var id = req.body.userid;
    var user = await database.query("select task_id, userid, task, subtask from tasks where userid=?", [id], 1);
    if (user) res.status(200).json({ message: "success", user: user });
  });
  var server = app.listen(5000, function () {
    console.log('listen to port 5000');
  });