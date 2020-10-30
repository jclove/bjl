<?php
use GameRedis\RedisPackage;
use GatewayClient\Gateway;

// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件

function getConfig($id){
    $conModel = db("config");
    $co = $conModel->find($id);
    $num = $co['values'];
    return $num;
}

function redisd(){
     $redis=new RedisPackage();
     return $redis; 
}
/**
 * 发送数据
 * @param 协议号 $num
 * @param 数据 $data数组
 * @param 发送给谁 $client_id
 */
function send($num,$data,$uid){
    Gateway::$registerAddress = "127.0.0.1:1238";
    $data = json_encode($data);
    $key = "5e08323af9116a8824139704e36d7c15";
    $sign = md5($num.$data.$key);
    $array = array("action"=>$num,"data"=>$data,"sign"=>$sign);
    $str = json_encode($array);
    sendToByte($str);
    if($num!=0){
        echo "server:".$str."\n";
    }
    $ss = sendToByte($str);
    if(Gateway::isUidOnline($uid)){
        Gateway::sendToUid($uid, $ss);
    }
    
}

function sendToAll($num,$data){
    Gateway::$registerAddress = "127.0.0.1:1238";
    $data = json_encode($data);
    $key = "5e08323af9116a8824139704e36d7c15";
    $sign = md5($num.$data.$key);
    $array = array("action"=>$num,"data"=>$data,"sign"=>$sign);
    $str = json_encode($array);
    sendToByte($str);
    if($num!=0){
        echo "server:".$str."\n";
    }
    $ss = sendToByte($str);
    Gateway::sendToAll($ss);
}



/**
 * 编辑数据成包头包体
 * @param unknown $client_id
 * @param unknown $str
 * @return boolean
 */
function sendToByte($str){
    $a = strlen($str);
    if($a>0&&$a<10){
        $c = "000".$a;
    }elseif($a<100){
        $c = "00".$a;
    }elseif($a<1000){
        $c = "0".$a;
    }elseif($a<10000){
        $c = $a;
    }else{
        return false;
    }
    $str = $c.$str;
    return $str;
}
