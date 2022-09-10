import os
from flask import Flask, render_template, send_from_directory, request
from flask_jsglue import JSGlue
from os import path
if path.exists("env.py"):
    import env


app = Flask(__name__, static_folder='static')

# jsglue allows Url_for to be used in javascript in the font end.
jsglue = JSGlue(app)


@app.route('/')
def index():
    return render_template("index.html",
                           page_title="Home | eastbristolhops.co.uk ")


@app.route('/wiki')
def wiki():
    return render_template("wiki.html",
                           page_title="Grow Hops Wiki | eastbristolhops.co.uk",
                           background='background_image_wiki')


@app.route('/about')
def about():
    return render_template("about.html",
                           page_title="About | eastbristolhops.co.uk",
                           background='background_image_about')


@app.route('/contact')
def contact():
    return render_template("contact.html",
                           page_title="Contact | eastbristolhops.co.uk ",
                           background='background_image_contact')


# default incase the subscribe page is accessed the url bar or external link
@app.route('/subscribe/', defaults={'pagefrom': None})
@app.route('/subscribe/<pagefrom>')
def subscribe(pagefrom):
    return render_template("subscribe.html", page_title="Subscribe To Mailing\
                           List | eastbristolhops.co.uk",
                           background='background_image_mailinglist',
                           page_from=pagefrom)


@app.route('/terms/<pagefrom>')
def terms(pagefrom):
    return render_template("termsofuse.html", page_title="Terms & Conditions",
                           page_from=pagefrom)


# Search engine optimisation
@app.route('/robots.txt')
@app.route('/sitemap.xml')
def static_from_root():
    return send_from_directory(app.static_folder, request.path[1:])


if __name__ == "__main__":
    app.run(host=os.environ.get('IP', '0.0.0.0'),
            port=int(os.environ.get('PORT', 5000)),
            debug=os.getenv("DEVELOPMENT", False))
