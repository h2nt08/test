var ecms = {};

//=========== User login ================//
ecms.login = function login (username, password) {
    aWait("link=Login");
    selenium.doClick("link=Login");
    aWait("name=username");
    selenium.doType("name=username", username);
    selenium.doType("name=password", password);
    selenium.doClick("link=Sign in");
}

//=========== Import all applications =======================//
ecms.importApplications = function importApplications(){
    aWait(Menu.Applications);
    selenium.doClick(Menu.Applications);
    aWait(Applications.ImportApplicationsLink);
    selenium.doClick(Applications.ImportApplicationsLink);
    //sleep(20000);
    if(selenium.isConfirmationPresent()) {
        LOG.info("CONFIRMATION: " + selenium.getConfirmation());
    }
}

//=========== Add new page without layout ===================//
ecms.CreateNewPageEmptyLayout = function CreateNewPageEmptyLayout (pageName){
     selenium.doSetSpeed(2000);
     aWait(AddPage.AddPageLink);
     selenium.doClick(AddPage.AddPageLink);
     aWait(PageName.NodeName);
     selenium.doType(PageName.NodeName, pageName);
     selenium.doType(PageName.DisplayName, pageName);
     selenium.doClick(ClickNext.ClickNextLink);
     //alert("EmptyLayout");
     sleep(2000);
     aWait(ClickNext.ClickNextLink);
     selenium.doClick(ClickNext.ClickNextLink);
}

//============== Add new page with selected layout ===========// 
ecms.CreateNewPageWithLayout = function CreateNewPageWithLayout(pageName, numberLayout) {
     selenium.doSetSpeed(2000);
     aWait(AddPage.AddPageLink);
     selenium.doClick(AddPage.AddPageLink);
     aWait(PageName.NodeName);
     selenium.doType(PageName.NodeName, pageName);
     selenium.doType(PageName.DisplayName, pageName);
     selenium.doClick(ClickNext.ClickNextLink);
     aWait(DropDownSelect.DropDownSelectIcon);
     selenium.doClick(DropDownSelect.DropDownSelectIcon); 
     if (numberLayout == 1)
     {
        aWait(PageLayoutConfigs.ColumnPage);
        selenium.doClick(PageLayoutConfigs.ColumnPage);
        //alert("11111");
        sleep(2000);
     }
     else if (numberLayout == 2)
     {
        aWait(PageLayoutConfigs.RowPage);
        selenium.doClick(PageLayoutConfigs.RowPage);
        sleep(2000);
     }
     else if (numberLayout == 3)
     {
        aWait(PageLayoutConfigs.TabsPage);
        selenium.doClick(PageLayoutConfigs.TabsPage);
        sleep(2000);
     }
     else
     {
            aWait(PageLayoutConfigs.MixPage);
            selenium.doClick(PageLayoutConfigs.MixPage);
            sleep(2000);
     }        
      aWait(ClickNext.ClickNextLink);
      selenium.doClick(ClickNext.ClickNextLink);
} 

//======================== Add Content module==================//
ecms.AddContentDetailEmptyLayout = function AddContentDetailEmptyLayout () {
    aWait(ApplicationsPageEditor.Content);
    selenium.doClick(ApplicationsPageEditor.Content);
    selenium.doDragAndDropToObject(locatorOfObjectContentDetail.ToBeDragged, locatorOfObjectContentDetail.DragDestinationObjectEmptyLayout);
}

ecms.AddContentDetail = function AddContentDetail () {
    aWait(ApplicationsPageEditor.Content);
    selenium.doClick(ApplicationsPageEditor.Content);
    selenium.doDragAndDropToObject(locatorOfObjectContentDetail.ToBeDragged, locatorOfObjectContentDetail.DragDestinationObject);
} 

ecms.AddContentListEmptyLayout = function AddContentListEmptyLayout () {
    aWait(ApplicationsPageEditor.Content);
    selenium.doClick(ApplicationsPageEditor.Content);
    selenium.doDragAndDropToObject(locatorOfObjectContentList.ToBeDragged, locatorOfObjectContentList.DragDestinationObjecEmptyLayout);
}

