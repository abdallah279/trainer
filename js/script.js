// Password Show In Login Page
const user = document.getElementById('check-ic');
const inputPass = document.getElementById('inputpass');

if(user){
    user.addEventListener('click', ()=>{
        showPassword(inputPass, user);
    });
}

// PassWord Show In Setting Page
const iconsPassSet = document.querySelectorAll('.setting .check-setting-ic');

if(iconsPassSet){
  iconsPassSet.forEach((ic) =>{
  
    ic.addEventListener('click', function(){
      let input = ic.parentElement.querySelector('.inputPassSet');
      showPassword(input, ic);
    });
  });
}

// Function To Show And Hide Password
function showPassword(input, icon){

  if(input.type == 'password'){
    input.setAttribute('type', 'text');
    icon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  } else{
    input.setAttribute('type', 'password');
    icon.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  }

  input.focus();
}

// Show And Hide SlideBar
const menu = document.getElementById('menu');
const sideBar = document.getElementById('sidebar');
const navbar = document.getElementById('navbar');
const main = document.getElementById('main');
const closeSidebar = document.getElementById('closeSidebar');

if(menu){
  menu.addEventListener('click', ()=>{
    sideBar.classList.toggle('active-side');
    navbar.classList.toggle('active-nav');
    main.classList.toggle('active-main');
  });
}

// Close SideBar
if(closeSidebar){
    closeSidebar.addEventListener('click', ()=>{
      sideBar.classList.remove('active-side')
    })
  }

// Show And Hide SlideBar collapse
const collapse = document.querySelectorAll('.sidebar .collapse-co')

collapse.forEach((col) =>{
  col.addEventListener('click' , (e)=>{
    e.preventDefault()
    if((col.classList.contains('d-ac'))){
      col.classList.add('active');
    }else{
      col.classList.toggle('active');
    }
    // col.classList.toggle('active');
    col.querySelector('.icon-right').classList.toggle('icon-r-rotate')
    col.parentElement.querySelector('.collapse-me').classList.toggle('collapse-active')
  })
})


let inputDatePicker = document.getElementById('startDate');
if(inputDatePicker){
  $(document).ready(function(){
    let datePickerM = document.getElementById('ui-datepicker-div');
    if(inputDatePicker){
      inputDatePicker.onfocus = ()=>{
        datePickerM.style.top = "48%";
      }
    }
  });
}




