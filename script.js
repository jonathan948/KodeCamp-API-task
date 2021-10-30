const post =  localStorage.getItem('postid')

console.log(post);

const url = `https://jsonplaceholder.typicode.com/posts/${post}`
fetch(url)
.then(response => response.json())
.then((data) => {
    console.log(data);
    let postsBlock = document.getElementById('posts-layout')
    let html = `<div class="col-md-4 mb-3">
    <div class="card h-100">
        <div class="card-body">
        <h1 class="text-warning">${data.id}</h1>
              <h5 class="title mb-3">${data.title}</h5>
              <p><i>${data.body}</i></p>
        </div>
    </div>
</div>`
postsBlock.innerHTML = html;
})
