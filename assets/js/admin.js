
var arrProduct = [];
function createProduct()
{
    if(localStorage.getItem('product') == null)
    {

        arrProduct = [
            {
                id: "0",
                img:'macbook1.jpg',
                name: 'Macbook',
                prices: '1200',
                type: "macbook"
            },
        
            {
                id: "1",
                img: '13promax.jpg',
                name: 'IPHONE 13 Pro max new',
                prices: '2000',
                type: "iphone"
            },
        
            { 
                id: "2",
                img: '13.jpg',
                name: 'IPHONE 13 64GB new',
                prices: '1000',
                type: "iphone"
            },
        
            {
                id: "3",
                img: '13mini.jpg',
                name: 'IPHONE 13 mini new',
                prices: '800',
                type: "iphone"
            },
        
            {
                id: "4",
                img: '13mini.jpg',
                name: 'IPHONE 13 mini new',
                prices: '900',
                type: "iphone"
            },
            
            {
                id: "5",
                img: '13mini.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1000',
                type: "iphone"
            },
        
            {
                id: "6",
                img: '13mini.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1100',
                type: "iphone"
            },
        
            {
                id: "7",
                img: '13mini.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1200',
                type: "iphone"
            },
        
            {
                id: "8",
                img: '13mini.jpg',
                name: 'IPHONE 13 mini new',
                prices: '1300',
                type: "iphone"
            },
        
            
            {
                id: "9",
                img: 'macbook1.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 256GB',
                prices: '2400',
                type: "macbook"
            },
        
            {
                id: "10",
                img: 'macbook2.jpg',
                name: 'MacBook Pro 16" 2019 Touch Bar 2.6GHz Core i7 512GB',
                prices: '2600',
                type: "macbook"
            },
        
            {
                id: "11",
                img: 'macbook3.jpg',
                name: 'MacBook Air 13" 2020 M1 16GB/256GB',
                prices: '2900',
                type: "macbook"
            },
        
            {
                id: "12",
                img: 'macbook4.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 16GB/256GB',
                prices: '1900',
                type: "macbook"
            },
        
            {
                id: "13",
                img: 'macbook5.jpg',
                name: 'MacBook Pro 14" 2021 M1 Pro',
                prices: '1399',
                type: "macbook"
            },
        
            {
                id: "14",
                img: 'macbook6.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar 2.0GHz Core i5 512GB',
                prices: '1499',
                type: "macbook"
            },
        
            {
                id: "15",
                img: 'macbook7.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 256GB',
                prices: '999',
                type: "macbook"
            },
        
            {
                id: "16",
                img: 'macbook7.jpg',
                name: 'MacBook Pro 13" 2020 Touch Bar M1 256GB',
                prices: '1099',
                type: "macbook"
            },
        
            {
                id: "17",
                img: 'ipad1.jpg',
                name: 'M??y t??nh b???ng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1000',
                type: "ipad"
            },
        
            {
                id: "18",
                img: 'ipad2.jpg',
                name: 'M??y t??nh b???ng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1400',
                type: "ipad"
            },
        
            {
                id: "19",
                img: 'ipad3.jpg',
                name: 'M??y t??nh b???ng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1600',
                type: "ipad"
            },
        
            {
                id: "20",
                img: 'ipad4.jpg',
                name: 'M??y t??nh b???ng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1700',
                type: "ipad"
            },
        
            {
                id: "21",
                img: 'ipad5.jpg',
                name: 'M??y t??nh b???ng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '2100',
                type: "ipad"
            },
        
            {
                id: "22",
                img: 'ipad6.jpg',
                name: 'M??y t??nh b???ng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '2000',
                type: "ipad"
            },
        
            {
                id: "23",
                img: 'ipad7.jpg',
                name: 'M??y t??nh b???ng iPad Pro M1 12.9 inch WiFi Cellular 128GB (2021)',
                prices: '2400',
                type: "ipad"
            }
        
            ];
            localStorage.setItem('product',JSON.stringify(arrProduct));
    } else{
        arrProduct = JSON.parse(localStorage.getItem('product'));
    }
}

var arrCustomer = [];
function createCustomer()
{

    if(localStorage.getItem('customer') == null)
    {

        arrCustomer = [
            {
                user: 'admin',
                password: 'admin',
                email: 'lydatltd@gmail.com',
                level: 0,
                comment:[],
                status:"Ho???t ?????ng"
            },
            {
                user: 'datisekai',
                password: 'bedatdz',
                email: 'lydatltd@gmail.com',
                level: 1,
                comment:[],
                status:"Ho???t ?????ng"
            }
        ];
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
    } else{
        arrCustomer = JSON.parse(localStorage.getItem('customer'));
    }
}


function createOrder()
{
    if(localStorage.getItem('order') == null)
    {

        arrOrder = [
            {
                currentTime: "18:38 30/11/2021",
                id: "1",
                img: "13promax.jpg",
                name: "IPHONE 13 Pro max new",
                prices: "2000",
                quantify: 1,
                status: "??ang x??? l??",
                type: "iphone",
                user: "admin"
            }
        ];
        localStorage.setItem('order',JSON.stringify(arrOrder));
    } else{
        arrOrder = JSON.parse(localStorage.getItem('order'));
    }
}
createOrder();
createCustomer();
createProduct();
function searchInfo(id)
{
    txtSearch = document.getElementById(id).value;
    if(txtSearch != '')
    {
        if(txtSearch.toUpperCase().indexOf('IPH') != -1)
        {
            window.location = 'index.html?product=iphone';
        }
        else if(txtSearch.toUpperCase().indexOf('IPA') != -1)
        {
            window.location = 'index.html?product=ipad';
        }
        else if(txtSearch.toUpperCase().indexOf('MAC') != -1)
        {
            window.location = 'index.html?product=macbook';
        }
        else {
            renderEmptyProduct();
        }
    }
}

function preLoading()
{
    var preLoader = document.getElementById('preLoader');
    window.addEventListener('load', hideLoading);
}

function hideLoading()
{
    setTimeout(function(){
        preLoader.style.display = "none";
    },100);
}

preLoading();

function onCart()
{
    if(isLogin())
    {
        window.location = "cart.html";
    } else{
        displayLogin();
    }
}


