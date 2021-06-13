const {Router} = require('express');
const { check } = require('express-validator');

const {
    validarCampos,
} = require('../middlewares');

const {  existeTaskPorId } = require('../helpers/db-validators');
const { taskGet, taskPost, taskPut, taskDelete, taskPatch } = require('../controllers/task');



const router = Router();

router.get('/', taskGet )

router.post('/',[
    check('titulo', 'El titulo es obligatorio- express validator').not().isEmpty(),
    validarCampos
], taskPost )



router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeTaskPorId ),
    validarCampos
],taskPut)

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeTaskPorId ),
    validarCampos
],taskPut)



router.patch('/', taskPatch)

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeTaskPorId ),
    validarCampos
] , taskDelete)


module.exports = router;