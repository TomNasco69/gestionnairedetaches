document.getElementById('addtask').addEventListener('submit', function (e)  {
    e.preventDefault();
    let donnesUtilisateurs = document.getElementById('Ntask');
    const tasklist = document.getElementById('tasklist');
    const itemList = document.createElement('li');
    itemList.textContent = donnesUtilisateurs.value;
    tasklist.appendChild(itemList);
    donnesUtilisateurs.value='';


    let supp = document.createElement('button');
    supp.textContent="Supprimer";
    supp.addEventListener('click',function (0) {
    
    tasklist.removeChild(itemList);
       
    });

    tasklist.appendChild(supp);
    // const deletebutton = document.createElement('deleTbutton')

});
