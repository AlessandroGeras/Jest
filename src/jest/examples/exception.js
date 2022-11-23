const error = () => {
  try {
    adddlert("Welcome guest!");
  } catch (err) {

    /*Depuração normal do erro
    console.log(err.message);
    */
   
    //Criação de erro personalizado
    throw new Error('Esse erro é proposital para testes!'); 
  }
};

export default error;
