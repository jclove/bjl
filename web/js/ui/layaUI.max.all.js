var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var CLogUI=(function(_super){
		function CLogUI(){
			
		    this.yongjin=null;
		    this.tixian=null;
		    this.yongjinLog=null;
		    this.tixianLog=null;

			CLogUI.__super.call(this);
		}

		CLASS$(CLogUI,'ui.CLogUI',_super);
		var __proto__=CLogUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CLogUI.uiView);

		}

		CLogUI.uiView={"type":"View","props":{"width":649,"height":944},"child":[{"type":"Label","props":{"y":113,"x":226,"width":198,"var":"yongjin","text":"0.0","name":"yongjin","height":56,"fontSize":50,"color":"#f8e76e","align":"center"}},{"type":"Label","props":{"y":210,"x":230,"width":190,"text":"你的佣金 (元)","height":30,"fontSize":25,"color":"#b0a659","align":"center"}},{"type":"Box","props":{"y":361,"x":241,"var":"tixian","name":"tixian"},"child":[{"type":"Image","props":{"width":167,"skin":"comp/shijian.png","height":62}},{"type":"Label","props":{"y":16,"x":30,"width":106,"text":"提现","height":30,"fontSize":30,"color":"#815054","align":"center"}}]},{"type":"Box","props":{"y":523,"x":63},"child":[{"type":"Image","props":{"width":523,"skin":"comp/yongjinkuang.png","height":239}},{"type":"Image","props":{"y":59,"x":325,"var":"yongjinLog","skin":"comp/chakan.png","name":"yongjinLog"}},{"type":"Image","props":{"y":139,"x":325,"var":"tixianLog","skin":"comp/chakan.png","name":"tixianLog"}}]}]};
		return CLogUI;
	})(View);
var GameHomePageUI=(function(_super){
		function GameHomePageUI(){
			
		    this.bomBar=null;
		    this.btnIndex=null;
		    this.btnBetLog=null;
		    this.btnCLog=null;
		    this.btnAgency=null;
		    this.btnService=null;
		    this.topBar=null;
		    this.showRecharge=null;
		    this.homeEmbody=null;
		    this.showMoney=null;
		    this.showID=null;

			GameHomePageUI.__super.call(this);
		}

		CLASS$(GameHomePageUI,'ui.GameHomePageUI',_super);
		var __proto__=GameHomePageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameHomePageUI.uiView);

		}

		GameHomePageUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"y":1193,"x":0,"width":749,"var":"bomBar","name":"bomBar","height":141},"child":[{"type":"Image","props":{"y":1191,"x":0,"skin":"comp/xiadi.png","left":0,"bottom":0}},{"type":"Image","props":{"y":24,"x":44,"var":"btnIndex","skin":"comp/shouye.png","name":"btnIndex"}},{"type":"Image","props":{"y":21,"x":180,"var":"btnBetLog","skin":"comp/touzhujilu.png","name":"btnBetLog"}},{"type":"Image","props":{"y":21,"x":342,"var":"btnCLog","skin":"comp/yongjinjilu.png","name":"btnCLog"}},{"type":"Image","props":{"y":19,"x":505,"var":"btnAgency","skin":"comp/daili.png","name":"btnAgency"}},{"type":"Image","props":{"y":19,"x":637,"var":"btnService","skin":"comp/kefu.png","name":"btnService"}}]},{"type":"Box","props":{"y":0,"x":0,"width":750,"var":"topBar","name":"topBar","height":101},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/shangdi.png"}},{"type":"Image","props":{"y":13,"x":478,"var":"showRecharge","skin":"comp/chongzhi.png","name":"showRecharge"}},{"type":"Image","props":{"y":13,"x":613,"var":"homeEmbody","skin":"comp/tixian.png","name":"homeEmbody"}},{"type":"Label","props":{"y":31,"x":7,"width":47,"text":"ID：","height":49,"fontSize":30,"color":"#ffffff","bold":false,"align":"center"}},{"type":"Box","props":{"y":13,"x":220,"width":254,"height":72},"child":[{"type":"Image","props":{"y":0,"x":28,"width":217,"skin":"comp/shijian.png","height":73}},{"type":"Label","props":{"y":14,"x":40,"width":193,"var":"showMoney","text":"0.00","overflow":"hidden","name":"showMoney","height":52,"fontSize":40,"color":"#ffffff","bold":false,"align":"center"}}]},{"type":"Label","props":{"y":25,"x":62,"width":173,"var":"showID","text":"99999999","overflow":"hidden","name":"showID","height":50,"fontSize":40,"color":"#ffffff","bold":false,"align":"center"}}]}]};
		return GameHomePageUI;
	})(View);
