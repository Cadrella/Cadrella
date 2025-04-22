let description_content = 'A sturdy wooden wall frame, minimalist in design, stretches across the living room wall—crafted from dark walnut with subtle grain textures that echo nature’s calm. Its corners are smoothly rounded, evoking a modern yet timeless feel. The frame surrounds a large canvas, centered perfectly at eye level, and softly illuminated by a pair of warm-toned LED sconces above. The contrast between the natural wood and the swirling blues of the canvas makes the art feel alive. Beneath the painting, a slim brass nameplate simply reads: Vincent van Gogh – 1889. The wall itself is painted a soft, matte stone gray, enhancing the dramatic blues and yellows within the artwork, making the entire frame seem like a portal into the dreamscape beyond.';

let catalogues = document.getElementById('catalogues');

let clickOnSeeOurProducts = () => {
    if(document.getElementById('all_content')) document.getElementById('all_content').remove();

    // Create main container
    const main = document.createElement("main");
    main.id = "all_content";

    // Create header
    const header = document.createElement("header");
    header.id = "choose_catalogue";
    main.appendChild(header);

    document.querySelectorAll('#product_path').forEach((path) => {
        //if(path.innerHTML == "You can personalize a frmae by filling this form") {
            path.remove();
        //}
    });

    // Create product path div
    const productPath = document.createElement("div");
    productPath.id = "product_path";
    productPath.innerHTML = "Art > Van Gogh";
    main.appendChild(productPath);

    // Create section container
    const productsContainer = document.createElement("section");
    productsContainer.id = "products_container";

    // Create and append 6 product cards
    for (let i = 0; i < 14; i++) {
        const card = document.createElement("div");
        card.className = "card";

        // Only fill in content for the first card
        //if (i === 0) {
            const img = document.createElement("img");
            img.className = "product_image";
            img.src = "Van_.jpg";

            const name = document.createElement("b");
            name.innerHTML= "Van Gogh";
            name.className = "product_name";

            const price = document.createElement("p");
            price.innerHTML = `${i+1}.99$`;
            price.className = "product_price";

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);
        //}

        productsContainer.appendChild(card);
    }

    // Append the section to main
    main.appendChild(productsContainer);

    // Append everything to the body
    document.body.appendChild(main);

    if(document.querySelector('.arrow_left').classList[1] == 'show_left_arrow')
        document.querySelector('.arrow_left').classList.remove('show_left_arrow');

        void document.querySelector('.arrow_left').offsetWidth;

    document.querySelector('.arrow_left').classList.add('hide_left_arrow');


    if(document.querySelector('.arrow_right').classList[1] == 'show_right_arrow')
        document.querySelector('.arrow_right').classList.remove('show_right_arrow');

        void document.querySelector('.arrow_right').offsetWidth;

    document.querySelector('.arrow_right').classList.add('hide_right_arrow');


    if(document.querySelector('.Frame_Image_Left').classList[1] == 'show_left')
        document.querySelector('.Frame_Image_Left').classList.remove('show_left');

        void document.querySelector('.Frame_Image_Left').offsetWidth;

    document.querySelector('.Frame_Image_Left').classList.add('hide_left');


    if(document.querySelector('.Frame_Image').classList[1] == 'show')
        document.querySelector('.Frame_Image').classList.remove('show');

        void document.querySelector('.Frame_Image').offsetWidth;

    document.querySelector('.Frame_Image').classList.add('hide');


    if(document.querySelector('.Frame_Image_Right').classList[1] == 'show_right')
        document.querySelector('.Frame_Image_Right').classList.remove('show_right');

        void document.querySelector('.Frame_Image_Right').offsetWidth;

    document.querySelector('.Frame_Image_Right').classList.add('hide_right');


    if(document.querySelector('#welcome_text').classList[0] == 'show_welcome')
        document.querySelector('#welcome_text').classList.remove('show_welcome');

        void document.querySelector('#welcome_text').offsetWidth;

    document.querySelector('#welcome_text').classList.add('hide_welcome');



    if(document.querySelector('#cadrella_text').classList[0] == 'show_cadrella')
        document.querySelector('#cadrella_text').classList.remove('show_cadrella');

        void document.querySelector('#cadrella_text').offsetWidth;

    document.querySelector('#cadrella_text').classList.add('hide_cadrella');



    if(document.querySelector('#catalogues_text').classList[0] == 'show_catalogues_text')
        document.querySelector('#catalogues_text').classList.remove('show_catalogues_text');

        void document.querySelector('#catalogues_text').offsetWidth;

    document.querySelector('#catalogues_text').classList.add('hide_catalogues_text');



    if(document.querySelector('#product_path').classList[0] == 'hide_product_path')
        document.querySelector('#product_path').classList.remove('hide_product_path');

        void document.querySelector('#product_path').offsetWidth;

    document.querySelector('#product_path').classList.add('show_product_path');

    document.querySelectorAll('.card').forEach((element) => {
        if(element.classList[0] == 'hide_card')
            element.classList.remove('hide_card');

            void element.offsetWidth;

        element.classList.add('show_card');
    });


    document.querySelectorAll('.product_name').forEach((element) => {
        if(element.classList[0] == 'hide_product_name')
        element.classList.remove('hide_product_name');

        void element.offsetWidth;

        element.classList.add('show_product_name');
    });


    document.querySelectorAll('.product_price').forEach((element) => {
        if(element.classList[0] == 'hide_product_price')
        element.classList.remove('hide_product_price');

        void element.offsetWidth;

        element.classList.add('show_product_price');
    });



    document.querySelectorAll('.product_image').forEach((element) => {
        if(element.classList[0] == 'hide_product_image')
        element.classList.remove('hide_product_image');

        void element.offsetWidth;

        element.classList.add('show_product_image');
    });



    document.getElementById('left_arrow').style.position = 'relative';
    document.getElementById('right_arrow').style.position = 'relative';
    document.querySelector('.arrow_left').style.position = 'absolute';
    document.querySelector('.arrow_right').style.position = 'absolute';
    document.getElementById('catalogues_text').style.position = 'absolute';
    document.getElementById('catalogues_text').style.zIndex = '3';
    document.getElementById('catalogues_text').innerHTML = 'Choose Catalogues';


    setTimeout(() => {
        const style = document.createElement('style');
        style.textContent = `
            #products_container::-webkit-scrollbar {
                width: 8px;
                height: 8px;
            }

            #products_container::-webkit-scrollbar-track {
                background: transparent;
            }

            #products_container::-webkit-scrollbar-thumb {
                background: #4B4D4A; /* black thumb */
                border-radius: 4px;
            }
        `;
        document.head.appendChild(style);
    }, 1250);



    document.querySelectorAll('.card').forEach((card, index) => {
        let currentIndex = index;
        card.addEventListener('click', () => {
            clickOnProduct(card, currentIndex, index)
        });
    });
}

