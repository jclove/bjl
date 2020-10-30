var Deal = function () {
    Deal.super(this);
    var _this = this;
    Deal.prototype.init = function (data) {
        if (data.listSum[0] != 0) {                                                         //  闲家
            for (let index = 0; index < data.list[0].length; index++) {
                let img = new Laya.Sprite();
                img.loadImage(getImgUrl(data.list[0][index]), 100, 30, 40, 40);
                img.name = getName(0, data.list[0][index]);
                _this.addChild(img);
                var getFixedData = getFixed(0);
                move(img, getFixedData.x, getFixedData.y)
            }
        }
        if (data.listSum[1] != 0) {                                                         //  闲对
            for (let index = 0; index < data.list[01].length; index++) {
                let img = new Laya.Sprite();
                img.loadImage(getImgUrl(data.list[1][index]), 100, 30, 40, 40);
                img.name = getName(1, data.list[0][index]);
                _this.addChild(img);
                var getFixedData = getFixed(1);
                move(img, getFixedData.x, getFixedData.y)
            }
        }
        
        if (data.listSum[2] != 0) {                                                         //  和
            for (let index = 0; index < data.list[2].length; index++) {
                let img = new Laya.Sprite();
                img.loadImage(getImgUrl(data.list[2][index]), 100, 30, 40, 40);
                img.name = getName(2, data.list[0][index]);
                _this.addChild(img);
                var getFixedData = getFixed(2);
                move(img, getFixedData.x, getFixedData.y)
            }
        }
        if (data.listSum[3] != 0) {                                                         //  庄对
            for (let index = 0; index < data.list[3].length; index++) {
                let img = new Laya.Sprite();
                img.loadImage(getImgUrl(data.list[3][index]), 100, 30, 40, 40);
                img.name = getName(3, data.list[0][index]);
                _this.addChild(img);
                var getFixedData = getFixed(3);
                move(img, getFixedData.x, getFixedData.y)
            }
        }
        if (data.listSum[4] != 0) {                                                         //  庄稼
            for (let index = 0; index < data.list[4].length; index++) {
                let img = new Laya.Sprite();
                img.loadImage(getImgUrl(data.list[4][index]), 100, 30, 40, 40);
                img.name = getName(4, data.list[0][index]);
                _this.addChild(img);
                var getFixedData = getFixed(4);
                move(img, getFixedData.x, getFixedData.y)
            }
        }

    }
    Deal.prototype.dealPai = function (data) {              //有人出牌的时候、、
        let img = new Laya.Sprite();
        img.loadImage(getImgUrl(String(data.money)), 100, 30, 40, 40);
        // img.name = ""
        img.name = getName(data.dian, data.money);
        _this.addChild(img);
        var getFixedData = getFixed(Number(data.dian));
        move(img, getFixedData.x, getFixedData.y)
    }
    Deal.prototype.remove = function (data) {               //删除所有
        for (let index = 0; index < LayaSample.deal._childs.length; index++) {
            Laya.Tween.to(LayaSample.deal._childs[index], { x: 0, y: 0 }, 700, Laya.Ease.cubicOut, Laya.Handler.create(this, removeChild), 0)
        }
        function removeChild() {
            LayaSample.deal._childs.length = 0;
        }
    }
    Deal.prototype.ce = function (data) {                   //撤销
        var cename = getName(data.dian, data.money);
        for (let i = 0; i < LayaSample.deal._childs.length; i++) {
            if (LayaSample.deal.getChildAt(i).name == cename) {
                Laya.Tween.to(LayaSample.deal.getChildAt(i), { x: 0, y: 0 }, 700, Laya.Ease.cubicOut, Laya.Handler.create(this, removeNode, [LayaSample.deal.getChildAt(i)]), 0);
                function removeNode(obj) {
                    obj.removeSelf();
                }
                break;
            }
        }
    }
    Deal.prototype.mece = function (data) {                   //自己撤销
        var nodeListNameArr = [];   //所有撤回筹码的名字
        for (let x = 0; x < data.length; x++) {
            for (let y = 0; y < data[x].length; y++) {
                var cename = getName(x, data[x][y]);
                nodeListNameArr.push(cename);
            }
        }
        var setNodeNameList = Array.from(new Set(nodeListNameArr)); //有哪几种筹码
        var nodeListArr = [];   //所有撤回筹码节点的数组
        for (var j = 0; j < setNodeNameList.length; j++) {
            for (let i = 0; i < LayaSample.deal._childs.length; i++) {
                if (LayaSample.deal._childs[i].name == setNodeNameList[j]) {
                    nodeListArr.push(LayaSample.deal._childs[i]);
                }
            }
        }
        for (var y = 0; y < setNodeNameList.length; y++) {
            var arr = [];   //分离出来的数组node
            var arr1 = 0;   //需要撤销的个数
            for (var d = 0; d < nodeListArr.length; d++) {
                if (setNodeNameList[y] == nodeListArr[d].name) {
                    arr.push(nodeListArr[d]);
                }
            }
            for (var e = 0; e < nodeListNameArr.length; e++) {
                if (setNodeNameList[y] == nodeListNameArr[e]) {
                    arr1++;
                }
            }
            for (var s = 0; s < arr1; s++) {
                Laya.Tween.to(arr[s], { x: 0, y: 0 }, 700, Laya.Ease.cubicOut, Laya.Handler.create(this, removeNode, [arr[s]]), 0);
                function removeNode(obj) {
                    obj.removeSelf();
                }
            }

        }
    }
    function onTweeed(parms) {

    }
    function move(obj, x, y) {                              //开始移动
        Laya.Tween.to(obj, { x: x, y: y }, 1000, Laya.Ease.cubicOut, Laya.Handler.create(this, onTweeed), 0)
    }
    function getImgUrl(num) {                               //获取图片地址
        switch (num) {
            case "5":
                return "comp/chouma5.png";
            case "10":
                return "comp/shi.png";
            case "50":
                return "comp/wushi.png";
            case "100":
                return "comp/yibai.png";
            case "500":
                return "comp/wubai.png";
            case "1000":
                return "comp/yiqian.png";
            default:
                break;
        }
    }
    function getFixed(num) {                                //获取随机坐标
        switch (num) {
            case 0:
                var x = Math.floor(Math.random() * (220 - 20 + 1) + 20);
                var y = Math.floor(Math.random() * (260 - 180 + 1) + 180);
                var data = { x: x, y: y }
                return data;
            case 1:
                var x = Math.floor(Math.random() * (145 - 10 + 1) + 10);
                var y = Math.floor(Math.random() * (140 - 80 + 1) + 80);
                var data = { x: x, y: y }
                return data;
            case 2:
                var x = Math.floor(Math.random() * (340 - 190 + 1) + 190);
                var y = Math.floor(Math.random() * (140 - 80 + 1) + 80);
                var data = { x: x, y: y }
                return data;
            case 3:
                var x = Math.floor(Math.random() * (530 - 380 + 1) + 380);
                var y = Math.floor(Math.random() * (140 - 80 + 1) + 80);
                var data = { x: x, y: y }
                return data;
            case 4:
                var a = Math.floor(Math.random() * (10 - 0) + 1);
                var data;
                if (a <= 5) {
                    var x = Math.floor(Math.random() * (520 - 290 + 1) + 290);
                    var y = Math.floor(Math.random() * (240 - 180 + 1) + 180);
                    data = { x: x, y: y }
                } else {
                    var x = Math.floor(Math.random() * (410 - 290 + 1) + 290);
                    var y = Math.floor(Math.random() * (300 - 220 + 1) + 220);
                    data = { x: x, y: y }
                }
                return data;
            default:
                break;
        }
    }
    function getName(index, num) {
        var name;
        var num;
        switch (index) {
            case 0:
                name = "xian";
                break;
            case 1:
                name = "xianDui";
                break;
            case 2:
                name = "he";
                break;
            case 3:
                name = "zhuangDui";
                break;
            case 4:
                name = "zhuang";
                break;
            default:
                break;
        }
        return name + num;
    }
}
Laya.class(Deal, "Deal", dealUI);   //下注筹码