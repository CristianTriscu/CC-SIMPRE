# Backend-ul aplicatiei pentru proiectul de Cloud Computing SIMPRE 2022

Proiect Cloud Computing SIMPRE 2022, Triscu Cristian, grupa 1119

Youtube Demo:
https://www.youtube.com/watch?v=t8WihJeP_ss

Link catre aplicatia deployed: 
back-end
https://salty-meadow-04148.herokuapp.com/
front-end:
https://secret-ridge-39131.herokuapp.com/

1&2 Introducere + Descriere problema:
    Proiectul consta intr-o aplicatie web construita cu ajutorul bibliotecii react si stilizta cu MaterialUI.
Aceasta are ca scop consumarea serviciilor de backend pentru a vizualiza informatii despre vreme in timp real
in functie de orasul selectat pentru ca mai apoi user-ul sa poata trimite un email personalizat cu aceste informatii in limba in care acesta doreste.

3. Descriere backend API: 
    Backend-ul consta intr-un server de node.js construit cu express.js care serveste endpoint-uri pentru urmatoarele functionalitati:

    - fetching de date referitoare la vreme in timp real in functie de orasul selectat folosing ✅OpenWeather API.
    - detectarea limbii si traducerea textelor folosind ✅Google Cloud Translate API.
    - trimiterea de email-uri (pentru textele traduse anterior) folosind  API-ul oferit de ✅Sendgrid.
    - Aplicatia a fost mutata in cloud prin intermediul paltformei ✅Heroku pentru a putea fi folosita de oricine.

4. Flux de date:
5. 
metode HTTP folosite:
 - GET - fetch date despre vreme,
 - POST - trimite email-uri si translate text

![Y0gOiBr - Imgur](https://user-images.githubusercontent.com/62332461/168468640-248e8729-8f1c-4a9e-b17c-563001068dcb.png)
<img width="1389" alt="Screenshot 2022-05-15 at 13 39 53" src="https://user-images.githubusercontent.com/62332461/168468674-f410c27b-0c90-45f4-9c60-e7d693330625.png">

5. Exemplificare in aplicatie (capturi de ecran):

<img width="1791" alt="Screenshot 2022-05-15 at 13 41 18" src="https://user-images.githubusercontent.com/62332461/168468750-75b2c333-583b-46f9-8c1f-d8cd5021a572.png">
<img width="1654" alt="Screenshot 2022-05-15 at 13 56 41" src="https://user-images.githubusercontent.com/62332461/168469315-cb10b580-f353-412f-bf68-8cc4b9f97d69.png">


Referinte:

ReactJS
https://reactjs.org/

Material UI
https://v4.mui.com/

Weather API:
https://rapidapi.com/blog/lp/openweathermap/?utm_source=google&utm_medium=cpc&utm_campaign=Alpha&utm_term=openweathermap_e&gclid=Cj0KCQjwyYKUBhDJARIsAMj9lkGis74owP1MFLEL0x-Dhl8Acz5Q9Jea495gO4Lknw1pb_m6DMHWBLgaAs3QEALw_wcB

Google:
https://console.cloud.google.com/

SendGrid:
https://sendgrid.com/
