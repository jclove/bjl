"use strict";

var Result = function Result() {
    Result.super(this);
    var _this = this;
    var resultData;
    var bb = 1;
    var xianHe = 0;
    var zhuangHe = 0;
    Result.prototype.init = function (data) {
        _this.num1.text = 0;
        _this.num1.text = 0;
        _this.zOrder = "999";
        resultData = data;
        console.log(resultData);
    };
    Result.prototype.star = function () {
        _this.resultImg.visible = false;
        _this.resultNum1.visible = false;
        _this.resultNum2.visible = false;
        _this.resultNum3.visible = false;
        _this.resultNum4.visible = false;
        _this.resultNum5.visible = false;
        _this.resultNum6.visible = false;
        xianHe = 0;
        zhuangHe = 0;

        var _loop = function _loop(i) {
            setTimeout(function () {
                var url = getPaiUrl(resultData.dian[0][i]);
                _this.xianpai._childs[i].visible = true;
                change(_this.xianpai._childs[i], url);
                if (i <= 1) {
                    laya.media.SoundManager.playSound("./res/sounds/player.mp3", 1);
                } else {
                    laya.media.SoundManager.playSound("./res/sounds/player_add.mp3", 1); //0表示循环播放
                }
                xianHe = xianHe + parseInt(resultData.dian[0][i] >= 10 ? 0 : resultData.dian[0][i]);
                _this.num1.text = xianHe % 10;
            }, 2500 * i);
        };

        for (var i = 0; i < resultData.dian[0].length; i++) {
            _loop(i);
        }
        setTimeout(function () {
            var _loop2 = function _loop2(i) {
                setTimeout(function () {
                    var url = getPaiUrl(resultData.dian[1][i]);
                    _this.zhuangpai._childs[i].visible = true;
                    change(_this.zhuangpai._childs[i], url);
                    if (i <= 1) {
                        laya.media.SoundManager.playSound("./res/sounds/banker.mp3", 1);
                    } else {
                        laya.media.SoundManager.playSound("./res/sounds/banker_add.mp3", 1); //0表示循环播放
                    }
                    zhuangHe = zhuangHe + parseInt(resultData.dian[1][i] >= 10 ? 0 : resultData.dian[1][i]);
                    _this.num2.text = zhuangHe % 10;
                }, 2500 * i);
            };

            for (var i = 0; i < resultData.dian[1].length; i++) {
                _loop2(i);
            }
        }, 1500);
        setTimeout(function () {
            _this.resultImg.visible = true;
            if (resultData.result == 0) {
                _this.resultImg.skin = "comp/xianying.png";
                laya.media.SoundManager.playSound("./res/sounds/player_win.mp3", 1); //0表示循环播放
            }
            if (resultData.result == 2) {
                _this.resultImg.skin = "comp/he.png";
                laya.media.SoundManager.playSound("./res/sounds/he.mp3", 1); //0表示循环播放
            }
            if (resultData.result == 4) {
                _this.resultImg.skin = "comp/zhuangying.png";
                laya.media.SoundManager.playSound("./res/sounds/banker_win.mp3", 1); //0表示循环播放
            }
            var num = 3;
            var timer = setInterval(function (params) {
                LayaSample.gamePlay.changeColor(resultData.result);
                num--;
                if (num < 1) {
                    clearInterval(timer);
                }
            }, 800);
            if (resultData.is_double != 0) {
                var num1 = 3;
                var timer1 = setInterval(function (params) {
                    LayaSample.gamePlay.changeColor(resultData.result);
                    num1--;
                    if (num1 < 1) {
                        clearInterval(timer1);
                    }
                }, 800);
            }
            var sum = LayaSample.gamePlay.cardSum.text - resultData.dian[0].length - resultData.dian[1].length;

            LayaSample.gamePlay.cardSum.text = sum <= 6 ? 416 : sum;
            if (resultData.yue) {
                LayaSample.homePage.showMoney.text = resultData.yue;
            }
        }, 9000);
    };
    function change(obj, url) {
        obj.skin = "pai/pai.png";
        Laya.Tween.to(obj, { scaleX: -1 }, 300, null, Laya.Handler.create(this, onTweeed), 0);
        function onTweeed() {
            obj.skin = url;
            Laya.Tween.to(obj, { scaleX: 1 }, 300, Laya.Ease.strongOut, null, 0);
        }
    }
    function getPaiUrl(num) {
        var index = parseInt(num);
        var numLast = String(num).split(".");
        var colorIndex = numLast[1];
        switch (colorIndex) {
            case "1":
                return "pai/" + "1" + index + ".png";
            case "2":
                return "pai/" + "2" + index + ".png";
            case "3":
                return "pai/" + "3" + index + ".png";
            case "4":
                return "pai/" + "4" + index + ".png";
            default:
                break;
        }
    }
};
Laya.class(Result, "Result", resultUI);