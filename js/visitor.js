// fetch('https://api.gmit.vip/Api/UserInfo').then(data=>data.json()).then(data=>{
//     let html = '<style>.visitor_location{color:#cb4c46;font-weight:bold;}.visitor_ip{color:#2d80c2;font-weight:bold;}</style>'
//     html += '<div class="visitor">'
//     html += '欢迎来自 ' + '<span class="visitor_location">' + data.data.location + '</span>' + ' 的小伙伴！'
//     html += '</br>'
//     html += '访问IP：' + '<span class="visitor_ip">' + data.data.ip + '</span>'
//     html += '</div>'
//     document.getElementById('visitorContent').innerHTML = html
// }).catch(function(error) {
//     console.log(error);
// });
// 故梦接口异常
fetch('https://tenapi.cn/v2/getip').then(data=>data.json()).then(data=>{
    let html = '<style>.visitor_location{color:#cb4c46;font-weight:bold;}.visitor_ip{color:#2d80c2;font-weight:bold;}</style>'
    html += '<div class="visitor">'
    html += '欢迎来自 ' + '<span class="visitor_location">' + data.data.country + data.data.province + '</span>' + ' 的' + data.data.isp + '用户'
    html += '</br>'
    html += '访问IP：' + '<span class="visitor_ip">' + data.data.ip + '</span>' + '</br>'
    html += '操作系统：' + '<span class="visitor_ip">' + data.data.os + '</span>' + '</br>'
    html += '浏览器：' + '<span class="visitor_ip">' + data.data.browser + '</span>' + '</br>'
    html += '</div>'
    document.getElementById('visitorContent').innerHTML = html
}).catch(function(error) {
    console.log(error);
});