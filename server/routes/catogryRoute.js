const router = require('express').Router()
const catogryCtrl = require('../controllers/catogryCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/catogry')
.get(catogryCtrl.getCategories)
.post(auth,authAdmin,catogryCtrl.createCategory)
module.exports = router
