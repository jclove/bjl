'use strict';

var AgencyPage = function AgencyPage() {
    AgencyPage.super(this);
    AgencyPage.prototype.init = function () {
        // var img = new Laya.Sprite();
        new QRCode(document.getElementById('layaCanvas'), 'your content');
        var qrcode = new QRCode('layaCanvas', {
            text: 'your content',
            width: 256,
            height: 256,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
        this.erweima.on(Laya.Event.CLICK, this, this.Onerweima);
        this.shouming.on(Laya.Event.CLICK, this, this.Onyongjin);
        this.oneLv.text = basicDate.first;
        this.towLv.text = basicDate.second;
        this.threeLv.text = basicDate.three;
        this.fourLv.text = basicDate.four;
        this.fiveLv.text = basicDate.five;
        this.liuLv.text = basicDate.six;
        this.qiLv.text = basicDate.seven;
        this.baLv.text = basicDate.eight;
        this.jiuLv.text = basicDate.nine;
        this.shiLv.text = basicDate.ten;
    };
    AgencyPage.prototype.Onerweima = function () {
        window.location.href = url + "/index.php/weixin/Index/erweima?yqm=" + basicDate.yqm;
    };
    AgencyPage.prototype.Onyongjin = function () {
        LayaSample.yongjin.init();
        LayaSample.yongjin.popup();
    };
};
Laya.class(AgencyPage, "AgencyPage", agencyPageUI); //佣金