const { Router } = require('express');
const router = Router();

const {storeTask} = require('../controller/taskController')

router.post('/store/post', storeTask);

module.exports = router;
