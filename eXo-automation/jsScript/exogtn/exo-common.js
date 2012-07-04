/************************************ COMMON FUNCTIONS *******************************/
var exo = {};

exo.login = function login(username, password){
    aWait(Menu.SignIn);
    selenium.doClick(Menu.SignIn);
    aWait(LoginForm.UserNameField);
    selenium.doType(LoginForm.UserNameField, username);
    selenium.doType(LoginForm.PasswordField, password);
    selenium.doClick(LoginForm.SigninButton);
}

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


