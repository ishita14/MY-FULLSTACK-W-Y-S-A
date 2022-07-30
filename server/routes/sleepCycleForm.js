const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const SleepCycle = mongoose.model("sleepCycle")
const middleware = require('../middleware/reqlogin')


router.post('/sleepQNA',middleware, (req, res) => {
    const { values } = req.body
    console.log(req.user)
    const {sleepGoal,
        sleepStruggle,
        bedTime,
        wakeUpTime,
        sleepDuration} = values

    // if (!sleepGoal||!sleepStruggle||!bedTime||!wakeUpTime||!sleepDuration) {
    //     return res.status(422).json({ error: "Please choose any option" })
    // }
    const sleepCycle = new SleepCycle({
        userID:req.user.id,
        sleepGoal,
        sleepStruggle,
        bedTime,
        wakeupTime:wakeUpTime,
        sleepDuration
    })
    sleepCycle.save().then(result => {
        res.json({ sleepCycle: result })
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router
    