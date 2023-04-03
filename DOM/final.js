var form = document.querySelector('#addForm');
var itemlist = document.querySelector('#items');
var filter = document.querySelector('#filter');



form.addEventListener('submit',addItem);

itemlist.addEventListener('click',removeItem);

filter.addEventListener('keyup', filterItems); 
    
function addItem(e){
    e.preventDefault();
    var newItem = document.querySelector('#item').value;

    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    var delBtn = document.createElement('button');

    delBtn.className = 'btn btn-danger btn-sm float-right delete';

    delBtn.appendChild(document.createTextNode('x'));

    li.appendChild(delBtn); 

    itemlist.appendChild(li);

  }

  function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are you sure')){
        var li = e.target.parentElement;
        itemList.removeChild(li); 
      }
    }
  }

  function filterItems(){
    var text = e.target.value.tolowerCase();
    var items = itemList.querySelector('#li');
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textconent;
      if (itemName.tolowerCase().indexOf(text) != -1){
        item.style.display = 'block';

      }
      else {
        item.style.display = 'none';
      }
    })

  }
  

  localStorage.setItem('newItem',itemlist);
  console.log(localStorage)