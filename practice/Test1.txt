const gettxt = ()=>{

    const message = localStorage.getItem('txt');

    const txt = document.getElementById('yname');
    txt = document.getElementById('ycategory');
    txt = document.getElementById('yprice');
    txt = document.getElementById('yquantity');

    txt.value = message;
}

const deletetxt = ()=>{
    document.getElementById('name').value='';
    document.getElementById('category').value='select';
    document.getElementById('price').value='';
    document.getElementById('quantity').value='';
    
    localStorage.removeItem('txt'); 
}

const saveData =() =>{
    let data = localStorage.getItem('data');
    if(data!= null){
        //console.log(data);
        data = JSON.parse(data);
        newData=[];
        data.forEach(d=>{
            newData.push(d);
        });
        newData.push({
            name : document.getElementById('yname').value,
            category : document.getElementById('ycategory').value
    
        });
        data = newData;
    }else{
        data = [{
            name : document.getElementById('yname').value,
            category : document.getElementById('ycategory').value
    
        }];
    }
    localStorage.setItem('data',JSON.stringify(data));
    window.location= 'My-Test.html';
}