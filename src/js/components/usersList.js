import products from "../views/products";

class UsersList extends HTMLElement {
    constructor() {
        super();

        fetch('https://dummyjson.com/users?limit=50')
            .then(response => response.json())
            //.then(console.log)
            .then(dataUsers => {
                let resultsUsers = dataUsers.users
                console.log(resultsUsers)
                let usersLength = resultsUsers.length
                let usersDiv = "";
                for (let k = 0; k < usersLength; k++) {
                    // console.log(resultsUsers[k])
                    usersDiv += `
                         <div class="col-md-2 mb-3">
                             <div class="card p-2 text-center">
                                <img src="${resultsUsers[k].image}" alt="${resultsUsers[k].username}">
                                <h3>${resultsUsers[k].username}</h3>
                                <p>${resultsUsers[k].lastName} ${resultsUsers[k].firstName}<p>        
                             </div>
                         </div>
                 `
                }
                let formDiv = `
             <div class="container">
                     <div class="row">
                             ${usersDiv}
                     </div>
                 </div>
             `
                this.innerHTML = formDiv
            });


    }
}

export default () => /*html*/`
        <h1>Users</h1>
    `;

customElements.define("users-list", UsersList);
