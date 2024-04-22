(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

    // main.js

/* const productsData = [
    {
        "category": "Universal Diagnostic & Programming Scanners",
        "products": [
            
            {
                "name": "AutoScan Pro",
                "description": "Advanced scanner for comprehensive vehicle diagnostics and programming.",
                "price": 799.99,
                "image": "img/product-1.jpg"
            }
        ]
    },
    {
        "category": "Workshop Equipments",
        "products": [
            {
                "name": "Hydraulic Lift",
                "description": "Heavy-duty lift for easy access during maintenance and repairs.",
                "price": 4999.99,
                "image": "img/product-1.jpg"
            },
            {
                "name": "Precision Tools Set",
                "description": "High-quality tools for accurate measurements and adjustments.",
                "price": 299.99,
                "image": "img/product-1.jpg"
            }
        ]
    },
    {
        "category": "Transmission & Garage Equipments",
        "products": [
            {
                "name": "Transmission Jack",
                "description": "Sturdy jack designed specifically for transmission maintenance.",
                "price": 899.99,
                "image": "img/product-1.jpg"
            },
            {
                "name": "Fluid Exchange Machine",
                "description": "Efficient machine for exchanging transmission fluid with ease.",
                "price": 1499.99,
                "image": "img/product-1.jpg"
            }
        ]
    },
    {
        "category": "Tyre Service Equipments",
        "products": []
    },
    {
        "category": "Bodyshop Equipments",
        "products": []
    },
    {
        "category": "Washing Equipments",
        "products": []
    },
    {
        "category": "AC Battery Equipments",
        "products": []
    },
    {
        "category": "General Tools & Supplies",
        "products": []
    },
    {
        "category": "Camshaft Timing & Special Tools",
        "products": []
    }
]; */

const productsData = [
    {
        "name": "Autel Maxisys 906 Pro",
        "description": "Cutting-edge scanner with precise diagnostics and programming capabilities.",
        "price": 599.99,
        "image": "img/product-1.jpg"
    },
    {
        "name": "Double Scissor Lift",
        "description": "Cutting-edge scanner with precise diagnostics and programming capabilities.",
        "price": 599.99,
        "image": "img/product-2.jpg"
    },
    {
        "name": "Hydroulic Table",
        "description": "Cutting-edge scanner with precise diagnostics and programming capabilities.",
        "price": 599.99,
        "image": "img/product-3.jpg"
    },
    {
        "name": "Break Lathe Machine",
        "description": "Cutting-edge scanner with precise diagnostics and programming capabilities.",
        "price": 599.99,
        "image": "img/product-4.jpg"
    },
    {
        "name": "Spot Welding",
        "description": "Cutting-edge scanner with precise diagnostics and programming capabilities.",
        "price": 599.99,
        "image": "img/product-5.jpg"
    },
    {
        "name": "Undercarriage Pressure",
        "description": "Cutting-edge scanner with precise diagnostics and programming capabilities.",
        "price": 599.99,
        "image": "img/product-6.jpg"
    },
    {
        "name": "Car Battery Charger",
        "description": "Cutting-edge scanner with precise diagnostics and programming capabilities.",
        "price": 599.99,
        "image": "img/product-7.jpg"
    },
    {
        "name": "Oil Filter Wrench Set",
        "description": "Cutting-edge scanner with precise diagnostics and programming capabilities.",
        "price": 599.99,
        "image": "img/product-8.jpg"
    }
]

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('product-list');

    // Function to generate HTML for each product
    function generateProductHTML(product) {
        return `
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="${product.image}" alt="${product.name}">
                        <!-- <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                        </div> -->
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">${product.name}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 class="text-muted ml-2"><del>$${product.price}</del></h6>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Iterate over product data array and append HTML to container
    productsData.forEach(product => {
        const productHTML = generateProductHTML(product);
        container.innerHTML += productHTML;
    });
});

    
})(jQuery);

