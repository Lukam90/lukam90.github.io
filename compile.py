#coding: utf8

from functions import *

# Données

# _

# Compilation

## Markdown

#convert_markdown_single("test")

## Pages (générales)

index = convert_json_data("index")

convert_jinja_single("index", index)
convert_jinja_single("test")

## Profil

profil = ["cv-imprime", "portfolio"]

#convert_jinja_list("profil", profil)

## Chapelets

chapelets = ["ex-base", "rosaire", "plaies", "sang", "misericorde", "vertus", "mercis"]

convert_jinja_list("chapelets", chapelets)

#convert_jinja_single("chapelets/ex-base")
#convert_jinja_single("chapelets/rosaire")
convert_jinja_single("chapelets/plaies")
#convert_jinja_single("chapelets/sang")
#convert_jinja_single("chapelets/misericorde")
convert_jinja_single("chapelets/vertus")
convert_jinja_single("chapelets/mercis")

## Litanies

litanies = ["lorette", "lt-sang", "lt-joseph", "lt-charbel"]

convert_jinja_list("litanies", litanies)

#convert_jinja_single("litanies/lorette")
#convert_jinja_single("litanies/lt-sang")
#convert_jinja_single("litanies/lt-joseph")
#convert_jinja_single("litanies/lt-charbel")

## Exercices

exercices = ["ex-musical", "ex-nombres"]

#convert_jinja_list("exercices", exercices)

#convert_jinja_single("exercices/ex-musical")
convert_jinja_single("exercices/ex-nombres")
