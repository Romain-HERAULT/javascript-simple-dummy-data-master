class PostsList extends HTMLElement {
    constructor() {
        super();

        fetch('https://dummyjson.com/posts?limit=12')
            .then(response => response.json())
            //.then(console.log)
            .then(dataPosts => {
                let resultsPosts = dataPosts.posts
                console.log(resultsPosts)
                let postsLength = resultsPosts.length
                let postsDiv = "";
                for (let j = 0; j < postsLength; j++) {
                    console.log(resultsPosts[j])
                    postsDiv += `
                            <div class="col-md-4 mb-3">
                                <div class="card p-2">
                                    <h3>${resultsPosts[j].title}</h3>
                                    <p>${resultsPosts[j].body}<p>        
                                </div>
                            </div>
                    `
                }
                let formDiv = `
                <div class="container">
                        <div class="row">
                                ${postsDiv}
                        </div>
                    </div>
                `
                this.innerHTML = formDiv
            });


    }
}

export default () => /*html*/`
    <h1>Blog</h1>
    `;

customElements.define("posts-list", PostsList);
