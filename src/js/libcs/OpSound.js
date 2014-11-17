
//*******************************************************
// and here are the definitions of the drawing operators
//*******************************************************

evaluator.sound={};
evaluator.sound.lines=[0,0,0,0,0,0,0,0,0,0,0,0];

evaluator.playsin= function(args,modifs){

    function handleModifs(){

        if(modifs.line!==undefined){

            erg =evaluate(modifs.line);
            if(erg.ctype=='number'){
                linenumber=Math.floor(erg.value.real);
                if(linenumber<0){linenumber=0;}
                if(linenumber>10){inenumber=10;}
            }
        }
    }  
        

    var v0=evaluateAndVal(args[0]);
    var linenumber=0;
    if(v0.ctype=='number' ){
        handleModifs();
        var lines=evaluator.sound.lines;
        var f=v0.value.real;
        if (lines[linenumber]==0){
            lines[linenumber]=T("sin", {freq:f,mul:0.6}).play();


        } else {
            lines[linenumber].set({freq:f});
        }
        
    }
    return nada;    

}
