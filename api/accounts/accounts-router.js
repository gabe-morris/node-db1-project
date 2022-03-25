const router = require('express').Router()

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('get all accounts')
  }catch (err){
    next(err)
  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('get this account by id')
  }catch (err){
    next(err)
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('post accounts')
  }catch (err){
    next(err)
  }
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json('update this account by id')
  }catch (err){
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
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
