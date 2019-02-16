module.exports = {
    INSERT_USER : " INSERT INTO `users` ( `firstname`, `lastname`, `user_name`, `email`, `mobile`, `sponsor`,`u1`, `u2`, `u3`, `u4`, `u5`, `u6`, `u7`, `u8`, `u9`, `u10`, `paid`, `password`,  `status`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    FIND_USER_BY_EMAIL : 'select id, email, token, firstname, user_name from users where email = ?',
    DB_CHECK_USER : 'SELECT firstname,lastname,user_name,email,mobile,sponsor FROM users where email=? and password=?',
    GET_PROFILE:'select firstname,lastname,user_name,email,mobile,sponsor from users where email = ?',
    UPDATE_PROFILES: 'UPDATE users set firstname=?, lastname=?, email=?, mobile=? where email=?',
    GET_BOARDS : 'SELECT * FROM tbl_boards ORDER BY id DESC',
    INSERT_LEVEL_INCOMES: 'INSERT INTO `incomes` ( `income`, `Description`, `userid`, `from_id`, `created_on`) VALUES ( ?,?, ?, ?, CURRENT_TIMESTAMP);',
    SELECT_USERS:'select user_name, u1,u2,u3,u4,u5,u6,u7,u8,u9,u10 from users where user_name=?',
    SELECT_TASKS: 'select task_id, userid, task, subtask from tasks where userid=?'
}





