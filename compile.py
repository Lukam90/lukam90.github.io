#coding: utf8

from jinja2 import Environment, FileSystemLoader

# Listes

exercices = ["ex-base", "ex-carre", "ex-dormir", "ex-sonore", "ex-video"]

# Conversion Jinja > HTML

def convert_jinja(filename):
    template_env = Environment(loader = FileSystemLoader(searchpath = "."))
    template = template_env.get_template("templates/" + filename + ".jinja")

    with open(filename + ".html", "w") as file:
        file.write(
            template.render()
        )

        file.close()

# Conversion Jinja > Liste

def convert_list(path, files):
    for file in files:
        filename = path + "/" + file

        convert_jinja(filename)

#convert_list("exercices", exercices)

convert_jinja("cv-imprime")
convert_jinja("portfolio")