var YongJinLogUI=(function(_super){
		function YongJinLogUI(){
			
		    this.title=null;
		    this.ID=null;
		    this.myList=null;
		    this.data=null;
		    this.uesrName=null;
		    this.num=null;
		    this.stutus=null;

			YongJinLogUI.__super.call(this);
		}

		CLASS$(YongJinLogUI,'ui.YongJinLogUI',_super);
		var __proto__=YongJinLogUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(YongJinLogUI.uiView);

		}

		YongJinLogUI.uiView={"type":"Dialog","props":{"y":4,"x":0,"width":600,"height":1000},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/quedingkuang.png","height":1000}},{"type":"Box","props":{"y":27,"x":23,"width":546,"height":126},"child":[{"type":"Label","props":{"x":204,"var":"title","text":"\b\b佣金记录表","fontSize":40,"color":"#b0a659"}},{"type":"Label","props":{"y":84,"x":0,"text":"时间","fontSize":40,"color":"#b0a659"}},{"type":"Label","props":{"y":84,"x":421,"var":"ID","text":"用户ID","name":"ID","fontSize":40,"color":"#b0a659"}},{"type":"Label","props":{"y":84,"x":147,"text":"金额","fontSize":40,"color":"#b0a659"}},{"type":"Label","props":{"y":84,"x":294,"text":"状态","fontSize":40,"color":"#b0a659"}}]},{"type":"List","props":{"y":206,"x":49,"width":618,"var":"myList","name":"myList","height":719},"child":[{"type":"Box","props":{"name":"render"},"child":[{"type":"Label","props":{"y":18,"x":-28,"var":"data","text":"labelargag\\n12:30","name":"data","fontSize":30,"color":"#000","align":"center"}},{"type":"Label","props":{"y":21,"x":401,"width":112,"var":"uesrName","text":"labelargag","name":"uesrName","height":35,"fontSize":35,"color":"#000","align":"center"}},{"type":"Label","props":{"y":21,"x":124,"width":71,"var":"num","text":"50","name":"num","height":35,"fontSize":35,"color":"#000","align":"center"}},{"type":"Label","props":{"y":21,"x":266,"width":59,"var":"stutus","text":"50","name":"stutus","height":35,"fontSize":35,"color":"#000","align":"center"}}]}]}]};
		return YongJinLogUI;
	})(Dialog);
var agencyPageUI=(function(_super){
		function agencyPageUI(){
			
		    this.erweima=null;
		    this.oneLv=null;
		    this.towLv=null;
		    this.threeLv=null;
		    this.fourLv=null;
		    this.fiveLv=null;
		    this.shouming=null;
		    this.liuLv=null;
		    this.qiLv=null;
		    this.baLv=null;
		    this.jiuLv=null;
		    this.shiLv=null;

			agencyPageUI.__super.call(this);
		}

		CLASS$(agencyPageUI,'ui.agencyPageUI',_super);
		var __proto__=agencyPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(agencyPageUI.uiView);

		}

		agencyPageUI.uiView={"type":"View","props":{"width":750,"height":1086},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/dailiyonghu.png"}},{"type":"Image","props":{"y":263,"x":240,"width":269,"skin":"comp/shijian.png","height":72}},{"type":"Label","props":{"y":281,"x":287,"var":"erweima","text":"生成二维码","name":"erweima","fontSize":35,"color":"#d29ed2"}},{"type":"Label","props":{"y":415,"x":405,"width":65,"var":"oneLv","text":"0","name":"oneLv","height":35,"fontSize":35,"color":"#fff","align":"center"}},{"type":"Label","props":{"y":472,"x":405,"width":65,"var":"towLv","text":"0","name":"towLv","height":35,"fontSize":35,"color":"#fff","align":"center"}},{"type":"Label","props":{"y":534,"x":405,"width":65,"var":"threeLv","text":"0","name":"threeLv","height":35,"fontSize":35,"color":"#fff","align":"center"}},{"type":"Label","props":{"y":592,"x":405,"width":65,"var":"fourLv","text":"0","name":"fourLv","height":35,"fontSize":35,"color":"#fff","align":"center"}},{"type":"Label","props":{"y":653,"x":405,"width":65,"var":"fiveLv","text":"0","name":"fiveLv","height":35,"fontSize":35,"color":"#fff","align":"center"}},{"type":"Box","props":{"y":36,"x":515,"var":"shouming","name":"shouming"},"child":[{"type":"Image","props":{"y":0,"x":14,"width":184,"skin":"comp/shijian.png","height":49}},{"type":"Label","props":{"y":12,"x":42,"text":"佣金说明>>","fontSize":25,"color":"#d29ed2"}}]},{"type":"Label","props":{"y":713,"x":405,"width":65,"var":"liuLv","text":"0","height":35,"fontSize":35,"color":"#fff","align":"center"}},{"type":"Label","props":{"y":775,"x":405,"width":65,"var":"qiLv","text":"0","height":35,"fontSize":35,"color":"#fff","align":"center"}},{"type":"Label","props":{"y":835,"x":405,"width":65,"var":"baLv","text":"0","height":35,"fontSize":35,"color":"#fff","align":"center"}},{"type":"Label","props":{"y":895,"x":405,"width":65,"var":"jiuLv","text":"0","height":35,"fontSize":35,"color":"#fff","align":"center"}},{"type":"Label","props":{"y":955,"x":405,"width":65,"var":"shiLv","text":"0","height":35,"fontSize":35,"color":"#fff","align":"center"}}]};
		return agencyPageUI;
	})(View);
