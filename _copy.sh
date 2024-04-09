date=`date +"%H.%M"`
name="Site"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

mkdir -p $target

cp -r exercices $target
cp -r partials $target
cp -r public $target
cp -r templates $target

cp *.js* $target
cp *.html $target
cp *.py $target

echo "Copie de $name - $date"