function displayLogin()
{
    document.querySelector('.modal__login').style.display = "block";
}


function displayLogin()
{
    document.querySelector('.modal__login').style.display = "block";
}

function hideLogin()
{
    document.querySelector('.modal__login').style.display = "none";
    hideErrorUser();
    hideErrorPass();
    hideErrorEmail();
}
function onLogin()
{
    window.sessionStorage;
    var admin = false;
    var level = 1;
    var username  = document.getElementById('username').value;
    var password  = document.getElementById('password').value;
    var flag = -1;
    if(username == "")
    {
        document.getElementById('errorUser').textContent = "Username kh??ng ???????c b??? tr???ng";
        flag = 0;
    }
    if(password == "")
    {
        document.getElementById('errorPass').textContent = "Password kh??ng ???????c b??? tr???ng";
        flag = 0;
    }
    for(var index in arrCustomer)
    {
        if(arrCustomer[index].user.toUpperCase() == username.toUpperCase())
        {
            if(arrCustomer[index].status == "B??? kh??a")
            {
                flag = -2;
                break;
            }
        }
    }

    for (var i=0;i<arrCustomer.length;i++)
    {
        if (username.toUpperCase() == arrCustomer[i].user.toUpperCase() && password == arrCustomer[i].password && arrCustomer[i].status !="B??? kh??a")
        {
            flag = 1;
            if(arrCustomer[i].level == 0) {
                level = arrCustomer[i].level; admin = true;
            }
            break;
        }
    }

    if (flag==1){
        sessionStorage.setItem('user',username);
        sessionStorage.setItem('level',level)
        hideLogin();
        document.querySelector('.header__login').style.display = 'none';
        document.getElementById('hasLogin').style.display = 'flex';
        document.getElementById('userLogin').textContent = username;
        swal("????ng nh???p th??nh c??ng!", "B???n ???? c?? th??? mua h??ng!", "success");
        hideErrorUser();
        hideErrorPass();
        hideErrorEmail();
        if (admin == 1) document.getElementById('admin').style.display = "";
        else {
            document.getElementById('admin').style.display = "none";
        }
        
    }
    else if(flag == -1){
        document.getElementById('errorLogin').textContent = "Username ho???c Password kh??ng ch??nh x??c!";
    } 
    else if(flag == -2)
    {
        document.getElementById('errorLogin').textContent = "T??i kho???n c???a b???n ???? b??? kh??a.";
    }
    
}

function hideErrorUser()
{
    document.getElementById('errorUser').textContent = "";
    document.getElementById('errorLogin').textContent = "";
}

function hideErrorPass()
{
    document.getElementById('errorPass').textContent = "";
    document.getElementById('errorLogin').textContent = "";
}

function hideErrorEmail()
{
    document.getElementById('errorEmail').textContent = "";
}


function onRegister()
{
    var username  = document.getElementById('username').value;
    var password  = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var flag = 1;
    if(username == "" || username.length < 5)
    {
        document.getElementById('errorUser').textContent = "Username ph???i l???n h??n 5 k?? t???";
        flag = 0;
    }
    if(password == "" || password.length < 5)
    {
        document.getElementById('errorPass').textContent = "Password ph???i l???n h??n 5 k?? t???";
        flag = 0;
    }
    if(email == "" || email.length < 5 || email.indexOf('@') == -1)
    {
        document.getElementById('errorEmail').textContent = "Email ph???i c?? @ v?? l???n h??n 5 k?? t???";
        flag = 0;
    }
    if(username != "" && password != "" && email != "")
    {
        for (var i=0;i<arrCustomer.length;i++)
        {
            if(username.toUpperCase() == arrCustomer[i].user.toUpperCase())
            {
                document.getElementById('errorLogin').textContent = "Username ???? t???n t???i";
                flag = -1;
                break;
            }
            if(email.toUpperCase() == arrCustomer[i].email.toUpperCase())
            {
                document.getElementById('errorLogin').textContent = "Email ???? t???n t???i";
                flag = -1;
                break;
            }
        }
    }

    if(flag == 1)
    {
        var customer = {
            user: username,
            password: password,
            email: email,
            level: 1
           
        };
        arrCustomer.push(customer);;
        swal("????ng k?? th??nh c??ng!", "Vui l??ng ????ng nh???p", "success");
        onSignIn();
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
        console.log(arrCustomer);
    }

}

function checkSession()
{
    if(sessionStorage.getItem('user') != null)
    {
        document.querySelector('.header__login').style.display = 'none';
        document.getElementById('userLogin').textContent = sessionStorage.getItem('user');
        document.getElementById('hasLogin').style.display = 'flex';
        document.querySelector('action__comment').style.display = 'block';
    }
    if(parseInt(sessionStorage.getItem('level')) == 0)
    {
        document.getElementById('admin').style.display = "";
    }
    else{
        document.getElementById('admin').style.display = "none";
    }
}

function isLogin()
{
    if(sessionStorage.getItem('user') != null) return true;
    return false;
}

function onLogOut()
{
    swal({
        title: "B???n mu???n ????ng xu???t?",
        text: "Khi mu???n mua h??ng, b???n s??? ph???i ????ng nh???p l???i!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('level');
            window.location = "index.html";
        }
      });
    
}


function onSignUp()
{
    document.querySelector('.modal__content-heading').textContent = "REGISTER";
    document.getElementById('modal__email').style.display = "block";
    document.getElementById('register').style.display = "";
    document.getElementById('login').style.display = "none";
    document.getElementById('modal-signup').style.display = "none";
    document.getElementById('modal-signin').style.display = "";
   
    hideErrorEmail();
    hideErrorPass();
    hideErrorUser();
}

function onSignIn()
{
    document.querySelector('.modal__content-heading').textContent = "LOGIN";
    document.getElementById('modal__email').style.display = "none";
    document.getElementById('register').style.display = "none";
    document.getElementById('login').style.display = "";
    document.getElementById('modal-signup').style.display = "";
    document.getElementById('modal-signin').style.display = "none";
    hideErrorEmail();
    hideErrorPass();
    hideErrorUser();
}

function isLogin()
{
    if(sessionStorage.getItem('user') != null) return true;
    return false;
}