var betLogUI=(function(_super){
		function betLogUI(){
			
		    this.hintLog=null;
		    this.listHome=null;
		    this.boxHome=null;
		    this.num=null;
		    this.money=null;
		    this.win_money=null;
		    this.is_winning=null;

			betLogUI.__super.call(this);
		}

		CLASS$(betLogUI,'ui.betLogUI',_super);
		var __proto__=betLogUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(betLogUI.uiView);

		}

		betLogUI.uiView={"type":"View","props":{"width":649,"height":944},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/touzhujilukuang.png"}},{"type":"Label","props":{"y":455,"x":234,"var":"hintLog","text":"暂无投注记录","name":"hintLog","fontSize":30,"color":"#756a6a"}},{"type":"List","props":{"y":177,"x":47,"width":598,"visible":false,"var":"listHome","spaceY":30,"repeatY":12,"name":"listHome","height":693},"child":[{"type":"Box","props":{"var":"boxHome","name":"render"},"child":[{"type":"Label","props":{"width":66,"var":"num","text":"30","name":"num","height":29,"fontSize":30,"align":"center"}},{"type":"Label","props":{"x":124,"width":104,"var":"money","text":"30","name":"money","height":29,"fontSize":30,"align":"center"}},{"type":"Label","props":{"x":324,"width":104,"var":"win_money","text":"30","name":"win_money","height":29,"fontSize":30,"align":"center"}},{"type":"Label","props":{"x":494,"width":104,"var":"is_winning","text":"30","name":"is_winning","height":29,"fontSize":30,"align":"center"}}]}]}]};
		return betLogUI;
	})(View);
var closeUI=(function(_super){
		function closeUI(){
			

			closeUI.__super.call(this);
		}

		CLASS$(closeUI,'ui.closeUI',_super);
		var __proto__=closeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(closeUI.uiView);

		}

		closeUI.uiView={"type":"View","props":{"width":750,"height":281}};
		return closeUI;
	})(View);
