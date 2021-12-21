export default () => {
    const content = document.querySelector('.content');
  
    return fetch('./pages/add/add.html')
      .then((response) => response.text())
      .then((addHtml) => {
        content.innerHTML = addHtml;
  
        addCandidate();
      });
  };
  function addCandidate() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      
      event.preventDefault();
  
      fetch(`${window.apiUrl}/api/candidate/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: document.querySelector('input.name').value,
          party_id: document.querySelector('input.party_id').value,
        }),
      })
      
        .then((Response) => Response.json())
        .then(async (data) => {
          window.router.navigate(`/`);
          }
    )
});
}
  