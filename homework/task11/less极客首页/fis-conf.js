fis.config.set('pack',{
    '/pkg/lib.js':[
    'js/jquery-3.1.0.min.js',
    'js/index.js',
    ]
});

fis.config.set('modules.postpackager', 'simple');

fis.config.set('settings.postpackager.simple.autoCombine', true);

fis.config.merge({
    modules: {
        optimizer: {
            html: "htmlmin"
        }
    },
    settings: {
        optimizer: {
            "htmlmin": {
                minifyJS: false
            }
        }
    }
});

fis.config.set('modules.parser.less','less');
// 把以less结尾的文件以css文件输出
fis.config.set('roadmap.ext.less','css');

fis.config.merge({
    roadmap:{
        path:[
            {
                //所有img目录下的.png，.gif文件
                reg : /^\/img\/(.*\.(?:png|gif|jpg|jpeg))/i,
                //访问这些图片的url是 '/m/xxxx?log_id=123'
                // url : '/127.0.0.1:8080',
                //发布到/static/pic/xxx目录下
                release : '/static/img/$1'
            },
        ]
    }
});