ecms.AddContentList = function AddContentList () {
    aWait(ApplicationsPageEditor.Content);
    selenium.doClick(ApplicationsPageEditor.Content);
    selenium.doDragAndDropToObject(locatorOfObjectContentList.ToBeDragged, locatorOfObjectContentList.DragDestinationObject);
} 

//================= Select Content Path in Edit Content Porlet =============//
ecms.SelectContentPath = function SelectContentPath() {
    selenium.doSetSpeed(1000);
    aWait(EditPortlet.ClickIcon);
    selenium.doClick(EditPortlet.ClickIcon);
    aWait(SelectFolderPath.ClickIcon);
    selenium.doClick(SelectFolderPath.ClickIcon);
    aWait(SelectFolderPath.GeneralDrives);
    selenium.doClick(SelectFolderPath.GeneralDrives);
    aWait(SelectFolderPath.GeneralDrivesManagedSites);
    selenium.doClick(SelectFolderPath.GeneralDrivesManagedSites);
    aWait(SelectFolderPath.GeneralDrivesManagedSitesAcme);
    selenium.doClick(SelectFolderPath.GeneralDrivesManagedSitesAcme);
    aWait(SelectFolderPath.GeneralDrivesManagedSitesAcmeDocuments);
    selenium.doClick(SelectFolderPath.GeneralDrivesManagedSitesAcmeDocuments);
    sleep(1000);
    aWait(Documents.Conditions);
    selenium.doClick(Documents.Conditions);
    sleep(1000);
    aWait(Save.SaveLink);
    selenium.doClick(Save.SaveLink);
    sleep(1000);
    aWait(Close.CloseLink);
    selenium.doClick(Close.CloseLink);
}

//================= Select CLV Path in Edit Content Porlet =============//
//================= ByFolder or ByContent ==================//
ecms.SelectCLVPath = function SelectCLVPath(InputModeForm){
    selenium.doSetSpeed(1000);
    if (InputModeForm == "Folder"){
        aWait(EditPortlet.ClickIcon);
        selenium.doClick(EditPortlet.ClickIcon);
        aWait(ModeForm.Folder);
        selenium.doClick(ModeForm.Folder);
        aWait(SelectFolderPath.ClickIcon);
        selenium.doClick(SelectFolderPath.ClickIcon);
        aWait(SelectFolderPath.GeneralDrives);
        selenium.doClick(SelectFolderPath.GeneralDrives);
        aWait(SelectFolderPath.GeneralDrivesManagedSites);
        selenium.doClick(SelectFolderPath.GeneralDrivesManagedSites);
        aWait(SelectFolderPath.GeneralDrivesManagedSitesAcme);
        selenium.doClick(SelectFolderPath.GeneralDrivesManagedSitesAcme);
        aWait(SelectFolderPath.DocumentsLink);
        selenium.doClick(SelectFolderPath.DocumentsLink);
        sleep(1000);
        aWait(Save.SaveLink);
        selenium.doClick(Save.SaveLink);
        sleep(1000);
    }
        
    else if (InputModeForm == "Content"){
        aWait(EditPortlet.ClickIcon);
        selenium.doClick(EditPortlet.ClickIcon);
        aWait(ModeForm.Content);
        selenium.doClick(ModeForm.Content);
        aWait(SelectFolderPath.ClickIcon);
        selenium.doClick(SelectFolderPath.ClickIcon);
        aWait(SelectFolderPath.GeneralDrives);
        selenium.doClick(SelectFolderPath.GeneralDrives);
        aWait(SelectFolderPath.GeneralDrivesManagedSites);
        selenium.doClick(SelectFolderPath.GeneralDrivesManagedSites);
        aWait(SelectFolderPath.GeneralDrivesManagedSitesAcme);
        selenium.doClick(SelectFolderPath.GeneralDrivesManagedSitesAcme);
        aWait(SelectFolderPath.GeneralDrivesManagedSitesAcmeDocuments);
        selenium.doClick(SelectFolderPath.GeneralDrivesManagedSitesAcmeDocuments);
        sleep(1000);
        aWait(Documents.Conditions);
        selenium.doClick(Documents.Conditions);
        sleep(1000);
        aWait(Save.SaveLink);
        selenium.doClick(Save.SaveLink);
        sleep(1000);
    }    
    aWait(Close.CloseLink);
    selenium.doClick(Close.CloseLink);
}
//==============Edit in Content Explorer=====================//

