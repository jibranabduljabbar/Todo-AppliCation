// ToDo AppliCation!

var getInput = document.getElementById('input');
var getUl = document.getElementById('ul')

function add(){

    var createElement = document.createElement('li')
    createElement.className = 'listyle'
    var CreateTextNode = document.createTextNode(getInput.value)
    createElement.appendChild(CreateTextNode)
    getUl.appendChild(createElement)

    var editbtn = document.createElement('button')
    editbtn.className = 'styling'
    editbtn.setAttribute('onmouseover','this.style.backgroundColor = "green",this.style.color="white",this.style.fontSize="17px", this.style.borderRadius="6px"')
    editbtn.setAttribute('onmouseout',"this.style.color = 'green',this.style.backgroundColor='WHITE',this.style.borderRadius='7px'")
    var editBtnText = document.createTextNode('EDIT')
    editbtn.setAttribute('onclick','editbtnclick(this)')
    editbtn.appendChild(editBtnText)
    createElement.appendChild(editbtn)

    var delbtn = document.createElement('button')
    delbtn.className = 'stylingbtn'
    delbtn.setAttribute('onmouseover','this.style.backgroundColor = "red",this.style.color="white",this.style.fontSize="17px", this.style.borderRadius="6px"')
    delbtn.setAttribute('onmouseout',"this.style.color = 'red',this.style.backgroundColor='WHITE',this.style.borderRadius='7px'")

    delbtn.setAttribute('onclick','del(this)')       
    var delText = document.createTextNode('DELETE')
    delbtn.appendChild(delText)
    createElement.appendChild(delbtn)

    getInput.value = ''
}
function closee(){
getInput.value = ''
}

function deleteAll(){
    getUl.innerHTML = ""
}

function del(Val){
Val.parentNode.remove()
}
function editbtnclick(editbtnclick){
    var getValue = prompt('Enter Your EDIT Value',editbtnclick.parentNode.childNodes[0].nodeValue) 
    editbtnclick.parentNode.childNodes[0].nodeValue = getValue
}    
