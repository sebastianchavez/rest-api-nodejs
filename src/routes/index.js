
const { Router } = require('express')
const router = Router()

router.get('/test',(req,res) => {
    const data = {
        "name": "fazt",
        "website":"algo.algo"
    }
    res.json(data)
})

module.exports = router