function checkSession()
{
    if(sessionStorage.getItem('user') != null)
    {
        document.querySelector('.header__login').style.display = 'none';
        document.getElementById('userLogin').textContent = sessionStorage.getItem('user');
        document.getElementById('hasLogin').style.display = 'flex';
    }
    if(parseInt(sessionStorage.getItem('level')) == 0)
    {
        document.getElementById('admin').style.display = "";
    }
    else{
        document.getElementById('admin').style.display = "none";
    }
}

function displayModalBars()
{
    document.getElementById('barsOverlay').style.display = "block";
    document.getElementById('barsContent').style.display = "block";
}

function hideModalBars()
{
    document.getElementById('barsOverlay').style.display = "none";
    document.getElementById('barsContent').style.display = "none";
    hideCategoryBars();
}

function displayCategoryBars()
{
    document.getElementById('barsCategoryItem').style.display = "block";
    document.getElementById('barCategoryClose').style.display = "block";
}

function hideCategoryBars()
{
    document.getElementById('barsCategoryItem').style.display = "none";
    document.getElementById('barCategoryClose').style.display = "none";
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

// JS ADMIN Start

function hideAdminBar()
{
    document.querySelector('.apps__category-heading').style.display = "none";
    document.querySelector('.apps__category').style.width = "70px";
    document.getElementById('quanlysp').style.display = "none";
    document.getElementById('quanlynd').style.display = "none";
    document.getElementById('xulydonhang').style.display = "none";
    document.getElementById('thongkedoanhthu').style.display = "none";
    document.getElementById('managerProduct').style.textAlign = "center";
    document.getElementById('managerUser').style.textAlign = "center";
    document.getElementById('managerCart').style.textAlign = "center";
    document.getElementById('managerStatistic').style.textAlign = "center";
    document.querySelector('.apps__category-header').style.justifyContent = "center";
    document.getElementById('hideAdmin').style.display = "none";
    document.getElementById('displayAdmin').style.display = "block";
}

function displayAdminBar()
{
    document.querySelector('.apps__category-heading').style.display = "block";
    document.querySelector('.apps__category').style.width = "250px";
    document.getElementById('quanlysp').style.display = "inline";
    document.getElementById('quanlynd').style.display = "inline";
    document.getElementById('xulydonhang').style.display = "inline";
    document.getElementById('thongkedoanhthu').style.display = "inline";
    document.getElementById('managerProduct').style.textAlign = "left";
    document.getElementById('managerUser').style.textAlign = "left";
    document.getElementById('managerCart').style.textAlign = "left";
    document.getElementById('managerStatistic').style.textAlign = "left";
    document.querySelector('.apps__category-header').style.justifyContent = "space-between";
    document.getElementById('hideAdmin').style.display = "block";
    document.getElementById('displayAdmin').style.display = "none";
}

window.onload = () =>{
    if(sessionStorage.getItem("level") != 0)
    {
        window.location = "index.html";
    }
    checkSession();
    renderAdmin();
    renderPagination();
}

function displayModalAdd()
{
    document.querySelector('.modal__add-product').style.display = "block";
}

function displayModalUpdate()
{
    document.querySelector('.modal__add-product-header-heading').textContent = "C???p nh???t";
    document.getElementById('btnadminadd').style.display = "none";
    document.getElementById('btnadminupdate').style.display = "block";
    document.querySelector('.modal__add-product').style.display = "block";
}

function hideModalAdd()
{
    document.querySelector('.modal__add-product').style.display = "none";
}

//H??m t???ng qu??t

function renderAdmin()
{
    var manager = getQueryVariable('manager') || "product";
    renderAdminTitle(manager);
    switch(manager)
    {
        case "product":
            renderMobileProduct();
            renderAdminProduct();
            break;
        case "user":
            renderAdminUser();
            renderUserMobile();
            break;
        case "handleproduct":
            renderHandleMobile();
            renderAdminProductHandle();
            break;
        case "benefits":
            renderBenefitMobile();
            renderAdminBenefits();
            break;
    }
}


function actionAddProduct()
{
    swal({
        title:"B???n c?? ch???c mu???n th??m s???n ph???m?",
        text:"Khi b???n th??m d??? li???u s??? ???????c c???p nh???t",
        icon:"warning",
        buttons:true,
        dangerMode:true
    })
    .then(willDelete => {
        if(willDelete){
            const fileUpload = document.getElementById('fadminimg');
            const uploadsImage = fileUpload.value.split("\\");
            const image = uploadsImage[uploadsImage.length - 1];
            var objProduct = {
                id: document.getElementById('txtadminid').value,
                img: image,
                name: document.getElementById('txtadminname').value,
                prices: document.getElementById('txtadminprices').value,
                type: document.getElementById('selectadminproduct').value
            }
            arrProduct.push(objProduct);
            localStorage.setItem("product",JSON.stringify(arrProduct));
            hideModalAdd();
            swal("Th??m th??nh c??ng","S???n ph???m c???a b???n ???? ???????c th??m","success");
            renderAdmin();
        }
    });
}

function addAdminProduct()
{
    renderAddProduct();
    displayModalAdd();
}

function renderAddProduct()
{
    const arrID = arrProduct.map((product) => parseInt(product.id));
    const maxID = Math.max.apply(Math,arrID);
    document.querySelector('.modal__add-product-id').innerHTML = ` <input type="text" value="${(maxID+1)}" readonly id="txtadminid">`
    document.querySelector('.modal__add-product-user').innerHTML = `<input type="text" value="ADMIN" id="txtadminuser" readonly>`;
    document.querySelector('.modal__add-product-name').innerHTML = ` <input type="text" placeholder="T??n s???n ph???m ....." value="" id="txtadminname">`;
    document.querySelector('.modal__add-product-prices').innerHTML = ` <input type="text" placeholder="Gi?? s???n ph???m" value="" id="txtadminprices">`;
    document.querySelector('.modal__add-product-img').innerHTML = `<input type="file" name="" id="fadminimg">`;
    document.getElementById('btnadminadd').innerHTML = `<button onclick="actionAddProduct();">Th??m m???i</button>`;
    document.getElementById('btnadminadd').style.display = "block";
    document.getElementById('btnadminupdate').style.display ="none";
    document.querySelector('.modal__add-product-header-heading').textContent = "Th??m m???i s???n ph???m";
}
//Manager = product

function renderAdminProduct()
{
    document.querySelector('.apps__content-add-product').innerHTML = ` <button onclick="addAdminProduct();"><i class="fas fa-cart-plus"></i> Th??m m???i</button>`;
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrProductPag = arrProduct.slice(begin,end);

    var listProduct = arrProductPag.map((product)=>{
        return ` <div class="apps__content-view">
        <div class="apps__content-view-id">
            <p>${product.id}</p>
        </div>

        <div class="apps__content-view-user">
            <p>ADMIN</p>
        </div>

        <div class="apps__content-view-name">
            <p>${product.name}</p>
        </div>

        <div class="apps__content-view-img">
            <img src="./assets/img/${product.img}" alt="">
        </div>

        <div class="apps__content-view-prices">
            <p>${product.prices}$</p>
        </div>

        <div class="apps__content-view-tools">
            <div class="apps__content-view-tools-update" onclick="updateAdminProduct(${product.id});">
                <i class="fas fa-pen"></i>
            </div>

            <div class="apps__content-view-tools-delete" onclick="deleteAdminProduct(${product.id})">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>`;
    });

    var htmls = listProduct.join('');
    document.querySelector('.apps__content-container-show').innerHTML = htmls;
}


function deleteAdminProduct(id)
{
    swal({
        title: "B???n c?? ch???c ch???n mu???n x??a?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            for(var index in arrProduct)
            {
                if(arrProduct[index].id == id)
                {
                    arrProduct.splice(index,1);
                    localStorage.setItem("product",JSON.stringify(arrProduct));
                    break;
                }
            }
            swal("X??a th??nh c??ng", "???? x??a s???n ph???m", "success");
            renderAdmin();
        }
      });
}

