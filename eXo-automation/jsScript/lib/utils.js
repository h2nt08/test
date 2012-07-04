/************* GLOBAL OPTIONS *************/
var AWAIT_INTERVAL = 500;

strands.compiler.options.debug = true;

// by default, debugMode is private.  overriding the strands.errorWrapper to forcibly enable debug mode
strands.errorWrapper = function(func) {
    var newFunc = function() {
        func.apply(this,arguments);			
    }
    newFunc.noTryCatch = func;
    return newFunc;
}


/************* UTILITY FUNCTIONS *************/
//Decorator to try/catch error and display in Selenium log
catchErrorWrap = function(func){
    return function(){
        try{
            return func.apply(null, Array.prototype.slice.call(arguments));
        }catch(e){
            LOG.error(e.message);
            throw e;
        }
    };
}

//Synchronized wait
wait = function(locator, callback, timeout) {
    var callerName = arguments.callee.caller.name;
    
    if(!timeout) timeout = parseInt(selenium.defaultTimeout);
    var isTimeout = false;
    
    var timer = setTimeout(function(){
        isTimeout = true;
    }, timeout);

    return function(){
        if(selenium.isElementPresent(locator)){
            clearTimeout(timer);
            catchErrorWrap(callback)();
            return true;
        }
        if(isTimeout) {
            var message = callerName + ": timeout after " + timeout + "ms waiting for [" + locator + "] synchronously";
            LOG.error(message);
            throw new Error(message);
        }
        return false; //to continue looping
    }
}

//Asynchronized wait
aWait = function(locator, timeout) {
    var callerName = arguments.callee.caller.name;

    if(!timeout) timeout = parseInt(selenium.defaultTimeout);    
    var isTimeout = false;

    var timer = setTimeout(function(){
        isTimeout = true;
    }, timeout);

    while(!(selenium.isElementPresent(locator) || isTimeout)) {
        sleep(AWAIT_INTERVAL);
    } 

    if(isTimeout) {
        var message = callerName + ": timeout after " + timeout + "ms waiting for [" + locator + "] asynchronously";
        LOG.error(message);
        throw new Error(message);
    }
}
eval(strands.compiler.compile("aWait = " + aWait.toString()));