ecms.EditInContentExplorer = function EditInContentExplorer(){
    aWait(EditInCE.contentLink);
    selenium.doClick(EditInCE.contentLink);
    aWait(EditInCE.editInCELink);
    selenium.doClick(EditInCE.editInCELink);
} 

//============= Create new Folder content ===================//
ecms.CreateNewContentFolder = function CreateNewContentFolder (foldername){
     aWait("link=New Folder");
     selenium.doClick("link=New Folder");
     aWait("name=type");
     selenium.doSelect("name=type", "label=Content Folder");
     selenium.doType("id=title", foldername);
     selenium.doType("id=name", foldername);
     selenium.doClick("link=Save");
     
} 

//============= Create new Document content ================//
ecms.CreateNewDocumentFolder = function CreateNewDocumentFolder (foldername){
     wait("link=New Folder");
     selenium.doClick("link=New Folder");
     aWait("name=type");
     selenium.doSelect("name=type", "label=Document Folder");
     selenium.doType("id=title", foldername);
     selenium.doType("id=name", foldername);
     selenium.doClick("link=Save");
} 

//============= Create new article ==================//
ecms.CreateNewArticle = function CreateNewArticle (params){
    var paramlist = params.toString().split(",");
//  var foldername = paramlist[0];
//  alert(foldername);
     aWait("link=New Content");
     selenium.doClick("link=New Content");
     aWait("//div[@title='Article']");
     selenium.doClick("//div[@title='Article']");
     aWait("id=title");
     selenium.doClick("id=title");
     selenium.doType("id=title", paramlist[0]);
     selenium.doType("id=name", paramlist[1]);
     aWait("//span[text()='Source']");
     selenium.doClick("//span[text()='Source']");
     sleep(1000);
     selenium.doType("css=textarea.cke_source.cke_enable_context_menu","<html><body><p>the summary of Article </br></p></body></html>");
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");
} 

//============= Create new Annoucement==================//

ecms.CreateNewAnnoucement = function CreateNewAnnoucement (params){
    var paramlist = params.toString().split(",");
//    var foldername = paramlist[0];
//    alert(foldername);
     aWait("link=New Content");
     selenium.doClick("link=New Content");
     aWait("//div[@title='Announcement']");
     selenium.doClick("//div[@title='Announcement']");
     aWait("id=name");
     selenium.doType("id=name", paramlist[0]);
//   selenium.selectFrame("//td[@id='cke_contents_summary']/iframe");
//   selenium.doType("//html/body", "xxxxxxxxxxx");
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");
} 

///================ Create new Free Layout Webcontent ================//
ecms.CreateNewFreeLayoutWebContent = function CreateNewFreeLayoutWebContent(params){
    var paramlist = params.toString().split(",");
//    var foldername = paramlist[0];
//    alert(foldername);
     aWait("link=New Content");
     selenium.doClick("link=New Content");
     aWait("//div[@title='Free layout webcontent']");
     selenium.doClick("//div[@title='Free layout webcontent']");
     aWait("id=title");
     selenium.doType("id=title", paramlist[0]);
     selenium.doType("id=name", paramlist[1]);
//   selenium.selectFrame("//td[@id='cke_contents_summary']/iframe");
//   selenium.doType("//html/body", "xxxxxxxxxxx");
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");
                 
} 

//============== Create new Kofax ===================//
ecms.CreateNewKofax = function CreateNewKofax (params){
    var paramlist = params.toString().split(",");
//    var foldername = paramlist[0];
//    alert(foldername);
     aWait("link=New Content");
     selenium.doClick("link=New Content");
     aWait("//div[@title='Kofax document']");
     selenium.doClick("//div[@title='Kofax document']");
     aWait("id=name");
     selenium.doType("id=name", paramlist[0]);
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");
} 

