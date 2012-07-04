var ecms = {};

ecms.login = function login (username, password) {
//    alert("testtest");
    aWait("link=Login");
    selenium.doClick("link=Login");
    aWait("name=username");
    selenium.doType("name=username", username);
    selenium.doType("name=password", password);
    selenium.doClick("link=Sign in");
}

// Create new Folder content
ecms.CreateNewContentFolder = function CreateNewContentFolder (foldername){
     aWait("link=New Folder");
     selenium.doClick("link=New Folder");
     aWait("name=type");
     selenium.doSelect("name=type", "label=Content Folder");
     selenium.doType("id=title", foldername);
     selenium.doType("id=name", foldername);
     selenium.doClick("link=Save");
     
} 

// Create new Document content
ecms.CreateNewDocumentFolder = function CreateNewDocumentFolder (foldername){
     wait("link=New Folder");
     selenium.doClick("link=New Folder");
     aWait("name=type");
     selenium.doSelect("name=type", "label=Document Folder");
     selenium.doType("id=title", foldername);
     selenium.doType("id=name", foldername);
     selenium.doClick("link=Save");
} 

// create new article
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
//   selenium.selectFrame("//td[@id='cke_contents_summary']/iframe");
//   selenium.doType("//html/body", "xxxxxxxxxxx");
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");
} 

///////////////////////////////////////////

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

///========================
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
/////////////////////
///========================
ecms.CreateNewKofax = function CreateNewKofax (params){
    var paramlist = params.toString().split(",");
//    var foldername = paramlist[0];
//    alert(foldername);
     aWait("link=New Content");
     selenium.doClick("link=New Content");
     aWait("//div[@title='Kofax document']");
     selenium.doClick("//div[@title='Kofax document']");
     aWait("id=name");
     selenium.doType("id=name", paramlist[1]);
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");
} 

////////////////////////////////////////////////////
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
//   selenium.selectFrame("//td[@id='cke_contents_summary']/iframe");
//   selenium.doType("//html/body", "xxxxxxxxxxx");
     aWait("link=Save & Close");
     selenium.doClick("link=Save & Close");
     
} 
////////////////////////////////////////////////////////
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

/////////////////
////////////////////////////////////////////////////
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

// Podcast
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



////////////////////////////////////////
// Delete node
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
//simple search
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

// 
// PLF 3.5.x ECMS go to Element(
Selenium.prototype.doGotoElement = function(locator){
    return wait(locator, function(){
        selenium.doClick(locator);
        return true;
    })
}

// 
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
