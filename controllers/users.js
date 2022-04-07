const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

usersRouter.post('/', async (req, res) => {
  const { username, password, name } = req.body

  if (username.length < 3) {
    return res.status(401).json({ error: 'username must have a minimum of 3 characters' })
  } else if (password.length < 3) {
    return res.status(401).json({ error: 'password must have a minimum of 3 characters' })
  }

  const existingUser = await User.findOne({ username })
  if (existingUser) {
    return res.status(400).json({ error: 'username must be unique' })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const newUser = new User({
    username,
    name,
    passwordHash
  })

  const savedUser = await newUser.save();
  res.status(201).json(savedUser)
})

module.exports = usersRouter