function deleteAdminUser(user)
{
    swal({
        title: "B???n c?? ch???c ch???n mu???n x??a?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            for(var index in arrCustomer)
            {
                if(arrCustomer[index].user == user)
                {
                    arrCustomer.splice(index,1);
                    break;
                }
            }
            swal("X??a th??nh c??ng", "???? x??a ng?????i d??ng", "success");
            localStorage.setItem("customer",JSON.stringify(arrCustomer));
            renderAdmin();
        }
      });
}

function updateAdminProduct(id)
{

    var objProduct = arrProduct.filter(product => product.id == id);
    renderAdminModal(objProduct);
    displayModalUpdate();
}

function updateAdminUser(user)
{
    var objUser = arrCustomer.filter(customer => customer.user == user);
    renderUserModal(objUser);
    document.getElementById('btnadminupdate').innerHTML = `<button onclick="actionUpdateUser('${user}')">C???p nh???t</button>`;
    displayModalUpdate();
}

function deleteHandleProduct(id)
{
    swal({
        title:"B???n c?? ch???c ch???n mu???n x??a?",
        icon:"warning",
        buttons:true,
        dangerMode:true
    })
    .then((willDelete) => {
        if(willDelete){

            arrOrder.splice(id,1);
            localStorage.setItem('order',JSON.stringify(arrOrder));
            swal("X??a th??nh c??ng","S???n ph???m ???? ???????c x??a","success");
            renderAdmin();
        }
    });
}

function updateHandleProduct(id)
{
    renderHandleModal(id);
    displayModalUpdate();
}

function renderHandleModal(id)
{
    document.querySelector('.modal__add-product-id').innerHTML = ` <input type="text" value="${arrOrder[id].id}" id="txtadminid" readonly>`
    document.querySelector('.modal__add-product-user').innerHTML = `<input type="text" value="${arrOrder[id].user}" id="txtadminuser" placeholder="Ng?????i mua" readonly>`;
    document.querySelector('.modal__add-product-name').innerHTML = ` <input type="text" placeholder="T??n s???n ph???m" value="${arrOrder[id].name}" id="txtadminpass">`
    document.querySelector('.modal__add-product-img').style.display = "none";
    document.getElementById('btnadminupdate').innerHTML = `<button onclick="actionUpdateHandle(${id})">C???p nh???t</button>`;
    document.getElementById('selectadminproduct').innerHTML =  `<option value="handling">??ang x??? l??</option>
                                                                <option value="handled">???? x??? l??</option>`;
}

function actionUpdateUser(user)
{
    swal({
        title: "B???n ch???c ch???n mu???n c???p nh???t?",
        text: "Khi b???n ?????ng ?? th?? d??? li???u c???a b???n s??? thay ?????i",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
    var status ='';
    if(document.getElementById('selectadminproduct').value == "hoatdong")
    {
        status = "Ho???t ?????ng";
    }
    else {
        status = "B??? kh??a";
    }
    var objUserUpdate = {
        user:document.getElementById('txtadminuser').value,
        password:document.getElementById('txtadminpass').value,
        email:document.getElementById('txtadminemail').value,
        level:document.getElementById('txtadminid').value,
        status:status,
    }
    for (var index in arrCustomer)
    {
        if(arrCustomer[index].user == user)
        {
            arrCustomer[index] = objUserUpdate;
            console.log(arrCustomer);
            localStorage.setItem('customer',JSON.stringify(arrCustomer));
            hideModalAdd();
            swal("C???p nh???t th??nh c??ng", "D??? li???u m???i ???? ???????c update", "success");
            renderAdmin();
            break;
        }
    }
}
}); 
}

function addAdminUser()
{
    renderRegisterModal();
    displayModalAdd();
}

function actionUpdateHandle(id)
{
    swal({
        title:"B???n c?? ch???c ch???n mu???n c???p nh???t?",
        text:"Khi c???p nh???t d??? li???u c???a b???n s??? ???????c thay ?????i",
        icon:"warning",
        buttons:true,
        dangerMode:true
    })
    .then(willDelete => {
        if(willDelete)
        {
            var status;
            if(document.getElementById('selectadminproduct').value == "handling")
            {
                status = "??ang x??? l??";
            }else {
                status = "???? x??? l??";
            }
            var objHandle = {
                currentTime:arrOrder[id].currentTime,
                id:arrOrder[id].id,
                img:arrOrder[id].img,
                name:arrOrder[id].name,
                prices:arrOrder[id].prices,
                quantify:arrOrder[id].quantify,
                status:status,
                user:arrOrder[id].user,
                type:arrOrder[id].type
            }

            arrOrder[id] = objHandle;
            localStorage.setItem('order',JSON.stringify(arrOrder));
            hideModalAdd();
            swal("C???p nh???t th??nh c??ng","D??? li???u c???a b???n ???? ???????c thay ?????i","success");
            renderAdmin();
        }
    });
}

