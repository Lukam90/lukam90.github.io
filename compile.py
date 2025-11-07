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

## Chapelets

chapelets = ["rosaire", "misericorde", "splaies", "liberation"]

#convert_jinja_list("chapelets", chapelets)

#convert_jinja_single("chapelets/rosaire")
convert_jinja_single("chapelets/misericorde")
#convert_jinja_single("chapelets/splaies")
#convert_jinja_single("chapelets/liberation")

## Prières

prieres = ["ex-base", "litanies"]

convert_jinja_list("prieres", prieres)

#convert_jinja_single("prieres/ex-base")
#convert_jinja_single("prieres/litanies")

## Exercices

exercices = ["ex-musical", "ex-nombres"]

#convert_jinja_list("exercices", exercices)

#convert_jinja_single("exercices/ex-musical")
convert_jinja_single("exercices/ex-nombres")
