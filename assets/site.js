(function(){
  var html=document.documentElement;
  var KEY='tawassum-lang';
  function apply(set){
    html.setAttribute('data-lang',set);
    html.setAttribute('lang',set);
    html.setAttribute('dir', set==='ar'?'rtl':'ltr');
    document.querySelectorAll('.lang-toggle button').forEach(function(x){
      x.classList.toggle('active', x.getAttribute('data-set')===set);
    });
  }
  var saved='ar';
  try{ saved=localStorage.getItem(KEY)||'ar'; }catch(e){}
  apply(saved);
  document.querySelectorAll('.lang-toggle button').forEach(function(b){
    b.addEventListener('click',function(){
      var set=b.getAttribute('data-set'); apply(set);
      try{ localStorage.setItem(KEY,set); }catch(e){}
    });
  });
  var t=document.getElementById('navToggle');
  var links=document.getElementById('navLinks');
  if(t&&links){
    t.addEventListener('click',function(){ links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function(a){ a.addEventListener('click',function(){ links.classList.remove('open'); }); });
  }
})();