function actionAddUser()
{
    swal({
        title: "B???n ch???c ch???n mu???n th??m?",
        text: "Khi b???n ?????ng ?? th?? d??? li???u c???a b???n s??? ???????c th??m",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
    var status ='';
    if(document.getElementById('selectadminproduct').value == "hoatdong")
    {
        status = "Ho???t ?????ng";
    }
    else {
        status = "B??? kh??a";
    }
    var objUserUpdate = {
        user:document.getElementById('txtadminuser').value,
        password:document.getElementById('txtadminpass').value,
        email:document.getElementById('txtadminemail').value,
        level:document.getElementById('txtadminid').value,
        status:status,
    }
        arrCustomer.push(objUserUpdate);
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
        hideModalAdd();
        swal("C???p nh???t th??nh c??ng", "D??? li???u m???i ???? ???????c update", "success");
        renderAdmin();
        
    
}
}); 
}

function actionUpdateProduct(id)
{
    swal({
        title:"B???n c?? ch???c ch???n mu???n c???p nh???t?",
        text:"Khi c???p nh???t d??? li???u s??? ???????c thay ?????i",
        icon:"warning",
        buttons:true,
        dangerMode:true
    })
    .then(willDelete => {
        if(willDelete)
        {
            const fileUpload = document.getElementById('fadminimg');
            const uploadsImage = fileUpload.value.split("\\");
            const image = uploadsImage[uploadsImage.length - 1];
            var objProduct = {
                id: document.getElementById('txtadminid').value,
                img: image,
                name: document.getElementById('txtadminname').value,
                prices: document.getElementById('txtadminprices').value,
                type: document.getElementById('selectadminproduct').value
            }
            for(var index in arrProduct)
            {
                if(arrProduct[index].id == id)
                {
                    arrProduct[index] = objProduct;
                    localStorage.setItem("product",JSON.stringify(arrProduct));
                    break;
                }
            }
            hideModalAdd();
            swal("C???p nh???t th??nh c??ng","D??? li???u ???? ???????c thay ?????i","success");
            renderAdmin();
        }
    });
}

function renderAdminModal(objProduct)
{
    document.querySelector('.modal__add-product-id').innerHTML = ` <input type="text" value="${objProduct[0].id}" readonly id="txtadminid">`
    document.querySelector('.modal__add-product-user').innerHTML = `<input type="text" value="${objProduct[0].user || "ADMIN"}" id="txtadminuser">`;
    document.querySelector('.modal__add-product-name').innerHTML = ` <input type="text" placeholder="T??n s???n ph???m ....." value="${objProduct[0].name}" id="txtadminname">`;
    document.querySelector('.modal__add-product-prices').innerHTML = ` <input type="text" placeholder="Gi?? s???n ph???m" value="${objProduct[0].prices}" id="txtadminprices">`;
    document.getElementById('selectadminproduct').value =  objProduct[0].type;
    document.getElementById('btnadminupdate').innerHTML = `<button onclick="actionUpdateProduct(${objProduct[0].id})">C???p nh???t</button>`;
   
}


function renderRegisterModal()
{
    document.querySelector('.modal__add-product-id').innerHTML = ` <input type="text" value="" id="txtadminid" placeholder="Level...">`
    document.querySelector('.modal__add-product-user').innerHTML = `<input type="text" id="txtadminuser" placeholder="T??i kho???n...">`;
    document.querySelector('.modal__add-product-name').innerHTML = ` <input type="text" placeholder="M???t kh???u..." id="txtadminpass">`
    document.querySelector('.modal__add-product-prices').innerHTML = ` <input type="text" placeholder="Email..." id="txtadminemail">`
    document.querySelector('.modal__add-product-img').style.display = "none";
    document.getElementById('btnadminadd').innerHTML = `<button onclick="actionAddUser();">Th??m m???i</button>`;
    document.getElementById('btnadminupdate').style.display = "none";
    document.getElementById('btnadminadd').style.display = "block";
    document.querySelector('.modal__add-product-header-heading').textContent ="Th??m m???i ng?????i d??ng";
    document.getElementById('selectadminproduct').innerHTML =  `<option value="hoatdong">Ho???t ?????ng</option>
                                                                <option value="khoa">Kh??a</option>`;
}

function renderUserModal(objUser)
{
    document.querySelector('.modal__add-product-id').innerHTML = ` <input type="text" value="${objUser[0].level}" id="txtadminid">`
    document.querySelector('.modal__add-product-user').innerHTML = `<input type="text" value="${objUser[0].user || "ADMIN"}" id="txtadminuser" placeholder="T??i kho???n" readonly>`;
    document.querySelector('.modal__add-product-name').innerHTML = ` <input type="text" placeholder="M???t kh???u" value="${objUser[0].password}" id="txtadminpass">`
    document.querySelector('.modal__add-product-prices').innerHTML = ` <input type="text" placeholder="Email..." value="${objUser[0].email}" id="txtadminemail">`
    document.querySelector('.modal__add-product-img').style.display = "none";
    document.getElementById('selectadminproduct').innerHTML =  `<option value="hoatdong">Ho???t ?????ng</option>
                                                                <option value="khoa">Kh??a</option>`;
}

