const cronometer = () => {

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }
  
  const timer = async () => {
    console.log('Aguarde 1 segundo...')
    let delayres = await delay(1000);
    console.log('Feito');
  }  

  timer();

  return {
    timer,
  };

};

export default cronometer;