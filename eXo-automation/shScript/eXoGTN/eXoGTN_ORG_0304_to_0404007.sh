#export HOME_TEST="/home/SELENIUM-PLF3.5.X/workspace/DownloadECMSAutomationProjects/eXo-automation"
echo "================exoGTN Organization====================="
#export HOME_TEST="/home/SELENIUM-PLF3.5.X/workspace/DownloadECMSAutomationProjects/eXo-automation"
cd $HOME_TEST
export ReportName=eXoGTN_ORG_0304_to_0404007_$(date +"%m-%d-%Y").html
pwd
java -jar selenium-server-standalone-2.21.0.jar $HOME_TEST/jsScript/user-extensions.js -htmlsuite "*firefox" "http://localhost:8080" $HOME_TEST/htmlscript/eXoGTN/Function/Organization/eXoGTN_ORG_0304_to_0404007.html $HOME_TEST/Reports/$ReportName
exit 0