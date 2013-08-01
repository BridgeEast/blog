	var timeID;
	var image;
	var current = 0;
	var images = new Array(7);
	function init(){
		for (var i=1;i<=7;i++){
			images[i] = new Image(670,502);
			images[i].src = "images/"+i+".jpg";
		}
		image = document.images[0];
	}
	function setSrc(i){
		current =i;
		//设置图片src的属性，实现图片的切换
		image.src = images[i].src;
	}
	function pre(){
		if (current <= 0){
			alert('已经是第一张了');
		}else{
			current--;
			setSrc(current);
		}
	}
	function next(){
		if (current >= 7){
			alert('已经是最后一张了');
		}else{
			current++;
			setSrc(current);
		}
	}
	function play(){
		if (current >= 7){
			current = 0;
		}
		setSrc(++current);
	}

