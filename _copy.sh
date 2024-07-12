date=`date +"%H.%M"`
name="Site"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

mkdir -p $target

cp -r data $target
cp -r exercices $target
cp -r layouts $target
cp -r posts $target
cp -r prieres $target
cp -r public $target

cp *.js* $target
cp *.html $target
cp *.py $target

echo "Copie de $name - $date"