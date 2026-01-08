const items = [
    {
        name: "3-digit Number Guess",
        url: "3-Digit/NG.html"
    },
    {
        name: "4-Digit Number Guess",
        url: "4-Digit/NG.html"
    },
    {
        name: "5-Digit Number Guess",
        url: "5-Digit/NG.html"
    }
];



function render()
 {
    let html = '';
    items.forEach(item => 
    {
        html += ` 
        <a href="${item.url}">  <div class="sub">${item.name}</div></a></div>
       `
    }
    
    );
    document.querySelector('.Main').innerHTML = html;
}
render();
