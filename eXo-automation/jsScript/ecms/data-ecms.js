/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Menu = {
    SignIn:       "link=Sign in",
    SignOut:      "link=Sign out",
    Applications: "link=Applications",
    Dashboard:    "link=Dashboard"
}

LoginForm = {
    UserNameField: "name=username",
    PasswordField: "name=password",
    SigninButton:  "name=signIn"
};

Applications = {
    ImportApplicationsLink: "css=div.IconControl.ImportIcon"
}

PageLayoutConfigs = {
    ColumnPage: "link=Column Page Configs",
    RowPage   : "link=Row Page Configs",
    TabsPage  : "link=Tabs Page Config",
    MixPage   : "link=Mix Page Configs"
}

PageName = {
    NodeName: "id=pageName",
    DisplayName: "id=i18nizedLabel"
}

AddPage = {
    AddPageLink: "link=Add Page"
}

ClickNext = {
    ClickNextLink: "link=Next"
}

DropDownSelect =  {
        DropDownSelectIcon: "css=div.DropDownSelectIcon"
}

//=========================================================================//
Save = {
    SaveLink: "link=Save"
}

Close = {
    CloseLink: "link=Close"
}

SaveAndClose = {
    SaveAndCloseLink: "link=Save & Close"
}

Cancel = {
    CancelLink: "link=Cancel"
}

//===================== ApplicationsPageEditor ==========================//

ApplicationsPageEditor = {
    Admin:          "link=admin",
    Administration: "link=Administration",
    Collaboration:  "link=Collaboration",
    Content:        "link=Content",
    Controller:     "link=Controller",
    Development:    "link=Development",
    ECM:            "link=ECM",
    Faq:            "link=faq",
    FormGeneratorPortlet:   "link=Form Generator Portlet",
    Forms:                  "link=Forms",
    Forum:                  "link=forum",
    Gadgets:                "link=Gadgets",
    Integration:            "link=Integration",
    Monitoring:             "link=Monitoring",
    Navigation:             "link=Navigation",
    Newsletter:             "link=Newsletter",
    PlatformNavigation:     "link=platformNavigation",
    Search:                 "link=Search",
    SEOToolbar:             "link=SEOToolbar",
    Social:                 "link=social",
    System:                 "link=System",
    WCMAdmin:               "link=WCM Admin",
    Wiki:                   "link=wiki",
    Workflow:               "link=workflow"    
}

locatorOfObjectContentDetail = {
   ToBeDragged:           "//div[@title='Content Detail']",
   DragDestinationObjectEmptyLayout: "//div[@id='UIPagePreview']/div[@class='UIPage']//div[@class='UIComponentBlock']",
   DragDestinationObject: "//div[@id='UIPagePreview']/div[@class='UIPage']//div[@class='UIRowContainer EmptyContainer']"
   
}

locatorOfObjectContentList = {
    ToBeDragged:           "//div[@title='Content List']",
    DragDestinationObjecEmptyLayout: "//div[@id='UIPagePreview']/div[@class='UIPage']//div[@class='UIComponentBlock']",
    DragDestinationObject: "//div[@id='UIPagePreview']/div[@class='UIPage']//div[@class='UIRowContainer EmptyContainer']"
}

EditPortlet = {
    //ContentList: "//div[contains(text(),'Content List')]",
    ClickIcon:   "css=a.EditIcon"

}

ModeForm = {
    Content: "//input[@name='UICLVConfigDisplayModeFormRadioBoxInput' and @value='ManualViewerMode']",
    Folder:  "id=UICLVConfigDisplayModeFormRadioBoxInput_AutoViewerMode"
    //input[@name='UICLVConfigDisplayModeFormRadioBoxInput']
    
}

SelectFolderPath = 
{
    ClickIcon:      "//img[@alt='Select Folder Path']",
    GeneralDrives:  "id=GeneralDrives_",
    GeneralDrivesManagedSites:      "id=GeneralDrives_ManagedSites_",
    GeneralDrivesManagedSitesAcme:  "id=GeneralDrives_ManagedSites__acme",
    GeneralDrivesManagedSitesAcmeDocuments: "id=GeneralDrives_ManagedSites__acme_documents",
    DocumentsLink:                  "xpath=(//a[contains(text(),'documents')])[2]"    
}

Documents = {
    Conditions:     "link=conditions.doc",
    Office:         "link=offices.jpg",
    Metro:          "link=metro.pdf"
}

EditInCE = {
    contentLink: "link=Content",
    editInCELink: "xpath=(//a[@onclick='eXo.ecm.CLV.addURL(this)'])[6]"    
}

