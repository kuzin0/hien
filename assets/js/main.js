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
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1000',
                type: "ipad"
            },
        
            {
                id: "18",
                img: 'ipad2.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1400',
                type: "ipad"
            },
        
            {
                id: "19",
                img: 'ipad3.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1600',
                type: "ipad"
            },
        
            {
                id: "20",
                img: 'ipad4.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '1700',
                type: "ipad"
            },
        
            {
                id: "21",
                img: 'ipad5.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '2100',
                type: "ipad"
            },
        
            {
                id: "22",
                img: 'ipad6.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 256GB (2021)',
                prices: '2000',
                type: "ipad"
            },
        
            {
                id: "23",
                img: 'ipad7.jpg',
                name: 'Máy tính bảng iPad Pro M1 12.9 inch WiFi Cellular 128GB (2021)',
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
                status:"Hoạt động"
            },
            {
                user: 'datisekai',
                password: 'bedatdz',
                email: 'lydatltd@gmail.com',
                level: 1,
                comment:[],
                status:"Hoạt động"
            }
        ];
        localStorage.setItem('customer',JSON.stringify(arrCustomer));
    } else{
        arrCustomer = JSON.parse(localStorage.getItem('customer'));
    }
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

createProduct();
createCustomer();

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
        document.getElementById('errorUser').textContent = "Username không được bỏ trống";
        flag = 0;
    }
    if(password == "")
    {
        document.getElementById('errorPass').textContent = "Password không được bỏ trống";
        flag = 0;
    }
    for(var index in arrCustomer)
    {
        if(arrCustomer[index].user.toUpperCase() == username.toUpperCase())
        {
            if(arrCustomer[index].status == "Bị khóa")
            {
                flag = -2;
                break;
            }
        }
    }

    for (var i=0;i<arrCustomer.length;i++)
    {
        if (username.toUpperCase() == arrCustomer[i].user.toUpperCase() && password == arrCustomer[i].password && arrCustomer[i].status !="Bị khóa")
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
        swal("Đăng nhập thành công!", "Bạn đã có thể mua hàng!", "success");
        hideErrorUser();
        hideErrorPass();
        hideErrorEmail();
        if (admin == 1) document.getElementById('admin').style.display = "";
        else {
            document.getElementById('admin').style.display = "none";
        }
        
    }
    else if(flag == -1){
        document.getElementById('errorLogin').textContent = "Username hoặc Password không chính xác!";
    } 
    else if(flag == -2)
    {
        document.getElementById('errorLogin').textContent = "Tài khoản của bạn đã bị khóa.";
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
        document.getElementById('errorUser').textContent = "Username phải lớn hơn 5 kí tự";
        flag = 0;
    }
    if(password == "" || password.length < 5)
    {
        document.getElementById('errorPass').textContent = "Password phải lớn hơn 5 kí tự";
        flag = 0;
    }
    if(email == "" || email.length < 5 || email.indexOf('@') == -1)
    {
        document.getElementById('errorEmail').textContent = "Email phải có @ và lớn hơn 5 kí tự";
        flag = 0;
    }
    if(username != "" && password != "" && email != "")
    {
        for (var i=0;i<arrCustomer.length;i++)
        {
            if(username.toUpperCase() == arrCustomer[i].user.toUpperCase())
            {
                document.getElementById('errorLogin').textContent = "Username đã tồn tại";
                flag = -1;
                break;
            }
            if(email.toUpperCase() == arrCustomer[i].email.toUpperCase())
            {
                document.getElementById('errorLogin').textContent = "Email đã tồn tại";
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
            level: 1,
            status:"Hoạt động"
        };
        arrCustomer.push(customer);;
        swal("Đăng ký thành công!", "Vui lòng đăng nhập", "success");
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
        title: "Bạn muốn đăng xuất?",
        text: "Khi muốn mua hàng, bạn sẽ phải đăng nhập lại!",
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
    document.querySelector('.modal__content-login-other').style.display = 'none';
    document.querySelector('.modal__content-social').style.display = 'none';
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
    // document.querySelector('.modal__content-login-other').style.display = 'block';
    // document.querySelector('.modal__content-social').style.display = 'flex';
    hideErrorEmail();
    hideErrorPass();
    hideErrorUser();
}

//Slider
sliderRunning();
function sliderRunning()
{

    var counter = 1;
        setInterval(function(){
          document.getElementById('radio' + counter).checked = true;
          counter++;
          if(counter > 4)
          {
            counter = 1;
          }
        }, 3000);
}

// Render product
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
    
}

//xuly modal bars
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


