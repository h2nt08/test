 

/************* UI DATA FOR GATEIN *************/
Menu = {
    SignIn: "link=Sign in",
    SignOut: "link=Sign out",
    ApplicationRegistry: "link=Application Registry",
    Dashboard: "link=Dashboard"
}

LoginForm = {
    UserNameField: "name=username",
    PasswordField: "name=password",
    SigninButton: "name=signIn"
};

ApplicationRegistry = {
    ImportAppsLink: "css=div.IconControl.ImportIcon"
}

Dashboard = {
    AddGadgetsLink: "link=Add Gadgets",
    GadgetMenu: "css=span.PopupTitle",
    GadgetContainer: "id=GadgetContainer",
    CloseMenuButton: "css=a.CloseButton"
}

CalculatorGadget = {
    LocationInMenu: "//div[@id=\"Gadgets/Calculator\"]/div/div",
    LocationInDashboard: "css=span.GadgetTitle:contains(\"Calculator\")",
    DisplayField: "css=div.Display input#calculator",
    CloseButton: "css=span.CloseGadget.IconControl"
}