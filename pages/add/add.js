export default () => {
    const content = document.querySelector('.content');
  
    return fetch('./pages/add/add.html')
      .then((response) => response.text())
      .then((addHtml) => {
        content.innerHTML = addHtml;
  
        //handleAddFunctionality();
      });
  };