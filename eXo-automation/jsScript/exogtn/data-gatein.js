 

/************* UI DATA FOR GATEIN *************/
Menu = {
    //SignIn: "link=Sign in",
    SignIn: "//b[contains(text(),'Sign in')]",
    SignOut: "link=Logout",
    ApplicationRegistry: "link=Application Registry",
    Dashboard: "link=Dashboard"
}

LoginForm = {
    UserNameField: "name=username",
    PasswordField: "name=password",
    SigninButton:  "link=Sign in",
    DiscardButton: "link=Discard"
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

PortalSites = {
    LocationPortalSite: "link=Sites"
}

UserAccount = {
    LocationUserAccount:    "link=Add Users",
    LocationUsername:       "id=username",
    LocationPassword:       "password",
    LocationConfirmationPass:   "Confirmpassword",
    LocationFirstname:      "firstName",
    LocationLastname:       "lastName",
    LocationEmail:          "email",
    LocationLinkSave:       "link=Save"
}

PortaGadget = {
    LinkMaximize: "css=span.MaximizeGadget.IconControl",
    LinkDeleteGadget: "css=span.CloseGadget.IconControl"
    
}