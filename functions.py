#coding: utf8

import re
import json

from jinja2 import Environment, FileSystemLoader

# Regex

def re_pattern(content, pattern, g1, g2):
    regex = re.compile(pattern)

    matches = regex.finditer(content)

    for match in matches:
        content = content.replace(match.group(1), g1)
        content = content.replace(match.group(2), g2)
    
    return content

## Regex > Gras

def re_bold(content):
    return re_pattern(content, r"(\*{2}).+(\*{2})", "<b>", "</b>")

## Regex > Italique

def re_italic(content):
    return re_pattern(content, r"(\*{1}).+(\*{1})", "<i>", "</i>")

# Remplacements

## Remplacements > Titre

def sub_title(line):
    level = 0

    while line[level] == "#":
        level += 1
    
    line = line.replace("#", "")
    line = line.lstrip()

    return f"<h{level}>{line}</h{level}>\n"

# Conversion - Jinja

## Texte > Données

def convert_text_data(filename):
    data = []

    with open(f"data/text/{filename}.txt", "r") as file:
        lines = file.readlines()

        for line in lines:
            line = line.strip()

            data.append(line)

        file.close()

    return data

## CSV > Données

def convert_csv_data(filename):
    data = []

    with open(f"data/csv/{filename}.csv", "r") as file:
        lines = file.readlines()

        for line in lines:
            line = line.strip()
            cols = line.split(";")

            data.append(cols)

        file.close()

    return data

## JSON > Données

def convert_json_data(filename):
    data = []

    with open(f"data/json/{filename}.json", "r") as file:
        content = file.read()

        data = json.loads(content)

    return data

## JSON > Liste > Dictionnaire

def convert_json_data_list(path, names):
    list = {}

    for name in names:
        list[name] = convert_json_data(path + "/" + name)

    return list

## Jinja > HTML

def convert_jinja_single(filename, data = None):
    template_env = Environment(loader = FileSystemLoader(searchpath = "."))
    template = template_env.get_template(filename + ".jinja")

    with open(filename + ".html", "w") as file:
        file.write(
            template.render(data = data)
        )

        file.close()

## Jinja > Liste

def convert_jinja_list(path, files):
    for file in files:
        filename = path + "/" + file

        convert_jinja_single(filename)

# Conversion - Markdown

## Markdown > HTML

def convert_markdown_single(filename):
    filename = "posts/" + filename

    content = ""

    # Lecture (MD)

    with open(filename + ".md", "r") as file:
        lines = file.readlines()

        for line in lines:
            line = line.strip()

            if line != "":
                if line[0] == "#":
                    content += sub_title(line)
                elif line[0] == "<":
                    content += line + "\n"
                else:
                    content += "<p>" + line + "</p>\n"
            else:
                content += "\n"

        content = re_bold(content)
        content = re_italic(content)

        file.close()

    # Ecriture (HTML)

    with open(filename + ".html", "w") as file:
        file.write(content)
        file.close()