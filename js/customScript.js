console.log("Hello from customScript.js!");

document.getElementById('slogan').innerText = 'We hate our customers';

document.getElementById('all').style.backgroundColor = '#c7c3c3';

document.body.style.fontFamily = 'impact';

document.querySelectorAll('#hot .item').forEach(function(anything){
    anything.style.margin = '10px 20px'
    anything.style.boxShadow = '2px 2px 10px'
});

var newsletterEl = document.createElement('li');
newsletterEl.classList = 'nav-item dropdown menu-large';

var navLinkEl = document.createElement('a');
navLinkEl.classList = 'nav-link';
navLinkEl.innerText = 'Newsletter';
newsletterEl.appendChild(navLinkEl);
document.querySelectorAll('#navigation .navbar-nav.mr-auto')[0].appendChild(newsletterEl);