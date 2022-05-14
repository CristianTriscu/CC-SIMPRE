// messagesRouter.js
const connection = require("../db/db.js");
const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const { detectLanguage, translateText } = require("../utils/translateFunctions");
const { LANGUAGE_ISO_CODE } = require("../utils/dictionaries");
const sendMail = require("../utils/mailFunctions.js");
const { getWeatherDetailsByCity } = require("../utils/weatherFunctions.js");
router.get("/detect", async (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ status: false, message: "Missing params" });
    }
    const languageDetected = await detectLanguage(text);
    return res.status(200).json({
        language: languageDetected[0]?.language
    })
})

router.post("/send", (req, res) => {
    const { senderName, senderMail, receiverMail, messageContent } = req.body;

    const sendMailResponse = sendMail(receiverMail, senderMail, messageContent, `${senderName} has send you a message`);

    return res.send(200);
})
router.get("/translate", async (req, res) => {
    const { text, language } = req.body;
    if (!text || !language) {
        return res.status(400).json({ status: false, message: "Missing params" });
    }

    if (!LANGUAGE_ISO_CODE[language]) {
        return res.status(400).send("invalid langauage");
    }
    const translatedText = await translateText(text, language);
    return res.status(200).json({
        translateText: translatedText[0]
    })
})

router.post("/sendWeatherInfo", async (req, res) => {

    const weatherInfo = getWeatherDetailsByCity()

    const { city, senderName, senderMail, receiverMail, messageContent } = req.body;

    const sendMailResponse = sendMail(receiverMail, senderMail, messageContent, `${senderName} has send you a message`);

    return res.send(200);
})

router.get("/weatherInfo/:city", async (req, res) => {

    const { city } = req.params
    const weatherInfo = getWeatherDetailsByCity(city);
    return res.status(200).json(weatherInfo);
})

module.exports = router;