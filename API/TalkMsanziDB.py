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