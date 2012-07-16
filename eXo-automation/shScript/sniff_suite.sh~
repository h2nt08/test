#!/bin/bash
echo "=====Run ECMS sniff test=================="
export HOME_TEST=/home/hainh/java/eXoProjects/test/eXo-automation
export JAVA_HOME=/home/hainh/java/jdk1.6
$JAVA_HOME/bin/java -jar $HOME_TEST/selenium-server-standalone-2.21.0.jar -userExtensions $HOME_TEST/jsScript/user-extensions.js -htmlsuite "*firefox" "http://localhost:8080" $HOME_TEST/htmlscript/ecms/Snifftest/sniff_suite.html $HOME_TEST/Reports/sniff_suite_report.html

$JAVA_HOME/bin/java -jar $HOME_TEST/selenium-server-standalone-2.21.0.jar -userExtensions $HOME_TEST/jsScript/user-extensions.js -htmlsuite "*firefox" "http://localhost:8080" $HOME_TEST/htmlscript/ecms/Functional/Content_Explorer/ecms_fe_basic_action.html $HOME_TEST/Reports/ecms_fe_basic_action_report.html

exit  0
#echo "=========check return code========"
#PROC_RET=$?
#echo "Returning $PROC_RET to Qmetry"
#echo "Returning $PROC_RET to Qmetry" >> /home/hainh/java/eXoProjects/test/eXo-automation/Reports/Debug.log
#exit $PROC_RET
