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

chapelets = ["ex-base", "litanies", "rosaire", "misericorde", "cplaies", "liberation"]

#convert_jinja_list("chapelets", chapelets)

#convert_jinja_single("chapelets/ex-base")
convert_jinja_single("chapelets/litanies")
#convert_jinja_single("chapelets/rosaire")
#convert_jinja_single("chapelets/misericorde")
#convert_jinja_single("chapelets/cplaies")
convert_jinja_single("chapelets/liberation")

## Exercices

exercices = ["ex-musical", "ex-nombres"]

#convert_jinja_list("exercices", exercices)

#convert_jinja_single("exercices/ex-musical")
convert_jinja_single("exercices/ex-nombres")
