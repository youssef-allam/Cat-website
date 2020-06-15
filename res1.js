let btn = document.querySelector(".btn1");
let form = document.getElementsByTagName("form")[0];


let formData = new FormData()




var num = 0;
btn.addEventListener("click",function c(e){ 
    
    e.preventDefault()
    
    var form_obj = {};
    
    num += 1;
    for (let i = 0; i < form.children.length; i++) {
     
        if(i == 0 || i == 5 || i == 7 || i == 9 || i == 10 ){
    
            continue;

        }else{

            let key = form.children[i].getAttribute("name");
            let value = form.children[i].value;
            form_obj[`${key}`] = value;
            formData.append(key , value);

            var  txt_obj = JSON.stringify(form_obj);         
             
           
           
           

        }  
    }
   
    var c = '{ ' ;
  for(p of formData.entries()){
   
      c += `"${p[0]}" : "${p[1]}" ,` ;
  }
c+= " }"
console.log( c);
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function(){
//     if ( this.readyState === 4 && this.status === 200 ){
//         const txt = this.responseText;
//         console.log(JSON.parse(txt));
//         console.log(txt_obj)
//     }else{
//         console.log("faild");
//     }
// }
// xmlhttp.open("POST" , `https://www.serve.php`);
// xmlhttp.setRequestHeader("content-type",  "application/x-www-form-urlencoded")

// xmlhttp.send(`txt=${txt_obj}`);
 
////////////////////////////////////////////////////////////////////////////////////////////

// fetch("http://mysafeinfo.com/api/data?list=columns&for=presidents&format=json",{
//   method:"GET";
// })
// .then(response => response.json())
// .then(data => console.log(data));

})
