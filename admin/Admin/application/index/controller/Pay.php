<?php
namespace app\index\controller;

use think\Controller;
use GameRedis\RedisPackage;

class Pay extends Controller
{
    /**
     * 充值
     */
    public function Recharge(){
        $czConf = getConfig(4);
        if ($czConf == 0){
          echo "<br>";
            echo "<br>";
          echo' <h1 align="center" style="color:red;font-size: 70px; " >充值提现请联系客服</h1>';
            //echo "<h1 align='center' >上分请联系客服</h1>"; 
            echo' <h1 align="center"style="color: #26771c;">微信支付请扫以下图片或保存图片</h1>';
           echo "<img src='/wx.jpg' style=' width: 100%; height: 66%; ' />";
           echo "<br>";
           echo "<br>";
           echo "<br>";
			echo' <h1 align="center"style="color: #019fe8;">支付宝支付请保存二维码到支付宝付款</h1>';
          echo "<img src='/zfb.jpg' style=' width: 100%; height: 66%; ' />";
            exit();die;
        }else {
            
            $user_id = input("id"); // 用户id
            $type = input("type"); // 充值类型
            $money = input("money"); // 充值金额
            if (!$user_id || $user_id == "undefined" || !$type || $type == "undefined" || !$money || $money == "undefined"){
                $url = getConfig(26);
                $this->error("充值信息缺失，请重新提交充值信息","{$url}/index.php/weixin/index/wxLogin");exit;
            }
            $orderid = time()+rand(0,999999); // 订单号
            $insert = array(
                'user_id'   => $user_id,
                'money'     => $money,
                'add_time'  => time(),
                'status'    => 0,
                'order_id'  => $orderid,
                'type'      => $type,
                'bz'        => ($type == 1)?"支付宝充值":"微信充值"
            );
            $info = db('recharge')->insert($insert);
            if ($info){
                // 	        http://ufutang.net/index.php/Home/Pay/notify_url
                $adminUrl = getConfig(26);
       /*          
                $price = $money;
                $istype = ($type == 3)?2:$type;
                
                $orderuid = $user_id;       //此处传入您网站用户的用户名，方便在paysapi后台查看是谁付的款，强烈建议加上。可忽略。
                $goodsname = "云端娱乐";
                $uid = "3a862b657a6e0799e4c09a91";//"此处填写PaysApi的uid";
                $token = "eef1543eef76d383c5a6875a1d2feb88";//"此处填写PaysApi的Token";
                $return_url = $adminUrl."/index.php/index/pay/return_url";
                $notify_url = $adminUrl."/index.php/index/pay/notify_url";
                
                $key = md5($goodsname. $istype . $notify_url . $orderid . $orderuid . $price . $return_url . $token . $uid);
                //经常遇到有研发问为啥key值返回错误，大多数原因：1.参数的排列顺序不对；2.上面的参数少传了，但是这里的key值又带进去计算了，导致服务端key算出来和你的不一样。
             
                $returndata['goodsname'] = $goodsname;
                $returndata['istype'] = $istype;
                $returndata['key'] = $key;
                $returndata['notify_url'] = $notify_url;
                $returndata['orderid'] = $orderid;
                $returndata['orderuid'] =$orderuid;
                $returndata['price'] = $price;
                $returndata['return_url'] = $return_url;
                $returndata['uid'] = $uid;
                $this->assign("payinfo",$returndata);
                return $this->fetch(); 
                   */
               // 码支付 
                $codepay_id="104501";//这里改成码支付ID
                $codepay_key="vc7hkAEMtUc31UNS0YdQWQ0Idu0eXdej"; //这是您的通讯密钥
                $data = array(
                    "id" => $codepay_id,//你的码支付ID
                    "pay_id" => $user_id, //唯一标识 可以是用户ID,用户名,session_id(),订单ID,ip 付款后返回
                    "type" => $type,//1支付宝支付 3微信支付 2QQ钱包
                    "price" => $money,//金额100元
                    "param" => $orderid,//自定义参数
                    "notify_url"=>$adminUrl."/index.php/index/pay/notify_url",//通知地址
                    "return_url"=>$adminUrl."/index.php/index/pay/return_url",//跳转地址
                ); //构造需要传递的参数
                
                ksort($data); //重新排序$data数组
                reset($data); //内部指针指向数组中的第一个元素
                $sign = ''; //初始化需要签名的字符为空
                $urls = ''; //初始化URL参数为空
                foreach ($data AS $key => $val) { //遍历需要传递的参数
                    if ($val == ''||$key == 'sign') continue; //跳过这些不参数签名
                    if ($sign != '') { //后面追加&拼接URL
                        $sign .= "&";
                        $urls .= "&";
                    }
                    $sign .= "$key=$val"; //拼接为url参数形式
                    $urls .= "$key=" . urlencode($val); //拼接为url参数形式并URL编码参数值
                }
                $query = $urls . '&sign=' . md5($sign .$codepay_key); //创建订单所需的参数
                $url = "http://api2.fateqq.com:52888/creat_order/?{$query}"; //支付页面
                exit("<meta http-equiv='Refresh' content='0;URL={$url}'>");
            }else {
                $this->error("生成订单失败！","");
            }
        }
    }
    
