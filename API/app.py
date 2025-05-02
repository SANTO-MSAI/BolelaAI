from flask import Flask, request, jsonify, session, redirect
from flask_cors import CORS
import csv
import pyrebase


app = Flask(__name__)
CORS(app)
app.secret_key = "thetha!"

config = {
  "apiKey": "AIzaSyA5UXGB29M3onAyLhutM_NVbHtHelDf0dg",
  "authDomain": "talkmzansi-88466.firebaseapp.com",
  "databaseURL": "https://talkmzansi-88466-default-rtdb.firebaseio.com",
  "projectId": "talkmzansi-88466",
  "storageBucket": "talkmzansi-88466.firebasestorage.app",
  "messagingSenderId": "903696733632",
  "appId": "1:903696733632:web:55f056e5aaf57867b12425",
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()


@app.route("/")
def home():
    return None


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


@app.route("/login", methods=['POST', "GET"])
def signin():
    if request.method == "POST":
        data = request.json
        email = data["email"]
        password = data["password"]
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        session["user"] = email
    except:
        return jsonify({"message": "Failed to login"}), 401   


@app.route("/signup", methods=['POST'])
def signup():
    try:
        data = request.json

        name = data["name"]
        email = data["email"]
        password = data["password"]
        auth.create_user_with_email_and_password(email, password)
        # user = auth.get_account_info(user["id_token"])
        # user = auth.send_email_verification(user["id_token"])
        # user = auth.send_password_reset_email(user["id_token"])

        return jsonify({"message": "Sign-up successfully"}), 201
    except Exception as e:
        print("Error occurred:", e)
        return jsonify({"message": "email_exists"}), 400


@app.route("/logout")  # when going to home page 
def logout():
    session.pop("user")
    return redirect("/")


@app.route("/lessons")
def lessons():
    pass


@app.route("/practice")
def practice():
    pass


@app.route("/dashboard")
def dashboard():
    pass


@app.route("/profile")
def profile():
    pass


##################################ZULU LESSONS#####################################################
@app.route("/lessons/zulu/basic/1")
def zulu_basic_lesson_1():
    pass


@app.route("/lessons/zulu/basic/2")
def zulu_basic_lesson_2():
    pass


@app.route("/lessons/zulu/conversation/3")
def zulu_conversation_lesson_3():
    pass


@app.route("/lessons/zulu/conversation/4")
def zulu_conversation_lesson_4():
    pass


@app.route("/lessons/zulu/vocabulary/5")
def zulu_conversation_lesson_3():
    pass


@app.route("/lessons/zulu/vocabulary/6")
def zulu_vocabulary_lesson_6():
    pass


@app.route("/lessons/zulu/listening/7")
def zulu_listening_lesson_7():
    pass


@app.route("/lessons/zulu/listening/8")
def zulu_listening_lesson_8():
    pass


##################################XHOSA LESSONS#####################################################
@app.route("/lessons/xhosa/basic/1")
def xhosa_basic_lesson_1():
    pass


@app.route("/lessons/xhosa/basic/2")
def xhosa_basic_lesson_2():
    pass


@app.route("/lessons/xhosa/conversation/3")
def xhosa_conversation_lesson_3():
    pass


@app.route("/lessons/xhosa/conversation/4")
def xhosa_conversation_lesson_4():
    pass


@app.route("/lessons/xhosa/vocabulary/5")
def xhosa_conversation_lesson_3():
    pass


@app.route("/lessons/xhosa/vocabulary/6")
def xhosa_vocabulary_lesson_6():
    pass


@app.route("/lessons/xhosa/listening/7")
def xhosa_listening_lesson_7():
    pass


@app.route("/lessons/xhosa/listening/8")
def xhosa_listening_lesson_8():
    pass


##################################AFRIKAANS LESSONS#####################################################
@app.route("/lessons/afrikaans/basic/1")
def afrikaans_basic_lesson_1():
    pass


@app.route("/lessons/afrikaans/basic/2")
def afrikaans_basic_lesson_2():
    pass


@app.route("/lessons/afrikaans/conversation/3")
def afrikaans_conversation_lesson_3():
    pass


@app.route("/lessons/afrikaans/conversation/4")
def afrikaans_conversation_lesson_4():
    pass


@app.route("/lessons/afrikaans/vocabulary/5")
def afrikaans_conversation_lesson_3():
    pass


@app.route("/lessons/afrikaans/vocabulary/6")
def afrikaans_vocabulary_lesson_6():
    pass


@app.route("/lessons/afrikaans/listening/7")
def afrikaans_listening_lesson_7():
    pass


@app.route("/lessons/afrikaans/listening/8")
def afrikaans_listening_lesson_8():
    pass


##################################SOTHO LESSONS#####################################################
@app.route("/lessons/sotho/basic/1")
def sotho_basic_lesson_1():
    pass


@app.route("/lessons/sotho/basic/2")
def sotho_basic_lesson_2():
    pass


@app.route("/lessons/sotho/conversation/3")
def sotho_conversation_lesson_3():
    pass


@app.route("/lessons/sotho/conversation/4")
def sotho_conversation_lesson_4():
    pass


@app.route("/lessons/sotho/vocabulary/5")
def sotho_conversation_lesson_3():
    pass


@app.route("/lessons/sotho/vocabulary/6")
def sotho_vocabulary_lesson_6():
    pass


@app.route("/lessons/sotho/listening/7")
def sotho_listening_lesson_7():
    pass


@app.route("/lessons/sotho/listening/8")
def sotho_listening_lesson_8():
    pass


##################################TSWANA LESSONS#####################################################
@app.route("/lessons/tswana/basic/1")
def tswana_basic_lesson_1():
    pass


@app.route("/lessons/tswana/basic/2")
def tswana_basic_lesson_2():
    pass


@app.route("/lessons/tswana/conversation/3")
def tswana_conversation_lesson_3():
    pass


@app.route("/lessons/tswana/conversation/4")
def tswana_conversation_lesson_4():
    pass


@app.route("/lessons/tswana/vocabulary/5")
def tswana_conversation_lesson_3():
    pass


@app.route("/lessons/tswana/vocabulary/6")
def tswana_vocabulary_lesson_6():
    pass


@app.route("/lessons/tswana/listening/7")
def tswana_listening_lesson_7():
    pass


@app.route("/lessons/tswana/listening/8")
def tswana_listening_lesson_8():
    pass


##################################VENDA LESSONS#####################################################
@app.route("/lessons/venda/basic/1")
def venda_basic_lesson_1():
    pass


@app.route("/lessons/venda/basic/2")
def venda_basic_lesson_2():
    pass


@app.route("/lessons/venda/conversation/3")
def venda_conversation_lesson_3():
    pass


@app.route("/lessons/venda/conversation/4")
def venda_conversation_lesson_4():
    pass


@app.route("/lessons/venda/vocabulary/5")
def venda_conversation_lesson_3():
    pass


@app.route("/lessons/venda/vocabulary/6")
def venda_vocabulary_lesson_6():
    pass


@app.route("/lessons/venda/listening/7")
def venda_listening_lesson_7():
    pass


@app.route("/lessons/venda/listening/8")
def venda_listening_lesson_8():
    pass


##################################TSONGA LESSONS#####################################################
@app.route("/lessons/tsonga/basic/1")
def tsonga_basic_lesson_1():
    pass


@app.route("/lessons/tsonga/basic/2")
def tsonga_basic_lesson_2():
    pass


@app.route("/lessons/tsonga/conversation/3")
def tsonga_conversation_lesson_3():
    pass


@app.route("/lessons/tsonga/conversation/4")
def tsonga_conversation_lesson_4():
    pass


@app.route("/lessons/tsonga/vocabulary/5")
def tsonga_conversation_lesson_3():
    pass


@app.route("/lessons/tsonga/vocabulary/6")
def tsonga_vocabulary_lesson_6():
    pass


@app.route("/lessons/tsonga/listening/7")
def tsonga_listening_lesson_7():
    pass


@app.route("/lessons/tsonga/listening/8")
def tsonga_listening_lesson_8():
    pass


##################################SWATI LESSONS#####################################################
@app.route("/lessons/swati/basic/1")
def swati_basic_lesson_1():
    pass


@app.route("/lessons/swati/basic/2")
def swati_basic_lesson_2():
    pass


@app.route("/lessons/swati/conversation/3")
def swati_conversation_lesson_3():
    pass


@app.route("/lessons/swati/conversation/4")
def swati_conversation_lesson_4():
    pass


@app.route("/lessons/swati/vocabulary/5")
def swati_conversation_lesson_3():
    pass


@app.route("/lessons/swati/vocabulary/6")
def swati_vocabulary_lesson_6():
    pass


@app.route("/lessons/swati/listening/7")
def swati_listening_lesson_7():
    pass


@app.route("/lessons/swati/listening/8")
def swati_listening_lesson_8():
    pass


##################################NDEBELE LESSONS#####################################################
@app.route("/lessons/ndebele/basic/1")
def ndebele_basic_lesson_1():
    pass


@app.route("/lessons/ndebele/basic/2")
def ndebele_basic_lesson_2():
    pass


@app.route("/lessons/ndebele/conversation/3")
def ndebele_conversation_lesson_3():
    pass


@app.route("/lessons/ndebele/conversation/4")
def ndebele_conversation_lesson_4():
    pass


@app.route("/lessons/ndebele/vocabulary/5")
def ndebele_conversation_lesson_3():
    pass


@app.route("/lessons/ndebele/vocabulary/6")
def ndebele_vocabulary_lesson_6():
    pass


@app.route("/lessons/ndebele/listening/7")
def ndebele_listening_lesson_7():
    pass


@app.route("/lessons/ndebele/listening/8")
def ndebele_listening_lesson_8():
    pass


if __name__=="__main__":
    app.run(debug=True, port=8090)