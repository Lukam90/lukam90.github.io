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

## Prières

prieres = ["ex-base", "rosaire", "sang", "devotion", "mercis"]

#convert_jinja_list("prieres", prieres)

#convert_jinja_single("prieres/ex-base")
convert_jinja_single("prieres/rosaire")
convert_jinja_single("prieres/plaies")
convert_jinja_single("prieres/devotion")

dpath = "prieres/divers/"

#convert_jinja_single(dpath + "ames")
#convert_jinja_single(dpath + "liberation")
#convert_jinja_single(dpath + "mercis")
#convert_jinja_single(dpath + "misericorde")
#convert_jinja_single(dpath + "sang")
#convert_jinja_single(dpath + "reparation")

## Exercices

exercices = ["ex-musical", "ex-nombres"]

#convert_jinja_list("exercices", exercices)

#convert_jinja_single("exercices/ex-musical")
convert_jinja_single("exercices/ex-nombres")