//=================Create new file===================//
ecms.CreateNewFile = function CreateNewFile (params){
    var paramlist = params.toString().split(",");
//    var foldername = paramlist[0];
//    alert(foldername);
     aWait("link=New Content");
     selenium.doClick("link=New Content");
     aWait("//div[@title='File']");
     selenium.doClick("//div[@title='File']");
     aWait("id=name");
     selenium.doType("id=name", paramlist[0]);
     aWait("//span[text()='Source']");
     selenium.doClick("//span[text()='Source']");
     sleep(1000);
     if (paramlist[0]==="")
     {
         selenium.doType("css=textarea.cke_source.cke_enable_context_menu","");
     }
     else
     {
         selenium.doType("css=textarea.cke_source.cke_enable_context_menu", paramlist[0]);
     }         
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");

}

//==================Create new file plan===================//
ecms.CreateNewFilePlan = function CreateNewFilePlan (params){
    var paramlist = params.toString().split(",");
//    var foldername = paramlist[0];
//    alert(foldername);
     aWait("link=New Content");
     selenium.doClick("link=New Content");
     aWait("//div[@title='File Plan']");
     selenium.doClick("//div[@title='File Plan']");
     aWait("id=name");
     selenium.doType("id=name", paramlist[0]);
     selenium.doType("id=filePlanNote", paramlist[0]);
//   selenium.selectFrame("//td[@id='cke_contents_summary']/iframe");
//   selenium.doType("//html/body", "xxxxxxxxxxx");
     aWait("css=div.NormalTab > div.LeftTab > div.RightTab > div.MiddleTab");
     selenium.doClick("css=div.NormalTab > div.LeftTab > div.RightTab > div.MiddleTab");
     aWait("id=recordCategoryIdentifier");
     selenium.doType("id=recordCategoryIdentifier", "test");
     selenium.doType("id=dispositionAuthority", "test");
     selenium.doType("id=defaultOriginatingOrganization", "test");
     aWait("//div[contains(text(),'Process Properties')]");
     selenium.doClick("//div[contains(text(),'Process Properties')]");
     selenium.doType("id=eventTrigger","OnClick");
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");
     
} 


//================= Create new sample node ==================//
ecms.CreateNewSampleNode = function CreateNewSampleNode (params){
    var paramlist = params.toString().split(",");
//    var foldername = paramlist[0];
//    alert(foldername);
     aWait("link=New Content");
     selenium.doClick("link=New Content");
     aWait("//div[@title='Sample node']");
     selenium.doClick("//div[@title='Sample node']");
     aWait("id=title");
     selenium.doType("id=title", paramlist[0]);
     selenium.doType("id=name", paramlist[1]);
//                 selenium.selectFrame("//td[@id='cke_contents_summary']/iframe");
//                 selenium.doType("//html/body", "xxxxxxxxxxx");
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");
} 

//============== Create new Podcast =====================//
ecms.CreateNewPodcast = function CreateNewPodcast (params){
    var paramlist = params.toString().split(",");
//    var foldername = paramlist[0];
//    alert(foldername);
     aWait("link=New Content");
     selenium.doClick("link=New Content");
     aWait("//div[@title='Podcast']");
     selenium.doClick("//div[@title='Podcast']");
     aWait("name=name");
     selenium.doType("name=name", paramlist[0]);
     selenium.doType("name=link", paramlist[1]);
//                 selenium.selectFrame("//td[@id='cke_contents_summary']/iframe");
//                 selenium.doType("//html/body", "xxxxxxxxxxx");
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");
} 

