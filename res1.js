
//variabsls
let btn = document.querySelector(".btn1");
let form = document.getElementsByTagName("form")[0];
// let formData = new FormData()



function Createid(){
    let arr = ["1","2","3","4","5","6","7","8","9","0","A", "B","C", "D" ,"E" , "F" ,"G","H" ,"J" ,"K"];
    let id = "";
    for (let i = 0; i < arr.length; i++) {
        id += arr[Math.floor(Math.random()* 20)] ;        
    }
    return id ;
}


class person{

    constructor(fname, lname, Country, Email , Tittle, message ){
        this.id = Createid(),
        this.fname = fname,
        this.lname = lname,
        this.Country = Country,
        this.Email = Email,
        this.Tittle = Tittle,
        this.message = message
    };

    fullname (){
        return ` ${this.fname} ${this.lname}`;
    }
}

let i = 0;

btn.addEventListener("click", function (e) { 
    
    e.preventDefault();
    
    let f_name = form.children[1].value;
    let l_name = form.children[2].value;
    let country = form.children[3].value;
    let E_mail = form.children[4].value;
    let T_ittle = form.children[6].value;
    let msg = form.children[8].value;
    
    let p1 = new person(f_name , l_name , country ,   E_mail,  T_ittle , msg ) ;
    let p = JSON.stringify(p1);
    
    function* creat_person(){
        
        while(true){
            yield i++;
        }
    }


   localStorage.setItem(`per${creat_person().next().value} ` , p );
   
   let c = localStorage.getItem(`per1`);
   let g = JSON.parse(c);
   console.log(g.id);

})

    




































// var num = 0;
// btn.addEventListener("click",function c(e){ 
    
//     e.preventDefault()
    
//     var form_obj = {};
    
//     num += 1;
//     for (let i = 0; i < form.children.length; i++) {
     
//         if(i == 0 || i == 5 || i == 7 || i == 9 || i == 10 ){
    
//             continue;

//         }else{

//             let key = form.children[i].getAttribute("name");
//             let value = form.children[i].value;
//             form_obj[`${key}`] = value;
//             formData.append(key , value);
//         }  
//     }
   





// /////////////////////////////////////////////////////////////



//     var c = '{ ' ;
//   for(p of formData.entries()){
   
//       c += `"${p[0]}" : "${p[1]}" ,` ;
//   }
// c+= " }"
// console.log( c);



///////////////////////////////////////////////////////////////////////


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


