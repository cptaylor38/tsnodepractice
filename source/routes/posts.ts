import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();

router.get('/hello', controller.sayHello);

export = router;