catalogues.addEventListener('click', clickOnSeeOurProducts);

function clickOnProduct(card, currentIndex, index) {
    //Removing all other products, and only the selected one remains at the top left
    document.querySelectorAll('.card').forEach((card, index) => {
        if(index != currentIndex){
            card.remove();
        }
    });

    //document.getElementById('products_container').style.paddingLeft = '20px';

    //Transform the products container into a flexbox
    let pc = document.getElementById('products_container');
    pc.style.display = 'flex';
    
    //Create the product's details box inside the flexbox near the selected product card
    let details = document.createElement('section');
    details.id = 'product_details';
    pc.appendChild(details);

    //Add the description section
    let description = document.createElement('section');
    description.id = 'product_description';
    description.innerHTML = `<span id="description_text">${description_content}</span>`;
    details.appendChild(description);

    //Add the functionality section
    let functionality = document.createElement('section');
    functionality.id = 'product_functionality';
    details.appendChild(functionality);

    //Add the description button
    let desc_conatiner = document.createElement('div');
    desc_conatiner.id = 'description_button_c';
    functionality.appendChild(desc_conatiner);

    let desc = document.createElement('button');
    desc.id = 'description_button';
    desc.className = 'products_buttons';
    desc.innerHTML = 'Description';
    desc.style.backgroundColor = '#fafafa';
    desc.style.color = '#4B4D4A';
    desc_conatiner.appendChild(desc);

    desc.addEventListener('click', description_function);

    //Add the Mockup Placement (or Scene Rendering) button
    let mockup_container = document.createElement('div');
    mockup_container.id = 'mockup_button_c';
    functionality.appendChild(mockup_container);

    let mockup = document.createElement('button');
    mockup.id = 'mockup_button';
    mockup.className = 'products_buttons';
    mockup.innerHTML = 'Mockup';
    mockup_container.appendChild(mockup);

    mockup.addEventListener('click', mockup_function);

    //Add the order button
    let order_container = document.createElement('div');
    order_container.id = 'order_button_c';
    functionality.appendChild(order_container);

    let order = document.createElement('button');
    order.id = 'order_button';
    order.className = 'products_buttons';
    order.innerHTML = 'Order';
    order_container.appendChild(order);

    order.addEventListener('click', order_function);

    //Add the back to gallery button
    let back_to_gallery = document.createElement('button');
    back_to_gallery.id = 'back_to_gallery_button';
    back_to_gallery.className = 'products_buttons';
    back_to_gallery.innerHTML = 'Back to Gallery';
    functionality.appendChild(back_to_gallery);

    back_to_gallery.addEventListener('click', back_to_gallery_function);

    //Give flex: 0.3; for the selected card
    card.classList.add = ('flex_0_3');

    //Give the product image a smaller size
    let pi = card.querySelector('.product_image');
    pi.style.width = '180px';
}


