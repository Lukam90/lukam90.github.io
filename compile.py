#coding: utf8

import re

from jinja2 import Environment, FileSystemLoader

# Remplacements

replaces = {
    "**:" : "<b>",
    ":**" : "</b>",
    "*:" : "<i>",
    ":*" : "</i>"
}

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

# Conversion Markdown > HTML

def convert_markdown(filename):
    filename = "posts/" + filename

    md_content = ""
    html_content = ""

    # Lecture (MD)

    with open(filename + ".md", "r") as file:
        lines = file.readlines()

        for line in lines:
            line = line.strip()

            if line != "":
                if line[0] == "#":
                    level = 0

                    while line[level] == "#":
                        level += 1
                    
                    line = line.replace("#", "")
                    line = line.lstrip()

                    md_content += f"<h{level}>{line}</h{level}>\n"
                elif line[0] == "<":
                    md_content += line + "\n"
                else:
                    md_content += "<p>" + line + "</p>\n"
            else:
                md_content += "\n"

        for key, value in replaces.items():
            md_content = md_content.replace(key, value)

        html_content = md_content

        file.close()

    # Ecriture (HTML)

    with open(filename + ".html", "w") as file:
        file.write(html_content)
        file.close()

convert_markdown("test")

#convert_jinja("cv-imprime")
#convert_jinja("portfolio")