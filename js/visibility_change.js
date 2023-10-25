var originTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '(*σ´∀`)σ 我走噜~ ' + "WLB` Blog";
        if (titleTime != null) {
            clearTimeout(titleTime);
        }
    } else {
        document.title = '(*´∇｀*) 我来力~ ' + "WLB` Blog";
        titleTime = setTimeout(function () {
            document.title = "WLB` Blog";
        }, 2000);
    }
});