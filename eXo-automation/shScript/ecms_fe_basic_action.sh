#export HOME_TEST="/home/SELENIUM-PLF3.5.X/workspace/DownloadECMSAutomationProjects/eXo-automation"
echo "==============ecms_fe_basic_action======"
export HOME_TEST="/home/hainh/java/eXoProjects/test/eXo-automation"
cd $HOME_TEST
export ReportName=ecms_fe_basic_action_$(date +"%m-%d-%Y").html
pwd
java -jar selenium-server-standalone-2.21.0.jar -userExtensions $HOME_TEST/jsScript/user-extensions.js -htmlsuite "*firefox" "http://localhost:8080" $HOME_TEST/htmlscript/ecms/Functional/Content_Explorer/ecms_fe_basic_action.html $HOME_TEST/Reports/$ReportName
exit 0
