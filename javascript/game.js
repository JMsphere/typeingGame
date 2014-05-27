$(document).ready(function(){
			var width = screen.width - 100;
			var height = screen.height -200;
			var code = 0;
			$("#start").css({
				'top': (height/2) + 'px',
				'left': (width/2) + 'px'
			});

			$("#start").click(function(event) {
				$(this).animate({
					'top': ((screen.height - 200)/2) + 'px',
					'left': ((screen.width - 300)/2) + 'px',
					'opacity': 0.5,
					'font-size': '100px',
				}, 500, function() {
					$(this).fadeOut('fast');
				});
				$("#score").show();
				genLetter();
			});

			//处理键盘事件以及匹配合适得泡泡
			$(document).keydown(function(event) {
				var keycode = event.keyCode;
				$('.bubb' + keycode).animate(
					{
					'top': height - 50 + 'px',
					'padding': '20px' ,
					'font-size': '50px',
					"opacity" :0,
					}, 'slow'
				);
				$('.bubb' + keycode).fadeOut('slow').hide('slow', function(){
					code += 10;
					$("#score").html(code);
					$(this).remove();
				});
				if(code%100 == 0){
					var funMsg = Math.floor(Math.random() * 10);
					switch (funMsg){
						// case 1: $('body').append('<span class="message">竞猜 ! 吖麟喜欢谁，猜对有奖!!!</span>');
						// 	break;
						// case 2: $('body').append('<span class="message">恭喜啦，继续努力看完隐藏句子</span>');
						// 	break;
						// case 3: $('body').append('<span class="message">打代码打到想要疯掉是什么感觉？？</span>');
						// 	break;
						// case 4: $('body').append('<span class="message">广工男生有范???</span>');
						// 	break;
						// case 5: $('body').append('<span class="message">原来我饭卡没有钱了，T^T有没有哪个土豪帮忙冲一下</span>');
						// 	break;
						// case 6: $('body').append('<span class="message">暑假就要来了，我要到大三了，肿么办！！</span>');
						// 	break;
						// case 7: $('body').append('<span class="message">宿舍好热，校长，我们要空调！！！！</span>');
						// 	break;
						// case 8: $('body').append('<span class="message">师兄师姐都要毕业了，加油喇！！</span>');
						// 	break;
						// case 9: $('body').append('<span class="message">慢慢玩吧！</span>');
						// 	break;
						case 1: $('body').append('<span class="message">竞猜 ! 吖麟喜欢谁，猜对有奖!!!</span>');
							break;
						case 2: $('body').append('<span class="message">竞猜 ! 吖麟喜欢谁，猜对有奖!!!</span>');
							break;
						case 3: $('body').append('<span class="message">竞猜 ! 吖麟喜欢谁，猜对有奖!!!</span>');
							break;
						case 4: $('body').append('<span class="message">竞猜 ! 吖麟喜欢谁，猜对有奖!!!</span>');
							break;
						case 5: $('body').append('<span class="message"> 我不会告诉你吖麟喜欢副班的！！！</span>');
							break;
						case 6: $('body').append('<span class="message"> 我不会告诉你吖麟喜欢副班的！！！</span>');
							break;
						case 7: $('body').append('<span class="message"> 我不会告诉你吖麟喜欢副班的！！！</span>');
							break;
						case 8: $('body').append('<span class="message"> 我不会告诉你吖麟喜欢副班的！！！</span>');
							break;
						case 9: $('body').append('<span class="message"> 我不会告诉你吖麟喜欢副班的！！！</span>');
							break;
						default: '';
							break;

					}
					$('body').find('.message').animate({
						'padding': 0,
						'font-size': '40px'
					}, 2000, function(){
						$(this).fadeOut('fast').remove();
					});
				}
			});
			// 在A～Z中随机选取一个
			function genLetter(){
				var color = randomColor();
				var key = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
				var keyChar = String.fromCharCode(key);
				var top = Math.floor(Math.random() * (height - 100));
				var left = Math.floor(Math.random() * (width - 100));
				$('body').append('<span class="bubb bubb' + key + '"style="left: ' + left + 'px; top: ' + top + 'px; background-color: ' + color + '">' + keyChar + '</span>');
				slowdown(key);
				setTimeout(genLetter, 1000);
				// setTimeout(removeLetter, 10000 - code);
			}
			//下滑的泡泡
			function slowdown(key){
				$('.bubb' + key).animate({
					'top': height - 30 + 'px',
					'opacity': 1
				}, {
					duration: 4000,
					queue: false,
					complete: function(){
						$('.bubb' + key).fadeOut('slow', function(){
							$(this).remove();
						});
					}
				});
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

		});