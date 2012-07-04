/************************************ CUSTOM SELENESES *******************************/
Selenium.prototype.doWait = function wait(locator, timeout){
    return wait(locator, function(){}, parseInt(timeout));
}
            
//Selenium.prototype.doLogin = function(username, password){
//    return wait(Menu.SignIn, function (){
//        exo.login(username, password);
//    });
//}

Selenium.prototype.doPrepareDashboard = function() {
    return wait(Menu.Dashboard, function prepareDashboard_DashboardLinkFound(){
        exo.prepareDashboard();
    });
}

Selenium.prototype.doCleanupDashboard = function(){
    return wait(Dashboard.CloseMenuButton, function(){
        exo.cleanupDashboard();
    });
}

Selenium.prototype.doLogout = function(){
    return wait(Dashboard.CloseMenuButton, function(){
        exo.logout();
    });
}

Selenium.prototype.doImportAllApps = function(){
    return wait(Menu.ApplicationRegistry, function importAllApps_AppRegLinkFound(){
        exo.importAllApps();
    });    
}

Selenium.prototype.doDragGadgetToDashboard = function(locator) {
    return wait(locator, function dragGadgetToDashboard_GadgetFound(){
        exo.dragGadgetToDashboard(locator);
    });
}

Selenium.prototype.doTestCalculatorGadget = function(alertResult) {
    return wait(CalculatorGadget.LocationInDashboard, function testCalculatorGadget_CalGadgetFound(){
        exo.testCalculatorGadget(alertResult);
    });
}

//=========================================
// ECMS
//
Selenium.prototype.doLogin = function(username, password){
    return wait("link=Login", function (){
//        alert("doLogin entry");
        ecms.login(username, password);
    });
}

Selenium.prototype.doCreateNewContentFolder = function(name){
    return wait("link=New Folder", function(){
        LOG.info("doCreateNewContentFolder");
        ecms.CreateNewContentFolder(name);
    });
}

//CreateNewDocumentFolder
Selenium.prototype.doCreateNewDocumentFolder = function(name){
    return wait("link=New Folder", function(){
        LOG.info("doCreateNewDocumentFolder");
        ecms.CreateNewDocumentFolder(name);
    });
}

// create new article
Selenium.prototype.doCreateNewArticle = function(params){
    return wait("link=New Content", function(){
        LOG.info("doCreateNewArticle");
        ecms.CreateNewArticle(params);
    });
}

// new Annoucement
Selenium.prototype.doCreateNewAnnoucement = function(params){
    return wait("link=New Content", function(){
        LOG.info("doCreateNewAnnoucement");
        ecms.CreateNewAnnoucement(params);
    });
}

// FreeLayoutWebcontent
Selenium.prototype.doCreateNewFreeLayoutWebContent = function(params){
    return wait("link=New Content", function(){
        LOG.info("doCreateNewFreeLayoutWebContent");
        ecms.CreateNewFreeLayoutWebContent(params);
    });
}

// NewKofax
Selenium.prototype.doCreateNewKofax = function(params){
    return wait("link=New Content", function(){
        LOG.info("doCreateNewKofax");
        ecms.CreateNewKofax(params);
    });
}
// New File
Selenium.prototype.doCreateNewFile = function(params){
    return wait("link=New Content", function(){
        LOG.info("doCreateNewFile");
        ecms.CreateNewFile(params);
    });
}
// File Plan
Selenium.prototype.doCreateNewFilePlan = function(params){
    return wait("link=New Content", function(){
        LOG.info("doCreateNewFilePlan");
        ecms.CreateNewFilePlan(params);
    });
}
// sample node
Selenium.prototype.doCreateNewSampleNode = function(params){
    return wait("link=New Content", function(){
        LOG.info("doCreateNewSampleNode");
        ecms.CreateNewSampleNode(params);
    });
}
// Podcast
Selenium.prototype.doCreateNewPodcast = function(params){
    return wait("link=New Content", function(){
//        LOG.info("doCreateNewSampleNode");
        ecms.CreateNewPodcast(params);
    });
}

// simple search
Selenium.prototype.doSimpleSearch = function(keyword){
    return wait("name=simpleSearch", function(){
//        LOG.info("doCreateNewSampleNode");
        ecms.SimpleSearch(keyword);
    });
}

// DeleteNode
Selenium.prototype.doDeleteNode = function(locator){
    return wait(locator, function(){
//        LOG.info("doCreateNewSampleNode");
        ecms.DeleteNode(locator);
    });
}