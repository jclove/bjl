"use strict";

var HomePage = function HomePage() {
    HomePage.super(this);
    var _this = this;
    HomePage.prototype.init = function () {
        this.topBar.zOrder = "9999"; //设置页面属性
        this.bomBar.zOrder = "9999";
        this.showID.text = basicDate.id;

        console.log(basicDate);
        this.showMoney.text = basicDate.user_money;
        this.showRecharge.on(Laya.Event.CLICK, this, this.ONshowRecharge); //点击充值
        this.homeEmbody.on(Laya.Event.CLICK, this, this.OnhomeEmbody); //点击提现
        this.btnIndex.on(Laya.Event.CLICK, this, this.OnbtnIndex); //点击首页
        this.btnBetLog.on(Laya.Event.CLICK, this, this.OnbtnBetLog); //点击投注记录
        this.btnCLog.on(Laya.Event.CLICK, this, this.OnbtnCLog); //点击佣金记录
        this.btnAgency.on(Laya.Event.CLICK, this, this.OnbtnAgency); //点击代理
        this.btnService.on(Laya.Event.CLICK, this, this.OnbtnService); //点击客服

        LayaSample.gamePlay.pos(0, 100); //棋盘组件
        LayaSample.gamePlay.init();
        LayaSample.homePage.addChild(LayaSample.gamePlay);
    };
    HomePage.prototype.ONshowRecharge = function () {
        //点击充值
        LayaSample.recharge.pos(50, 150);
        LayaSample.recharge.init();
        LayaSample.recharge.popup();
    };
    HomePage.prototype.OnhomeEmbody = function () {
        //点击提现
        var data = { dian: 712 };
        LayaSample.socket.send(eDate("727", data)); //发送请求数据
        LayaSample.socket.on(Laya.Event.MESSAGE, this, receiveHandler); //监听讯号
        function receiveHandler(res) {
            var receiveDate = JSON.parse(res.slice(4));
            if (receiveDate.action == 727) {
                var data = JSON.parse(receiveDate.data);
                LayaSample.getMoney.getNum.text = data.num;
                if (data.num == 0) {
                    LayaSample.getMoney.chao.visible = true;
                    LayaSample.getMoney.nowGetMoney.visible = false;
                }
            }
        }
        getmoneyFlag = "yue";
        LayaSample.getMoney.MoneyNum.text = basicDate.user_money;
        LayaSample.getMoney.pos(50, 150);
        LayaSample.getMoney.init();
        LayaSample.getMoney.popup();
    };
    HomePage.prototype.OnbtnIndex = function () {
        //点击首页
        clearModule();
        LayaSample.gamePlay.init();
        LayaSample.homePage.addChild(LayaSample.gamePlay);
    };
    HomePage.prototype.OnbtnBetLog = function () {
        //点击投注记录
        clearModule();
        var data = { dian: "1", money: "1" };
        LayaSample.socket.send(eDate("732", data)); //发送请求数据
        LayaSample.betLog.init();
        LayaSample.betLog.pos(50, 150);
        LayaSample.homePage.addChild(LayaSample.betLog);
    };
    HomePage.prototype.OnbtnCLog = function () {
        //点击投
        clearModule();
        LayaSample.clog.init();
        LayaSample.clog.pos(50, 150);
        LayaSample.homePage.addChild(LayaSample.clog);
    };
    HomePage.prototype.OnbtnAgency = function () {
        //点击代理
        clearModule();
        LayaSample.aPage.init();
        LayaSample.aPage.pos(0, 150);
        LayaSample.homePage.addChild(LayaSample.aPage);
    };
    HomePage.prototype.OnbtnService = function () {
        //点击客服
        clearModule();
        LayaSample.service.init();
        LayaSample.service.pos(0, 150);
        LayaSample.homePage.addChild(LayaSample.service);
    };
    function clearModule() {
        LayaSample.gamePlay.removeSelf();
        LayaSample.betLog.removeSelf();
        LayaSample.clog.removeSelf();
        LayaSample.aPage.removeSelf();
        LayaSample.service.removeSelf();
    }
};
Laya.class(HomePage, "HomePage", GameHomePageUI);