function renderUserMobile()
{
    document.querySelector('.apps__content-add-product').innerHTML = ` <button onclick="addAdminUser();"><i class="fas fa-cart-plus"></i> Th??m m???i</button>`;
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrCustomerPag = arrCustomer.slice(begin,end);
    var listCustomer = arrCustomerPag.map(customer => {
        return `<div class="apps__content-mobile-view">
        <div class="apps__content-mobile-view-id">
            <p><i class="fas fa-radiation-alt"></i> Level: <span>${customer.level}</span></p>
        </div>

        <div class="apps__content-mobile-view-user">
            <p><i class="fas fa-user"></i> T??i kho???n: <span>${customer.user}</span> </p>
        </div>

        <div class="apps__content-mobile-view-name">
            <p><i class="fas fa-key"></i> M???t kh???u: <span>${customer.password}</span></p>
        </div>

        <div class="apps__content-mobile-view-img">
            <p><i class="fas fa-envelope"></i> Email: <span>${customer.email}</span> </p>
        </div>
        
        <div class="apps__content-mobile-view-prices">
            <p><i class="fas fa-battery-full"></i> T??nh tr???ng: <span>${customer.status}</span></p>
        </div>

        <div class="apps__content-mobile-view-tools">
            <div class="apps__content-mobile-view-tools-update" onclick="updateAdminUser('${customer.user}')">
                <i class="fas fa-pen"></i>
            </div>

            <div class="apps__content-mobile-view-tools-delete" onclick="deleteAdminUser('${customer.user}')">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>`
        
});
    var htmls = listCustomer.join('');
    document.querySelector('.apps__content-mobile').innerHTML = htmls;
}

function renderHandleMobile()
{
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrOrderPag = arrOrder.slice(begin,end);
    var listOrder = arrOrderPag.map((order,index) => {
        return `<div class="apps__content-mobile-view">
        <div class="apps__content-mobile-view-id">
            <p><i class="fas fa-radiation-alt"></i> ID: <span>${index}</span></p>
        </div>

        <div class="apps__content-mobile-view-user">
            <p><i class="fas fa-user"></i> Ng?????i mua: <span>${order.user}</span> </p>
        </div>

        <div class="apps__content-mobile-view-name">
            <p><i class="fas fa-file-signature"></i> T??n s???n ph???m: <span>${order.name}</span></p>
        </div>

        <div class="apps__content-mobile-view-img">
            <p><i class="fas fa-clock"></i> Th???i gian ?????t: <span>${order.currentTime}</span></p>
        </div>
        
        <div class="apps__content-mobile-view-prices">
            <p><i class="fas fa-battery-full"></i> T??nh tr???ng: <span>${order.status}</span></p>
        </div>

        <div class="apps__content-mobile-view-tools">
            <div class="apps__content-mobile-view-tools-update" onclick="updateHandleProduct(${index})">
                <i class="fas fa-pen"></i>
            </div>

            <div class="apps__content-mobile-view-tools-delete" onclick="deleteHandleProduct('${index}')">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>`
        
});
    var htmls = listOrder.join('');
    document.querySelector('.apps__content-mobile').innerHTML = htmls;
}

function renderPagination()
{
    var product = getQueryVariable('manager') || "product";
    var page = getQueryVariable('page') || 1;
    var prePage = 1;
    if(page > 1) prePage = parseInt(page) - 1;
    else {
          prePage = 1 + "#";
    }
    var maxPage;
    if(product != "user")
    {
        if(arrProduct.length % 8 == 0)
        {
            maxPage = parseInt(arrProduct.length/8); 
        }
        else maxPage = parseInt(arrProduct.length/8) + 1; 
    } else if(product == "user"){
        if(arrCustomer.length % 8 == 0)
        {
            maxPage = parseInt(arrCustomer.length/8); 
        }
        else maxPage = parseInt(arrCustomer.length/8) + 1; 
    } else if(product == "handleproduct")
    {
        if(arrOrder.length % 8 == 0)
        {
            maxPage = parseInt(arrOrder.length/8); 
        }
        else maxPage = parseInt(arrOrder.length/8) + 1;
    }
    var nextPage;
    if(page >= maxPage)
    {
        nextPage = maxPage + "# ";
    } else {
        nextPage = parseInt(page) + 1;
    }

    if(product != null)
    {
       
        document.getElementById('prePage').href = 'admin.html?manager='+product+'&page='+prePage;
        document.getElementById('nextPage').href = 'admin.html?manager='+product+'&page='+nextPage;
        document.getElementById('page1').href = 'admin.html?manager='+product+'&page=1';
        document.getElementById('page2').href = 'admin.html?manager='+product+'&page=2';
        document.getElementById('page3').href = 'admin.html?manager='+product+'&page=3';
    }

    if(page ==1 )
    {
        document.getElementById('page1').style.backgroundColor = "#FCB35F";
        document.getElementById('page1').style.color = "white";
    } 
    else if(page == 2)
    {
        document.getElementById('page2').style.backgroundColor = "#FCB35F";
        document.getElementById('page2').style.color = "white";
    }
    else if(page == 3)
    {
        document.getElementById('page3').style.backgroundColor = "#FCB35F";
        document.getElementById('page3').style.color = "white";
    }
}

function renderAdminTitle(type)
{
    switch(type)
    {
        case "product":
            renderAdminTitleProduct();
            break;
        case "user":
            renderAdminTitleUser();
            break;
        case "handleproduct":
            renderAdminTitleHandle();
            break;
    }
}

function renderAdminTitleHandle()
{
    var htmls = ` <div class="apps__content-title">
    <div class="apps__content-title-id">
        <p>ID</p>
    </div>

    <div class="apps__content-title-user">
        <p>Ng?????i mua</p>
    </div>

    <div class="apps__content-title-name">
        <p>T??n s???n ph???m</p>
    </div>

    <div class="apps__content-title-prices">
        <p>???nh s???n ph???m</p>
    </div>

    <div class="apps__content-title-img">
       <p>T??nh tr???ng</p>
    </div>

    <div class="apps__content-title-tools">
       <p>C??ng c???</p>
    </div>
</div>`;
    document.querySelector('.apps__content-container-title').innerHTML = htmls;
}

function renderAdminProductHandle()
{
    document.querySelector('.apps__content-add-product').style.display = "none";
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrOrderPag = arrOrder.slice(begin,end);

    var listOrder = arrOrderPag.map((order,index) => {
        return ` <div class="apps__content-view">
        <div class="apps__content-view-id">
            <p>${index}</p>
        </div>

        <div class="apps__content-view-user">
            <p>${order.user}</p>
        </div>

        <div class="apps__content-view-name">
            <p>${order.name}</p>
        </div>

        <div class="apps__content-view-img">
            <img src="./assets/img/${order.img}" alt="">
        </div>

        <div class="apps__content-view-prices">
           <p>${order.status}</p>
        </div>

        <div class="apps__content-view-tools">
            <div class="apps__content-view-tools-update" onclick="updateHandleProduct(${index})">
                <i class="fas fa-pen"></i>
            </div>

            <div class="apps__content-view-tools-delete" onclick="deleteHandleProduct(${index});">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>`;
    });

    var htmls = listOrder.join('');
    document.querySelector('.apps__content-container-show').innerHTML = htmls;

}


