fetch('https://api.gumengya.com/Api/BiliBliHot?format=json').then(data=>data.json()).then((json)=>{
    let html = '<div id="bilibili-container">'
    html += '<div class="bilibili-list">'
    var i = 1 
    for (let item of json.data) {
        html += '<div class="bilibili-list-item"><div class="bilibili-hotness">' + i + '</div>' + '<span class="bilibili-title"><a title="' + item.title + '"href="' + item.url + '" target="_blank" rel="external nofollow noreferrer">' + item.title + '</a></span>' + '<div class="bilibili-hot"><span>' + item.hot + '</span></div></div>'
        i++
    }
    html += '</div></div>'
    document.getElementById('bilibiliContent').innerHTML = html
}).catch(function(error) {
    console.log(error);
});

