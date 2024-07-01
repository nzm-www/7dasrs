const field = document.querySelector("#field");
const button = document.getElementById("button");
const wrapper = document.querySelector("#todo-wrapper");

function creatItem(value) {
  return `
          <div class="item">
                    <div class="left">
                         <input type="checkbox" name="" id="">
                         <p>${value}</p>
                    </div>

                    <div class="right">
                         <button>
                              <i class="fa-regular fa-pen-to-square"></i>
                              <span>Edit</span>
                         </button>

                         <button>
                              <i class="fa-solid fa-trash-can"></i>
                              <span>Del</span>
                         </button>

                    </div>
               </div>
     `;
}

function validate() {
  const todo = field.value;
  if (todo.length < 5) {
    alert("Soz qoshing");
    field.focus();
    field.style.outlineColor = "red";
    return false;
  }

  return true;
}
function saveItemLocalStoreg(value) {
  const todo = {
    name: value,
    status:'active',
    id: Date.now(),
  };

  let data = [];
  if (localStorage.getItem("todos")) {
    data = JSON.parse(localStorage.getItem("todos"));
  }   

  data.push(todo);
  localStorage.setItem("todos", JSON.stringify(data));
}

button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const isValed = validate();
    if (!isValed) {
      return;
    }

    const item = creatItem(field.value);
    wrapper.innerHTML += item;
    saveItemLocalStoreg(field.value);
    field.value = "";
    field.focus();
  });

document.addEventListener('DOMContentLoaded', function(){
let data =  []
if(localStorage.getItem('todos')){
  data - JSON.parse(localStorage.getItem('todos'))
}

if(data.length > 0) {
  data.forEach(function(value){
    const item = creatItem(value.name)
    wrapper.innerHTML += item;
  })
}

})



// const local = document.querySelector("#local");


// local &&
//   local.addEventListener("click", function () {
//     // let isim = "Nizomiddin";
//     // localStorage.setItem("name", isim);
//     // localStorage.setItem("age", 19);
//     // const users = [
//     //   { name: " Nizomiddin", age: 19, Job: "studen" },
//     //   { name: " Diyor", age: 19, Job: "Malyar" },
//     // ];
//     // localStorage.setItem("users", JSON.stringify(users));
//     // let name = localStorage.getItem("users");
//     // console.log(JSON.parse(name));
//     // localStorage.removeItem("name")
//     // localStorage.clear()
//   });