var countDownUI=(function(_super){
		function countDownUI(){
			
		    this.naozhong=null;
		    this.countDownNum=null;

			countDownUI.__super.call(this);
		}

		CLASS$(countDownUI,'ui.countDownUI',_super);
		var __proto__=countDownUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(countDownUI.uiView);

		}

		countDownUI.uiView={"type":"View","props":{"width":80,"height":90},"child":[{"type":"Box","props":{"y":0,"x":0,"visible":false,"var":"naozhong","name":"naozhong"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":74,"skin":"comp/naozhong.png","height":84}},{"type":"Label","props":{"y":27,"x":16,"width":43,"var":"countDownNum","text":"20","name":"countDownNum","height":35,"fontSize":35,"color":"#000","align":"center"}}]}]};
		return countDownUI;
	})(View);
var dealUI=(function(_super){
		function dealUI(){
			

			dealUI.__super.call(this);
		}

		CLASS$(dealUI,'ui.dealUI',_super);
		var __proto__=dealUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(dealUI.uiView);

		}

		dealUI.uiView={"type":"View","props":{"width":750,"height":380}};
		return dealUI;
	})(View);
var gameBetUI=(function(_super){
		function gameBetUI(){
			
		    this.btnRecall=null;
		    this.btnBetList=null;
		    this.bet1=null;
		    this.bet2=null;
		    this.bet3=null;
		    this.bet4=null;
		    this.bet5=null;
		    this.bet6=null;

			gameBetUI.__super.call(this);
		}

		CLASS$(gameBetUI,'ui.gameBetUI',_super);
		var __proto__=gameBetUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gameBetUI.uiView);

		}

		gameBetUI.uiView={"type":"View","props":{"width":750,"mouseThrough":true,"height":200},"child":[{"type":"Image","props":{"y":10,"x":545,"var":"btnRecall","skin":"comp/chexiao.png","name":"btnRecall"}},{"type":"Box","props":{"y":87,"x":33,"var":"btnBetList","name":"btnBetList"},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bet1","skin":"comp/chouma5.png","name":"bet"}},{"type":"Image","props":{"x":118,"var":"bet2","skin":"comp/shi.png","name":"bet"}},{"type":"Image","props":{"y":0,"x":235,"var":"bet3","skin":"comp/wushi.png","name":"bet"}},{"type":"Image","props":{"y":0,"x":353,"var":"bet4","skin":"comp/yibai.png","name":"bet"}},{"type":"Image","props":{"y":0,"x":470,"var":"bet5","skin":"comp/wubai.png","name":"bet"}},{"type":"Image","props":{"x":588,"var":"bet6","skin":"comp/yiqian.png","name":"bet"}}]}]};
		return gameBetUI;
	})(View);
var gamePlayUI=(function(_super){
		function gamePlayUI(){
			
		    this.imgHome=null;
		    this.gonggao=null;
		    this.rankBtn=null;
		    this.btnOnOff=null;
		    this.Opentext=null;
		    this.btnHelp=null;
		    this.peopleNum=null;
		    this.cardSum=null;
		    this.hintStar=null;
		    this.hintOver=null;
		    this.colorBorder=null;
		    this.colorDivHome=null;
		    this.colorDivxd=null;
		    this.colorDivhe=null;
		    this.colorDivzd=null;
		    this.colorDivxj=null;
		    this.colorDivzj=null;
		    this.loadNextGame=null;

			gamePlayUI.__super.call(this);
		}

		CLASS$(gamePlayUI,'ui.gamePlayUI',_super);
		var __proto__=gamePlayUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(gamePlayUI.uiView);

		}

		gamePlayUI.uiView={"type":"View","props":{"y":0,"x":0,"width":750,"height":1120},"child":[{"type":"Image","props":{"y":263,"x":0,"skin":"comp/beijing.png"}},{"type":"Image","props":{"y":0,"x":0,"var":"imgHome","skin":"comp/gezi.png","name":"imgHome"}},{"type":"Box","props":{"y":637,"x":9},"child":[{"type":"Label","props":{"y":31,"x":674.2403874438155,"text":"1","rotation":-90,"fontSize":50,"color":"#9666ca"}},{"type":"Label","props":{"y":121,"x":674.2403874438155,"text":"2","rotation":-80,"fontSize":50,"color":"#9666ca"}},{"type":"Label","props":{"y":231,"x":654.2403874438155,"text":"3","rotation":-60,"fontSize":50,"color":"#9666ca"}},{"type":"Label","props":{"y":279,"x":528.2403874438155,"text":"4","rotation":-20,"fontSize":50,"color":"#9666ca"}},{"type":"Label","props":{"y":282,"x":352.2403874438155,"text":"5","fontSize":50,"color":"#9666ca"}},{"type":"Label","props":{"y":270,"x":189.24038744381548,"text":"6","rotation":20,"fontSize":50,"color":"#9666ca"}},{"type":"Label","props":{"y":212,"x":79.24038744381548,"text":"7","rotation":60,"fontSize":50,"color":"#9666ca"}},{"type":"Label","props":{"y":90,"x":49.240387443815486,"text":"8","rotation":80,"fontSize":50,"color":"#9666ca"}},{"type":"Label","props":{"y":1,"x":55.240387443815486,"text":"9","rotation":90,"pivotX":1,"fontSize":50,"color":"#9666ca"}}]},{"type":"Box","props":{"y":249,"x":-40,"visible":true},"child":[{"type":"Image","props":{"width":815,"skin":"comp/jianbiankuang.png","height":35}},{"type":"Label","props":{"y":4,"x":53,"width":724,"var":"gonggao","text":"充值不到账或者有疑问的请联系客服群管理,提现请添加客服二维码3-5分钟秒到账","height":27,"fontSize":20,"color":"#d2cece","align":"center"}}]},{"type":"Image","props":{"y":361,"visible":true,"var":"rankBtn","skin":"comp/paihangbang.png","right":10,"name":"rankBtn"}},{"type":"Box","props":{"y":298,"x":10,"var":"btnOnOff","name":"btnOnOff"},"child":[{"type":"Image","props":{"y":0,"x":10,"skin":"comp/shengyin.png","left":10}},{"type":"Label","props":{"y":12,"x":29,"var":"Opentext","text":"声音：开","name":"Opentext","fontSize":20,"color":"#cdcccc"}}]},{"type":"Image","props":{"y":295,"var":"btnHelp","skin":"comp/bangmang.png","right":10,"name":"btnHelp"}},{"type":"Label","props":{"y":771,"x":526,"text":"1:1","fontSize":20,"color":"#bdabd1"}},{"type":"Label","props":{"y":806,"x":254,"width":37.44140625,"text":"1:1","height":20,"fontSize":30,"color":"#bdabd1"}},{"type":"Box","props":{"y":494,"x":83},"child":[{"type":"Box","props":{"y":13},"child":[{"type":"Image","props":{"skin":"comp/renshu.png"}},{"type":"Label","props":{"y":37,"x":22,"var":"peopleNum","text":"30","name":"peopleNum","fontSize":18,"color":"#825d98"}}]},{"type":"Box","props":{"y":50,"x":503},"child":[{"type":"Image","props":{"y":0,"skin":"comp/shengyushijian.png","right":0}},{"type":"Label","props":{"y":10,"x":80,"var":"cardSum","text":"230","name":"cardSum","fontSize":20,"color":"#cdcccc"}},{"type":"Label","props":{"y":10,"x":14,"width":65.556640625,"text":"剩余牌:","name":"cardSum","height":20,"fontSize":20,"color":"#cdcccc"}}]},{"type":"Box","props":{"y":19,"x":340},"child":[{"type":"Label","props":{"y":5,"x":13,"text":"庄","fontSize":50,"color":"#ffdf7e"}},{"type":"Label","props":{"y":62,"text":"BANKER","fontSize":20,"color":"#ffdf7e"}}]},{"type":"Box","props":{"y":227,"x":347},"child":[{"type":"Label","props":{"y":0,"x":11,"text":"庄","fontSize":60,"color":"#ffdf7e"}},{"type":"Label","props":{"y":60,"x":14,"text":"BANKER","fontSize":15,"color":"#ffdf7e"}}]},{"type":"Box","props":{"y":232,"x":150},"child":[{"type":"Label","props":{"y":0,"x":11,"text":"閑","fontSize":60,"color":"#e34955"}},{"type":"Label","props":{"y":61,"x":7,"text":"PLAYERS","fontSize":15,"color":"#e34955"}}]},{"type":"Box","props":{"y":24,"x":155},"child":[{"type":"Label","props":{"y":2,"x":24,"text":"閑","fontSize":50,"color":"#e34955"}},{"type":"Label","props":{"y":57,"x":5,"text":"PLAYERS","fontSize":20,"color":"#e34955"}}]},{"type":"Box","props":{"y":132,"x":454},"child":[{"type":"Label","props":{"y":40,"x":10,"width":37.44140625,"text":"1:11","height":20,"fontSize":20,"color":"#bdabd1"}},{"type":"Label","props":{"text":"庄对","fontSize":30,"color":"#bdabd1"}}]},{"type":"Box","props":{"y":132,"x":264},"child":[{"type":"Label","props":{"y":0,"x":18,"text":"和","fontSize":30,"color":"#bdabd1"}},{"type":"Label","props":{"y":40,"x":14,"text":"1:8","fontSize":20,"color":"#bdabd1"}}]},{"type":"Box","props":{"y":132,"x":84},"child":[{"type":"Label","props":{"text":"閑对","fontSize":30,"color":"#bdabd1"}},{"type":"Label","props":{"y":40,"x":10,"text":"1:11","fontSize":20,"color":"#bdabd1"}}]}]},{"type":"Box","props":{"y":168,"x":543},"child":[{"type":"Image","props":{"skin":"comp/xiajuzhang.png"}},{"type":"Image","props":{"x":116,"skin":"comp/xiajuxian.png"}}]},{"type":"Image","props":{"y":370,"x":255,"width":249,"var":"hintStar","skin":"comp/yikaiju.png","name":"hintStar","height":58,"alpha":0}},{"type":"Image","props":{"y":370,"x":255,"width":249,"var":"hintOver","skin":"comp/tingzhixiazhu.png","name":"hintOver","height":58,"alpha":0}},{"type":"Label","props":{"y":803,"x":409,"width":160,"text":"6点赢一半","height":47,"fontSize":30,"color":"#bdabd1"}},{"type":"Box","props":{"y":608,"x":96},"child":[{"type":"Image","props":{"y":1,"x":-1,"var":"colorBorder","skin":"comp/huangsekuang.png","name":"colorBorder","alpha":0}},{"type":"Box","props":{"y":2,"x":3,"var":"colorDivHome","name":"colorDivHome"},"child":[{"type":"Image","props":{"width":184,"var":"colorDivxd","skin":"comp/sekuai1.png","name":"colorDivxd","height":97,"alpha":0.1}},{"type":"Image","props":{"x":186,"width":186,"var":"colorDivhe","skin":"comp/sekuai1.png","name":"colorDivhe","height":97,"alpha":0.1}},{"type":"Image","props":{"x":373,"width":185,"var":"colorDivzd","skin":"comp/sekuai1.png","name":"colorDivzd","height":97,"alpha":0.1}},{"type":"Image","props":{"y":99,"width":278,"var":"colorDivxj","skin":"comp/sekuai2.png","name":"colorDivxj","height":165,"alpha":0.1}},{"type":"Image","props":{"y":99,"x":280,"width":279,"var":"colorDivzj","skin":"comp/sekuai3.png","name":"colorDivzj","height":166,"alpha":0.1}}]}]},{"type":"Image","props":{"y":610,"x":0,"var":"loadNextGame","skin":"comp/dengdai.png","name":"loadNextGame"}},{"type":"Image","props":{"y":491,"x":608,"width":86,"skin":"comp/hezi.png","height":52}}]};
		return gamePlayUI;
	})(View);
var getMoneyUI=(function(_super){
		function getMoneyUI(){
			
		    this.getMoneyIndex=null;
		    this.affirmBtn=null;
		    this.getNum=null;
		    this.getMoneyTow=null;
		    this.MoneyNum=null;
		    this.btnAllMoney=null;
		    this.getMoneyNum=null;
		    this.nowGetMoney=null;
		    this.tishi=null;
		    this.chao=null;

			getMoneyUI.__super.call(this);
		}

		CLASS$(getMoneyUI,'ui.getMoneyUI',_super);
		var __proto__=getMoneyUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(getMoneyUI.uiView);

		}

		getMoneyUI.uiView={"type":"Dialog","props":{"width":591,"height":352},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/quedingkuang.png"}},{"type":"Box","props":{"y":62,"x":56,"var":"getMoneyIndex","name":"getMoneyIndex"},"child":[{"type":"Image","props":{"y":147,"x":99,"var":"affirmBtn","skin":"comp/kuanga.png","name":"affirmBtn"}},{"type":"Label","props":{"y":0,"x":8,"text":"您本日剩余     次提现机会\\n             确定提现？","fontSize":40,"color":"#715e5e","align":"center"}},{"type":"Label","props":{"y":1,"x":214,"width":55,"var":"getNum","text":"10","name":"getNum","height":40,"fontSize":40,"color":"#715e5e","align":"center"}}]},{"type":"Box","props":{"y":40,"x":75,"visible":false,"var":"getMoneyTow","name":"getMoneyTow"},"child":[{"type":"Label","props":{"text":"提出的金额会直接提出到微信零钱","fontSize":30,"color":"#715e5e"}},{"type":"Box","props":{"y":56,"x":162},"child":[{"type":"Label","props":{"text":"¥ ： ","fontSize":50,"color":"#715e5e"}}]},{"type":"Label","props":{"y":160,"x":-16,"text":"当前可提现金额：","fontSize":25,"color":"#715e5e"}},{"type":"Label","props":{"y":160,"x":188,"width":129,"var":"MoneyNum","text":"20","name":"MoneyNum","height":25,"fontSize":25,"color":"#715e5e","align":"center"}},{"type":"Box","props":{"y":159,"x":333,"var":"btnAllMoney","name":"btnAllMoney"},"child":[{"type":"Image","props":{"width":101,"skin":"comp/shijian.png","height":30}},{"type":"Label","props":{"y":4,"x":10,"width":48,"text":"全部提现","height":12,"fontSize":20,"color":"#715e5e"}}]},{"type":"TextInput","props":{"y":63,"x":238,"width":128,"var":"getMoneyNum","type":"number","text":"0","skin":"comp/textinput.png","name":"getMoneyNum","height":43,"fontSize":30}},{"type":"Box","props":{"y":211,"x":133,"var":"nowGetMoney","name":"nowGetMoney"},"child":[{"type":"Image","props":{"skin":"comp/shijian.png"}},{"type":"Label","props":{"y":20,"x":26,"text":"立即提出","fontSize":30,"color":"#715e5e"}}]},{"type":"Label","props":{"y":122,"x":51,"width":324,"visible":false,"var":"tishi","text":"提示","name":"tishi","height":20,"fontSize":20,"color":"#ea5f5f","align":"center"}},{"type":"Label","props":{"y":120,"x":110,"visible":false,"var":"chao","text":"今日提现已超限","name":"chao","fontSize":30,"color":"#715e5e"}}]}]};
		return getMoneyUI;
	})(Dialog);
var helpUI=(function(_super){
		function helpUI(){
			

			helpUI.__super.call(this);
		}

		CLASS$(helpUI,'ui.helpUI',_super);
		var __proto__=helpUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(helpUI.uiView);

		}

		helpUI.uiView={"type":"Dialog","props":{"width":649,"height":853},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/guizea.png"}}]};
		return helpUI;
	})(Dialog);
var rankUI=(function(_super){
		function rankUI(){
			
		    this.yongjinBang=null;
		    this.YRanking=null;
		    this.YID=null;

			rankUI.__super.call(this);
		}

		CLASS$(rankUI,'ui.rankUI',_super);
		var __proto__=rankUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rankUI.uiView);

		}

		rankUI.uiView={"type":"Dialog","props":{"width":649,"height":944},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/ranking.png"}},{"type":"List","props":{"y":238,"x":136,"width":364,"var":"yongjinBang","spaceX":1,"repeatY":10,"name":"yongjinBang","height":323},"child":[{"type":"Box","props":{"y":-1,"x":5,"width":364,"name":"render","height":32},"child":[{"type":"Label","props":{"y":-1,"x":59,"width":39,"var":"YRanking","text":"1","name":"YRanking","height":31,"fontSize":30,"color":"#000","align":"center"}},{"type":"Label","props":{"y":2,"x":244,"width":85,"var":"YID","text":"1","name":"YID","height":26,"fontSize":30,"color":"#000","align":"center"}}]}]}]};
		return rankUI;
	})(Dialog);
var rechargeUI=(function(_super){
		function rechargeUI(){
			
		    this.WxHome=null;
		    this.AliHome=null;

			rechargeUI.__super.call(this);
		}

		CLASS$(rechargeUI,'ui.rechargeUI',_super);
		var __proto__=rechargeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(rechargeUI.uiView);

		}

		rechargeUI.uiView={"type":"Dialog","props":{"width":649,"height":1070},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"comp/chongzhikuang.png"}},{"type":"Box","props":{"y":140,"x":310,"width":128,"var":"WxHome","name":"WxHome","height":906},"child":[{"type":"Image","props":{"skin":"comp/weixin-.png","name":"wx10"}},{"type":"Image","props":{"y":106,"skin":"comp/weixin-.png","name":"wx20"}},{"type":"Image","props":{"y":206,"skin":"comp/weixin-.png","name":"wx50"}},{"type":"Image","props":{"y":306,"skin":"comp/weixin-.png","name":"wx100"}},{"type":"Image","props":{"y":411,"skin":"comp/weixin-.png","name":"wx200"}},{"type":"Image","props":{"y":513,"skin":"comp/weixin-.png","name":"wx1000"}},{"type":"Image","props":{"y":617,"skin":"comp/weixin-.png","name":"wx2000"}},{"type":"Image","props":{"y":723,"x":0,"skin":"comp/weixin-.png","name":"wx5000"}},{"type":"Image","props":{"y":816,"x":0,"skin":"comp/weixin-.png","name":"wx5000"}}]},{"type":"Box","props":{"y":142,"x":451,"width":128,"var":"AliHome","name":"AliHome","height":890},"child":[{"type":"Image","props":{"visible":false,"skin":"comp/zhifubao.png","name":"zfb10"}},{"type":"Image","props":{"y":106,"visible":false,"skin":"comp/zhifubao.png","name":"zfb20"}},{"type":"Image","props":{"y":206,"visible":false,"skin":"comp/zhifubao.png","name":"zfb50"}},{"type":"Image","props":{"y":306,"visible":true,"skin":"comp/zhifubao.png","name":"zfb100"}},{"type":"Image","props":{"y":411,"visible":true,"skin":"comp/zhifubao.png","name":"zfb200"}},{"type":"Image","props":{"y":512,"x":0,"visible":true,"skin":"comp/zhifubao.png","name":"zfb1000"}},{"type":"Image","props":{"y":615,"x":0,"visible":true,"skin":"comp/zhifubao.png","name":"zfb2000"}},{"type":"Image","props":{"y":721,"x":0,"visible":true,"skin":"comp/zhifubao.png","name":"zfb5000"}},{"type":"Image","props":{"y":813,"x":0,"visible":true,"skin":"comp/zhifubao.png","name":"zfb5000"}}]}]};
		return rechargeUI;
	})(Dialog);
