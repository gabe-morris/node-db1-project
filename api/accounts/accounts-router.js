const router = require('express').Router()
const mw = require('./accounts-middleware')
const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  try{
    const accounts = await Account.getAll()
    res.json(accounts)
  }catch (err){
    next(err)
  }
})

router.get('/:id', mw.checkAccountId, async (req, res, next) => {
  try{
    const account = await Account.getById(req.params.id)
    res.json(account)
  }catch (err){
    next(err)
  }
})

router.post(
  '/',
  mw.checkAccountPayload,
  mw.checkAccountNameUnique,
  (req, res, next) => {
  try{
    res.json('post accounts')
  }catch (err){
    next(err)
  }
})

router.put('/:id',
mw.checkAccountId,
mw.checkAccountPayload,
mw.checkAccountNameUnique,
(req, res, next) => {
  try{
    res.json('update this account by id')
  }catch (err){
    next(err)
  }
});

router.delete('/:id', 
mw.checkAccountId,
(req, res, next) => {
  try{
    res.json('delete this account by id')
  }catch (err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
