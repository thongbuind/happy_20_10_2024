// Fake database
var db = [
    [
        'param 1 của mẹ nè param 1 của mẹ nè param 1 của mẹ nè param 1 của mẹ nè param 1 của mẹ nè param 1 của mẹ nè', 
        'param 2 của mẹ nè',
        'param 3 của mẹ nè',
        'param 4 của mẹ nè',
        'param 5 của mẹ nè',
        'param 6 của mẹ nè',
        'param 7 của mẹ nè',
        'param 8 của mẹ nè',
        'param 9 của mẹ nè',
        'param 10 của mẹ nè',
        'param 11 của mẹ nè',
        'param 12 của mẹ nè',
        'param 13 của mẹ nè',
        'param 14 của mẹ nè'
    ], 
    [
        '<p>Hế lô bro, this is a mini project I made in one night, which includes 300 lines of code (It’s just short, haha).</p> <img src="assets/pic3.png" alt="A description of the example image" width="270" height="170">', 
        'param 2 của chị nè',
        'param 3 của chị nè',
        'param 4 của chị nè',
        'param 5 của chị nè',
        'param 6 của chị nè',
        'param 7 của chị nè',
        'param 8 của chị nè',
        'param 9 của chị nè'
    ]
];

// nhan imput user
var userID = 0;
var user = '';
var color = '';
var statusPage = 0;
var sumPage = db[userID].length;
document.getElementById('modal-sign-in').onclick = function(e) {
    e.preventDefault();
    user = document.getElementById("modal-input-name").value.toLowerCase();
    if (
        user == 'hong' || user == 'nguyen thi lam hong' || user == 'nguyen thi me' || user == 'me' || user == 'me hong' || user == 'lam hong' ||
        user == 'hồng' || user == 'nguyễn thị lam hồng' || user == 'nguyễn thị mẹ' || user == 'mẹ' || user == 'mẹ hồng' || user == 'lam hồng'
    ) {
        userID = 0;
        color = '#8B0000';
        sumPage = db[userID].length;
        document.getElementsByClassName('modal')[0].style.display = 'none';
        document.getElementsByClassName('modal')[0].style.position = '';
        document.getElementById('container').style.display = 'block';
        document.getElementById('main').style.backgroundImage = "url(assets/pic1.png)";
        document.getElementById('main').style.backgroundSize = "cover";
        setDot();
        setText();
    } else if (
        user == 'bùi thị thanh huyền' || user == 'thanh huyền' || user == 'bùi huyền' || user == 'huyền bùi' || user == 'huyền' || user == 'chị huyền' || user == 'chị' ||
        user == 'bui thi thanh huyen' || user == 'thanh huyen' || user == 'bui huyen' || user == 'huyen bui' || user == 'huyen' || user == 'chi huyen' || user == 'chi'
    ) {
        userID = 1;
        color = '#00cec9';
        sumPage = db[userID].length;
        document.getElementsByClassName('modal')[0].style.display = 'none';
        document.getElementsByClassName('modal')[0].style.position = '';
        document.getElementById('container').style.display = 'block';
        document.getElementById('container').style.backgroundColor = color;
        document.getElementById('main').style.backgroundImage = "url(assets/pic2.jpg)";
        document.getElementById('main').style.backgroundSize = "cover";
        setDot();
        setText();
    } else {
        document.getElementById("modal-noti").style.display = "block";
    }
}

// set onclick cho nut sang phai;
document.getElementById('triangle-right').onclick = function(e) {
    e.preventDefault;
    if (statusPage < sumPage-1) {
        statusPage++;
        setDot();
        setText();
    }
}

// set onclick cho nut sang trai;
document.getElementById('triangle-left').onclick = function(e) {
    e.preventDefault;
    if (statusPage > 0) {
        statusPage--;
        setDot();
        setText();
    }
}

// Functions
function setDot() {
    let dotHTML = '';
    for (let i = 0; i < sumPage; i++) {
        if (i == statusPage) {
            dotHTML += '<div class="dot" id="currentDot"></div>';
        } else {
            dotHTML += '<div class="dot"></div>';
        }
    }
    document.getElementById('page').innerHTML = dotHTML;
    document.getElementById('currentDot').style.backgroundColor = `${color}`;
}

function setText() {
    let textHTML = `
        ${db[userID][statusPage]}
    `;
    document.getElementById('text').innerHTML = textHTML;
}
