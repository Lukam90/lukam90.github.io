date=`date +"%H.%M"`
name="Site"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

mkdir -p $target

cp -r data $target
cp -r exercices $target
cp -r layouts $target
cp -r posts $target

cp -r public/css $target
cp -r public/icons $target
cp -r public/images $target
cp -r public/js $target
cp -r public/scss $target

cp *.js* $target
cp *.html $target
cp *.py $target

echo "Copie de $name - $date"