    /**
     * 充值异步回调
     */
    public function notify_url(){
        
        /* $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "http://119.28.213.163");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
        //打印获得的数据
        $json = json_decode($output,true);
        echo $json;die; */
/*         $in = array("input"=>input());
        $josn = json_encode($in);
        db("gametext")->insert(array("text"=>$josn)); */
        /* echo "进入支付回调，添加测试数据";
        die; */
        
/*         $paysapi_id = input("paysapi_id");
        $orderid = input("orderid"); // 订单号
        $price = input("price"); // 金额
        $realprice = input("realprice"); // 付款金额
        $orderuid = input("orderuid"); // 用户ID
        $key = input("key"); // 加密key */
        
        
        
        
        
        //校验传入的参数是否格式正确，略
/*         $token = "eef1543eef76d383c5a6875a1d2feb88";
        
        $temps = md5($orderid . $orderuid . $paysapi_id . $price . $realprice . $token);
        
        if ($temps != $key){
            exit('error');
        }else{
            //校验key成功，是自己人。执行自己的业务逻辑：加余额，订单付款成功，装备购买成功等等。
            $order = db('recharge')->where("order_id={$orderid} and user_id={$orderuid}")->find();
            if ($order && $order['status']==0){
                db('recharge')->where("order_id={$orderid} and user_id={$orderuid}")->update(['status'=>1]);
                db('users')->where("id={$orderuid}")->setInc("user_money",$order['money']);
                exit('success');
            }else {
                exit('fail');
            }
        } */
        
        
       // 码支付 
        ksort($_POST); //排序post参数
        reset($_POST); //内部指针指向数组中的第一个元素
//         $josn = json_encode($_POST);
//         db("gametext")->insert(array("text"=>$josn));
        $codepay_key="vc7hkAEMtUc31UNS0YdQWQ0Idu0eXdej"; //这是您的密钥
        $sign = '';//初始化
        foreach ($_POST AS $key => $val) { //遍历POST参数
            if ($val == '' || $key == 'sign') continue; //跳过这些不签名
            if ($sign) $sign .= '&'; //第一个字符串签名不加& 其他加&连接起来参数
            $sign .= "$key=$val"; //拼接为url参数形式
        }
        if (!$_POST['pay_no'] || md5($sign . $codepay_key) != $_POST['sign']) { //不合法的数据
            exit('fail');  //返回失败 继续补单
        } else { //合法的数据
            //业务处理
            $pay_id = $_POST['pay_id']; //需要充值的ID 或订单号 或用户名
            $money = (float)$_POST['money']; //实际付款金额
            $price = (float)$_POST['price']; //订单的原价
            $param = $_POST['param']; //自定义参数
            $pay_no = $_POST['pay_no']; //流水号
            $order = db('recharge')->where("order_id={$param}")->find();
            if ($order && $order['status']==0){
                db('recharge')->where("order_id={$param}")->update(['status'=>1]);
                db('users')->where("id={$pay_id}")->setInc("user_money",$order['money']);
                exit('success');
            }else {
                exit('fail');
            }
        }
    }
    
    /**
     * 充值同步回调
     */
    public function return_url(){
        $url = getConfig(26);
        header("Location:{$url}/index.php/weixin/index/wxLogin");
    }
    