let description_function = () => {
    let product_description = document.getElementById('product_description');
    if (document.getElementById('description_text')) document.getElementById('description_text').remove();
    if (document.querySelector('.mockup_bg')) document.querySelector('.mockup_bg').remove();
    if (document.querySelector('.order_form')) document.querySelector('.order_form').remove();
    let description_text = document.createElement('span');
    description_text.id = 'description_text';
    description_text.innerHTML = `${description_content}`;
    product_description.prepend(description_text);

    let d_button = document.getElementById('description_button');
    d_button.style.backgroundColor = '#fafafa';
    d_button.style.color = '#4B4D4A';

    let m_button = document.getElementById('mockup_button');
    m_button.style.backgroundColor = '#C0904B';
    m_button.style.color = '#fafafa';

    let o_button = document.getElementById('order_button');
    o_button.style.backgroundColor = '#C0904B';
    o_button.style.color = '#fafafa';
}

let mockup_function = () => {
    let product_description = document.getElementById('product_description');
    if (document.getElementById('description_text')) document.getElementById('description_text').remove();
    if (document.querySelector('.mockup_bg')) document.querySelector('.mockup_bg').remove();
    if (document.querySelector('.order_form')) document.querySelector('.order_form').remove();
    let mockup_bg = document.createElement('img');
    mockup_bg.src = 'wall.jpg';
    mockup_bg.className = 'mockup_bg';
    product_description.prepend(mockup_bg);

    document.querySelector('.mockup_bg').style.height = '235px';

    let m_button = document.getElementById('mockup_button');
    m_button.style.backgroundColor = '#fafafa';
    m_button.style.color = '#4B4D4A';

    let d_button = document.getElementById('description_button');
    d_button.style.backgroundColor = '#C0904B';
    d_button.style.color = '#fafafa';

    let o_button = document.getElementById('order_button');
    o_button.style.backgroundColor = '#C0904B';
    o_button.style.color = '#fafafa';
}

let order_function = () => {
    let product_description = document.getElementById('product_description');
    if (document.getElementById('description_text')) document.getElementById('description_text').remove();
    if (document.querySelector('.mockup_bg')) document.querySelector('.mockup_bg').remove();
    if (document.querySelector('.order_form')) document.querySelector('.order_form').remove();
    let order_form = document.createElement('input');
    order_form.className = 'order_form';
    product_description.prepend(order_form);

    let o_button = document.getElementById('order_button');
    o_button.style.backgroundColor = '#fafafa';
    o_button.style.color = '#4B4D4A';

    let d_button = document.getElementById('description_button');
    d_button.style.backgroundColor = '#C0904B';
    d_button.style.color = '#fafafa';

    let m_button = document.getElementById('mockup_button');
    m_button.style.backgroundColor = '#C0904B';
    m_button.style.color = '#fafafa';
}

