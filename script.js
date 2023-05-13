function Promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/posts")
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          //          resolve(response);
          var responseobj = { response: response, status: true };
          resolve(responseobj);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  });
}
function Promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/products")
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          var responseobj = { response: response, status: true };
          resolve(responseobj);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  });
}
function Promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://dummyjson.com/todos")
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          var responseobj = { response: response, status: true };
          resolve(responseobj);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  });
}
document.getElementById("btn-promise").addEventListener("click", btnClicked);
function btnClicked() {
  console.log("Button Clicked");
  Promise1()
    .then((data) => {
      console.log(data);
      if (data.status) {
        const myHTML = data.response.posts.map((item) => {
          return `<div class="post">
                    <h5>${item.id}</h5>
                    <p>${item.title}</p>
                </div>`;
        });
        document.getElementById("posts").innerHTML = myHTML;
      }

      return Promise2();
    })
    .then((data) => {
      console.log(data);
      if (data.status) {
        const myHTML = data.response.products.map((item) => {
          return `<div class="products">
                    <h5>${item.id}</h5>
                    <p>${item.title}</p>
                </div>`;
        });
        document.getElementById("products").innerHTML = myHTML;
      }

      return Promise3();
    })
    .then((data) => {
      console.log(data);
      if(data.status){
         const myHTML = data.response.todos.map((item) => {
           return `<div class="post">
                    <h5>${item.id}</h5>
                    <p>${item.todo}</p>
                </div>`;
         });
         document.getElementById("todos").innerHTML = myHTML; 
      }
     
    });
}
