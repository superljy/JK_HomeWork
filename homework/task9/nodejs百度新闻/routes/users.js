var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var xss = require('xss');
var connection = require('../module/connection')();


// var connection = mysql.createPool({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'root',
//     database: 'baidunews'
// });

/* 后台 */

// 获取所有新闻列表
router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM `news` order by id desc', function(err, rows) {
        res.json(rows);
    });
});
// 更新列表
router.post('/update', function(req, res,next) {
    var newsid = xss(req.body.id),
        newstype = xss(req.body.newstype),
        newstitle = xss(req.body.newstitle),
        newsdate = xss(req.body.newsdate),
        newssrc = xss(req.body.newssrc);
    connection.query('UPDATE `news` SET `newstitle`=?,`newstype`=?,`newsdate`=?,`newssrc`=? WHERE `id`=?', [newstitle, newstype, newsdate, newssrc, newsid], function(err, rows) {
        res.json(rows);
    });
});

// 模态框修改
// get请求使用query查找
router.get('/currnews',function(req,res,next){
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE `id` = ?',[newsid],function(err,rows){
        res.json(rows);
    });
});

// 模态框删除
// post请求不用query来查找,用body
router.post('/delete',function(req,res,next){
    var newsid = req.body.newsid;
    connection.query('DELETE FROM `news` WHERE `id` = ?',[newsid],function(err,result){
        res.json(result);
    });
});

// 插入新闻
router.post('/insert',function(req,res,next){
    var newstype = xss(req.body.newstype),
        newstitle = xss(req.body.newstitle),
        newsimg = xss(req.body.newsimg),
        newsdate = xss(req.body.newsdate),
        newssrc = xss(req.body.newssrc);
    connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newsdate`,`newssrc`) VALUES (?,?,?,?,?)',[newstitle,newstype,newsimg,newsdate,newssrc],function(err,result){
            if (!err) {
                res.json(result);
            }
    });
});
module.exports = router;
