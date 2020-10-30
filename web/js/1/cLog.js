var Clog = function () {
    Clog.super(this);
    var _this = this;
    Clog.prototype.init = function () {
        this.yongjin.text = basicDate.com_money;
        this.tixian.on(Laya.Event.CLICK, this, this.Ontixian);
        this.tixianLog.on(Laya.Event.CLICK, this, this.OntixianLog);
        this.yongjinLog.on(Laya.Event.CLICK, this, this.OnyongjinLog);
    }
    Clog.prototype.Ontixian = function () {
        var data = { dian: 712 }
        LayaSample.socket.send(eDate("727", data)); //发送请求数据
        LayaSample.socket.on(Laya.Event.MESSAGE, this, receiveHandler);     //监听讯号
        function receiveHandler(res) {
            var receiveDate = JSON.parse(res.slice(4))
            if (receiveDate.action == 727) {
                var data = JSON.parse(receiveDate.data);
                LayaSample.getMoney.getNum.text = data.num;
                if (data.num == 0) {
                    LayaSample.getMoney.chao.visible = true;
                    LayaSample.getMoney.nowGetMoney.visible = false;
                }
            }
        }
        getmoneyFlag = "yongjin";
        LayaSample.getMoney.pos(50, 150);
        LayaSample.getMoney.init();
        LayaSample.getMoney.MoneyNum.text = basicDate.com_money;
        LayaSample.getMoney.popup();
    }
    Clog.prototype.OntixianLog = function () {
        var data = { dian: 0 }
        LayaSample.socket.send(eDate("728", data)); //发送请求数据
        LayaSample.yongjinLog.popup();
    }
    Clog.prototype.OnyongjinLog = function () {
        var data = { dian: 0 }
        LayaSample.socket.send(eDate("729", data)); //发送请求数据Ï
        LayaSample.yongjinLog.popup();
    }
}
Laya.class(Clog, "Clog", CLogUI);   //排行页面