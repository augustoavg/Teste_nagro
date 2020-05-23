<h2>Descrição:</h2>

Teste realizado para nagro a respeito de uma API para cadastro de alunos e cursos, constando uma assosiação entre os mesmos.
A API será capaz de:

1) A API deverá receber informações pessoais do Aluno, como: nome, cpf e data de nascimento.
2) Esse aluno deveŕá ser vinculado a pelo menos um curso. 
3) A API deverá ter um endpoint para listar todos os cursos disponíveis.
4) A API deverá ter um endpoint para filtrar os cursos disponiveis. 
5) A API deverá ter a possibilidade de exclusão de um Aluno.
6) A API deverá ter a possibilidade de edição de informacões do Aluno. 

<h2>Inserção de Dados:</h2>

A API possui duas tabelas: Courses e Students. Para manipulação dos seus dados foi utilizado o Insomnia da seguinte maneira para cada item:

- 1 e 2: Registro do Aluno e vinculação a um curso

Chamada POST realizada utilizando body pelo endereço http://localhost:3333/students utilizando um _id de um curso ja existente.

Exemplo:<br>
{<br>
	"name": "Augusto",<br>
	"birth_date": "05/12/1996",<br>
	"tax_id": "101010101010",<br>
	"courses": "5ec82a7c81de6c4ef0697019"<br>
}

- 3: Listar todos os cursos disponíveis<br>

Basta realizar uma chamada GET pelo endereço http://localhost:3333/courses

- 4: Filtrar os cursos disponíveis<br>

Basta realizar uma chamada GET pelo endereço http://localhost:3333/search e utilizando uma query com o id correspondente ao curso.

Exemplo:<br>
name: courses<br>
value: 5ec82a7c81de6c4ef0697019

- 5: Exclusão de um aluno.<br>

Basta realizar uma chamada DELETE pelo endereço http://localhost:3333/students e utilizando uma query com o cpf correspondente ao aluno.

Exemplo:<br>
name: tax_id<br>
value: 101010101010

- 6: Edição das informações do aluno<br>

Basta realizar uma chamada PUT utilizando o body pelo endereço http://localhost:3333/students

Exemplos:
Para alterar a data de aniversário de um aluno específico, sendo obrigatório colocar o tax_id e as informações do aluno desejado.

{<br>
	"name":"Augusto",<br>
	"tax_id": "078080520",<br>
	"birth_date": "07/12/1996"<br>
}
