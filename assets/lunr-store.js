---
# create lunr store 
---
{% assign items = site.html_pages | where: "layout","post" | sort: "date" %}
var store = [ 
{% for post in items %}{ "url": {{ post.url | relative_url | jsonify }}, "title": {{ post.date | jsonify }}, "text": {{ post.tags | append: post.content | strip_html | normalize_whitespace | jsonify }} }{% unless forloop.last %},{% endunless %}
{% endfor %}
];