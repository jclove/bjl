var betNum;
var GameBet = function () {
    GameBet.super(this);
    //颜色滤镜矩阵,灰色
    var _this = this;
    var colorMatrix =
        [
            0.2086, 0.7094, 0.0820, 0, 0,  //R
            0.2086, 0.7094, 0.0820, 0, 0, //G
            0.2086, 0.7094, 0.0820, 0, 0,  //B
            0.9, 0.9, 0.9, 0.9, 0.9, //A
        ];
    //创建灰色颜色滤镜
    var GrayFilter = new Laya.ColorFilter(colorMatrix);

    GameBet.prototype.init = function () {      //页面初始化
        _this.btnRecall.zOrder = "999";
        colorInit();
        betNum = 10;
        _this.bet2.filters = null;
        for (let index = 0; index < _this.btnBetList.numChildren; index++) {    //事件监听
            if (_this.btnBetList.getChildAt(index).name == "bet") {
                _this.btnBetList.getChildAt(index).on(Laya.Event.CLICK, this, this.transition, [_this.btnBetList.getChildAt(index)])
            }
        }
        _this.btnRecall.on(Laya.Event.CLICK, this, this.OnBtnrecall)
    }
    GameBet.prototype.OnBtnrecall = function (arr) {     //点击撤销

        setTimeout(function (params) {
            chongzhiFlag = true;
        }, 500)
        var data = { dian: 0, money: betNum }
        LayaSample.socket.send(eDate("730", data)); //发送请求数据Ï
    }
    GameBet.prototype.transition = function (arr) {     //选中注数
        colorInit()
        obj = _this.btnBetList.getChildIndex(arr)
        arr.filters = null;
        switch (obj) {
            case 0:
                betNum = 5;
                break;
            case 1:
                betNum = 10;
                break;
            case 2:
                betNum = 50;
                break;
            case 3:
                betNum = 100;
                break;
            case 4:
                betNum = 500;
                break;
            case 5:
                betNum = 1000;
                break;

            default:
                break;
        }
    }

    function colorInit() {  //添加滤镜
        for (let index = 0; index < _this.btnBetList._childs.length; index++) {
            _this.btnBetList._childs[index].filters = [GrayFilter];
        }
    }

}
Laya.class(GameBet, "GameBet", gameBetUI);