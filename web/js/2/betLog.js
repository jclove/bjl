"use strict";

var BetLog = function BetLog() {
    BetLog.super(this);
    var _this = this;
    LayaSample.socket.on(Laya.Event.MESSAGE, this, receiveHandler); //监听讯号
    function receiveHandler(res) {
        var receiveDate = JSON.parse(res.slice(4));
        if (receiveDate.action == 732) {
            var data = JSON.parse(receiveDate.data);
            if (data.length != 0) {
                _this.hintLog.visible = false;
                _this.listHome.visible = true;
                var arr = [];
                for (var x = 0; x < data.length; x++) {
                    arr[x] = {
                        num: { text: data[x].num },
                        money: { text: data[x].money },
                        win_money: { text: data[x].win_money },
                        is_winning: { text: data[x].is_winning == 0 ? "未中奖" : "中奖" }
                    };
                }
                this.listHome.dataSource = arr; // 批量赋值.
            } else {
                _this.listHome.visible = false;
                _this.hintLog.visible = true;
            }
        }
    }
    BetLog.prototype.init = function () {};
};
Laya.class(BetLog, "BetLog", betLogUI); //排行页面