let back_to_gallery_function = () => {
    if(document.getElementById('all_content')) document.getElementById('all_content').remove();

        // Create main container
        const main = document.createElement("main");
        main.id = "all_content";
        main.style.top = '175px';

        //Give main the Grid property
        main.style.display = 'grid';

        // Create header
        const header = document.createElement("header");
        header.id = "choose_catalogue";
        main.appendChild(header);

        // Create product path div
        const productPath = document.createElement("div");
        productPath.id = "product_path";
        productPath.innerHTML = "Art > Van Gogh";
        main.appendChild(productPath);

        // Create section container
        const productsContainer = document.createElement("section");
        productsContainer.id = "products_container";

        // Create and append 6 product cards
        for (let i = 0; i < 14; i++) {
            const card = document.createElement("div");
            card.className = "card";

            // Only fill in content for the first card
            //if (i === 0) {
                const img = document.createElement("img");
                img.className = "product_image";
                img.src = "Van_.jpg";

                const name = document.createElement("b");
                name.innerHTML= "Van Gogh";
                name.className = "product_name";

                const price = document.createElement("p");
                price.innerHTML = `${i+1}.99$`;
                price.className = "product_price";

                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(price);
            //}

            productsContainer.appendChild(card);
        }

        // Append the section to main
        main.appendChild(productsContainer);

        // Append everything to the body
        document.body.appendChild(main);


        if(document.querySelector('#catalogues_text').classList[0] == 'show_catalogues_text')
            document.querySelector('#catalogues_text').classList.remove('show_catalogues_text');

            void document.querySelector('#catalogues_text').offsetWidth;

        document.querySelector('#catalogues_text').classList.add('hide_catalogues_text');



        if(document.querySelector('#product_path').classList[0] == 'hide_product_path')
            document.querySelector('#product_path').classList.remove('hide_product_path');

            void document.querySelector('#product_path').offsetWidth;

        document.querySelector('#product_path').classList.add('show_product_path');

        document.querySelectorAll('.card').forEach((element) => {
            if(element.classList[0] == 'hide_card')
                element.classList.remove('hide_card');
    
                void element.offsetWidth;
    
            element.classList.add('show_card');
        });


        document.querySelectorAll('.product_name').forEach((element) => {
            if(element.classList[0] == 'hide_product_name')
            element.classList.remove('hide_product_name');

            void element.offsetWidth;

            element.classList.add('show_product_name');
        });


        document.querySelectorAll('.product_price').forEach((element) => {
            if(element.classList[0] == 'hide_product_price')
            element.classList.remove('hide_product_price');

            void element.offsetWidth;

            element.classList.add('show_product_price');
        });



        document.querySelectorAll('.product_image').forEach((element) => {
            if(element.classList[0] == 'hide_product_image')
            element.classList.remove('hide_product_image');

            void element.offsetWidth;

            element.classList.add('show_product_image');
        });



        document.getElementById('left_arrow').style.position = 'relative';
        document.getElementById('right_arrow').style.position = 'relative';
        document.querySelector('.arrow_left').style.position = 'absolute';
        document.querySelector('.arrow_right').style.position = 'absolute';
        document.getElementById('catalogues_text').style.position = 'absolute';
        document.getElementById('catalogues_text').style.zIndex = '3';
        document.getElementById('catalogues_text').innerHTML = 'Choose Catalogues';


        document.querySelectorAll('.card').forEach((card, index) => {
            let currentIndex = index;
            card.addEventListener('click', () => {
                //Removing all other products, and only the selected one remains at the top left
                document.querySelectorAll('.card').forEach((card, index) => {
                    if(index != currentIndex){
                        card.remove();
                    }
                });

                //document.getElementById('products_container').style.paddingLeft = '20px';

                //Transform the products container into a flexbox
                let pc = document.getElementById('products_container');
                pc.style.display = 'flex';
                
                //Create the product's details box inside the flexbox near the selected product card
                let details = document.createElement('section');
                details.id = 'product_details';
                pc.appendChild(details);

                //Add the description section
                let description = document.createElement('section');
                description.id = 'product_description';
                description.innerHTML = `<span id="description_text">${description_content}</span>`;
                details.appendChild(description);

                //Add the functionality section
                let functionality = document.createElement('section');
                functionality.id = 'product_functionality';
                details.appendChild(functionality);

                //Add the description button
                let desc_conatiner = document.createElement('div');
                desc_conatiner.id = 'description_button_c';
                functionality.appendChild(desc_conatiner);

                let desc = document.createElement('button');
                desc.id = 'description_button';
                desc.className = 'products_buttons';
                desc.innerHTML = 'Description';
                desc.style.backgroundColor = '#fafafa';
                desc.style.color = '#4B4D4A';
                desc_conatiner.appendChild(desc);

                desc.addEventListener('click', description_function);

                //Add the Mockup Placement (or Scene Rendering) button
                let mockup_container = document.createElement('div');
                mockup_container.id = 'mockup_button_c';
                functionality.appendChild(mockup_container);

                let mockup = document.createElement('button');
                mockup.id = 'mockup_button';
                mockup.className = 'products_buttons';
                mockup.innerHTML = 'Mockup';
                mockup_container.appendChild(mockup);

                mockup.addEventListener('click', mockup_function);

                //Add the order button
                let order_container = document.createElement('div');
                order_container.id = 'order_button_c';
                functionality.appendChild(order_container);

                let order = document.createElement('button');
                order.id = 'order_button';
                order.className = 'products_buttons';
                order.innerHTML = 'Order';
                order_container.appendChild(order);

                order.addEventListener('click', order_function);

                //Add the back to gallery button
                let back_to_gallery = document.createElement('button');
                back_to_gallery.id = 'back_to_gallery_button';
                back_to_gallery.className = 'products_buttons';
                back_to_gallery.innerHTML = 'Back to Gallery';
                functionality.appendChild(back_to_gallery);

                back_to_gallery.addEventListener('click', back_to_gallery_function);

                //Give flex: 0.3; for the selected card
                card.classList.add = ('flex_0_3');

                //Give the product image a smaller size
                let pi = card.querySelector('.product_image');
                pi.style.width = '180px';
            });
        });
}