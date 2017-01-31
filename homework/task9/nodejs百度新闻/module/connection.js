var mysql = require('mysql');
// 数据库设置
var dbconfig = {
	host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'baidunews'
};
// 创建连接池
var getPool = function() {
	var pool = mysql.createPool(dbconfig);
	return pool;
}

module.exports = getPool;