    public function tixian(){
        
        
        $txConf = getConfig(5);
        if ($txConf == 0){
            echo "<h1>本平台暂不支持提现。。。。</h1>";
            exit();die;
        }else {
            // 登录时需要 跳转 获取提现用的openID
            
            // $url = "http://jfcms15.com/openid.php?mid=596&url=".$this->url."/index.php/Home/Index/gettixian/?u=1";
            //         http://jfcms15.com/openid.php?mid=596&url=http://***.com/?u=1
            // header("Location: ".$url);
            // exit;
            $withdrawalsModel = db("widthraswals");
            $userModel = db("users");
            $uid = input('id');
            $type = input("type"); // 1=>余额提现 2=>佣金提现
            $money = input('money');
            $user = $userModel->find($uid);

            $bool = true;
            RedisPackage::getInstance();
            $LastTx = RedisPackage::get("BjlTxLastTime{$user['id']}");
            if ($LastTx){
                $bool = false;
                $url = getConfig(26);
                $this->error("10分钟之内只能提现一次！！","{$url}/index.php/weixin/index/wxLogin");exit;
            }
            if ($bool){
                if (input('openid')){
                    $fopenid = input("openid");
                    $userModel->where("id={$uid}")->update(['fopenid'=>$fopenid]);
                    $user = $userModel->find($uid);
                }
                if (!$user['fopenid']){
                    $adminUrl = getConfig(26);
                    $url = $adminUrl."/index.php/index/pay/tixian/id/".$uid."/type/".$type."/money/".$money;
                    header("Location:http://jfcms12.com/openid.php?mid=596&url=".$url."?u=1");
                    exit;
                }
                if($money<1){
                    $url = getConfig(26);
                    $this->error("提现金额不得少于1","{$url}/index.php/weixin/index/wxLogin");exit;
                }
                if ($type == 1){
                    $tmoney = $user['user_money'];
                    $Dec = "user_money";
                }elseif ($type == 2){
                    $tmoney = $user['com_money'];
                    $Dec = "com_money";
                }
                if($tmoney<$money){
                    $url = getConfig(26);
                    $this->error("没有足够的金额！！","{$url}/index.php/weixin/index/wxLogin");exit;
                }
                
                $openid = $user['fopenid'];
                
                if(!$openid){
                    $url = getConfig(26);
                    $this->error("信息缺失...","{$url}/index.php/weixin/index/wxLogin");exit;
                }
                
                // 设置缓存时间
                RedisPackage::set("BjlTxLastTime{$user['id']}", 1, 600);

                $testTime = date("Y-m-d H:i:s",time());
                $testId = db("gametext")->insertGetId(['text'=>"用户=>{$user['id']}===时间=>{$testTime}====提现金额=>{$money}=====账户余额{$Dec}=>{$tmoney}"]);
                if (db("gametext")->count() > 100){
                    $delId = $testId-50;
                    db("gametext")->where("id<{$delId} and id>1")->delete();
                }
                if ($money > getConfig(13)){
                    $count = redisd()->HGet("BjlTxCount", $user['id']);
                    if ($count){
                        redisd()->HSet("BjlTxCount", $user['id'], $count+1);
                    }else {
                        redisd()->HSet("BjlTxCount", $user['id'], 1);
                    }
                    $userModel->where("id={$user['id']}")->setDec($Dec,$money);
                    $data = array(
                        "user_id"=>$user['id'],
                        "money"=>$money,
                        "bz"=>"提现",
                        "status"=>0,
                        "tx_type"=>$type,
                        "add_time"=>time()
                    );
                    $withdrawalsModel->insert($data);
                    $url = getConfig(26);
                    $this->success("请等待管理员审核。。。","{$url}/index.php/weixin/index/wxLogin");
                    exit();
                }
                
                $key = "wuheyidakuan";
                $u = time().rand(100000, 999999);
                $post_data = array (
                    'mid' => 596, //在掌上零钱里面获取的uid
                    'jine' => $money, //要请求发放的金额
                    'openid'=>$openid, //第二步获取的openid
                    'tixianid'=>$u, //本地的提现id【要求唯一】字符串类型的数字，最大长度11位数
                    'lailu' =>$user['id'], //可选参数
                );
                $mkey = md5($post_data['mid'].$post_data['jine'].$post_data['openid'].$key);
                $post_data['mkey'] = $mkey;
                $post_data['lx'] = 999;//保持默认
                $url ='http://jfcms12.com/jieru.php';
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                // post数据
                curl_setopt($ch, CURLOPT_POST, 1);
                // post的变量
                curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
                $output = curl_exec($ch);
                curl_close($ch);
                //打印获得的数据
                $json = json_decode($output,true);
                
                if($json['o']=='yes'){
                    $count = redisd()->HGet("BjlTxCount", $user['id']);
                    if ($count){
                        redisd()->HSet("BjlTxCount", $user['id'], $count+1);
                    }else {
                        redisd()->HSet("BjlTxCount", $user['id'], 1);
                    }
                    $data = array(
                        "user_id"=>$user['id'],
                        "money"=>$money,
                        "bz"=>"提现",
                        "status"=>1,
                        "tx_type"=>$type,
                        "add_time"=>time()
                    );
                    $id = $withdrawalsModel->insert($data);
                    $userModel->where("id={$user['id']}")->setDec($Dec,$money);
                    $url = getConfig(26);
                    header("Location:{$url}/index.php/weixin/index/wxLogin");
                    /* redirect($url);
                    exit("<meta http-equiv='Refresh' content='0;URL={$url}'>"); */
                    $this->success("提现成功","{$url}/index.php/weixin/index/wxLogin");
                }else{
                    $this->error($json['msg']."（注意：请联系管理员解决）","{$url}/index.php/weixin/index/wxLogin");
                }
            }
        }
    }
}

