import os

from flask import Flask, request, render_template, jsonify
from flask_debugtoolbar import DebugToolbarExtension





app = Flask(__name__)


# Required to use Flask sessions and the debug toolbar
app.secret_key = "ABC"



@app.route("/")
def index():
    """Return home page."""


    return render_template("index.html")




@app.route("/error")
def error():
    raise Exception("Error!")



if __name__ == "__main__":
    # We have to set debug=True here, since it has to be True at the
    # point that we invoke the DebugToolbarExtension
    app.debug = True

    # Use the DebugToolbar before deployment only
    DebugToolbarExtension(app)

    app.run(host="0.0.0.0")

    # For deployment
    # PORT = int(os.environ.get("PORT", 5000))
    # DEBUG = "NO_DEBUG" not in os.environ

    # app.run(host="0.0.0.0", port=PORT, debug=DEBUG)
