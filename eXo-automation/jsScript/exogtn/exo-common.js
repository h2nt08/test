/************************************ COMMON FUNCTIONS *******************************/
var exo = {};

//Exo
//User login

exo.Login = function Login(username, password){
    aWait(Menu.SignIn);
    selenium.doClick(Menu.SignIn);
    aWait(LoginForm.UserNameField);
    selenium.doType(LoginForm.UserNameField, username);
    selenium.doType(LoginForm.PasswordField, password);
    selenium.doClick(LoginForm.SigninButton);
}
exo.LoginDiscardGTN = function LoginDiscardGTN(username, password){
    aWait(Menu.SignIn);
    selenium.doClick(Menu.SignIn);
    aWait(LoginForm.UserNameField);
    selenium.doType(LoginForm.UserNameField, username);
    selenium.doType(LoginForm.PasswordField, password);
    sleep(3000);
    selenium.doClick(LoginForm.DiscardButton);
}

exo.GotoPortalSites = function GotoPortalSites(username, password){
    aWait(Menu.SignOut);
    selenium.doClick(Menu.SignOut);
    //sleep(1000);
    aWait(Menu.SignIn);
    selenium.doClick(Menu.SignIn);
    aWait(LoginForm.UserNameField);
    selenium.doType(LoginForm.UserNameField, username);
    selenium.doType(LoginForm.PasswordField, password);
    selenium.doClick(LoginForm.SigninButton);
    //sleep(10000);
    aWait(PortalSites.LocationPortalSite);
    selenium.doClick(PortalSites.LocationPortalSite);
    //sleep(1000);
}

//=======================================================//

exo.logout = function logout(){
    aWait(Menu.SignOut);
    selenium.doClick(Menu.SignOut);
}

exo.importAllApps = function importAllApps(){
    aWait(Menu.ApplicationRegistry);
    selenium.doClick(Menu.ApplicationRegistry);
    aWait(ApplicationRegistry.ImportAppsLink);
    selenium.doClick(ApplicationRegistry.ImportAppsLink);
    if(selenium.isConfirmationPresent()) {
        LOG.info("CONFIRMATION: " + selenium.getConfirmation());
    }
}

exo.prepareDashboard = function prepareDashboard() {
    aWait(Menu.Dashboard);
    selenium.doClick(Menu.Dashboard);
    sleep(200);
    aWait(Dashboard.AddGadgetsLink);
    selenium.doClick(Dashboard.AddGadgetsLink);
    sleep(200);
    aWait(Dashboard.GadgetMenu);
    selenium.doMouseDownAt(Dashboard.GadgetMenu, "0,0");
    selenium.doMouseMoveAt(Dashboard.GadgetContainer, "700,0");
    selenium.doMouseUpAt(Dashboard.GadgetContainer, "700,0"); 
}

exo.cleanupDashboard = function cleanupDashboard(){
    aWait(Dashboard.CloseMenuButton);
    selenium.doClick(Dashboard.CloseMenuButton);
}

exo.dragGadgetToDashboard = function dragGadgetToDashboard(locator) {
    aWait(locator);
    selenium.doDragAndDropToObject(locator, Dashboard.GadgetContainer);
}

exo.testCalculatorGadget = function testCalculatorGadget(alertResult) {
    aWait(CalculatorGadget.LocationInDashboard);
    aWait("link=7");
    selenium.doClick("link=7");
    selenium.doClick("link=+");
    selenium.doClick("link=8");
    selenium.doClick("link==");

    aWait(CalculatorGadget.DisplayField);
    var result = selenium.page().findElement(CalculatorGadget.DisplayField).value;
    LOG.info("result = " + result);
    if(alertResult) alert(result);

    aWait(CalculatorGadget.CloseButton);
    selenium.doClick(CalculatorGadget.CloseButton);
    if(selenium.isConfirmationPresent()) {
        LOG.info("CONFIRMATION: " + selenium.getConfirmation());
    }
}

//============== Create new user account ===================//
exo.CreateNewUserAccount = function CreateNewUserAccount(usernamePassEmail){
    var namelist = usernamePassEmail.toString().split(",");
    aWait(UserAccount.LocationUserAccount);
    selenium.doClick(UserAccount.LocationUserAccount);   
    aWait(UserAccount.LocationUsername);
    selenium.doType(UserAccount.LocationUsername, namelist[0]);
    aWait(UserAccount.LocationPassword);
    selenium.doType(UserAccount.LocationPassword, namelist[1]);
    aWait(UserAccount.LocationConfirmationPass);
    selenium.doType(UserAccount.LocationConfirmationPass, namelist[1]);
    aWait(UserAccount.LocationFirstname);
    selenium.doType(UserAccount.LocationFirstname, namelist[2]);
    aWait(UserAccount.LocationLastname);
    selenium.doType(UserAccount.LocationLastname, namelist[2]);
    aWait(UserAccount.LocationEmail);
    selenium.doType(UserAccount.LocationEmail, namelist[3]);
    aWait(UserAccount.LocationLinkSave);
    selenium.doClick(UserAccount.LocationLinkSave);
    
}
//=============== Verify text present ===================//
exo.VerifyTextInFrame = function VerifyTextInFrame(){
    aWait("//iframe[contains(@id,'remote_iframe_')]");
    selenium.doSelectFrame("//iframe[contains(@id,'remote_iframe_')]");
    //verifyTextPresent
    selenium.isTextPresent("the url: http://google.com is down or invalid");
    //selenium.doVerifyTextPresent
}



//================ Delete gadget========================//
exo.DeletePortalGadget = function DeletePortalGadget(){
    aWait(PortaGadget.LinkMaximize);
    selenium.doClick(PortaGadget.LinkMaximize);
    sleep(10000);
    aWait(PortaGadget.LinkDeleteGadget);
    selenium.doClick(PortaGadget.LinkDeleteGadget);
}


//=============== Delete node portal ===================//

exo.DeletePortal = function DeletePortal(portalName){
    var namelist = portalName.toString().split(",");
    //aWait(GotoSiteExplorer);
    selenium.doGotoSiteExplorer();
    sleep(10000);
    //waitForElementPresent
    //mouseDownRight css=a[title='test ']
    //waitForElementPresent link=Delete
    //pause 60000
    
}

exo.BreakOutOfFrame = function BreakOutOfFrame(){ 
    if(this != top)
            top.location.href = this.location.href;
    //else if(this != top)
      //      top.document.location.href = this.document.location.href;
}
