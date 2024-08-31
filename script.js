document.addEventListener("DOMContentLoaded", function() {
    function addNewWEField(){
        let newNode=document.createElement('textarea');
        newNode.classList.add('form-control');
        newNode.classList.add('weField');
        newNode.classList.add('mt-2');
        newNode.setAttribute('rows',3);
        newNode.setAttribute('placeholder','Enter here');
        let weOb=document.getElementById("we");
        let weAddButtonOb=document.getElementById("weAddButton");
        weOb.insertBefore(newNode, weAddButtonOb);
    }
    function addNewAQField(){
        let newNode=document.createElement('textarea');
        newNode.classList.add('form-control');
        newNode.classList.add('eqField');
        newNode.classList.add('mt-2');
        newNode.setAttribute('rows',3);
        newNode.setAttribute('placeholder','Enter here');
        let aqOb=document.getElementById("aq");
        let aqAddButtonOb =document.getElementById("aqAddButton");
        aqOb.insertBefore(newNode, aqAddButtonOb);
    }
    
    function generateResume() {
        let nameField = document.getElementById('nameField').value;
        let nameT1 = document.getElementById('nameT1');
        nameT1.innerHTML = nameField;
        document.getElementById('nameT2').innerHTML = nameField;
        document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;
        document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
        document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;
        document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;
        document.getElementById('linkedT').innerHTML = document.getElementById('LindedField').value; // Corrected 'linkedField' to 'LindedField'
    
        document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;
    
        let wes = document.getElementsByClassName('weField');
        let str = '';
        for (let e of wes) {
            str += `<li>${e.value}</li>`;
        }
        document.getElementById('weT').innerHTML = str;
    
        let aqs = document.getElementsByClassName('eqField');
        let str1 = '';
        for (let e of aqs) {
            str1 += `<li>${e.value}</li>`;
        }
        document.getElementById('aqT').innerHTML = str1;
    
        document.getElementById('Resume-form').style.display = 'none';
        document.getElementById('Resume-template').style.display = 'block'; // Corrected 'style display' to 'style.display'
    }
    
    
    function printResume(){
        window.print();
    }
    });