var resultUI=(function(_super){
		function resultUI(){
			
		    this.num1=null;
		    this.num2=null;
		    this.xianpai=null;
		    this.resultNum1=null;
		    this.resultNum2=null;
		    this.resultNum3=null;
		    this.zhuangpai=null;
		    this.resultNum4=null;
		    this.resultNum5=null;
		    this.resultNum6=null;
		    this.resultImg=null;

			resultUI.__super.call(this);
		}

		CLASS$(resultUI,'ui.resultUI',_super);
		var __proto__=resultUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(resultUI.uiView);

		}

		resultUI.uiView={"type":"View","props":{"width":750,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"visible":true,"skin":"comp/jiesuanzhong.png","height":373}},{"type":"Label","props":{"y":196,"x":26,"var":"num1","text":"1","strokeColor":"#ffffff","stroke":5,"name":"num1","fontSize":60,"color":"#0051fe","bold":true,"align":"center"}},{"type":"Label","props":{"y":191,"x":420,"var":"num2","text":"1","strokeColor":"#ffffff","stroke":5,"name":"num2","fontSize":60,"color":"#fd0102","bold":true,"align":"center"}},{"type":"Box","props":{"y":83,"x":94,"var":"xianpai","name":"xianpai"},"child":[{"type":"Image","props":{"y":73,"x":47,"width":119,"visible":false,"var":"resultNum1","skin":"pai/pai.png","name":"resultNum1","height":166,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":73,"x":175,"width":119,"visible":false,"var":"resultNum2","skin":"pai/pai.png","name":"resultNum2","height":166,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":226,"x":102,"width":119,"visible":false,"var":"resultNum3","skin":"pai/pai.png","rotation":90,"name":"resultNum3","height":165,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":83,"x":524,"var":"zhuangpai","name":"zhuangpai"},"child":[{"type":"Image","props":{"y":67,"x":20,"width":119,"visible":false,"var":"resultNum4","skin":"pai/pai.png","name":"resultNum4","height":166,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":68,"x":147,"width":119,"visible":false,"var":"resultNum5","skin":"pai/pai.png","name":"resultNum5","height":166,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":229,"x":84,"width":119,"visible":false,"var":"resultNum6","skin":"pai/pai.png","rotation":90,"name":"resultNum5","height":166,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":89,"x":327,"visible":false,"var":"resultImg","skin":"comp/he.png","name":"resultImg"}}]};
		return resultUI;
	})(View);
