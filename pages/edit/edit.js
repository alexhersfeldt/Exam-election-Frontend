export default () => {
    const content = document.querySelector('.content');
  
    return fetch('./pages/edit/edit.html')
      .then((response) => response.text())
      .then((editHtml) => {
        content.innerHTML = editHtml;
  
        //handleeditFunctionality();
      });
  };