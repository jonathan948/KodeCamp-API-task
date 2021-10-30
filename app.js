
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(response => response.json())
 .then((data) =>{
     console.log(data);
     let postsBlock = document.getElementById('posts-block')
     let html = "";
     data.forEach(e => {
         html +=`
         <div class="col-md-4 mb-3">
         <a href="allPost.html" onclick="myfucntion(${e.id})">
         <div class="card h-100 shadow">
             <div class="card-body">
                  <h1 class="text-warning">${e.id}</h1>
                   <h5 class="title mb-3">${e.title}</h5>
                   <p><i>${e.body}</i></p>
             </div>
         </div>
         </a>
     </div>
         `
     });
     postsBlock.innerHTML = html;
 });

function myfucntion(num) {
    localStorage.setItem('postid', num );
}
