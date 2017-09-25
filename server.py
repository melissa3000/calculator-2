# import os

from flask import Flask, render_template, session, g
# from flask_debugtoolbar import DebugToolbarExtension


app = Flask(__name__)

JS_TESTING_MODE = False

# Required to use Flask sessions and the debug toolbar
# app.secret_key = "ABC"


@app.before_request
def add_tests():
    g.jasmine_tests = JS_TESTING_MODE


@app.route("/")
def index():
    """Return home page."""

    return render_template("index.html")




# @app.route("/error")
# def error():
#     raise Exception("Error!")



if __name__ == "__main__":
    # Only True when using debug toolbar, turn off for deployment
    # app.debug = True

    # Use the DebugToolbar before deployment only
    # DebugToolbarExtension(app)

    # For Jasmine testing
    import sys
    if sys.argv[-1] == "jstest":
        JS_TESTING_MODE = True

    app.run(host="0.0.0.0")

    # For deployment
    # PORT = int(os.environ.get("PORT", 5000))
    # DEBUG = "NO_DEBUG" not in os.environ

    # app.run(host="0.0.0.0", port=PORT, debug=DEBUG)
