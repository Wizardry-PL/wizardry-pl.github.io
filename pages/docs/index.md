---
title: Documentation
layout: document
---
# Table of Contents
{% assign ls = site.pages | where: "dir", page.dir %}
{% assign m = 0 %}
{% for file in ls %}
{% assign n = file.name | replace: '.md', '' | plus: 0 %}
{% if n > m %}
{% assign m = n %}
{% endif %}
{% endfor %}
{% for i in (1..m) %}
{% assign name = i | append: '.md' %}
{% assign file = ls | where: "name", name %}
{% if file.size == 1 %}
1. [{{ file[0].title }}]({{ i }})
{% endif %}
{% endfor %}
