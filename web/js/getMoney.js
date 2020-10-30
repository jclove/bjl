var GetMoney = function () {
    GetMoney.super(this);
    var _this = this;
    GetMoney.prototype.init = function () {
        this.getMoneyIndex.visible = true;
        this.getMoneyTow.visible = false;
        this.tishi.visible = false;
        this.getMoneyNum.text = "0";

        this.affirmBtn.on(Laya.Event.CLICK, this, this.OnaffirmBtn);        //确定提现
        this.btnAllMoney.on(Laya.Event.CLICK, this, this.OnbtnAllMoney);    //点击全部提现
        this.nowGetMoney.on(Laya.Event.CLICK, this, this.OnnowGetMoney);    //立即提现
    }
    GetMoney.prototype.OnaffirmBtn = function () {
        this.getMoneyIndex.visible = false;
        this.getMoneyTow.visible = true;
    }
    GetMoney.prototype.OnbtnAllMoney = function () {
        this.getMoneyNum.text = this.MoneyNum.text;
    }
    GetMoney.prototype.OnnowGetMoney = function () {
        var getNum = Number(_this.getMoneyNum.text);
        var allNum = Number(_this.MoneyNum.text);
        _this.tishi.visible = true;
        if (getNum < 1) {
            _this.tishi.text = "提现金额不能少于一元"
        }
        if (getNum > allNum) {
            _this.tishi.text = "提现金额不能大于余额"
        }
        if (1 < getNum && getNum <= allNum) {
            _this.tishi.visible = false;
            if (getmoneyFlag == "yongjin" && getmoneyFlagBtn == true) {
                getmoneyFlagBtn = false;
                window.location.href = url + "/index.php/index/pay/tixian?type=2&id=" + basicDate.id + "&money=" + _this.getMoneyNum.text;
            }
            if (getmoneyFlag == "yue" && getmoneyFlagBtn == true) {
                getmoneyFlagBtn = false;
                window.location.href = url + "/index.php/index/pay/tixian?type=1&id=" + basicDate.id + "&money=" + _this.getMoneyNum.text;
            }
        }
    }
}
Laya.class(GetMoney, "GetMoney", getMoneyUI);