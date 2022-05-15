# Backend-ul aplicatiei pentru proiectul de Cloud Computing SIMPRE 2022

Proiect Cloud Computing SIMPRE 2022, Triscu Cristian, grupa 1119

Youtube Demo:
https://www.youtube.com/watch?v=t8WihJeP_ss

Link catre aplicatia deployed: 
https://salty-meadow-04148.herokuapp.com/


2. Descriere problema:
    Proiectul consta intr-o aplicatie web construita cu ajutorul bibliotecii react si stilizta cu MaterialUI.
Aceasta are ca scop consumarea serviciilor de backend pentru a vizualiza informatii despre vreme in timp real
in functie de orasul selectat pentru ca mai apoi user-ul sa poata trimite un email personalizat cu aceste informatii in limba in care acesta doreste.

3. Descriere backend API: 
    Backend-ul consta intr-un server de node.js construit cu express.js care serveste endpoint-uri pentru urmatoarele functionalitati:

    - fetching de date referitoare la vreme in timp real in functie de orasul selectat folosing ✅OpenWeather API.
    - detectarea limbii si traducerea textelor folosind ✅Google Cloud Translate API.
    - trimiterea de email-uri (pentru textele traduse anterior) folosind  API-ul oferit de ✅Sendgrid.
    - Aplicatia a fost mutata in cloud prin intermediul paltformei ✅Heroku pentru a putea fi folosita de oricine.


![alt text](https://imgur.com/Y0gOiBr)

![Y0gOiBr - Imgur](https://user-images.githubusercontent.com/62332461/168468640-248e8729-8f1c-4a9e-b17c-563001068dcb.png)
