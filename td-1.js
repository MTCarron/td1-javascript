const txtToAdd = document.querySelector('#txt_to_add');
const pList = document.querySelector('#myList p');
const pArray = document.querySelector('#myArray p');
const myArray = ['une ligne', 'autre chose', 'et encore'];

function addText(){
    if(txtToAdd.value!=='')
    {
        // Ajout du contenu du input dans l'élément p.
        pList.innerText += txtToAdd.value+'\n';
        // Plist.innerText = pList.innerText + txtToAdd.value+'\n';
        txtToAdd.value = '';
    }
    else{
        alert('Veuillez entrer un texte');
    }
    txtToAdd.focus();
}
// document.querySelector('#myList p').innerText = document.getElementById('txt_to_add').value;