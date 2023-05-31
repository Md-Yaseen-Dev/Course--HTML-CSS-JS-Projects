// items
const menu = [
    {
        id: 1,
        title: "Chicken Biryani",
        category: "Lunch",
        price: 199,
        img: "./img/item1.jpg",
        desc: `Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy.
        `
    },
    {
        id: 2,
        title: "Mutton Biryani",
        category: "Dinner",
        price: 300,
        img: "./img/item2.jpeg",
        desc: `Mutton Biryani is a royal dish with beautifully spiced and fragrant layers of biryani rice centered with juicy, tender mutton (goat meat or lamb)`
    },
    {
        id: 3,
        title: "Raspberry",
        category: "Shakes",
        price: 99,
        img: "./img/item3.jpeg",
        desc: `The Raspberry Shake is the smallest seismograph of its caliber in existence — but don't let its size fool you! It can record earthquakes of all magnitudes, from the vanishingly small blips that are imperceptible to human senses to the big destructive earthquakes that regularly happen around the world.`,
    },

    {
        id: 4,
        title: "butterscotch",
        category: "Ice-Cream",
        price: 59,
        img: "./img/item4.jpeg",
        desc: `The base is made with cream(and milk sometimes) and it has crunchy praline(made with sugar and nuts) swirled into it.The crunchy praline give the ice cream an amazing texture,`
    },

    {
        id: 5,
        title: "Strawberry",
        category: "Ice-Cream",
        price: 69,
        img: "./img/item5.jpg",
        desc: `Strawberry ice cream is a flavor of ice cream made with strawberry or strawberry flavoring. It is made by blending in fresh strawberries or strawberry flavoring with the eggs, cream, vanilla and sugar used to make ice cream. Most strawberry ice cream is colored pink or light red.`

    },

    {
        id: 6,
        title: "Chocolate",
        category: "Shakes",
        price: 59,
        img: "./img/item6.jpg",
        desc: `Chocolate milk is made with milk and chocolate syrup (usually made with cocoa powder, sugar, and a bit of water) and a chocolate milkshake is made with milk, chocolate syrup, and ice cream, so it's much richer, thicker, and frostier.`,
    },
    {
        id: 7,
        title: "Chicken mandi",
        category: "Lunch",
        price: 450,
        img: "./img/item7.jpg",
        desc: `The Arabian Chicken Mandi Recipe is a delicious preparation of chicken cooked with mandi powder served over a layer of basmati rice.`,
    }, {
        id: 8,
        title: "Chicken tikka",
        category: "Lunch",
        price: 110,
        img: "./img/item8.jpg",
        desc: `Chicken tikka are boneless pieces of chicken, marinated in spiced yogurt, threaded on a metal skewer and cooked on live charcoal. `,
    }, {
        id: 9,
        title: "Chicken tikka pizza",
        category: "Lunch",
        price: 299,
        img: "./img/item9.jpeg",
        desc: `the perfect blend of mild Indian Masalas and Italian herbs topped with cheese makes this Pizza exceptional. You can add fresh Coriander leaves to give it a distinctive Desi twist. You will love my Paneer Pizza, Whole Wheat chicken Pizza and Vegetable Pizza as well`,
    }, {
        id: 10,
        title: "Black Currant",
        category: "Shakes",
        price: 99,
        img: "./img/item10.jpeg",
        desc: `blackcurrant crush brings you the tangy and sweet taste of blackcurrant · Pamper your taste buds with the tangy, sweet and fresh taste of blackcurrant ...`,
    },
]
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


// load items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayButton();
});

function displayButton(){

    const categories = menu.reduce(function (value, item) {
        if (!value.includes(item.category)) {
            value.push(item.category);
        }

        return value;

    }, ['all']
    );

    const categoryBtn = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button
        >`
    }).join("")
    container.innerHTML = categoryBtn;
const filterBtns = document.querySelectorAll('.filter-btn');

    
// filter items

filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category);

            if (menuItem.category === category) {
                return menuItem;
            }
        });
        // console.log(menuCategory);
        if (category === 'all') {
            displayMenuItems(menu)
        }
        else {
            displayMenuItems(menuCategory)
        }

    
    });
});

}
    

// load items
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {


        return `
        <article class="menu-item">
          <img src="${item.img}" class="photo" width ="10px" alt="menu item" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">Rs ${item.price}</h4>
            </header>
            <p class="item-text">
             ${item.desc}
            </p>
          </div>
        </article>`
    });

    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu;
}