function renderAdminTitleProduct()
{
    var htmls = ` <div class="apps__content-title">
    <div class="apps__content-title-id">
        <p>ID</p>
    </div>

    <div class="apps__content-title-user">
        <p>Ng?????i b??n</p>
    </div>

    <div class="apps__content-title-name">
        <p>T??n s???n ph???m</p>
    </div>

    <div class="apps__content-title-img">
       <p>???nh s???n ph???m</p>
    </div>

    <div class="apps__content-title-prices">
        <p>Gi?? b??n</p>
    </div>

    <div class="apps__content-title-tools">
       <p>C??ng c???</p>
    </div>
</div>`;
    document.querySelector('.apps__content-container-title').innerHTML = htmls;
}

function renderAdminTitleUser()
{
    var htmls = ` <div class="apps__content-title">
    <div class="apps__content-title-id">
        <p>Level</p>
    </div>

    <div class="apps__content-title-user">
        <p>T??i kho???n</p>
    </div>

    <div class="apps__content-title-name">
        <p>M???t kh???u</p>
    </div>

    <div class="apps__content-title-img">
       <p>Email</p>
    </div>

    <div class="apps__content-title-prices">
        <p>T??nh tr???ng</p>
    </div>

    <div class="apps__content-title-tools">
       <p>C??ng c???</p>
    </div>
</div>`;
    document.querySelector('.apps__content-container-title').innerHTML = htmls;
}

function renderAdminUser()
{
    document.querySelector('.apps__content-add-product').innerHTML = ` <button onclick="addAdminUser();"><i class="fas fa-cart-plus"></i> Th??m m???i</button>`;
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrCustomerPag = arrCustomer.slice(begin,end);
    var listCustomer = arrCustomerPag.map((customer)=>{
        return ` <div class="apps__content-view">
        <div class="apps__content-view-id">
            <p>${customer.level}</p>
        </div>

        <div class="apps__content-view-user">
            <p>${customer.user}</p>
        </div>

        <div class="apps__content-view-name">
            <p>${customer.password}</p>
        </div>

        <div class="apps__content-view-img">
            <p>${customer.email}<p>
        </div>

        <div class="apps__content-view-prices">
           <p>${customer.status}</p>
        </div>

        <div class="apps__content-view-tools">
            <div class="apps__content-view-tools-update" onclick="updateAdminUser('${customer.user}')">
                <i class="fas fa-pen"></i>
            </div>

            <div class="apps__content-view-tools-delete" onclick="deleteAdminUser('${customer.user}')">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>`;
    });
    var htmls = listCustomer.join('');
    document.querySelector('.apps__content-container-show').innerHTML = htmls;
}

function renderMobileProduct()
{
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrProductPag = arrProduct.slice(begin,end);
    var listProduct = arrProductPag.map(product => {
        return `<div class="apps__content-mobile-view">
        <div class="apps__content-mobile-view-id">
            <p><i class="fas fa-radiation-alt"></i> ID: <span>${product.id}</span></p>
        </div>

        <div class="apps__content-mobile-view-user">
            <p><i class="fas fa-user"></i> Ng?????i b??n: <span>ADMIN</span> </p>
        </div>

        <div class="apps__content-mobile-view-name">
            <p><i class="fab fa-product-hunt"></i> T??n s???n ph???m: <span>${product.name}</span></p>
        </div>

        <div class="apps__content-mobile-view-img">
           <div class="apps__content-mobile-view-img-content"><p><i class="far fa-image"></i> ???nh: </p></div>

           <div class="apps__content-mobile-view-img-img">
                <img src="./assets/img/${product.img}" alt="">
           </div>
        </div>
        
        <div class="apps__content-mobile-view-prices">
            <p><i class="fas fa-dollar-sign"></i> Gi??: <span>${product.prices}$</span></p>
        </div>

        <div class="apps__content-mobile-view-tools">
            <div class="apps__content-mobile-view-tools-update" onclick="updateAdminProduct(${product.id})">
                <i class="fas fa-pen"></i>
            </div>

            <div class="apps__content-mobile-view-tools-delete" onclick="deleteAdminProduct(${product.id})">
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>`
    });
    var htmls = listProduct.join('');
    document.querySelector('.apps__content-mobile').innerHTML = htmls;
}

function renderAdminBenefits()
{
    renderAdminBenefitsTitle();
    document.querySelector('.pagination').style.display = "none";
    const quantifyIphone = arrProduct.filter(product => product.type == "iphone");
    const moneyIphone = quantifyIphone.map(iphone => iphone.prices);
    const sumIphone = moneyIphone.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
    const loadIphone = arrOrder.filter(order => order.status == "??ang x??? l??" && order.type == "iphone");
    const doneIphone = arrOrder.filter(order => order.status == "???? x??? l??" && order.type == "iphone") || {};
    
    const doneIphoneMoney = doneIphone.map(done => done.prices);
    const sumDoneIphone = doneIphoneMoney.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);

    const quantifyIpad = arrProduct.filter(product => product.type == "ipad");
    const moneyIpad = quantifyIpad.map(ipad => ipad.prices);
    const sumIpad = moneyIpad.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
    const loadIpad = arrOrder.filter(order => order.status == "??ang x??? l??" && order.type == "ipad");
    const doneIpad = arrOrder.filter(order => order.status == "???? x??? l??" && order.type == "ipad");
    const doneIpadMoney = doneIpad.map(done => done.prices);
    const sumDoneIpad = doneIpadMoney.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
    
    const quantifyMac = arrProduct.filter(product => product.type == "macbook");
    const moneyMac = quantifyMac.map(mac => mac.prices);
    const sumMac = moneyMac.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
    const loadMac = arrOrder.filter(order => order.status == "??ang x??? l??" && order.type == "macbook");
    const doneMac = arrOrder.filter(order => order.status == "???? x??? l??" && order.type == "macbook");
    console.log(doneMac)
    const doneMacMoney = doneMac.map(done => done.prices);
    const sumDoneMac = doneMacMoney.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
    var arrBenefit = [
        {
            type:"IPHONE",
            quantify:quantifyIphone.length,
            summoney:sumIphone,
            loading:loadIphone.length,
            done:doneIphone.length,
            sumDone:sumDoneIphone
        },

        {
            type:"IPAD",
            quantify:quantifyIpad.length,
            summoney:sumIpad,
            loading:loadIpad.length,
            done:doneIpad.length,
            sumDone:sumDoneIpad
        },

        {
            type:"MACBOOK",
            quantify:quantifyMac.length,
            summoney:sumMac,
            loading:loadMac.length,
            done:doneMac.length,
            sumDone:sumDoneMac
        }
    ]
    var listBenefit = arrBenefit.map(benefit => {
        return ` <div class="apps__content-view">
        <div class="apps__content-view-id">
            <p>${benefit.type}</p>
        </div>

        <div class="apps__content-view-user">
            <p>${benefit.quantify}</p>
        </div>

        <div class="apps__content-view-name">
            <p>${benefit.summoney}$</p>
        </div>

        <div class="apps__content-view-img">
            <p>${benefit.loading}<p>
        </div>

        <div class="apps__content-view-prices">
           <p>${benefit.done}</p>
        </div>

        <div class="apps__content-view-tools">
           <p>${benefit.sumDone}$</p>
        </div>
    </div>`;
    });
    var htmls = listBenefit.join('');
    document.querySelector('.apps__content-container-show').innerHTML = htmls;
}

