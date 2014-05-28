$(document).ready(function(){
	var 	width = screen.width - 100,
		height = screen.height -200,
		code = 0,
		stop = true,
		name = '',
		classNameAllow = ['嘉铭', '庆麟'],
		organizetionclassNameAllow = ['张沐能', '陈星', '黄淑雯'],
		picture = ['p3.jpg'];
	$("#start").css({
		'top': (height/2) + 'px',
		'left': (width/2) + 'px'
	});
	name = prompt('请输入你的全名！谢谢！', '如：杜子腾');
	if(correctName(name)){
		message('欢迎你！' + name + '逗B', 2000);
		$("#start").click(function(event) {
			$(this).animate({
				'top': ((screen.height - 200)/2) + 'px',
				'left': ((screen.width - 300)/2) + 'px',
				'opacity': 0.5,
				'font-size': '100px',
			}, 500, function() {
				$(this).fadeOut('fast');
			});
			message('突破10000分有终极秘密分享!!!!!', 2000);
			$("#score").show();
			$("#pause").show();
			stop = false;
			genLetter();
			$("#pause").click(function(){
				if(stop === false){
					stop = true;
					message('2秒后暂停', 2000);
					setTimeout(stopBubb, 2000);
				} else {
					stop = false;
					genLetter();
				}
			});
		});
	} else {
		$("#start").fadeOut('slow', function() {
			$('body').append('<span class="message">你不允许玩这个游戏哦，请联系<span id="master">管理者</span>以获取用户名！</span>');
		});
	}
	//处理键盘事件以及匹配合适泡泡
	$(document).keydown(function(event) {
		if(stop === false){
			var keycode = event.keyCode;
			var bubbkey = $('.bubb' + keycode);
			if(bubbkey.length > 0){
				bubbkey.animate(
					{
					'top': height - 50 + 'px',
					'padding': '20px' ,
					'font-size': '50px',
					"opacity" :0,
					}, 'slow'
				);
				$('.bubb' + keycode).fadeOut('slow').hide('slow', function(){
					if(code >= 10000){
						message('恭喜突破10000分!!!', 5000);
						switch (name){
							case 'className': message('我不会告诉你吖麟喜欢副班的！！！', 2000);
								break;
							case 'organizationName': $('body').append('<span class="message">星爷很帅对不对？</span>');
						}
						stop = true;
					} else {
						code += 10;
					}
					if(code > 0 && (code % 100 == 0)){
						var msg = '<span class="message"><img src="images/' + picture[0] + '">逗B，又拿到100分了！！</span>';
						message(msg, 3000);
					}
					$("#score").html(code);
					$(this).remove();
				});
			} else {
				code -= 10;
				$("#score").html(code);
			}
		}
	});

	// 在A～Z中随机选取一个
	function genLetter(){
		var speed = 700.0;
		var color = randomColor();
		var key = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
		var keyChar = String.fromCharCode(key);
		var top = Math.floor(Math.random() * (height - 100) * 0.2);
		var left = Math.floor(Math.random() * (width - 100));
		$('body').append('<span class="bubb bubb' + key + '"style="left: ' + left + 'px; top: ' + top + 'px; background-color: ' + color + '">' + keyChar + '</span>');
		
		//为泡泡添加下滑效果
		$('.bubb' + key).animate({
			'top': height - 30 + 'px',
			'opacity': 1
		}, {
			duration: 4000,
			queue: false,
			complete: function(){
				$('.bubb' + key).fadeOut('slow', function(){
					code -= 10;
					$("#score").html(code);
					$(this).remove();
				});
			}
		});
		if(stop === true){
			clearTimeout(genLetter);
		} else {
			if(code > 0 && (code % 100 == 0) && speed > 500){
				speed = speed / code * 100;
			}
			setTimeout(genLetter, speed);
		}
	}
	//取随机颜色
	function randomColor(){
		var color = '';
		var values = ['#D15FEE', '#D02090', '#CD7054', '#D1EEEE', '#CDBA96', '#CD2626', '#C1FFC1', '#C0FF3E', '#BA55D3', '#9ACD32', '#98FB98', '#8B5A00', '#FFFF00', '#FFF68F', '#FFB5C5', '#FF00FF'];
		for(c = 0; c < 6; c++){
			node = Math.floor(Math.random() * 15);
			color += values[node];
			return color;
		}
	}

	function message(msg, msgSpeed){
		$('body').append('<span class="message">' + msg + '</span>');
		$('body').find('.message').animate({
			'padding': 0,
			'font-size': '40px'
		}, msgSpeed, function(){
			$(this).fadeOut('fast').remove();
		});
	}
	function stopBubb(){
		$(".bubb").fadeOut('slow', function(){
			$(this).remove();
		});
	}
	function correctName(name){
		for (var a in classNameAllow){
			if(name == classNameAllow[a]){
				name = 'className';
				return true;	
			}
		}
		for (var b in organizetionclassNameAllow){
			if(name == organizetionclassNameAllow[b]){
				name = 'organizationName';
				return true;
			}
		}
		return false;
	}
});