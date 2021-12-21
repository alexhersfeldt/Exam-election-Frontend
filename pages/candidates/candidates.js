export default () => {
    const content = document.querySelector('.content');
  
    return fetch('./pages/candidates/candidates.html')
      .then((response) => response.text())
      .then((candidatesHtml) => {
        content.innerHTML = candidatesHtml;
  
        loadIntoTable(1, document.querySelector(".tableA") );
        loadIntoTable(2, document.querySelector(".tableC") );
        loadIntoTable(3, document.querySelector(".tableSF") );
        loadIntoTable(4, document.querySelector(".tableAA") );
        loadIntoTable(5, document.querySelector(".tableV") );
        loadIntoTable(6, document.querySelector(".tableOE") );
      });
  };

  async function loadIntoTable(id, table) {
      const tableHead = table.querySelector("thead");
      const tablebody = table.querySelector("tbody");
    const candidates = await getCandidatesFromParty(id);


        

      candidates.forEach(element => {
        const newtr  = document.createElement("tr");

        const newTd = document.createElement("td");
        const deleteCan = document.createElement("td")

        deleteCan.innerHTML=`<button class= 'dlt-btn-${element.id}' > Slet </buttton>`  
        newTd.innerHTML = element.name

        newtr.appendChild(newTd);
        newtr.appendChild(deleteCan);
        tablebody.appendChild(newtr)

        const dltBtn = document.querySelector(`.dlt-btn-${element.id}`);
        dltBtn.addEventListener(`click`, () => {
        fetch(`${window.apiUrl}/api/candidate/delete/${element.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: element.id
          }),
        })
        .then(()=>{
          window.location.reload();
        })})        
      });     
  }

    async function getCandidatesFromParty(id){
    return await fetch(`${window.apiUrl}/api/candidate/party/${id}`)
    .then((response) => response.json())
    .then((data) => {
        return data;
    });

}