//============== Create new picture on head layout ======================//
ecms.CreateNewPictureOnHeadLayout = function CreateNewPictureOnHeadLayout (params){
    var paramlist = params.toString().split(",");

     aWait("link=New Content");
     selenium.doClick("link=New Content");
     aWait("//div[@title='Picture on head layout webcontent']");
     selenium.doClick("//div[@title='Picture on head layout webcontent']");
     aWait("id=name");
     selenium.doType("id=name", paramlist[0]);   
     aWait("id=title");
     selenium.doType("id=title", paramlist[1]);
     aWait("id=file");
     alert(paramlist[2]);
     selenium.doType("id=file", paramlist[2]);
     sleep(3000);
     aWait("//span[text()='Source']");
     selenium.doClick("//span[text()='Source']");
     sleep(1000);
     selenium.doType("css=textarea.cke_source.cke_enable_context_menu","<html><body><p>Add New Picture On Head layout </br></p></body></html>");
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");

}
//================== Create new product ==========//
ecms.CreateNewProduct = function CreateNewProduct (params){
     selenium.doRefresh();
     var paramlist = params.toString().split(",");
     aWait("link=New Content");
     selenium.doClick("link=New Content");
     aWait("//div[@title='Product']");
     selenium.doClick("//div[@title='Product']");
     aWait("id=name");
     selenium.doType("id=name", paramlist[0]);
     aWait("id=title");
     selenium.doType("id=title", paramlist[0]);
     aWait("//span[text()='Source']");
     selenium.doClick("//span[text()='Source']");
     selenium.doType("css=textarea.cke_source.cke_enable_context_menu","<html><body><p>Add new text/html Summary (1) </br></p></body></html>");
     sleep(1000);
     //selenium.selectFrame("//td[@id='cke_contents_productBenefits']/iframe");
     aWait("//span[@id='cke_46_label']");
     selenium.doClick("//span[@id='cke_46_label']");
     selenium.doType("css=#cke_contents_productBenefits > textarea.cke_source.cke_enable_context_menu","<html><body><p>Add new text/html productBenifits (2) </br></p></body></html>");
     sleep(1000);
     //selenium.selectFrame("//td[@id='cke_contents_productFeatures']/iframe");
     aWait("//span[@id='cke_97_label']");
     selenium.doClick("//span[@id='cke_97_label']");
     selenium.doType("css=#cke_contents_productFeatures > textarea.cke_source.cke_enable_context_menu","<html><body><p>Add new text/html productFeatures (3) </br></p></body></html>");
     sleep(1000);
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");
     sleep(500);

}

//================== Delete node =================//
ecms.DeleteNode = function DeleteNode (locator){
//    var foldername = paramlist[0];
//    alert(foldername);
     aWait(locator);
     selenium.doMouseDownRight(locator);
     aWait("link=Delete");
     selenium.doClick("link=Delete");
     aWait("link=OK");
     selenium.doClick("link=OK");
     
} 

// ECMS searching
//=============== Simple search ===================//
ecms.SimpleSearch = function SimpleSearch(keyword){
    aWait("name=simpleSearch");
    selenium.doType("name=simpleSearch",keyword);
    selenium.doClick("//a[@id='SimpleSearch']");
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// Wrap basic command
// PLF 3.5.x Goto site Explorer function
Selenium.prototype.doGotoSiteExplorer = function(){
    return wait("link=Sites Explorer", function(){
        selenium.doClick("link=Sites Explorer");
        return true;
    })
    
}

// PLF 3.5.x ECMS show drives
Selenium.prototype.doShowDrives = function(){
    return wait("//a[@title='Show Drives']", function(){
        selenium.doClick("//a[@title='Show Drives']");
        return true;
    })
}

// PLF 3.5.x ECMS go to Element(
Selenium.prototype.doGotoElement = function(locator){
    return wait(locator, function(){
        selenium.doClick(locator);
        return true;
    })
}

// PLF 3.5.x ECMS. Click to a link 
Selenium.prototype.doClickLink = function(location){
    return wait(location, function(){
        selenium.doClick(location);
        return true;
    })
}

// wrap doType
Selenium.prototype.doTypeText = function(location, value){
    return wait(location, function(){
        selenium.doType(location, value);
        return true;
    })    
}
// Wrap doSelect
Selenium.prototype.doSelectItem = function(locator, value){
    
    return wait(locator, function(){
        selenium.doSelect(locator, value);
        return true;
    })    
}
