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

def addNewUser(accountEmail, Name, learningPath):
    users = db.child("USERS").get()
    userRegistrationNumber = 0

    if (users.val() == None):
        numberOfUsers = 0
    else:
        numberOfUsers = len(users.val())
        if (None in users.val()):
            numberOfUsers -= users.val().count(None)

    userRegistrationNumber = numberOfUsers + 1

    data = {"Name":Name,"Email":accountEmail,"learning path":learningPath}
    db.child("USERS").child(userRegistrationNumber).set(data)

def addNewUserLanguage(accountEmail,translateFrom,translateTo,translatedText,translation):
    translationQueryNumber = 0
    translations = db.child("USER LANGUAGES").get()

    if (translations.val() == None):
        numberOfTranslations = 0
    else:
        numberOfTranslations = len(translations.val())
        if (None in translations.val()):
            numberOfTranslations -= translations.val().count(None)
    
    translationQueryNumber = numberOfTranslations + 1

    data = {"Email":accountEmail,"Translate from":translateFrom,"translate to":translateTo,"translated text":translatedText,"Translation":translation}
    db.child("USER LANGUAGES").child(translationQueryNumber).set(data)
    adjustLanguageStats(translateFrom,translateTo)

def addNewlanguages():
    dataOne = {"Name":"Sesotho","Abbreviation":"st","Net translation queries":"0","Number of translations from language":"0","Number of translations to language":"0"}

    dataTwo = {"Name":"IsiZulu","Abbreviation":"zu","Net translation queries":"0","Number of translations from language":"0","Number of translations to language":"0"}

    dataThree = {"Name":"Afrikaans","Abbreviation":"af","Net translation queries":"0","Number of translations from language":"0","Number of translations to language":"0"}

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
    l = len(languages.val())
    m = 0

    while (m < l):
        if languages.val()[m] == None:
            m += 1
            break

    # print(l)
    # print(languages.val())

    for language in languages.val()[m:]:
        language_key = languages.val()[m:].index(language)+1
        if language["Name"] == translateFrom:
            n = int (language["Number of translations from language"])
            o = int (language["Number of translations to language"])
            n += 1
            db.child("LANGUAGES").child(str(language_key)).update({"Net translation queries":str(n+o)})
            db.child("LANGUAGES").child(str(language_key)).update({"Number of translations from language":str(n)})
        elif language["Name"] == translateTo:
            n = int (language["Number of translations to language"])
            o = int (language["Number of translations from language"])
            n += 1
            db.child("LANGUAGES").child(str(language_key)).update({"Net translation queries":str(n+o)})
            db.child("LANGUAGES").child(str(language_key)).update({"Number of translations to language":str(n)})


# if __name__ == "__main__":
#     addNewUser("mothofeelama@gmail.com","Mothofeela","Basic XiTsonga")
#     addNewUser("mokgethilakabane@gmail.com","Lakabane","Basic TshiVenda")
    # addNewlanguages()
#     addNewUserLanguage("mothofeelama@gmail.com","Sesotho","English","Dumela","Hello")
#     addNewUserLanguage("mokgethilakabane@gamil.com","IsiZulu","English","Lalela la","listen here")
# addNewlanguages()
# adjustLanguageStats("Sesotho","IsiZulu")
# adjustLanguageStats("IsiZulu","Afrikaans")
# adjustLanguageStats("Afrikaans","Sesotho")