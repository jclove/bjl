var Help = function () {
    Help.super(this);
    Help.prototype.init = function () {

    }
}
Laya.class(Help, "Help", helpUI);   //帮助页面

var Rank = function () {
    Rank.super(this);
    var _this = this;
    LayaSample.socket.on(Laya.Event.MESSAGE, this, receiveHandler);     //监听讯号
    function receiveHandler(res) {
        var receiveDate = JSON.parse(res.slice(4))
        if (receiveDate.action == 712) {
            var data = JSON.parse(receiveDate.data);
            var arr1 = [];
            // 设置列表项信息.
            for (var i = 0; i < data.length; ++i) {
                arr1[i] = {
                    YRanking: {
                        text: i + 1
                    },
                    YID: {
                        text: data[i].id
                    }
                };
            }
            this.yongjinBang.dataSource = arr1; // 批量赋值.
        }
    }
    Rank.prototype.init = function () {

    }
}
Laya.class(Rank, "Rank", rankUI);   //排行页面

var Service = function () {
    Service.super(this);
    Service.prototype.init = function () { }
}
Laya.class(Service, "Service", servicePageUI);   //客服页面
var Yongjin = function () {
    Yongjin.super(this);
    Yongjin.prototype.init = function () {

    }
}
Laya.class(Yongjin, "Yongjin", yongjinshuomingUI);   //佣金说明
var Tishi = function () {
    Tishi.super(this);
    Tishi.prototype.init = function (text) {
        this.tishiContent.text = text;
    }
}
Laya.class(Tishi, "Tishi", tishiUI);   //佣金说明

