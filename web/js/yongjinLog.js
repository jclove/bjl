var YongjinLog = function () {
    YongjinLog.super(this);
    var _this = this;
    LayaSample.socket.on(Laya.Event.MESSAGE, this, receiveHandler);     //监听讯号
    function receiveHandler(res) {
        var receiveDate = JSON.parse(res.slice(4))
        if (receiveDate.action == 728) {
            var data = JSON.parse(receiveDate.data);
            console.log(data)
            _this.title.text = "提现记录";
            _this.ID.visible = false;
            var arr = [];
            // 设置列表项信息.
            for (var i = 0; i < data.length; ++i) {
                arr[i] = {
                    data: {
                        text: new Date(data[i].add_time * 1000).toLocaleDateString() + "\n" + new Date(data[i].add_time * 1000).toLocaleTimeString().slice(2)
                    },
                    num: {
                        text: data[i].money
                    },
                    uesrName: {
                        visible: false
                    },
                    stutus: {
                        text: data[i].status == 1 ? "成功" : "失败"
                    }
                };
            }
            this.myList.dataSource = arr; // 批量赋值.
        }
        if (receiveDate.action == 729) {
            var data = JSON.parse(receiveDate.data);
            console.log(data)
            _this.title.text = "佣金记录";
            _this.ID.visible = true;
            var arr = [];
            // 设置列表项信息.
            for (var i = 0; i < data.length; ++i) {
                arr[i] = {
                    data: {
                        text: new Date(data[i].add_time * 1000).toLocaleDateString() + "\n" + new Date(data[i].add_time * 1000).toLocaleTimeString().slice(2)
                    },
                    num: {
                        text: data[i].money
                    },
                    uesrName: {
                        visible: true,
                        text: data[i].buy_id
                    },
                    stutus: {
                        text: data[i].status == 1 ? "成功" : "失败"
                    }
                };
            }
            this.myList.dataSource = arr; // 批量赋值.
        }
    }

}
Laya.class(YongjinLog, "YongjinLog", YongJinLogUI);   //佣金说明
