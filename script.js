fetch("https://api.openbrewerydb.org/breweries?by_city=san_diego",{
    method:"GET",
   })
.then((x)=>x.json())
.then((response)=>{
   console.log(response);
    response.filter((a)=>{
        console.log(a.response)

    

    });
})
response.filter((e)=>{
   let test=document.createElement("p");
   test.classList.add("col-6")
   test.innerText=e.name;
   parentdiv.appendChild(test);

   let test1=document.createElement("p");
   test1.classList.add("col-6")
   test1.innerText=e.type;
   parentdiv.appendChild(test1);

   let test2=document.createElement("p");
   test2.classList.add("col-6")
   test2.innerText=e.address;
   parentdiv.appendChild(test2);

   let test3=document.createElement("p");
   test3.classList.add("col-6")
   test3.innerText=e. website_url;
   parentdiv.appendChild(test3);

   let test4=document.createElement("p");
   test4.classList.add("col-6")
   test4.innerText=e.phone_no;
   parentdiv.appendChild(test4);

})



