export HOME=/home/hainh/java/eXoProjects/test/eXo-automation
java -jar $HOME/selenium-server-standalone-2.21.0.jar -userExtensions $HOME/jsScript/user-extensions.js -htmlsuite "*firefox" "http://localhost:8080" $HOME/htmlscript/ecms/Snifftest/sniff_suite.html $HOME/Reports/ecms_fe_basic_action_report.html
