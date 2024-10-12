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

convert_jinja_list("profil", profil)

## Chapelets

chapelets = ["chapelet", "c-ames", "c-liberation", "c-misericorde"]

#convert_jinja_list("chapelets", chapelets)

convert_jinja_single("chapelets/chapelet")
convert_jinja_single("chapelets/c-ames")
convert_jinja_single("chapelets/c-liberation")
#convert_jinja_single("chapelets/c-misericorde")

## Dizaines

dizaines = ["dz-lys", "dz-neuvaine"]

convert_jinja_list("dizaines", dizaines)

convert_jinja_single("dizaines/dz-lys")
#convert_jinja_single("dizaines/dz-neuvaine")

## Exercices

exercices = ["ex-base", "ex-carre", "ex-dormir", "ex-nombres", "ex-sonore", "ex-video"]

#convert_jinja_list("exercices", exercices)
convert_jinja_single("exercices/ex-nombres")

## Prières (simples)

prieres = ["lit-lorette"]

#convert_jinja_list("prieres", prieres)

#convert_jinja_single("prieres/lit-lorette")