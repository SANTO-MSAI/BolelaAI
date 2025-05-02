from flask import Flask, render_template, request, jsonify;
import csv
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello Mzansi"

# MEthod to take speech from user and convert it to text. 
# POST method to expect data from user
user_speech = 'user_speech.csv'
@app.route("/speech_practice",methods=['POST'])
def speech_practice_request():
    try:
        data = request.json
        print("Received data:", data)
        with open(user_speech, 'a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([data['phrase'], data['translation']])
        return jsonify({'message': 'Speech received.'}), 201
    except Exception as e:
        print("Error occurred:", e)
        return jsonify({'message': 'Error adding speech.'}), 500



if __name__=="__main__":
    app.run(debug=True)