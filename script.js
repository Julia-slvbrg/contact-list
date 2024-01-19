const form = document.getElementById('contact-form');

const nameArr = [];
const telArr = [];
const emailArr = [];


const addTable = () => {
    const outterTable = document.getElementById('outter-table');
    const nameInput = document.getElementById('name-input');
    const telInput = document.getElementById('tel-input');
    const emailInput = document.getElementById('email-input');

    if(nameArr.includes(nameInput.value.toLocaleLowerCase())) return alert('Esse contato já foi adicionado.');
    nameArr.push(nameInput.value.toLocaleLowerCase());
    
    const newTable = document.createElement('table');
    newTable.setAttribute('class', 'contact-info-table');
    newTable.setAttribute('id', `contact-${nameArr.length}`);
    newTable.setAttribute('cellspacing', '0');

    newTable.innerHTML = `
        <tbody>
            <tr>
                <th>Nome: </th>
                <td class="td-cell"> ${nameInput.value}</td>
            </tr>
            <tr>
                <th>Telefone:</th>
                <td class="td-cell"> ${telInput.value}</td>
            </tr>
            <tr>
                <th>E-mail:</th>
                <td class="td-cell"> ${emailInput.value == '' || emailInput.value == ' '? '-' : emailInput.value}</td>
            </tr>
        </tbody>
    `

    nameInput.value = '';
    telInput.value = '';
    emailInput.value = '';

    return outterTable.insertAdjacentElement('beforeend', newTable)
};

form.addEventListener('submit', function (e){
    e.preventDefault();

    addTable();
})