function renderAdminBenefitsTitle()
{
    document.querySelector('.apps__content-add-product').style.display = "none";
    var htmls = ` <div class="apps__content-title">
    <div class="apps__content-title-id">
        <p>Lo???i s???n ph???m</p>
    </div>

    <div class="apps__content-title-user">
        <p>S??? s???n ph???m</p>
    </div>

    <div class="apps__content-title-name">
        <p>T???ng gi?? tr???</p>
    </div>

    <div class="apps__content-title-img">
       <p>??ang x??? l??</p>
    </div>

    <div class="apps__content-title-prices">
        <p>???? b??n</p>
    </div>

    <div class="apps__content-title-tools">
       <p>Ti???n ???? b??n</p>
    </div>
</div>`;
    document.querySelector('.apps__content-heading').innerHTML = `<p class="apps__content-heading-content"><i class="fas fa-signal"></i> Th???ng k?? doanh thu</p>`
    document.querySelector('.apps__content-container-title').innerHTML = htmls;
}

function renderBenefitMobile()
{
    document.querySelector('.pagination').style.display = "none";
    const quantifyIphone = arrProduct.filter(product => product.type == "iphone");
    const moneyIphone = quantifyIphone.map(iphone => iphone.prices);
    const sumIphone = moneyIphone.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
    const loadIphone = arrOrder.filter(order => order.status == "??ang x??? l??" && order.type == "iphone");
    const doneIphone = arrOrder.filter(order => order.status == "???? x??? l??" && order.type == "iphone") || {};
    
    const doneIphoneMoney = doneIphone.map(done => done.prices);
    const sumDoneIphone = doneIphoneMoney.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);

    const quantifyIpad = arrProduct.filter(product => product.type == "ipad");
    const moneyIpad = quantifyIpad.map(ipad => ipad.prices);
    const sumIpad = moneyIpad.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
    const loadIpad = arrOrder.filter(order => order.status == "??ang x??? l??" && order.type == "ipad");
    const doneIpad = arrOrder.filter(order => order.status == "???? x??? l??" && order.type == "ipad");
    const doneIpadMoney = doneIpad.map(done => done.prices);
    const sumDoneIpad = doneIpadMoney.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
    
    const quantifyMac = arrProduct.filter(product => product.type == "macbook");
    const moneyMac = quantifyMac.map(mac => mac.prices);
    const sumMac = moneyMac.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
    const loadMac = arrOrder.filter(order => order.status == "??ang x??? l??" && order.type == "macbook");
    const doneMac = arrOrder.filter(order => order.status == "???? x??? l??" && order.type == "macbook");
    console.log(doneMac)
    const doneMacMoney = doneMac.map(done => done.prices);
    const sumDoneMac = doneMacMoney.reduce((pre,cur) => parseInt(pre) + parseInt(cur),0);
    var arrBenefit = [
        {
            type:"IPHONE",
            quantify:quantifyIphone.length,
            summoney:sumIphone,
            loading:loadIphone.length,
            done:doneIphone.length,
            sumDone:sumDoneIphone
        },

        {
            type:"IPAD",
            quantify:quantifyIpad.length,
            summoney:sumIpad,
            loading:loadIpad.length,
            done:doneIpad.length,
            sumDone:sumDoneIpad
        },

        {
            type:"MACBOOK",
            quantify:quantifyMac.length,
            summoney:sumMac,
            loading:loadMac.length,
            done:doneMac.length,
            sumDone:sumDoneMac
        }
    ]

    var listBenefits = arrBenefit.map(benefit => {
        return `<div class="apps__content-mobile-view">
        <div class="apps__content-mobile-view-id">
            <p><i class="fas fa-radiation-alt"></i> Lo???i s???n ph???m: <span>${benefit.type}</span></p>
        </div>

        <div class="apps__content-mobile-view-user">
            <p><i class="fab fa-product-hunt"></i> S??? s???n ph???m: <span>${benefit.quantify}</span> </p>
        </div>

        <div class="apps__content-mobile-view-name">
            <p><i class="fas fa-coins"></i> T???ng gi?? tr???: <span>${benefit.summoney}$</span></p>
        </div>

        <div class="apps__content-mobile-view-img">
            <p><i class="fas fa-spinner"></i> ??ang x??? l??: <span>${benefit.loading}</span> </p>
        </div>
        
        <div class="apps__content-mobile-view-prices">
            <p><i class="fas fa-dollar-sign"></i> ???? b??n: <span>${benefit.done}</span></p>
        </div>

        <div class="apps__content-mobile-view-tools">
          <p>Ti???n ???? b??n: <span>${benefit.sumDone}$</span></p>
        </div>
    </div>`
        
});
    var htmls = listBenefits.join('');
    document.querySelector('.apps__content-mobile').innerHTML = htmls;
}
