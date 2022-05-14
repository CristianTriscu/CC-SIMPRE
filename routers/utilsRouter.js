// messagesRouter.js

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

router.post("/send", async (req, res) => {
    const { senderName, receiverMail, messageContent, language } = req.body;

    if (!senderName, !receiverMail || !messageContent || !language) {
        return res.status(400).json({ status: false, message: "Missing params" });
    }

    if (!LANGUAGE_ISO_CODE[language]) {
        return res.status(400).send("invalid langauage");
    }
    const translatedText = await translateText(messageContent, LANGUAGE_ISO_CODE[language]);

    sendMail(receiverMail, "triscucristian18@stud.ase.ro", translatedText[0], `${senderName} has send you a message`);

    res.status(200).json({ translatedText: translatedText[0] });

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


router.get("/weatherInfo/:city", async (req, res) => {
    const { city } = req.params
    const weatherInfo = await getWeatherDetailsByCity(city);
    return res.status(200).json(weatherInfo);
})

module.exports = router;