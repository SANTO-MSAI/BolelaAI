import pyrebase

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

db = firebase.database()

def addNewUser(userRegistrationNumber, accountEmail, Name,Surname,homeLanguage, learningPath):
    data = {"Name":Name,"Surname":Surname,"Email":accountEmail,"Home language":homeLanguage,"learning path":learningPath}
    db.child("USERS").child(userRegistrationNumber).set(data)

def addNewUserLanguage(translationQueryNumber,accountEmail,translateFrom,translateTo,translatedText,translation):
    data = {"Email":accountEmail,"Translate from":translateFrom,"translate to":translateTo,"translated text":translatedText,"Translation":translation}
    db.child("USER LANGUAGES").child(translationQueryNumber).set(data)

def adjustLanguageStats():
    pass

# def createDatabase():
#     db.child("USERS").child("1").set({"Name":"","Surname":"","Username":"","Password":"","Home language":"",})
#     db.child("USER_LANGUAGES").child("1").set({"Username":"","Language name":"","Text to translate":"","Text translation":""})
#     db.child("LANGUAGES").child("1").set({"Language name":"","Abbreviation":"","Translate from language":"True"})
#     # db.child("LANGUAGES").child("XiTsonga")
#     # db.child("LANGUAGES").child("TshiVenda")
#     # db.child("LANGUAGES").child("Sepedi")

# createDatabase()

# addNewUser("1","mothofeelama@gmail.com","Mothofeela","Makgetha","Sesotho","Basic XiTsonga")
# addNewUserLanguage("1","mothofeelama@gmail.com","Sesotho","English","Dumela","Hello")
