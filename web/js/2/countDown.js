"use strict";

var Countdown = function Countdown() {
    Countdown.super(this);
    var _this = this;
    Countdown.prototype.init = function (num) {
        _this.countDownNum.text = num;
        var timer = setInterval(function () {
            _this.countDownNum.text = --num;
            if (num <= 10) {
                _this.naozhong.visible = true;
                if (num == 3) {
                    laya.media.SoundManager.playSound("./res/sounds/da0.mp3", 1); //0表示循环播放
                }
            }
            if (num <= 0) {
                clearInterval(timer);
                _this.removeSelf();
                _this.naozhong.visible = false;
            }
        }, 1000);
    };
};
Laya.class(Countdown, "Countdown", countDownUI); //闹钟