const mongoose = require('./models.js')
const GreetingCard = mongoose.model('GreetingCard')
const greetingCardData = require('./greeting-card-data.json')

GreetingCard.remove({})
.then(() => {
    GreetingCard.collection.insert(greetingCardData)
    .then((greetingCards) => {
        console.log(greetingCards)
        process.exit()
    })
}).catch((err) => {
    console.log(err)
})
