export HOME_TEST=/home/SELENIUM-PLF3.5.X/workspace/DownloadECMSAutomationProjects/eXo-automation
echo "==========================================="
$HOME_TEST/shScript/ecms_fe_admin.sh
echo "==========================================="
$HOME_TEST/shScript/ecms_fe_info.sh
echo "==========================================="
$HOME_TEST/shScript/ecms_fe_basic_action.sh
echo "==========================================="
$HOME_TEST/shScript/ecms_fe_collaboration.sh
echo "============END TEST================="
exit 0;
