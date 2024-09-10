const router = require('express').Router()
const catogryCtrl = require('../controllers/catogryCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/catogry')
.get(catogryCtrl.getCategories)
.post(auth,authAdmin,catogryCtrl.createCategory)

router.route('/catogry/:id')
.delete(auth,authAdmin,catogryCtrl.deleteCategory)
.put(auth,authAdmin,catogryCtrl.updateCategory)
module.exports = router
