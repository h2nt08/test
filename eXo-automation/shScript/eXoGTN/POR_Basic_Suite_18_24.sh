#export HOME_TEST="/home/SELENIUM-PLF3.5.X/workspace/DownloadECMSAutomationProjects/eXo-automation"
echo "================exoGTN Basic Action====================="
#export HOME_TEST="/home/SELENIUM-PLF3.5.X/workspace/DownloadECMSAutomationProjects/eXo-automation"
cd $HOME_TEST
export ReportName=POR_Basic_Suite_18_24_$(date +"%m-%d-%Y").html
pwd
java -jar selenium-server-standalone-2.21.0.jar -userExtensions $HOME_TEST/jsScript/user-extensions.js -htmlsuite "*firefox" "http://localhost:8080" $HOME_TEST/htmlscript/eXoGTN/Function/BasicFunction/POR_Basic_Suite_18_24.html $HOME_TEST/Function/Reports/$ReportName
exit 0

