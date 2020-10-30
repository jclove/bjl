var Recharge = function () {
    Recharge.super(this);
    var _this = this;
    Recharge.prototype.init = function () {
        for (let index = 0; index < LayaSample.recharge.WxHome._childs.length; index++) {
            LayaSample.recharge.WxHome._childs[index].on(Laya.Event.CLICK, this, OnBtnWx, [index]);
            LayaSample.recharge.AliHome._childs[index].on(Laya.Event.CLICK, this, OnBtnAli, [index]);
        }
        console.log(basicDate.id)
    }
    function OnBtnWx(params) {   //微信支付
        var num = getnum(params);
        if (!chongzhiFlag) {
            LayaSample.tishi.init("请等待游戏结算完再充值");
            LayaSample.tishi.popup();
        } else {
            tiaozhuanPay(3, num)
        }
    }
    function OnBtnAli(params) { //阿里支付
        var num = getnum(params);
        if (!chongzhiFlag) {
            LayaSample.tishi.init("请等待游戏结算完再充值");
            LayaSample.tishi.popup();
        } else {
            tiaozhuanPay(1, num)
        }
    }
    function tiaozhuanPay(type, num) {
        if (chongFlag == true && basicDate.id) {
            chongFlag = false;
            window.location.href = url + "/index.php/index/pay/recharge?type=" + type + "&id=" + basicDate.id + "&money=" + num;
        }
    }
    var a = 0;
    function getnum(params) {   //获取金额数值
        switch (params) {
            case 0:
                return 10;
            case 1:
                return 50;
            case 2:
                return 100;
            case 3:
                return 500;
            case 4:
                return 1000;
            case 5:
                return 2000;
            case 6:
                return 5000;
            case 7:
                return 10000;
            case 8:
                return 30000;
            default:
                break;
        }
    }
}
Laya.class(Recharge, "Recharge", rechargeUI);