from flask import Flask, render_template, url_for
import csv, random

app = Flask(__name__, static_url_path='/static')

@app.route('/rgb-to-hex-and-vice-versa/')
def rgb_to_hex():
    return render_template('rgb-to-hex.html')



if __name__ == '__main__':
    app.run(debug=True)

