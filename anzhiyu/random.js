var posts=["2026/01/07/hexo部署/","2026/01/08/s/","2026/01/08/字数统计/","2026/01/07/安知鱼主题安装/","2026/01/08/搜索栏/","2026/01/07/日历/","2026/01/08/永久链接/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };