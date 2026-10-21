var listaProfessores = [
    {
        id: 1,
        nome: "Enzo Akio Koga",
        idade: 20,
        departamento: "ADS",
        turmas: [
            {
                codigo: "AS403TSN1",
                disciplina: "Desenvolvimento Web Front",
                alunosMatriculados: ["Erick", "Lucas", "Renan"]
            },
            {
                codigo: "AS403TSN2",
                disciplina: "PADN",
                alunosMatriculados: ["Enzo", "Rodrigo", "Arthur"]
            }
        ]
    },
    {
        id: 2,
        nome: "Enzo Akio Koga",
        idade: 20,
        departamento: "ADS",
        turmas: [
            {
                codigo: "AS403TSN3",
                disciplina: "BI",
                alunosMatriculados: ["Enzo", "Koga"]
            }
        ]
    }
];

exports.listaProfessores = (req, res) => {
    res.json(listaProfessores);
};

exports.obterProfessorPorId = (req, res) => {
    const id = req.params.id;

    const professor = listaProfessores.find(
        professor => professor.id == id
    );

    if (professor) {
        res.json(professor);
    } else {
        res.status(404).json({ message: "Id não existente" });
    }
};

exports.listarTurmas = (req, res) => {
    const id = req.params.id;

    const professor = listaProfessores.find(
        professor => professor.id == id
    );

    if (professor) {
        res.json(professor.turmas);
    } else {
        res.status(404).json({ message: "Id não existe" })
    }
}

exports.atualizarProfessor = (req, res) => {
    const id = req.params.id;
    const { nome, idade, departamento } = req.body;

    const professor = listaProfessores.find(
        professor => professor.id == id
    );

    if (professor) {
        if (nome !== undefined) {
            professor.nome = nome;
        }

        if (idade !== undefined) {
            professor.idade = idade;
        }

        if (departamento !== undefined) {
            professor.departamento = departamento;
        }

        res.json(professor);
    } else {
        res.status(404).json({ message: "Id não existente" });
    }
};

exports.adicionarTurma = (req, res) => {
    const id = req.params.id;
    const { codigo, disciplina, alunosMatriculados } = req.body;

    const professor = listaProfessores.find(
        professor => professor.id == id
    );

    if (professor) {
        const novaTurma = {
            codigo,
            disciplina,
            alunosMatriculados
        };

        professor.turmas.push(novaTurma);

        res.status(201).json(novaTurma);
    } else {
        res.status(404).json({ message: "Id não existente" });
    }
};

exports.listarPorDepartamento = (req, res) => {
    const departamento = req.params.departamento;

    const professoresFiltrados = listaProfessores.filter(
        professor =>
            professor.departamento.toLowerCase() ===
            departamento.toLowerCase()
    );

    res.json(professoresFiltrados);
};

exports.deletarProfessor = (req, res) => {
    const id = req.params.id;

    const index = listaProfessores.findIndex(
        professor => professor.id == id
    );

    if (index !== -1) {
        const professorDeletado = listaProfessores.splice(index, 1);

        res.json(professorDeletado[0]);
    } else {
        res.status(404).json({ message: "Id não existente" });
    }
};