import os
from flask import Flask, render_template
from flask_jsglue import JSGlue
from os import path
if path.exists("env.py"):
    import env


app = Flask(__name__)

# jsglue allows Url_for to be used in javascript in the font end.
jsglue = JSGlue(app)


@app.route('/')
def index():
    return render_template("index.html", page_title="Home")


@app.route('/wiki')
def wiki():
    return render_template("wiki.html", page_title="Wiki",
                           background='background_image_wiki')


@app.route('/about')
def about():
    return render_template("about.html", page_title="About",
                           background='background_image_about')


@app.route('/contact')
def contact():
    return render_template("contact.html", page_title="Contact",
                           background='background_image_contact')


@app.route('/subscribe/<pagefrom>')
def subscribe(pagefrom):
    return render_template("subscribe.html", page_title="Subscribe To Mailing\
                           List", background='background_image_mailinglist',
                           page_from=pagefrom)


if __name__ == "__main__":
    app.run(host=os.environ.get('IP', '0.0.0.0'),
            port=int(os.environ.get('PORT', 5000)),
            debug=os.getenv("DEVELOPMENT", False))
