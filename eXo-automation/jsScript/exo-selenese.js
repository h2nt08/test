/************************************ CUSTOM SELENESES *******************************/
Selenium.prototype.doWait = function wait(locator, timeout){
    return wait(locator, function(){}, parseInt(timeout));
}
            
Selenium.prototype.doLogin = function(username, password){
    return wait(Menu.SignIn, function (){
        exo.Login(username, password);
    });
}

Selenium.prototype.doLoginDiscardGTN = function(username, password){
    return wait(Menu.SignIn, function (){
        exo.LoginDiscardGTN(username, password);
    });
}

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

Selenium.prototype.doGotoPortalSites = function(username, password){
    return wait(Menu.SignOut, function (){
        exo.GotoPortalSites(username, password);
    });
}

Selenium.prototype.doCreateNewUserAccount = function(usernamePassEmail){
    return wait(UserAccount.LocationUserAccount, function (){
        exo.CreateNewUserAccount(usernamePassEmail);
    });
}

Selenium.prototype.doDeletePortalGadget = function(){
    return wait(PortaGadget.LinkMaximize, function deletePortalGadget_linkMaxfound(){
        exo.DeletePortalGadget();
    });
}

Selenium.prototype.doVerifyTextInFrame = function(){
    return wait("//iframe[contains(@id,'remote_iframe_')]", function VerifyTextInFrame_Textfound(){
        exo.VerifyTextInFrame();
    });
}

Selenium.prototype.doBreakOutOfFrame = function(){
    return wait(function BreakOutOfFrame_OutOfFrame(){
        exo.BreakOutOfFrame();
    });
}


//=========================================
// ECMS
// User login
/*Selenium.prototype.doLogin = function(username, password){
    return wait("Menu.SignIn", function (){
        ecms.login(username, password);
    });
}*/

// Import all applications on page editor
Selenium.prototype.doImportApplications = function(){
    return wait(Menu.Applications, function importApplications_AppLinkFound(){
        ecms.importApplications();
    });    
}

// Create new page empty layout
Selenium.prototype.doCreateNewPageEmptyLayout = function(name){
    return wait("link=Add Page", function(){
         LOG.info("doCreateNewPageEmptyLayout");
         ecms.CreateNewPageEmptyLayout(name);
        
    });   
}

// Create new page with layout
Selenium.prototype.doCreateNewPageWithLayout = function(name,number){
    return wait("link=Add Page", function(){
         LOG.info("doCreateNewPageWithLayout");
         ecms.CreateNewPageWithLayout(name, number);
        
    });   
}

// Add Content Module
Selenium.prototype.doAddContentDetailEmptyLayout = function(){
    return wait(ApplicationsPageEditor.Content, function addContentDetailEmptyLayout_ContentDetailModuleFound(){
        ecms.AddContentDetailEmptyLayout();
    }); 
}

Selenium.prototype.doAddContentDetail = function(){
    return wait(ApplicationsPageEditor.Content, function addContentDetail_ContentDetailModuleFound(){
        ecms.AddContentDetail();
    }); 
}

Selenium.prototype.doAddContentListEmptyLayout = function(){
    return wait(ApplicationsPageEditor.Content, function addContentListEmptyLayout_ContentListModuleFound(){
        ecms.AddContentListEmptyLayout();
    }); 
}

Selenium.prototype.doAddContentList = function(){
    return wait(ApplicationsPageEditor.Content, function addContentList_ContentListModuleFound(){
        ecms.AddContentList();
    }); 
}

// Select Content Detail Path

Selenium.prototype.doSelectContentPath = function(){
    return wait(EditPortlet.ClickIcon, function selectContentPath_ContentPathFound(){
        ecms.SelectContentPath();
    }); 
}
// Select CLV Path
Selenium.prototype.doSelectCLVPath = function(inputMode){
    return wait(EditPortlet.ClickIcon, function(){
        ecms.SelectCLVPath(inputMode);
    }); 
}

///////////////////////////////////////////////////////////////////////
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

// CreateNewProduct 
Selenium.prototype.doCreateNewProduct = function(params){
    return wait("link=New Content", function(){
        LOG.info("doCreateNewProduct");
        ecms.CreateNewProduct(params);
    });
}


// simple search
Selenium.prototype.doSimpleSearch = function(keyword){
    return wait("name=simpleSearch", function(){
//        LOG.info("doCreateNewSampleNode");
        ecms.SimpleSearch(keyword);
    });
}

//CreateNewPictureOnHeadLayout
Selenium.prototype.doCreateNewPictureOnHeadLayout = function(params){
    return wait("link=New Content", function(){
        LOG.info("doCreateNewPictureOnHeadLayout");
        ecms.CreateNewPictureOnHeadLayout(params);
    });
}
// DeleteNode
Selenium.prototype.doDeleteNode = function(locator){
    return wait(locator, function(){
//        LOG.info("doCreateNewSampleNode");
        ecms.DeleteNode(locator);
    });
}

//EditInContentExplorer
Selenium.prototype.doEditInContentExplorer = function(){
    return wait(EditInCE.contentLink, function EditInContentExplorer_LinkFound(){
        LOG.info("doEditInContentExplorer");
        ecms.EditInContentExplorer();
    });
}