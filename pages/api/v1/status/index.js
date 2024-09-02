function status(request, response) {
  response.status(200).send({
    text: "Alunos do Curso.Dev são foda!!!",
  });
}

export default status;
