// IMPORTANT: json opject with the info is stored in a separate file and can be reached as 'jsonObj' global var!

function createTree(container, obj) {
    container.append(createTreeDom(obj));
  }

  function createTreeDom(obj) {

    let ul = document.createElement('ul');

    for (let i = 0; i<Object.keys(obj).length; i++) {
      
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.innerHTML = obj[i].name;
      li.append(a);
      
      if(obj[i].childCategories) {

      let childrenUl = createTreeDom(obj[i].childCategories);
      if (childrenUl) {
        li.append(childrenUl);
      }
    }
    ul.classList.add('submenu');
    ul.append(li);
    }
    return ul;
  }

let container = document.getElementById('container');
createTree(container, jsonObj.data.filterCategory[0].childCategories);


let uls = container.querySelectorAll('ul');
uls[0].classList.remove('submenu');
uls[0].classList.add('topmenu');


// below you can see my previous attempts to find a solution using js))


// container.addEventListener("mouseover", showSub);
// container.addEventListener("mouseout", hideSub);

// let currentTarget = null;
// function showSub(event) {
//     if(event.target.querySelector('ul')) {
//     event.target.querySelector('ul').classList.remove('sub-menu');
//     currentTarget = event.target;
//     }
// }

// function hideSub(event) {
//   if(!currentTarget) return
//   let relatedTarget = event.relatedTarget;

//   while (relatedTarget) {
//     if (relatedTarget == currentTarget.querySelector('ul')) return;
//     relatedTarget = relatedTarget.parentNode;
//   }

//   if(event.target.querySelector('ul')) {
//   event.target.querySelector('ul').classList.add('sub-menu');
//   currentTarget = null;
//   }
// }