//xuly modal product
var btnProductClose = document.querySelector('.modal__product-close');
var modalProduct = document.querySelector('.modal__product');
var modalProductOverlay = document.querySelector('.modal__product-overlay');

modalProductOverlay.addEventListener('click',onProDuctClose)


btnProductClose.addEventListener('click', onProDuctClose);


function onProDuctClose()
{
    modalProduct.style.display = "none";
}

var minusProduct = document.querySelector('.minus');
var plusProduct = document.querySelector('.plus');
var quantifyProduct = document.querySelector('.quatify');
var quantify = 1;

plusProduct.addEventListener('click', function()
{
    quantify++;
    quantifyProduct.value = quantify;
});

minusProduct.addEventListener('click', function(){
    if(quantify == 1) quantify = 1;
    else {
        quantify--;
        quantifyProduct.value = quantify;
    }
});


function showModal(id)
{
    var arrModal;
    for (var i=0;i<arrProduct.length;i++)
    {
        if(arrProduct[i].id == id)
        {
            arrModal = arrProduct[i]; break;
        }
    }
    document.getElementById('modalProduct').style.display = "flex"; 
    var imgProduct = '<img src="./assets/img/'+arrModal.img+'" alt="">';
    document.getElementById("imgModalProduct").innerHTML = imgProduct;

    var nameProduct = '<h3 id="textModalProduct">'+arrModal.name+'</h3>';
    document.getElementById("nameModalProduct").innerHTML = nameProduct;

    var pricesProduct = '<p>Giá sản phẩm: <span>$'+arrModal.prices+'</span></p>';
    document.getElementById("pricesModalProduct").innerHTML = pricesProduct;

    document.getElementById('btnCart').innerHTML = '<input type="button" value="Thêm vào giỏ" id="addcart" onclick="addProductToCart('+id+')">';
    document.querySelector('.quatify').value = 1;
    document.querySelector('.btn__buynow').innerHTML = '<input type="button" value="Xem chi tiết" id="buynow" onclick="jumpToInfo('+id+')">'
}

function jumpToInfo(id)
{
    window.location = 'info.html?id='+id+'';
}

function getID()
{
    return id;
}

function showAlert()
{
   alert('datisekai');
}

function renderProduct(arrProduct)
{
    var page = parseInt(getQueryVariable('page')) || 1;
    var perPage = 8;
   
    var begin = (page-1)*perPage;
    var end = page * perPage;
    var arrProductPag = arrProduct.slice(begin,end);
    var k = 0;
    var s = "";
    while (k<arrProductPag.length)
    {   
        
        s = s + '<div class="col l-3 m-4 c-12"> <div class="home__product-item" onclick="showModal('+arrProductPag[k].id+')"><div class="home__product-item-img"> <img src="./assets/img/'+arrProductPag[k].img+'" alt=""> </div>'+
                ' <div class="home__product-item-description"><h4>'+arrProductPag[k].name+'</h4></div>' + 
                '<div class="home__product-item-appreciate"><div class="appreciate-item"> <i class="appreciate-item-btn fas fa-star"></i> </div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' +
                '<div class="appreciate-item"><i class="appreciate-item-btn fas fa-star"></i></div>' + ' <span>(1 Reviewer)</span>' + '</div>' + 
                '<div class="home__product-item-prices"><h4>$'+arrProductPag[k].prices+'</h4> </div>'+
                '<div class="home__product-item-btn"><button>View Info</button></div>' +
                '</div> </div>';  
                k++; 
    }
    document.getElementById('display_product').innerHTML = s;
}

function renderDisplayProduct()
{

    var product = getQueryVariable('product');
    var arrSearch = [];
    var d = 0;
    if(getQueryVariable('product') !=null)
    {
    
        for (var i=0;i<arrProduct.length;i++)
        {
            if(arrProduct[i].type == product){
                arrSearch[d] = arrProduct[i];
                d++;
            }
        }
        renderProduct(arrSearch);
    } else{
        renderProduct(arrProduct);
    }
}

function renderDisplayProduct1(arrSearch)
{

    var product = getQueryVariable('product');
    var d = 0;
    if(getQueryVariable('product') !=null)
    {
    
        for (var i=0;i<arrProduct.length;i++)
        {
            if(arrProduct[i].type == product){
                arrSearch[d] = arrProduct[i];
                d++;
            }
        }
        renderProduct(arrSearch);
    } else{
        renderProduct(arrProduct);
    }
}


