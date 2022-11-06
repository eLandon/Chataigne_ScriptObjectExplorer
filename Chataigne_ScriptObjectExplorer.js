


/////////////////////////   INIT   ///////////////////////////////

function init(){
    local.scripts.chataigne_ScriptObjectExplorer.enableLog.set(true);
}


function moduleParameterChanged(param){

    if(param.is(local.parameters.print)){
        getObjectString();
    }
    if(param.is(local.parameters.object)){
        getObjectString();
    }
}

function getObjectString(){
    var splitAdress = local.parameters.object.get().split(".");
        var obj = root;
        var lost = false;
        for (var i=1; i<splitAdress.length; i++){
            obj = obj.getChild(splitAdress[i]);
            if (obj==undefined){lost = true;}
        }
        if(!lost){getMethodsProperties(obj);}
        else{script.log("script adress not recognized");}
        
}

function getMethodsProperties(myObject){
    script.log("OBJECT : "+local.parameters.object.get());
	var log = util.getObjectProperties(myObject, true, false);
	script.log("Parameters :");
	for (var i = 0 ; i<log.length; i++){
		script.log(".      "+log[i]);
	}
    script.log("\n");
    var log = util.getObjectProperties(myObject, false, true);
	script.log("Properties :");
	for (var i = 0 ; i<log.length; i++){
		script.log(".      "+log[i]);
	}
    script.log("\n");
	log = util.getObjectMethods(myObject);
	script.log("Methods :");
	for (var i = 0 ; i<log.length; i++){
		script.log(".      "+log[i]);
	}
    script.log("\n");
}





