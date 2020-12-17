
var log={
  info:function(info){
      console.log("Info:",info);
  },
  warning:function(warning){
    console.log("Warning:",warning);
},
error:function(error){
    console.log("Error:",error);
},
status:function(status){
   
    console.log("Status:",status);
     
},
serverDetails:function(platform,hostname,osVersion){
    const osEnv= require('os');
    var oshtname=osEnv.hostname;
    var osp= osEnv.platform;
    var osVersion=osEnv.version;
     
    console.log("Server Info:\n "+"Platform: "+ osp +'\n Host Name: '+oshtname+'\n OS Version '+osVersion);
}
};
module.exports= log;