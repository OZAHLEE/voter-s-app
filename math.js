var myLogModule=require('./log.js');

MathOperation={

    add:function(a,b){
    var sum= a+b;
    console.log("Numbers added is:"+sum);

    },
    divide:function(a,b)
    {
        if(a>=b){
        var product= a/b;
        console.log("Numbers Divided is:"+product);
    
        }
        else{
            myLogModule.error('Could not divide,check the numerator '+a +' '+b) ; 
            }
    },

    multiply:function(a,b){
            var multiply= a*b;
            console.log("Numbers Multiplied is:"+multiply);
        
            },
    subtract:function(a,b){
          if(a>=b){
                var subtract= a-b;
                console.log("Numbers Substracted is:"+subtract);
            
                }
                else{
                myLogModule.error('Could not substract,check the numerator '+a +' '+b)   ; 
                }
}
};
// making the local module global to app
module.exports=MathOperation;
 