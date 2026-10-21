const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professoresController');

router.get('/', professorController.listaProfessores);
router.get('/departamento/:departamento', professorController.listarPorDepartamento);
router.get('/:id/turmas', professorController.listarTurmas);
router.get('/:id', professorController.obterProfessorPorId);
router.put('/:id', professorController.atualizarProfessor);
router.post('/:id/turmas', professorController.adicionarTurma);
router.delete('/:id', professorController.deletarProfessor);

module.exports = router;