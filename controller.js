const InspirationQuote= require('./db/models.js')

module.exports = {
  index: (req,res) => {
    //want to populate homepage with backend data
    InspirationQuote.find()
    .then((test)=> console.log(test))
  },
    new: (req, res) => {
      console.log("new")
  },
    create: (req, res) => {
      console.log("create")
  },
  update: (req, res) => {
      console.log("update")
  },
  delete: (req, res) => {
    console.log("delete")
  }

}
