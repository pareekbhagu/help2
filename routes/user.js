var express = require('express');
var router = express.Router();
var DB_QUERIES = require('../misc/queries')
var register = require('../misc/register')
var uti = require('../misc/utils')
var jwt = require('jsonwebtoken')
const { check, validationResult, body } = require('express-validator/check');
var passport = require('passport');
const { database } = require('../misc/query');
var utils = require('../misc/utils')
var request = require('request')
router.get('/login', function (req, res) {
    res.render('login', { title: 'Home' });
});
router.get('/dashboard', function (req, res) {
    res.render('dashboard', { title: 'Dashboard' });
});
router.get('/change', function (req, res) {
    res.render('change', { title: 'Change' });
});
router.get('/signup', function (req, res) {
    res.render('signup', { title: 'Signup' });
});



/////////////////////////////API////////////////////////////

router.get('/clean',async (req,res)=>{
   var delte =  await database.query("delete from tasks where 1;delete from incomes where 1;delete from users where 1;",[],1)
    res.status(200).json(delte)
})

router.post('/signup/add', register.registerValidations, async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422)
            .json({
                status: 0,
                error: errors.array(),
                user: null
            });
    }

    var p = req.body;
    var sponsor = await database.query("select * from users where user_name=?",[req.body.sponsor]);
    console.log(sponsor);
   if(!sponsor.length==0) {
    sponsor=sponsor[0]
    var upline = [ sponsor.user_name, sponsor.u1, sponsor.u2, sponsor.u3, sponsor.u4, sponsor.u5, sponsor.u6, sponsor.u7, sponsor.u8, sponsor.u9]
    //                  u1              u2              u3          u4          u5          u6          u7          u8
   }
   else var upline = [0,0,0,0,0,0,0,0,0,0] 
   var random = await register.generateUser();  // as we are importing only this function, the database import function from util.js is not called..
    await database.query(DB_QUERIES.INSERT_USER,
        [p.firstname,
        p.lastname,
        random,
        p.email,
        p.mobile,
        p.sponsor,
        ...upline,
        p.date,
        p.password,
        p.token,
        p.status
        ]
    );

    var user = await database.query(DB_QUERIES.FIND_USER_BY_EMAIL, [p.email], 1);
    console.log(user);
    var createTasks = await utils.createTasksEntry(user.id);
    sendIncomes(user.user_name);
    if (user)
        res.status(200).json(
            {
                status: 1,
                message: "success",
                user: user
            }
        );

});
findParent = 
sendIncomes = async (user_name) => {

    var incomes =
        [{ level: 1, income: 100 },
        { level: 2, income: 100 },
        { level: 3, income: 100 },
        { level: 4, income: 5 },
        { level: 5, income: 8 },
        { level: 6, income: 0.5 },
        { level: 7, income: 0.4 },
        { level: 8, income: 0.3 },
        { level: 9, income: 0.2 },
        { level: 10, income: 0.1 }
        ]
    var user = await database.query(DB_QUERIES.SELECT_USERS, [user_name], 1);
    console.log(user);
    for (i = 0; i < 10; i++) {
        var income = incomes[i].income;
        var upline = "u" + parseInt(i + 1);
        if (user[upline] !== '0') {
            var description = "Level income for level " + i + 1 + " from userid " + user[upline];
            await database.query(DB_QUERIES.INSERT_LEVEL_INCOMES, [income, description, user[upline], user_name], 1)
            
        }

    }
}
router.get('/dash', async (req, res) => {
    res.status(200).json({ pending: 12, completed: 8, balance: 400, withdrawn: 6000, })
})

router.get('/income', async (req, res) => {
    req.query.email;
    var user = await database.query(DB_QUERIES.FIND_USER_BY_EMAIL,[req.query.email],1)
    console.log(user);
    var incomes = await database.query("select * from incomes where userid=?",[user.user_name]);

    res.status(200).json({ status: 1, message: "ok", incomes: incomes })
})
router.post('/login', function (req, res, next) {

    passport.authenticate('local', { session: false }, (err, user, info) => {
        console.log(err);
        console.log(user);
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                error: err
            });
        }

        req.login(user, { session: false }, (err) => {
            console.log(err);
            if (err) {
                res.send(err);
            }

            const token = jwt.sign(user, 'youjwt_secret');
            user.token = token;
            return res.json({ status: 1, message: "success", user: user });
        });
    })(req, res)
    //     if (req.body.password == 'correct') {
    //         var response = {
    //             "status": 1,
    //             "message": "success",
    //             "user": {
    //                 "firstname": "firstname",
    //                 "lastname": "lastname",
    //                 "email": "email",
    //                 "sponsor": "sponsor",
    //                 "mobile": "99999999",
    //                 "token": "xsdfsddf"
    //             }
    //         }
    //     }
    //     else {
    //             var response = {
    //                 "status": 0,
    //                 "message": "error",
    //                 "user": null
    //             }
    //         }


    //    res.status(200).json(response)
});
router.get('/level',async (req, res)=>{
   res.status(200).json([{level:1,members:20,income:237},{level:2,members:20,income:23}, {level:3, members:20,income:222},{level:4,members:20,income:221}, {level:5, members:21, income:220}, {level:6, members:12, income:222}, {level:7, members:23, income:333}, {level:8, members:10, income:20},{ level:9, members:25, income:555}, {level:10, members:20, income:555}])
})
router.get('/level_adview',async (req, res)=>{
    res.status(200).json([{level:1,memebers:20,income:237},{level:2,members:20,income:23}, {level:3, members:20,income:222},{level:4,members:20,income:221}, {level:5, members:21, income:220}, {level:6, members:12, income:222}, {level:7, members:23, income:333}, {level:8, members:10, income:20},{ level:9, members:25, income:555}, {level:10, members:20, income:555}])
 })
 router.get('/direct_income',async (req, res)=>{
    res.status(200).json([{level:1,memebers:20,income:237},{level:2,members:20,income:23}, {level:3, members:20,income:222},{level:4,members:20,income:221}, {level:5, members:21, income:220}, {level:6, members:12, income:222}, {level:7, members:23, income:333}, {level:8, members:10, income:20},{ level:9, members:25, income:555}, {level:10, members:20, income:555}])
 })
