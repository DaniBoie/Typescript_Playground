const router = require('express').Router()
const path = require('path')
const fs = require('fs')

router.get('/items', (req, res) => {
  res.json(
    [
      { "text": "Take out trash", "isDone": false }, 
      { "text": "Cook dinner", "isDone": true }, 
      { "text": "Walk the dog", "isDone": false }]
  )
  
})

router.post('/items', (req, res) => {

  // ITEM TO ADD TO TODO LIST SITTING IN FRONTEND REQUEST
  const item = req.body
  // GET ITEMS FROM SQL
  //  const items = JSON.parse(data)
  //  items.push(item)

  // UPDATE ITEMS TO DATABASE
  //  fs.writeFile(path.join(__dirname, '..', 'data', 'items.json'), JSON.stringify(items)
})

router.post('/remove', (req, res) => {
  // REMOVE ITEM FROM DATABASE
  const items = req.body
  console.log(req.body)
  fs.writeFile(path.join(__dirname, '..', 'data', 'items.json'), JSON.stringify(items), err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router
