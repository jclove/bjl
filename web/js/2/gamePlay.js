"use strict";

var GamePlay = function GamePlay() {
    GamePlay.super(this);
    var _this = this;
    var musicFlag = 1;
    var clickFlag = false;

    LayaSample.socket.on(Laya.Event.MESSAGE, this, receiveHandler); //监听讯号
    function receiveHandler(res) {
        var receiveDate = JSON.parse(res.slice(4));
        if (receiveDate.action == 723) {
            var data = JSON.parse(receiveDate.data); //进入游戏的时候
            if (data.t == 1) {
                laya.media.SoundManager.playSound("./res/sounds/alert.mp3", 1); //0表示循环播放
                hintType("star");
                LayaSample.deal.init(data);
                LayaSample.countdown.init(data.miao);
                LayaSample.countdown.pos(340, 523);
                _this.addChild(LayaSample.countdown);
                _this.loadNextGame.visible = false;
                clickFlag = true;
                _this.cardSum.text = data.cardSum;
            }
            if (data.t == 2) {
                hintType("over");
                clickFlag = false;
                _this.cardSum.text = data.cardSum;
            }
            if (data.t == 3) {
                laya.media.SoundManager.playSound("./res/sounds/alert.mp3", 1); //0表示循环播放
                clickFlag = false;
                // if (data.miao > 9) {
                //     _this.addChild(LayaSample.result)    //结算组件
                //     LayaSample.result.init(aa);
                //     LayaSample.result.star();
                // }
                _this.cardSum.text = data.cardSum;
                var aa = { dian: data.card, result: data.result };
                LayaSample.countdown.init(data.miao);
                LayaSample.countdown.pos(340, 523);
                _this.addChild(LayaSample.countdown);
                setTimeout(function (params) {
                    LayaSample.result.removeSelf();
                    LayaSample.deal.remove();
                }, data.miao + "000");
            }
        }
        if (receiveDate.action == 760) {
            var data = JSON.parse(receiveDate.data); //持续发送状态
            if (data.t == 1) {
                //正在下注
                laya.media.SoundManager.playSound("./res/sounds/start.mp3", 1); //0表示循环播放
                clickFlag = true;
                hintType("star");
                changeBorder();
                LayaSample.countdown.init(data.miao);
                LayaSample.countdown.pos(340, 523);
                _this.addChild(LayaSample.countdown);
                _this.loadNextGame.visible = false;
                chongzhiFlag = true;
            }
            if (data.t == 2) {
                //等待开奖
                clickFlag = false;
                laya.media.SoundManager.playSound("./res/sounds/stop.mp3", 1); //0表示循环播放
                hintType("over");
            }
            if (data.t == 3) {
                //结算
                laya.media.SoundManager.playSound("./res/sounds/alert.mp3", 1); //0表示循环播放
                clickFlag = false;
                _this.addChild(LayaSample.result); //结算组件
                LayaSample.result.star();
                LayaSample.countdown.init(data.miao);
                LayaSample.countdown.pos(340, 523);
                _this.addChild(LayaSample.countdown);
                setTimeout(function (params) {
                    LayaSample.result.removeSelf();
                    LayaSample.deal.remove();
                }, data.miao + "000");
                chongzhiFlag = true;
            }
        }
        if (receiveDate.action == 784) {
            var data = JSON.parse(receiveDate.data); //当前的人数
            _this.peopleNum.text = data.ren;
        }
        if (receiveDate.action == 781) {
            var data = JSON.parse(receiveDate.data); //有人出牌
            LayaSample.deal.dealPai(data);
        }
        if (receiveDate.action == 782) {
            var data = JSON.parse(receiveDate.data); //结算数据
            LayaSample.result.init(data);
            if (data.result == 0) {
                var obj = { dian: 0, is_double: data.is_double };
                betLog.push(obj);
            }
            if (data.result == 2) {
                var obj = { dian: 2, is_double: data.is_double };
                betLog.push(obj);
            }
            if (data.result == 4) {
                var obj = { dian: 4, is_double: data.is_double };
                betLog.push(obj);
            }
            chongzhiFlag = true;
            betLog = betLog.slice(-48);
            if (betLog.length >= 48) {
                betLog = betLog.slice(-42);
            }
            setTimeout(function () {
                LayaSample.gamePlay.imgHome.removeChildren();
                btnLogFun();
            }, 9000);
        }
        if (receiveDate.action == 774) {
            //撤销下注
            var data = JSON.parse(receiveDate.data);
            LayaSample.deal.ce(data);
        }
        if (receiveDate.action == 731) {
            //剩余金额
            var data = JSON.parse(receiveDate.data);
            LayaSample.homePage.showMoney.text = data.money;
            chongzhiFlag = false;
        }
        if (receiveDate.action == 730) {
            //自己撤销
            var data = JSON.parse(receiveDate.data);
            LayaSample.deal.mece(data);
            chongzhiFlag = true;
        }
        if (receiveDate.action == 775) {
            //记录
            var data = JSON.parse(receiveDate.data);
            betLog = data.reverse();
            betLog = betLog.slice(-48);
            if (betLog.length >= 48) {
                betLog = betLog.slice(-42);
            }
            LayaSample.gamePlay.imgHome.removeChildren();
            btnLogFun();
        }
    }

    GamePlay.prototype.init = function () {
        LayaSample.gameBet.init(); //投注组件
        LayaSample.gameBet.pos(0, 800);
        this.addChild(LayaSample.gameBet);
        this.colorDivzj.zOrder = "9999";
        LayaSample.deal.pos(0, 500);
        _this.addChild(LayaSample.deal);

        _this.btnHelp.on(Laya.Event.CLICK, this, this.Onhelp); //点击帮助
        _this.btnOnOff.on(Laya.Event.CLICK, this, this.OnbtnOnOff); //点击音乐开关
        _this.rankBtn.on(Laya.Event.CLICK, this, this.OnrankBtn); //点击排行
        _this.colorDivxd.on(Laya.Event.CLICK, this, this.OncolorDivxd); //点击闲对
        _this.colorDivzd.on(Laya.Event.CLICK, this, this.OncolorDivzd); //点击庄对
        _this.colorDivhe.on(Laya.Event.CLICK, this, this.OncolorDivhe); //点击和
        _this.colorDivxj.on(Laya.Event.CLICK, this, this.OncolorDivxj); //点击闲
        _this.colorDivzj.on(Laya.Event.CLICK, this, this.OncolorDivzj); //点击庄
    };
    GamePlay.prototype.Onhelp = function () {
        //点击help
        LayaSample.help.pos(22, 100);
        LayaSample.help.popup();
    };
    GamePlay.prototype.OnbtnOnOff = function () {
        //点击音乐开关
        if (musicFlag == 1) {
            Laya.SoundManager.soundMuted = true;
            Laya.SoundManager.musicMuted = true;
            Laya.SoundManager.muted = true;
            _this.Opentext.text = "声音：关";
            musicFlag = 2;
        } else {
            Laya.SoundManager.soundMuted = false;
            Laya.SoundManager.musicMuted = false;
            Laya.SoundManager.muted = false;
            Laya.SoundManager.playMusic("./res/sounds/bggame.mp3", 0);
            _this.Opentext.text = "声音：开";
            musicFlag = 1;
        }
    };
    GamePlay.prototype.OnrankBtn = function () {
        //点击排行
        var data = { dian: 712 };
        LayaSample.socket.send(eDate("712", data)); //发送请求数据
        LayaSample.rank.pos(22, 100);
        LayaSample.rank.popup();
    };
    GamePlay.prototype.OncolorDivxj = function () {
        //闲家
        this.changeColor(0);
        if (clickFlag == true && betNum <= LayaSample.homePage.showMoney.text) {
            laya.media.SoundManager.playSound("./res/sounds/bet.mp3", 1); //0表示循环播放
            var data = { dian: 0, money: betNum };
            LayaSample.socket.send(eDate("731", data)); //发送请求数据
        }
    };
    GamePlay.prototype.OncolorDivxd = function () {
        //闲对
        this.changeColor(1);
        if (clickFlag == true && betNum <= LayaSample.homePage.showMoney.text) {
            laya.media.SoundManager.playSound("./res/sounds/bet.mp3", 1); //0表示循环播放
            var data = { dian: 1, money: betNum };
            LayaSample.socket.send(eDate("731", data)); //发送请求数据
        }
    };
    GamePlay.prototype.OncolorDivhe = function () {
        //和
        this.changeColor(2);
        if (clickFlag == true && betNum <= LayaSample.homePage.showMoney.text) {
            laya.media.SoundManager.playSound("./res/sounds/bet.mp3", 1); //0表示循环播放
            var data = { dian: 2, money: betNum };
            LayaSample.socket.send(eDate("731", data)); //发送请求数据
        }
    };
    GamePlay.prototype.OncolorDivzd = function () {
        //庄对
        this.changeColor(3);
        if (clickFlag == true && betNum <= LayaSample.homePage.showMoney.text) {
            var data = { dian: 3, money: betNum };
            LayaSample.socket.send(eDate("731", data)); //发送请求数据
            laya.media.SoundManager.playSound("./res/sounds/bet.mp3", 1); //0表示循环播放
        }
    };
    GamePlay.prototype.OncolorDivzj = function () {
        //庄家
        this.changeColor(4);
        if (clickFlag == true && betNum <= LayaSample.homePage.showMoney.text) {
            laya.media.SoundManager.playSound("./res/sounds/bet.mp3", 1);
            var data = { dian: 4, money: betNum };
            LayaSample.socket.send(eDate("731", data)); //发送请求数据
        }
    };
    GamePlay.prototype.changeColor = function (num) {
        //点击色块
        var obj;
        switch (num) {
            case 0:
                obj = _this.colorDivxj;
                break;
            case 1:
                obj = _this.colorDivxd;
                break;
            case 2:
                obj = _this.colorDivhe;
                break;
            case 3:
                obj = _this.colorDivzd;
                break;
            case 4:
                obj = _this.colorDivzj;
                break;

            default:
                break;
        }
        Laya.Tween.to(obj, { alpha: 0.5 }, 200, Laya.Ease.strongOut, null, 0);
        setTimeout(function () {
            Laya.Tween.to(obj, { alpha: 0.1 }, 200, Laya.Ease.strongOut, null, 50);
        }, 200);
        // }
    };
    function changeBorder() {
        //颜色提示框
        var i = 3;
        var timer = setInterval(function name() {
            Laya.Tween.to(_this.colorBorder, { alpha: 0.5 }, 200, Laya.Ease.strongOut, null, 0);
            setTimeout(function () {
                Laya.Tween.to(_this.colorBorder, { alpha: 0 }, 200, Laya.Ease.strongOut, null, 100);
            }, 200);
            --i;
            if (i == 0) {
                clearInterval(timer);
            }
        }, 1000);
    }
    function hintType(type) {
        //提示类型
        _this.hintOver.alpha = 0;
        _this.hintStar.alpha = 0;
        if (type == "star") {
            _this.hintStar.y = 370;
            Laya.Tween.to(_this.hintStar, { y: 280, alpha: 1 }, 300, Laya.Ease.linearIn, null, 0);
            setTimeout(function () {
                Laya.Tween.to(_this.hintStar, { y: 190, alpha: 0 }, 300, Laya.Ease.linearIn, null, 1000);
            }, 500);
        }
        if (type == "over") {
            _this.hintOver.y = 370;
            Laya.Tween.to(_this.hintOver, { y: 280, alpha: 1 }, 300, Laya.Ease.linearIn, null, 0);
            setTimeout(function () {
                Laya.Tween.to(_this.hintOver, { y: 190, alpha: 0 }, 300, Laya.Ease.linearIn, null, 1000);
            }, 500);
        }
    }
    function btnLogFun() {
        bigLu(); //大路
        zplArr(); //珠盘路
        function bigLu() {
            bigLuNodeArr; //大路
            var bigLuArr = [[]];
            var i = 0;
            var bigLuNodeArr = [];
            betLog.reduce(function (prev, cur, index, betLog) {
                if (prev.dian == cur.dian || cur.dian == 2) {
                    bigLuArr[i].push(prev);
                }
                if (prev.dian != cur.dian && cur.dian != 2) {
                    bigLuArr[i].push(prev);
                    i++;
                    bigLuArr[i] = [];
                }
                if (index == betLog.length - 1) {
                    if (prev.dian == cur.dian) {
                        bigLuArr[i].push(cur);
                    }
                    if (prev.dian != cur.dian) {
                        bigLuArr[i + 1] = [];
                        bigLuArr[i].push(cur);
                    }
                }
                return cur;
            });
            if (bigLuArr[0][0].dian == 2) {
                bigLuArr.shift();
            }
            for (var e = 0; e < bigLuArr.length; e++) {
                var nodeArr = [];
                var indexHe = 1;
                for (var r = 0; r < bigLuArr[e].length; r++) {
                    var img;
                    if (bigLuArr[e][0].dian == 2) {
                        break;
                    }
                    if (bigLuArr[e][r].dian == 2) {
                        img = bgetImgurl(bigLuArr[e][0].dian, 19, 17);

                        var txt = new Laya.Text();
                        txt.text = indexHe;
                        txt.color = "#037743";
                        txt.fontSize = 12;
                        txt.pos(6, 3);
                        indexHe++;
                        img.addChild(txt);
                    } else {
                        img = bgetImgurl(bigLuArr[e][r].dian, 19, 17);
                    }
                    nodeArr.push(img);
                }
                bigLuNodeArr.push(nodeArr);
            }
            //--------------------------插入路----------------------
            (function () {
                //-----大眼仔路
                var dyzlArr = [[]];
                var dyzlArrIndex = 0;
                var gaoIndex = [];
                var ii = 1;
                run(1, 0);
                function run(top, left) {
                    var _loop = function _loop(t) {
                        var _loop2 = function _loop2(z) {
                            //是否有规律
                            if (t == 1 && z >= 1) {
                                begin();
                            }
                            if (t >= 2) {
                                begin();
                            }
                            function begin() {
                                isHave = false;
                                // if (z >= 1 && bigLuNodeArr[t - 1][z] && bigLuNodeArr[t][z]) {     //    如果左边有项 且 列下标 > 1
                                //     isHave = true;
                                // }
                                if (bigLuNodeArr[t].length > bigLuNodeArr[t - 1].length && z + 1 <= bigLuNodeArr[t - 1].length) {
                                    isHave = true;
                                }
                                if (z == 0 && bigLuNodeArr[t - 1].length == 1 && bigLuNodeArr[t - 2]) {
                                    //如果有两行无规则
                                    if (bigLuNodeArr[t - 2].length == 1) {
                                        isHave = true;
                                    }
                                }
                                if (bigLuNodeArr[t].length - bigLuNodeArr[t - 1].length >= 2 && z >= bigLuNodeArr[t - 1].length + 1) {
                                    isHave = true;
                                }
                            }
                            if (isHave) {
                                gaoIndex.push(0);
                            } else {
                                gaoIndex.push(4);
                            }
                        };

                        for (var z = left; z < bigLuNodeArr[t].length; z++) {
                            _loop2(z);
                        }
                    };

                    for (var t = top; t < bigLuNodeArr.length; t++) {
                        var isHave;

                        _loop(t);
                    }
                }
                var iIndex = 0;
                var xuanranNodeArr = [[]];
                if (gaoIndex.length <= 0) {
                    return;
                }
                gaoIndex.reduce(function (prev, cur, index, gaoIndex) {
                    if (prev == cur) {
                        xuanranNodeArr[iIndex].push(prev);
                    } else {
                        xuanranNodeArr[iIndex].push(prev);
                        iIndex++;
                        xuanranNodeArr[iIndex] = [];
                    }
                    return cur;
                });
                xuanranNodeArr = xuanranNodeArr.slice(-23);
                for (var _x = 0; _x < xuanranNodeArr.length; _x++) {
                    var nodeArr = [];
                    var ypx, xpx;
                    if (xuanranNodeArr[_x].length >= 6) {
                        xuanranNodeArr[_x].length = 5;
                    }
                    xpx = _x * 10 + 300;
                    for (var _r = 0; _r < xuanranNodeArr[_x].length; _r++) {
                        var img = bgetImgurl(xuanranNodeArr[_x][_r], 10, 10);
                        nodeArr.push(img);
                    }
                    for (var c = 0; c < nodeArr.length; c++) {
                        ypx = 10 * c + 110;
                        nodeArr[c].x = xpx;
                        nodeArr[c].y = ypx;

                        _this.imgHome.addChild(nodeArr[c]);
                    }
                }
            })();
            runXiao();
            function runXiao() {
                var dyzlArr = [[]];
                var dyzlArrIndex = 0;
                var gaoIndex = [];
                var ii = 1;
                run(1, 0);
                function run(top, left) {
                    var _loop3 = function _loop3(t) {
                        var _loop4 = function _loop4(z) {
                            //是否有规律
                            if (t == 2 && z >= 1) {
                                begin();
                            }
                            if (t >= 3) {
                                begin();
                            }
                            function begin() {
                                isHave = false;
                                if (bigLuNodeArr[t][z] && bigLuNodeArr[t - 1][z] && bigLuNodeArr[t - 2]) {
                                    isHave = true;
                                }
                                if (bigLuNodeArr[t].length > bigLuNodeArr[t - 1].length && z + 1 <= bigLuNodeArr[t - 1].length) {
                                    isHave = true;
                                }
                                if (bigLuNodeArr[t].length - bigLuNodeArr[t - 1].length >= 2 && z >= bigLuNodeArr[t - 1].length + 1) {
                                    isHave = true;
                                }
                                if (gaoIndex[gaoIndex.length - 1] == gaoIndex[gaoIndex.length - 2] == gaoIndex[gaoIndex.length - 3] == gaoIndex[gaoIndex.length - 4]) {
                                    isHave = gaoIndex[gaoIndex.length - 1] == 4 ? true : false;
                                }
                                // if (z == 0 && gaoIndex[gaoIndex.length - 1] == 4) {
                                //     isHave = false;
                                // }
                                if (isHave) {
                                    gaoIndex.push(0);
                                } else {
                                    gaoIndex.push(4);
                                }
                            }
                        };

                        for (var z = left; z < bigLuNodeArr[t].length; z++) {
                            _loop4(z);
                        }
                    };

                    for (var t = top; t < bigLuNodeArr.length; t++) {
                        var isHave;

                        _loop3(t);
                    }
                }
                var iIndex = 0;
                var xuanranNodeArr = [[]];
                if (gaoIndex.length >= 1) {
                    gaoIndex.reduce(function (prev, cur, index, gaoIndex) {
                        if (prev == cur) {
                            xuanranNodeArr[iIndex].push(prev);
                        } else {
                            xuanranNodeArr[iIndex].push(prev);
                            iIndex++;
                            xuanranNodeArr[iIndex] = [];
                        }
                        return cur;
                    });
                    for (var _x2 = 0; _x2 < xuanranNodeArr.length; _x2++) {
                        var nodeArr = [];
                        var ypx, xpx;
                        xpx = _x2 * 10 + 300;
                        xuanranNodeArr = xuanranNodeArr.slice(-23);
                        for (var _r2 = 0; _r2 < xuanranNodeArr[_x2].length; _r2++) {
                            var bgetImgurl1 = function bgetImgurl1(dian, w, h, num) {
                                var url = '';
                                var img = new Laya.Sprite();
                                if (dian == 0) {
                                    //如果是闲
                                    url = "comp/dalandao.png";
                                }
                                if (dian == 4) {
                                    //如果是庄
                                    url = "comp/dahongdao.png";
                                }
                                img.loadImage(url, null, null, w, h);
                                if (num) {
                                    var txt = new Laya.Text();
                                    txt.text = num;
                                    text.fontSize = 12;
                                    txt.color = "#000";
                                    img.addChild(txt);
                                }
                                return img;
                            };

                            var img = bgetImgurl1(xuanranNodeArr[_x2][_r2], 10, 10);

                            nodeArr.push(img);
                        }
                        for (var c = 0; c < nodeArr.length; c++) {
                            ypx = 10 * c + 165;
                            nodeArr[c].x = xpx;
                            nodeArr[c].y = ypx;
                            _this.imgHome.addChild(nodeArr[c]);
                        }
                    }
                }
            }
            runyue();
            function runyue() {
                var dyzlArr = [[]];
                var dyzlArrIndex = 0;
                var gaoIndex = [];
                var ii = 1;
                run(1, 0);
                function run(top, left) {
                    var _loop5 = function _loop5(t) {
                        var _loop6 = function _loop6(z) {
                            //是否有规律
                            if (t == 3 && z >= 1) {
                                begin();
                            }
                            if (t >= 4) {
                                begin();
                            }
                            function begin() {
                                isHave = false;
                                if (bigLuNodeArr[t][z] && bigLuNodeArr[t - 1][z] && bigLuNodeArr[t - 2]) {
                                    isHave = true;
                                }
                                if (bigLuNodeArr[t].length > bigLuNodeArr[t - 1].length && z + 1 <= bigLuNodeArr[t - 1].length) {
                                    isHave = true;
                                }
                                if (bigLuNodeArr[t].length - bigLuNodeArr[t - 1].length >= 2 && z >= bigLuNodeArr[t - 1].length + 1) {
                                    isHave = true;
                                }
                                if (gaoIndex[gaoIndex.length - 1] == gaoIndex[gaoIndex.length - 2] == gaoIndex[gaoIndex.length - 3] == gaoIndex[gaoIndex.length - 4]) {
                                    isHave = gaoIndex[gaoIndex.length - 1] == 4 ? true : false;
                                }
                                if (isHave) {
                                    gaoIndex.push(0);
                                } else {
                                    gaoIndex.push(4);
                                }
                            }
                        };

                        for (var z = left; z < bigLuNodeArr[t].length; z++) {
                            _loop6(z);
                        }
                    };

                    for (var t = top; t < bigLuNodeArr.length; t++) {
                        var isHave;

                        _loop5(t);
                    }
                }
                var iIndex = 0;
                var xuanranNodeArr = [[]];
                if (gaoIndex.length >= 1) {
                    gaoIndex.reduce(function (prev, cur, index, gaoIndex) {
                        if (prev == cur) {
                            xuanranNodeArr[iIndex].push(prev);
                        } else {
                            xuanranNodeArr[iIndex].push(prev);
                            iIndex++;
                            xuanranNodeArr[iIndex] = [];
                        }
                        return cur;
                    });
                    xuanranNodeArr = xuanranNodeArr.slice(-24);
                    for (var _x3 = 0; _x3 < xuanranNodeArr.length; _x3++) {
                        var nodeArr = [];
                        var ypx, xpx;
                        xpx = _x3 * 9.5 + 525;
                        for (var _r3 = 0; _r3 < xuanranNodeArr[_x3].length; _r3++) {
                            var bgetImgurl2 = function bgetImgurl2(dian, w, h, num) {
                                var url = '';
                                var img = new Laya.Sprite();
                                if (dian == 0) {
                                    //如果是闲
                                    url = "comp/lanseshixin.png";
                                }
                                if (dian == 4) {
                                    //如果是庄
                                    url = "comp/shixinhongquan.png";
                                }
                                img.loadImage(url, null, null, 8, 8);
                                if (num) {
                                    var txt = new Laya.Text();
                                    txt.text = num;
                                    text.fontSize = 12;
                                    txt.color = "#000";
                                    img.addChild(txt);
                                }
                                return img;
                            };

                            var img = bgetImgurl2(xuanranNodeArr[_x3][_r3], 10, 10);

                            nodeArr.push(img);
                        }
                        for (var c = 0; c < nodeArr.length; c++) {
                            ypx = 9 * c + 111;
                            nodeArr[c].x = xpx;
                            nodeArr[c].y = ypx;
                            _this.imgHome.addChild(nodeArr[c]);
                        }
                    }
                }
            }
            //----------------------------------------------------------
            if (bigLuNodeArr.length > 22) {
                bigLuNodeArr = bigLuNodeArr.slice(-25);
            }
            for (var _r4 = 0; _r4 < bigLuNodeArr.length; _r4++) {
                var x, y, xNum, yNum;
                xpx = 302 + 18.5 * _r4;
                if (bigLuNodeArr[_r4].length >= 6) {
                    bigLuNodeArr[_r4].length = 6;
                }
                for (var _y = 0; _y < bigLuNodeArr[_r4].length; _y++) {
                    ypx = 18 * _y;
                    bigLuNodeArr[_r4][_y].x = xpx;
                    bigLuNodeArr[_r4][_y].y = ypx;
                    _this.imgHome.addChild(bigLuNodeArr[_r4][_y]);
                }
            }
            function bgetImgurl(dian, w, h, num) {
                var url = '';
                var img = new Laya.Sprite();
                if (dian == 0) {
                    //如果是闲
                    url = "comp/lanquanquan.png";
                }
                if (dian == 4) {
                    //如果是庄
                    url = "comp/hongbianquan.png";
                }
                img.loadImage(url, null, null, w, h);
                if (num) {
                    var txt = new Laya.Text();
                    txt.text = num;
                    text.fontSize = 12;
                    txt.color = "#000";
                    img.addChild(txt);
                }
                return img;
            }
        }
        function zplArr() {
            //珠盘路
            var zplArr = []; //主盘路所有元素数组
            for (var q = 0; q < betLog.length; q++) {
                //珠盘路走势图
                var img = getImgUrl(betLog[q].dian, betLog[q].is_double);
                zplArr.push(img);
            }
            for (var w = 0; w < zplArr.length; w++) {
                var x, y, xNum, yNum;
                xNum = parseInt(w / 6);
                yNum = w % 6;
                x = 38 * xNum;
                y = 37 * yNum;
                zplArr[w].x = x;
                zplArr[w].y = y;
                _this.imgHome.addChild(zplArr[w]);
            }
            function getImgUrl(dian, is_double) {
                //获取珠盘路图片
                var url = '';
                var img = new Laya.Sprite();
                if (dian == 0) {
                    //如果是闲
                    url = "comp/kai.png";
                }
                if (dian == 4) {
                    //如果是庄
                    url = "comp/zhuang.png";
                }
                if (dian == 2) {
                    //如果是和
                    url = "comp/heIcon.png";
                }
                if (is_double == 1) {
                    //闲对
                    var imgDui = new Laya.Sprite();
                    imgDui.loadImage("comp/lanseshixin.png", 28, 28);
                    img.addChild(imgDui);
                }
                if (is_double == 3) {
                    //庄对
                    var imgDui = new Laya.Sprite();
                    imgDui.loadImage("comp/shixinhongquan.png", 0, 0);
                    img.addChild(imgDui);
                }
                if (is_double == 2) {
                    //和对
                    var imgDui = new Laya.Sprite();
                    imgDui.loadImage("comp/shixinhongquan.png", 0, 0);
                    imgDui.loadImage("comp/lanseshixin.png", 28, 28);
                    img.addChild(imgDui);
                }
                img.loadImage(url);
                return img;
            }
        }
    }
};
Laya.class(GamePlay, "GamePlay", gamePlayUI);