// Chart One
var optionsDonut = {
  series: [70, 15, 25],
  chart: {
    type: 'donut',
  },
  legend: {
    show: false,
  },
  colors:[ '#06decc', '#ddd','#FA9A2A'],
  fill: {
    colors:['#06decc', '#ddd','#FA9A2A'],
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

if(document.querySelector("#chartDonut")){
var chart = new ApexCharts(document.querySelector("#chartDonut"), optionsDonut);
chart.render();
}

// Chart Two
var options = {
    series: [{
    name: 'series1',
    data: [10, 20, 15, 24, 28, 15, 32]
  }],
    chart: {
    height: 380,
    stackType: '100%',
    type: 'area',
    toolbar: {
        show: false,
    },
  },
  title: {
    text: 'عدد المتدربين حتى الأن',
    align: 'right',
    offsetX: -200,
    margin: 20,
    style: {
    fontSize:  '20px',
    fontWeight:  'bold',
    color:  '#263238',
    fontFamily: ['Cairo', 'sansSerif']
    },
  },
  fill:{
    colors: ['#F17B00'],
    
  },
  colors:['#1bead9'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'category',
    categories: ['Jan','Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sub','Oct','Nov','Dec'],
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
};

if(document.querySelector("#chart")){
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

// DataTable
let myDataTable = document.getElementById('myTable');
if(myDataTable){
  var myTable = $('#myTable').dataTable( {
    "pageLength": 7,
    responsive: true,
    "language": {
        'paginate':{
            'previous': `<i class="fa-solid fa-angles-left"></i>`,
            'next': `<i class="fa-solid fa-angles-right"></i>`
        },
        "sProcessing": "جارٍ التحميل...",
        "sLengthMenu": "أظهر _MENU_ مدخلات",
        "sZeroRecords": "لم يعثر على أية سجلات",
        "sInfo": "إظهار النتائج من _START_ - _END_",
        "sInfoEmpty": "يعرض 0 إلى 0 من أصل 0 سجل",
        "sInfoFiltered": "(منتقاة من مجموع _MAX_ مُدخل)",
        "sInfoPostFix": "",
    },
    'bLengthChange':false,
  });

  var buttons = new $.fn.dataTable.Buttons(myTable, {
    buttons: [
        {
            extend: 'print',
            text:  `<img src='imgs/icons/Icon ionic-ios-print.png' />`,
        },
        {
            extend: 'excelHtml5',
            text:  `<img src='imgs/icons/Icon simple-microsoftexcel.png' />`,
        }
    ]
  }).container().appendTo($('#buttons'));

  $('#searchTable').on('keyup', function() {
    $('#myTable').DataTable().search($(this).val()).draw();
  });
}

// Add Shehada
const addShehada = document.getElementById('add-shehada'),
modelAttend = document.getElementById('modelAttend'),
addNatega = document.getElementById('add-natega'),
overlay = document.getElementById('overlay'),
addBtnShehada = document.getElementById('addBtn'),
addNategaBtn = document.getElementById('addNategaBtn'),
showModelBtn = document.getElementById('showModel'),
checkOutBtns = document.querySelectorAll('.Check-out-btn'),
checkOut = document.querySelector('.CheckOutSec');


if(addShehada && modelAttend && addNatega && checkOut){
  addBtnShehada.addEventListener('click', showShehadaSection);
  showModelBtn.addEventListener('click', showModelSection);
  addNategaBtn.addEventListener('click', showNategaSection);
}

if(checkOutBtns){
  checkOutBtns.forEach(btn =>{
    btn.addEventListener('click', showCheckOut);
  });
}

function showCheckOut(e){
  e.preventDefault();
  checkOut.classList.add('show');
  overlay.classList.add('show');
}

function showShehadaSection(){
    addShehada.classList.add('show');
    overlay.classList.add('show');
}

function showModelSection(){
  modelAttend.classList.add('show');
  overlay.classList.add('show');
}

function showNategaSection(e){
    e.preventDefault();
    addNatega.classList.add('show');
    overlay.classList.add('show');
}

// Show Model Shehada
const model = document.getElementById('show-model'),
imgModel = document.querySelector('.show-model .img img');

function showShehada(el){
  let imgSrc;
  if(el.closest(".child")){
    imgSrc = el.closest(".child").parentElement.previousSibling.querySelector('.img img').src;
    imgModel.src = imgSrc;
  }else{
    imgSrc = el.parentElement.parentElement.querySelector('.img img').src;
    imgModel.src = imgSrc;
  }

  model.classList.add('show');
  overlay.classList.add('show');
}

// Print Btn
let printBtn = document.querySelector('#show-model .submit');

if(printBtn){
  printBtn.onclick = printCertificate;
}

// Function To Print
function printCertificate() {
    window.print();
}

const modelAttendIn = document.getElementById('modelAttendIn'),
modelAttendOut = document.getElementById('modelAttendOut'),
showModelInBtn = document.getElementById('showModelIn'),
showModelOutBtn = document.getElementById('showModelOut');

if(modelAttendIn && showModelInBtn){
  showModelInBtn.addEventListener('click', showModelInSection);
}

if(modelAttendOut && showModelOutBtn){
  showModelOutBtn.addEventListener('click', showModelOutSection);
}

function showModelInSection(){
  modelAttendIn.classList.add('show');
  overlay.classList.add('show');
}

function showModelOutSection(){
  modelAttendOut.classList.add('show');
  overlay.classList.add('show');
}

if(modelAttendIn || modelAttendOut){
  overlay.addEventListener('click', ()=>{
    modelAttendIn.classList.remove('show');
    modelAttendOut.classList.remove('show');
    overlay.classList.remove('show');
  });
}

if(overlay){
    overlay.addEventListener('click', ()=>{
      if(addShehada && modelAttend && addNatega && checkOut){
        addShehada.classList.remove('show');
        modelAttend.classList.remove('show');
        addNatega.classList.remove('show');
        checkOut.classList.remove('show');
        overlay.classList.remove('show');
      }
      if(model){
        model.classList.remove('show');
        overlay.classList.remove('show');
      }
    });
}

const qrBtn = document.getElementById('qrBtn'),
normalAttBtn = document.getElementById('normalRegBtn'),
qrSection = document.getElementById('qrSection'),
normalAttendSec = document.getElementById('normalAttendSec');

if(qrBtn){
  qrBtn.addEventListener('click', ()=>{
    qrBtn.classList.add('active');
    normalAttBtn.classList.remove('active');
  
    qrSection.classList.add('active');
    normalAttendSec.classList.remove('active');
  });
}

if(normalAttBtn){
  normalAttBtn.addEventListener('click', ()=>{
    normalAttBtn.classList.add('active');
    qrBtn.classList.remove('active');
  
    normalAttendSec.classList.add('active');
    qrSection.classList.remove('active');
  });
}


// Show And Hide Menu In Data Table
function sm(el){
  el.parentElement.querySelector('.drop-down').classList.add("show-drop-res");
  document.addEventListener("click", (e)=>{
      if( e.target.tagName != "I" || e.target != el){
          el.parentElement.querySelector('.drop-down').classList.remove("show-drop-res");
      }
  });
}

// Upload Image
const inputUpload = document.getElementById('userPhoto');
const image = document.getElementById('photo');
if(inputUpload){
  const imageSrc = image.getAttribute('src');
  inputUpload.onchange = ()=>{
      let reader = new FileReader();
  
      if(inputUpload.files[0]){
          reader.readAsDataURL(inputUpload.files[0]);
      } else{
          image.setAttribute('src', imageSrc);
          image.classList.remove('wid');
      }
  
      reader.onload = ()=>{
          image.setAttribute('src', reader.result);
          image.classList.add('wid');
      }
  }
}

// Upload File
const inputFile = document.querySelectorAll('.file-class');
const fileDiv = document.getElementById('files-name');

for(let i=0; i<inputFile.length; i++){
  let div = document.createElement('div');
  div.setAttribute('class', 'name-file');
  fileDiv.appendChild(div);
}

for(let i=0; i<inputFile.length; i++){
  inputFile[i].onchange = ()=>{
    fileDiv.style.display = 'flex';
    fileDiv.children[i].style.display = `block`;
    fileDiv.children[i].innerHTML = `${inputFile[i].files[0].name}
                                      <span class='delete' onclick='deleteFile(this)'><i class="fa-solid fa-xmark"></i></span>
                                      `;
  }
}

const deleteFile = (el)=>{
  el.parentElement.style.display = 'none';
  if(fileDiv.children.length == 0){
    fileDiv.style.display = 'none';
  }
}

// Add Shehada To page
const fileShInput = document.querySelector('.file-class-sh'),
divSh = document.getElementById('files-name-sh');


if(fileShInput){
  fileShInput.onchange = ()=>{
    if(fileShInput.files[0]){
      divSh.querySelector('.name-file-sh').innerHTML = fileShInput.files[0].name;
      divSh.querySelector('.name-file-sh').style.display = 'block'
    }
  }
}

const selectName = document.getElementById('selectName'),
// selVal = document.querySelector('.sel-val'),
infoCardsContent = document.querySelector('.info-cards .content-co'),
formCo = document.getElementById('form-co');


if(formCo){
  formCo.onsubmit = (e)=>{
    e.preventDefault();
    if(!(infoCardsContent.classList.contains('act'))){
      infoCardsContent.innerHTML = ``;
    }
    infoCardsContent.classList.add('act');
  
    infoCardsContent.innerHTML += `
    <div class="custom-card"><div class="custom-name">${divSh.querySelector('.name-file-sh').innerHTML}</div><div class="custom-val">${selectName.options[selectName.selectedIndex].text}</div></div>
    `;
    overlay.click();
  }
}

const fileAbsence = document.getElementById('file-absence'),
fileUnpre = document.getElementById('fileUnpre');

if(fileUnpre){
  const AbsHtml = fileUnpre.innerHTML;
  fileAbsence.onchange = ()=>{
    if(fileAbsence.files[0]){
      fileUnpre.innerHTML = `${fileAbsence.files[0].name}`;
    } else{
      fileUnpre.innerHTML = AbsHtml;
    }
  }
}