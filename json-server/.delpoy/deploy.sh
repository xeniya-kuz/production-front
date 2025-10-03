
$HTML_PATH = ~/../var/www/production_project/html
#  название папки проекта
cd ~/front
npm run build:prod

rm -rf $HTML_PATH
mv ~production-project/build $HTML_PATH