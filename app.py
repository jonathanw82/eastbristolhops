import os
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html", page_title="Home")


@app.route('/wiki')
def wiki():
    return render_template("wiki.html", page_title="Wiki",
                           background='background_image_wiki')


@app.route('/about')
def about():
    return render_template("about.html", page_title="About")


@app.route('/contact')
def contact():
    return render_template("contact.html", page_title="Contact")


if __name__ == "__main__":
    app.run(host=os.environ.get('IP', '127.0.0.1'),
            port=int(os.environ.get('PORT', 5000)),
            debug=True)