function renderVQMM()
{
    var event = getQueryVariable('event');
    if(event == 'vqmm')
    {
        document.querySelector('.home__product').style.display = "none";
        document.querySelector('.select__search').style.display = "none";
        document.getElementById('containerHeading').style.display = "none";
       
        var s = '<h1 class="luckyheading">VÒNG QUAY</h1><div align="center" class=""><table >  <tr> <td><div class="power_controls">' +
        ' </div></td><td width="90%" height="auto" class="the_wheel" align="center" valign="center">' +
        '<canvas id="canvas" width="300" height="300"><p style="{color: white}" align="center"></p>' +
        '</canvas></td></tr></table>'+'<div class="spinlucky"><input type="button" value="Quay" id="spin_button" onclick="startSpin();"></br></br>' +
        '<p onclick="resetWheel(); return false;" id="playagain">Chơi lại</p><br /></div>' + '</div>';
        document.getElementById('content').innerHTML = s;
    }
}
renderVQMM();

//VQMM
let theWheel = new Winwheel({
    'numSegments'  : 8,    
    'outerRadius'  : 144,  
    'textFontSize' : 18,  
    'textFillStyle':'black',  
    'textFontFamily':'san-serif',
    'segments'     :   
    [
       {'fillStyle' : '#eae56f', 'text' : 'Mã Sale 5%'},
       {'fillStyle' : '#89f26e', 'text' : 'Mã Sale 10%'},
       {'fillStyle' : '#7de6ef', 'text' : 'Mã Sale 15%'},
       {'fillStyle' : '#e7706f', 'text' : 'Mã Sale 20%'},
       {'fillStyle' : '#eae56f', 'text' : 'Mã Sale 30%'},
       {'fillStyle' : '#89f26e', 'text' : 'Mã Sale 40%'},
       {'fillStyle' : '#7de6ef', 'text' : 'Mã Sale 50%'},
       {'fillStyle' : '#e7706f', 'text' : 'Mã Sale 70%'}
    ],
    'animation' :          
    {
        'type'     : 'spinToStop',
        'duration' : 5,    
        'spins'    : 8,     
        'callbackFinished' : alertPrize
    }
});
var arrSale = [];
function createIDSale()
{
        theWheel.segments[1]['keySale'] = "shopit5%";
        theWheel.segments[2]['keySale'] = "shopit10%";
        theWheel.segments[3]['keySale'] = "shopit15%";
        theWheel.segments[4]['keySale'] = "shopit20%";
        theWheel.segments[5]['keySale'] = "shopit30%";
        theWheel.segments[6]['keySale'] = "shopit40%";
        theWheel.segments[7]['keySale'] = "shopit50%";
        theWheel.segments[8]['keySale'] = "shopit70%";
        
        theWheel.segments[1]['valueSale'] = "0.05";
        theWheel.segments[2]['valueSale'] = "0.1";
        theWheel.segments[3]['valueSale'] = "0.15";
        theWheel.segments[4]['valueSale'] = "0.2";
        theWheel.segments[5]['valueSale'] = "0.3";
        theWheel.segments[6]['valueSale'] = "0.4";
        theWheel.segments[7]['valueSale'] = "0.5";
        theWheel.segments[8]['valueSale'] = "0.7";
        arrSale = theWheel.segments;
        localStorage.setItem('sale',JSON.stringify(arrSale));
}
createIDSale();
function startSpin()
{
    swal({
        title: "Bạn có chắc chắn muốn quay?",
        text: "Khi quay bạn sẽ nhận được mã khuyến mãi bất kì!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            theWheel.startAnimation();
        }
      });
   
}

function resetWheel()
{
    theWheel.stopAnimation(false);  
    theWheel.rotationAngle = 0;     
    theWheel.draw();                
    wheelSpinning = false;  
}

function alertPrize(indicatedSegment)
{
    swal("Bạn đã trúng " + indicatedSegment.text, "Mã giảm giá: " + indicatedSegment.keySale, "success");
    localStorage.setItem(sessionStorage.getItem('user') + 'sale',JSON.stringify(indicatedSegment));
}

