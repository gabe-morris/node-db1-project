const router = require('express').Router()
const mw = require('./accounts-middleware')
router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('get all accounts')
  }catch (err){
    next(err)
  }
})

router.get('/:id', mw.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('get this account by id')
  }catch (err){
    next(err)
  }
})

router.post(
  '/',
  mw.checkAccountPayload,
  mw.checkAccountNameUnique,
  (req, res, next) => {
  // DO YOUR MAGIC
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
  // DO YOUR MAGIC
  try{
    res.json('update this account by id')
  }catch (err){
    next(err)
  }
});

router.delete('/:id', 
mw.checkAccountId,
(req, res, next) => {
  // DO YOUR MAGIC
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
