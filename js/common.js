$(function(){
	$('.searchIcon').on('click',function(){
		console.log('aaa')
		var ques=$('.search').val();
		if (ques) {
			console.log(ques);
			window.location.href='https://www.baidu.com/s?wd='+ques;
			$('.search').val("");
			ques="";
		}
	});

	//左侧导航点击--条目
    $('.panel-group').on('click','.pro-item',function(){
      var li=$('.pro-item.active')
      if($(li).text()==$(this).text()){
        return
      }else{
        $(this).addClass('active')
        $('.panel-title').removeClass('active')
        console.log($(this).parents('.panel').find('.panel-title'));
        $(this).parents('.panel').find('.panel-title').addClass('active')
        $(li).removeClass('active')
      } 
    });
    // 左侧导航点击--标题
    $('.panel-group').on('click','.panel-heading',function(){
    	var item=$(this).parent().find('.pro-item')[0]
    	$('.panel-title').removeClass('active')
    	$(this).find('.panel-title').addClass('active')
    	$('.pro-item.active').removeClass('active')
    	$(item).addClass('active')
    })
});