function renderPagination()
{
    var product = getQueryVariable('product');
    var page = getQueryVariable('page') || 1;
    var prePage = 1;
    if(page > 1) prePage = parseInt(page) - 1;
    else {
          prePage = 1 + "#";
    }
    var maxPage;
    if(arrProduct.length % 8 == 0)
    {
        maxPage = parseInt(arrProduct.length/8); 
    }
    else maxPage = parseInt(arrProduct.length/8) + 1; 
    var nextPage;
    if(page >= maxPage)
    {
        nextPage = maxPage + "# ";
    } else {
        nextPage = parseInt(page) + 1;
    }

    if(product != null)
    {
       
        document.getElementById('prePage').href = 'index.html?product='+product+'&page='+prePage;
        document.getElementById('nextPage').href = 'index.html?product='+product+'&page='+nextPage;
        document.getElementById('page1').href = 'index.html?product='+product+'&page=1';
        document.getElementById('page2').href = 'index.html?product='+product+'&page=2';
        document.getElementById('page3').href = 'index.html?product='+product+'&page=3';
    }
    else {
        document.getElementById('prePage').href = 'index.html?page='+prePage;
        document.getElementById('nextPage').href = 'index.html?page='+nextPage;
        document.getElementById('page1').href = 'index.html?page=1';
        document.getElementById('page2').href = 'index.html?page=2';
        document.getElementById('page3').href = 'index.html?page=3';
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

function renderContainerHeading()
{
    var product = getQueryVariable('product');
    if(product != null)
    {
        document.getElementById('containerHeading').textContent = product;
    }
    else {
        document.getElementById('containerHeading').textContent = "LATEST PRODUCTS";
    }
}

function renderEmptyProduct()
{
    document.getElementById('display_product').innerHTML = '<div id="errorSearch">Không tìm thấy sản phẩm</div>'
}

window.onload = function()
{

    renderDisplayProduct();
    renderPagination();
    renderContainerHeading();
    innerQuantify(quantifyCart);
    
}

checkSession();

///search
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

function onSelect()
{
    var select = document.getElementById('selectPrices');
    switch(select.value)
    {
        case '1':
            filter1();
            break;
        case '2':
            filter2();
            break;
        case '3':
            filter3();
            break;
    }
}

function onSort()
{

    var sort = document.getElementById('sortPrices');
    switch(sort.value)
    {
        case '1':
            sortAscending();
            break;
        case '2':
            sortDescending();
            break;
    }
}


function sortAscending()
{
    var arrAscending = arrProduct.sort(function(a,b){
        return a.prices - b.prices;
    });
    renderDisplayProduct1(arrAscending);
}

function sortDescending()
{
    var arrDescending = arrProduct.sort(function(a,b){
        return b.prices - a.prices;
    });
    renderDisplayProduct1(arrDescending);
}

function filter1()
{
    var arrFilter = arrProduct.filter(function(product,index,array){
        return parseInt(product.prices) > 2000;
    });
    renderProduct(arrFilter);
}

function filter2()
{
    var arrFilter = arrProduct.filter(function(product,index,array){
        return parseInt(product.prices) >= 1000 &&  parseInt(product.prices) <= 2000;
    });
    renderProduct(arrFilter);
}

function filter3()
{
    var arrFilter = arrProduct.filter(function(product,index,array){
        return parseInt(product.prices) < 1000;
    });
    renderProduct(arrFilter);
}



//Cart

var arrMyProduct = [];
if(localStorage.getItem(sessionStorage.getItem('user')) == null)
{
    arrMyProduct == [];
} else{
    arrMyProduct = JSON.parse(localStorage.getItem(sessionStorage.getItem('user')));
}
var quantifyCart = arrMyProduct.length;
function addProductToCart(id)
{
    if(isLogin())
    {
        var userSession = sessionStorage.getItem('user');
        swal({
            title: "Bạn muốn thêm vào giỏ hàng?",
            text: "Bạn có thể tiếp tục mua hàng và thanh toán sau!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                var date = new Date();
                var curTime = date.getHours() + ":" + date.getMinutes();
                var curDate = curTime + " " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                if(localStorage.getItem(userSession)!=null)
                {
        
                    arrMyProduct.push(arrProduct[id]);
                    arrMyProduct[arrMyProduct.length -1]['quantify'] = 1;
                    arrMyProduct[arrMyProduct.length -1]['currentTime'] = curDate;
                }
                else{
                    arrMyProduct.push(arrProduct[id]);
                    arrMyProduct[0]['quantify'] = 1;
                    arrMyProduct[0]['currentTime'] = curDate;
                }
                
                localStorage.setItem(userSession,JSON.stringify(arrMyProduct));
                document.getElementById('modalProduct').style.display = "none";
                swal("Thêm thành công!", "Nếu bạn muốn thanh toán, vui lòng vào giỏ hàng!", "success");
                quantifyCart = arrMyProduct.length;
                innerQuantify(quantifyCart);
            } else {
              
            }
          });
    } else {
       document.getElementById('modalProduct').style.display = "none";
       displayLogin();
    }
}


function innerQuantify(quantifyCart)
{
    document.getElementById('quantifyProductCart').textContent = quantifyCart;
}



function onCart()
{
    if(isLogin())
    {
        window.location = "cart.html";
    } else{
        displayLogin();
    }
}

