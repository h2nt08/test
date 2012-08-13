#export HOME_TEST="/home/SELENIUM-PLF3.5.X/workspace/DownloadECMSAutomationProjects/eXo-automation"
echo "================exoGTN Basic Action====================="
#export HOME_TEST="/home/SELENIUM-PLF3.5.X/workspace/DownloadECMSAutomationProjects/eXo-automation"
cd $HOME_TEST
export ReportName=POR_Basic_Suite_01_17_$(date +"%m-%d-%Y").html
pwd
java -jar selenium-server-standalone-2.21.0.jar $HOME_TEST/jsScript/user-extensions.js -htmlsuite "*firefox" "http://localhost:8080" $HOME_TEST/htmlscript/eXoGTN/Function/BasicFunction/POR_Basic_Suite_01_17.html $HOME_TEST/Reports/$ReportName
exit 0