var servicePageUI=(function(_super){
		function servicePageUI(){
			

			servicePageUI.__super.call(this);
		}

		CLASS$(servicePageUI,'ui.servicePageUI',_super);
		var __proto__=servicePageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(servicePageUI.uiView);

		}

		servicePageUI.uiView={"type":"View","props":{"width":750,"height":1086},"child":[{"type":"Image","props":{"y":153,"x":115,"skin":"comp/2791528786028_.pic.jpg"}}]};
		return servicePageUI;
	})(View);
var tishiUI=(function(_super){
		function tishiUI(){
			
		    this.tishiContent=null;

			tishiUI.__super.call(this);
		}

		CLASS$(tishiUI,'ui.tishiUI',_super);
		var __proto__=tishiUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tishiUI.uiView);

		}

		tishiUI.uiView={"type":"Dialog","props":{"width":750,"height":100},"child":[{"type":"Label","props":{"y":29,"x":-2,"width":756,"var":"tishiContent","text":"label","height":40,"fontSize":40,"color":"#fff","align":"center"}}]};
		return tishiUI;
	})(Dialog);
var yongjinshuomingUI=(function(_super){
		function yongjinshuomingUI(){
			

			yongjinshuomingUI.__super.call(this);
		}

		CLASS$(yongjinshuomingUI,'ui.yongjinshuomingUI',_super);
		var __proto__=yongjinshuomingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(yongjinshuomingUI.uiView);

		}

		yongjinshuomingUI.uiView={"type":"Dialog","props":{"width":626,"height":838},"child":[{"type":"Image","props":{"y":0,"x":0,"width":626,"skin":"comp/yongjinfanganshuom.png","height":838}},{"type":"Label","props":{"y":128,"x":449,"text":"5","fontSize":25,"color":"#000"}},{"type":"Label","props":{"y":178,"x":449,"text":"3","fontSize":25,"color":"#000"}},{"type":"Label","props":{"y":226,"x":449,"text":"2","fontSize":25,"color":"#000"}},{"type":"Label","props":{"y":276,"x":449,"text":"2","fontSize":25,"color":"#000"}},{"type":"Label","props":{"y":330,"x":441,"text":"1.5","fontSize":20,"color":"#000"}},{"type":"Label","props":{"y":380,"x":441,"text":"1.5","fontSize":20,"color":"#000"}},{"type":"Label","props":{"y":530,"x":441,"text":"0.5","fontSize":20,"color":"#000"}},{"type":"Label","props":{"y":582,"x":441,"text":"0.5","fontSize":20,"color":"#000"}},{"type":"Label","props":{"y":424,"x":449,"text":"1","fontSize":25,"color":"#000"}},{"type":"Label","props":{"y":475,"x":449,"text":"1","fontSize":25,"color":"#000"}}]};
		return yongjinshuomingUI;
	})(Dialog);