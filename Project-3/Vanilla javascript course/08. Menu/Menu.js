

//load items 
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

//load items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);

    const categories = menu.reduce(function (values, item) {

        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["All"]
    );
    const categorybtns = categories.map(function (category) {

        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    }).join("");

    btnContainer.innerHTML = categorybtns;
    const filterbtns = document.querySelectorAll('.filter-btn');


    //filter items

    filterbtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuitem) {
                // console.log(menuitem.category);
                if (menuitem.category === category) {
                    return menuitem;
                }
            });
            // console.log(menuCategory)
            if (category == "All") {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(menuCategory)
            }
        });

    });

});
//load items 
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

        return ` <article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">Rs ${item.price}</h4>
          </header>
          <p class = "item-text">
             ${item.desc}
            
          </p>
        </div>
      </article>
     `
    });
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu;
};
