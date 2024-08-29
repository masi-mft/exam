let html=""

let fetchData= ()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        res.data.forEach((element)=> {
            html+=`
            <div class="product">
            <p>${element.id}</p>
            <p>${element.title}</p>
            <p>${element.body}</p>
        </div>
            `

            document.querySelector("div.parent").innerHTML=html
        });
    })
}

fetchData()



$(document).on("scroll",function(){
    let st=$(this).scrollTop()
    if(st>1000){
        $("div.parent").fadeIn(1000)
    }
    else{
        $("div.parent").fadeOut(1000)
    }
  })