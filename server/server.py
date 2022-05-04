from flask import Flask,jsonify
import random

app = Flask(__name__)

@app.route('/randnum/<start>/<end>')
def randomnum(start,end):
    return jsonify(random.randint(int(start),int(end)))

if __name__ == "__main__":
    app.run(debug=True)
