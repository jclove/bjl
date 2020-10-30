var userData;    //用户信息
var basicDate;
var soundC;
var getmoneyFlag = "";  //提现类型 
var betLog = [];
var url;
var chongzhiFlag = true;
var getmoneyFlagBtn = true;
var chongFlag = true;
/*userData = {    //假的用户信息
    "openId": "oGPD00JvsRYet7seFUPKzSKXwoKM",
    "nickName": "bohan",

    "gender": 1,
    "language": "zh_CN",
    "city": "Kaifeng",
    "province": "Henan",
    "country": "China",
    "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIhvw4HpdqXObo4sUKa0ZlGibT9mrlP1tvVHqn2icUy6Kzv04iack2sFbH0aHwtVo9PjW5fF5j6XpSug/132",
    "watermark": {
        "timestamp": 1525673392,
        "appid": "wxa3b3a1b0249a43f3"
    }
};*/
// 获取code
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
var code = getQueryString("code");
var yqm = getQueryString("yqm");

baijialeInit(window.LayaSample || (window.LayaSample = {}));
var Stage = Laya.stage;
function baijialeInit(LayaSample) {
    var tl;     //动画
    (function () {
        Laya.init(750, 1334, Laya.WebGL)
        Laya.stage.bgColor = "black";
        Laya.stage.screenMode = "none";
        Laya.stage.alignV = "middle";
        Laya.stage.alignH = "center";
        Laya.stage.scaleMode = "custom";
        LoadImgFirst()
    })()
    function LoadImgFirst() {       //首次加载，加载动画
        var resArray = [
            { url: "res/atlas/loadfirst.json", type: Laya.Loader.ATLAS }
        ]
        Laya.loader.load(resArray, Laya.Handler.create(null, onLoadEdfitsr))
    }
    function onLoadEdfitsr() {
        tl = new Laya.Animation();  //加载画面
        tl.loadAnimation("gameLoadFirst.ani");
        tl.pos(390, 600)
        Stage.addChild(tl);
        tl.play();

        LayaSample.socket = new Laya.Socket();                          //websocket连接
        LayaSample.socket.connectByUrl("ws://bjladmin.devs:80");         //连接地址
        LayaSample.socket.once(Laya.Event.OPEN, this, openHandler);     //连接成功
        LayaSample.socket.on(Laya.Event.MESSAGE, this, receiveHandler); //接收到讯号
        LayaSample.socket.on(Laya.Event.CLOSE, this, closeHandler);     //关闭连接
        LayaSample.socket.on(Laya.Event.ERROR, this, errorHandler);     //连接错误

        function openHandler() {
        }
        function receiveHandler(res) {
            var receiveDate = JSON.parse(res.slice(4))
            if (receiveDate.action == 1) {
                basicDate = JSON.parse(receiveDate.data);
                onLoadGame();
            }
            if (receiveDate.action == 2) {
                basicDate = JSON.parse(receiveDate.data);
                if (basicDate.errorCode == 2) {
                    alert(basicDate.content);
                }
            }
            if (receiveDate.action == 4) {
                var data = JSON.parse(receiveDate.data);
                url = data.url;
                $.ajax({
                    async: true,
                    url: url + "/index.php/weixin/Index/getUser", //这是我的服务端处理文件php的
                    type: "GET",
                    // 下面几行是jsoup，如果去掉下面几行的注释，后端对应的返回结果也要去掉注释
                    dataType: 'jsonp',
                    jsonp: 'callback', //jsonp的值自定义,如果使用jsoncallback,那么服务器端,要返回一个jsoncallback的值对应的对象. 
                    jsonpCallback: 'callback',
                    dataType: "text",
                    data: { code: code }, //传递本页面获取的code到后台，以便后台获取openid
                    timeout: 5000,
                    success: function (result) {
                        callback(result);
                    },
                    error: function (data) {
                        alert("Ajax请求错误！" + data);
                    }
                });
                function callback(result) {
                    var result = JSON.parse(result);
                    userData = {
                        "openId": result.openid,
                        "nickName": result.nickname,
                        "gender": result.sex,
                        "language": result.language,
                        "city": result.city,
                        "province": result.province,
                        "country": result.country,
                        "avatarUrl": result.headimgurl,
                    };
                    if (yqm) {
                        userData.yqm = yqm;
                    }
                    if (!userData.openId) {
                        window.location.href = url + "/index.php/weixin/Index/wxLogin";
                    }
                    var resArray = [
                        { url: "res/atlas/comp.json", type: Laya.Loader.ATLAS },  //加载多个游戏文件
                        { url: "res/atlas/pai.json", type: Laya.Loader.ATLAS },
                        { url: "res/sounds/alert.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/click.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/start.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/stop.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/bet.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/on_bet.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/banker_win.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/player_win.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/banker.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/banker_add.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/player_add.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/bggame.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/miaozhen.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/he.mp3", type: Laya.Loader.SOUND },
                        { url: "res/sounds/da0.mp3", type: Laya.Loader.SOUND }
                    ]
                    Laya.loader.load(resArray, Laya.Handler.create(null, onLoadEdfitsr))
                    LayaSample.socket.send(eDate("1", userData));//发送请求数据
                }
            }
        }
        function closeHandler() {
            alert("您已断开连接，请重试刷新")
        }
        function errorHandler() {
            alert("连接错误，请联系管理员")
        }

        function onLoadEdfitsr() {
            Laya.stage.on('click', this, () => {    //点击音效
                Laya.SoundManager.playSound("./res/sounds/click.mp3");
            })
            Laya.SoundManager.playMusic("./res/sounds/bggame.mp3", 0);
            function onComplete() {
                console.log("播放完成");
            }

        }
        function onLoadGame() {
            //组件
            LayaSample.homePage = new HomePage();       //基本页面
            LayaSample.gamePlay = new GamePlay();       //游戏画面
            LayaSample.gameBet = new GameBet();         //下注框
            LayaSample.recharge = new Recharge();       //充值框
            LayaSample.getMoney = new GetMoney();       //提现框
            LayaSample.help = new Help();               //帮助
            LayaSample.rank = new Rank();               //排行
            LayaSample.betLog = new BetLog();           //投注记录
            LayaSample.clog = new Clog();               //佣金记录
            LayaSample.aPage = new AgencyPage();        //代理页面
            LayaSample.service = new Service();         //客服
            LayaSample.countdown = new Countdown();     //闹钟
            LayaSample.result = new Result();           //结算
            LayaSample.deal = new Deal();               //下注动画
            LayaSample.yongjin = new Yongjin();         //佣金
            LayaSample.yongjinLog = new YongjinLog();   //佣金记录
            LayaSample.tishi = new Tishi();             //提现

            tl.clear()
            tl.removeSelf()     //清除加载动画
            LayaSample.homePage.init();     //游戏画面
            Stage.addChild(LayaSample.homePage);
        }
    }
}
//加密函数
function eDate(action, data) {
    var sign = md5(action + JSON.stringify(data) + "5e08323af9116a8824139704e36d7c15");
    var sendData = { action: action, data: JSON.stringify(data), sign: sign };
    return JSON.stringify(sendData) + "^";
}