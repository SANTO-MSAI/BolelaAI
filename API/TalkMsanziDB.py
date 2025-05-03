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

def addNewlanguages():
    dataOne = {"Name":"Sesotho","Abbreviation":"Lorem ipsum","Net translation queries":"0","Number of translations from language":"0","Number of translations to language":"0"}

    dataTwo = {"Name":"IsiZulu","Abbreviation":"Lorem ipsum","Net translation queries":"0","Number of translations from language":"0","Number of translations to language":"0"}

    dataThree = {"Name":"Afrikaans","Abbreviation":"Lorem ipsum","Net translation queries":"0","Number of translations from language":"0","Number of translations to language":"0"}

    db.child("LANGUAGES").child("1").set(dataOne)
    db.child("LANGUAGES").child("2").set(dataTwo)
    db.child("LANGUAGES").child("3").set(dataThree)
    #minimumViableData = [dataOne,dataTwo,dataThree]

    # n = 0
    # for dataSet in minimumViableData:
    #     n += 1
    #     db.child("LANGUAGES").child(f"{n}").set(dataSet)

def adjustLanguageStats(translateFrom, translateTo):
    languages = db.child("LANGUAGES").get()
    for language in languages.each():
        if language.val()["Name"] == translateFrom:
            n = int (language.val()["Number of translations from language"])
            n += 1
            db.child("LANGUAGES").child(language.key()).update({"Net translation queries":str(n)})
            db.child("LANGUAGES").child(language.key()).update({"Number of translations from language":str(n)})
        elif language.val()["Name"] == translateTo:
            n = int (language.val()["Number of translations to language"])
            n += 1
            db.child("LANGUAGES").child(language.key()).update({"Net translation queries":str(n)})
            db.child("LANGUAGES").child(language.key()).update({"Number of translations to language":str(n)})


addNewUser("1","mothofeelama@gmail.com","Mothofeela","Makgetha","Sesotho","Basic XiTsonga")
addNewUserLanguage("1","mothofeelama@gmail.com","Sesotho","English","Dumela","Hello")
addNewlanguages()
# adjustLanguageStats("Sesotho,IsiZulu")