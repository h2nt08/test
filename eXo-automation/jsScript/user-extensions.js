// eXo-SeleneseJS home folder
//var HOME = "file:///home/hainh/workspace/Projects/eXo-SeleneseJS";
var HOME = "file:////home/SELENIUM-PLF3.5.X/workspace/download automation project/eXo-automation";

function readFile(file) {
    var createXmlHttp = function() {
        var http = null;
        try{
            http = new XMLHttpRequest();
        }catch(e){}
        if (!http) try{
            http = new ActiveXObject('Msxml2.XMLHTTP')
            }catch(e){}
        if (!http) try{
            http = new ActiveXObject('Microsoft.XMLHTTP')
            }catch(e){}
        if (!http) try{
            http = new ActiveXObject('Msxml2.XMLHTTP.4.0')
            }catch(e){}
        if (!http) throw new Error("XmlHTTP not available");
        return http;
    }

    var http = createXmlHttp();
    http.open('GET', file, false);
    try {
        http.send(null);
        return http.responseText;
    } catch(e) {
        return null;
    }
}

eval(readFile(HOME + "/jsScript/lib/strands.js"));
eval(readFile(HOME + "/jsScript/lib/utils.js"));
eval(strands.compiler.compile(readFile(HOME + "/jsScript/exogtn/exo-common.js")));
eval(strands.compiler.compile(readFile(HOME + "/jsScript/ecms/exo-ecms.js")));
eval(readFile(HOME + "/jsScript/exo-selenese.js"));
eval(readFile(HOME + "/jsScript/exogtn/data-gatein.js"));



//function demo(){
//    selenium.doOpen("/portal/classic");
//    exo.login('root', 'gtn');
//    sleep(2000);
//    exo.importAllApps();
//    sleep(2000);
//    exo.prepareDashboard();
//    sleep(2000);
//    exo.dragGadgetToDashboard(CalculatorGadget.LocationInMenu);
//    sleep(2000);
//    exo.testCalculatorGadget(false);
//    sleep(2000);
//    exo.cleanupDashboard();
//    sleep(2000);
//    exo.logout();
//}
//eval(strands.compiler.compile("demo = " + demo.toString()));

Selenium.prototype.doDemo = function doDemo(){
    alert("test");
}
