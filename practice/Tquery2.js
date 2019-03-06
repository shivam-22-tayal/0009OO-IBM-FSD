let list=[];
const form = document.querySelector('form');
const btn_modal= document.getElementById('btn-modal');
const btn_modal_close = document.querySelectorAll('.close');

const add = (e)=>{
    e.preventDefault();

    const name = document.getElementById('name');
    const dob = document.getElementById('dob');
    const address = document.getElementById('address');
    const dl = document.getElementById('dl');
    const date=document.getElementById('date');

    list.push({
                id : dl.value,
                name : name.value,
                dob : dob.value,
                date : date.value,
                address : address.value});
   

    name.value='';
    dob.value='';
    date.value='';
    address.value='';
    dl.value='';


}



const DlRandom = ()=>{
    const dl = document.getElementById('dl');
    let dl_id = 'DL' + (parseInt(Math.random()*1000 ));
    dl.value=dl_id;
   

}
const DateRandom = ()=>{
    
    let expiryDate = document.getElementById('date');
    let targetDate =new Date();
    targetDate.setFullYear(targetDate.getFullYear()+5) ;
    targetDate = targetDate.toISOString().slice(0,10);

expiryDate.value= targetDate;

}

const NameArray=[];

const array = (e)=>{
    e.preventDefault();

    const aname = document.getElementById('name');
   
   NameArray.push({ name : aname.value });
  
     name.value='';
     console.log(NameArray);

     input = document.getElementById("nameToCheck");
    filter = input.value.toUpperCase();
   // ul = document.getElementById("myUL");
    //li = ul.getElementsByTagName("li");

    for (i = 0; i < NameArray.length; i++) {
        a = NameArray[i];
        
        if (a.toUpperCase().indexOf(filter) > -1) {
            NameArray[i].display = "";
        } else {
            NameArray[i].display = "none";
        }
    }

}

const generateList = ()=>{
   // console.log("List generateList");

    const row = document.querySelector('.row');

    row.innerHTML='';
    list.forEach((listdl)=>{
    let html = `
    <div class="col-lg-4">
        <div class="card">
            <div class="card-header">Your Details<a class="closed" href="#">×</a></div>
            <div class="card-body">
                <div class="col-md-3"><img src="pen.jpg" height="50" width="50"></div>
                <div class="col-md-6">
                    <div class="form-inline"><label for="name">Name: </label>${listdl.name}</div>
                    <div class="form-inline"><label for="dob">DOB: </label>${listdl.dob}</div>
                    <div class="form-inline"><label for="address">Address: </label>${listdl.address}</div>
                    <div class="form-inline"><label for="dlno">DL. No. </label>${listdl.id}</div>
                    <div class="form-inline"><label for="date">Expiry Date: </label>${listdl.date}</div>
                </div>
            </div>
        </div>
    </div>
    </div>    
    `;
    row.innerHTML += html;
    });
}
const loadEventlisteners = () =>{
    btn_modal.addEventListener('click',DlRandom);
    btn_modal.addEventListener('click',DateRandom);
    btn_search.addEventListener('click', array);
    form.addEventListener('submit', add);
    btn_modal_close.forEach((b)=>{
        b.addEventListener('click',generateList);
    });
}
loadEventlisteners();

$(document).ready(()=>{
    $('.closed').click(function(){
        console.log("success trigger");
        var $target = $(this).parents('card');
        $target.hide('slow', function(){ $target.remove(); });
        console.log('triger');
      })
    });