router.get('/get_profile', async function (req, res, next) {
    try {
        var response = await database.query(DB_QUERIES.GET_PROFILE, [req.query.email], 1)
        console.log(response);
    }
    catch (error) {
        res.json({ status: 0, message: "An error was occured.", error: error, response: response })
    }
    var isResponse = utils.recordExists(response.email);
    var result = {
        status: isResponse ? 1 : 0,
        user: isResponse ? response : { message: "Some error occured" }
    }
    res.status(200).json(result);
})

router.post('/update_profile', async function (req, res, next) {
    var p = req.body;
    try {
        var update = await database.query(DB_QUERIES.UPDATE_PROFILE,
            [p.firstname, p.lastname, p.new_email, p.mobile, p.email], 1)
        var response = await database.query(DB_QUERIES.GET_PROFILE, [req.query.email], 1)

    }
    catch (error) {
        res.status(200).json({
            status: 0,
            message: "An error occured",
            error: error
        })
    }

    res.status(200).json({
        status: 1,
        message: "ok",
        response: response
    });
})
// aadhar, voter card, pan, 
router.get('/news', async (req, res) => {
    //var news = database.query(DB_QUERIES.GET_NEWS, )
    var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=4be040e71fc54b1ead2d47de3a75c922';

    request(url, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

        res.status(200).json(JSON.parse(body).articles) // Print the HTML for the Google homepage.
    });
    //     res.json([{title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Grammy Awards 2019: Kacey Musgraves Wins Album of the Year", description:"At a ceremony dominated by female performers and presenters, Musgraves won album of the year for “Golden Hour,” as well as three other awards.",
    //      image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg",
    //       publishedAt:"2019-02-11T01:57:00+00:00", 
    //       content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    //     }, 
    //     {title:"Modi will win 2019 elections",
    //      description:"Modi will win 2019 electionsves won album of the year for “Golden Hour,” as well as three other awards.",
    //       image:"https://static01.nyt.com/images/2019/02/11/arts/music/11grammys-hp-promo4/11grammys-hp-promo4-facebookJumbo.jpg", 
    //     publishedAt:"2019-02-11T01:57:00+00:00", 
    //     content:"Traveling with Votel (CNN)The top US commander in the war against ISIS aligned himself Sunday with the US intelligence community assessment that there are \"tens of thousands\" of ISIS fighters spread across Syria and Iraq. \r\n\"They are dispersed and disaggrega"
    // }])
})

router.post('/next', async function (req, res) {
    var email = req.body.email;
    var task = req.body.task;
    var subtask = req.body.subtask;
    console.log(subtask);
    // console.log(task);
    var result1 = await database.query("select id from users where email = ?", [req.body.email], 1)

    var user = await database.query("select task_id, userid, task, subtask from tasks where userid=?", [result1.id], 1);

    var sql = "UPDATE tasks SET task =?, subtask =? WHERE userid =?";
    if (parseInt(user.subtask) == 20) {
        task = parseInt(user.task) + 1;
        subtask = 1;
    }
    else {
        task = user.task,
            subtask = parseInt(user.subtask) + 1
    }
    var result2 = database.query(sql, [task, subtask, result1.id], 1);

    var response = {
        status: 1,
        message: "success",
        user: {
            completed_task: task,
            next_task: subtask + 1,
            subtask_nexttask: user.subtask
        }
    }
    if (user) res.status(200).json(response);

});
router.post('/task', async function (req, res) {
    var email = req.body.email;
    var result = await database.query("select id from users where email = ?", [req.body.email], 1)

    var user = await database.query(DB_QUERIES.SELECT_TASKS, [result.id], 1);
    if (parseInt(user.subtask) == 20) {
        task = parseInt(user.task) + 1;
        subtask = 1;
    }
    var response = {
        status: 1,
        message: "success",
        user: {
            //   completed_task:parseInt(user.task),
            completed_task: user.task,
            subtask_nexttask: user.subtask
        }
    }
    if (user) res.status(200).json(response);
});



module.exports = router;


