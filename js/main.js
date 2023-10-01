function RemoveClassIdenAll(claselem){
    let elements = document.getElementsByTagName("*");

      // 各要素をループで処理
      for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          
          // 指定されたクラスが存在するかチェック
          if (element.classList.contains(claselem)) {
              // 指定されたクラスを削除
              element.classList.remove(claselem);
          }
      }
  }
	const menuhamb = document.querySelector('.menu-hamb');
	const headerNav = document.querySelector('.header-nav');
	const hambBg = document.querySelector('.hamb-click-bg');
	const hambIconUp = document.querySelector('.hamb-icon.up');
  const hambIconMid = document.querySelector('.hamb-icon.mid');
  const hambIconBottom = document.querySelector('.hamb-icon.bottom');
	
	menuhamb.addEventListener('click', () => {  //ハンバーガーメニュークリック時
    RemoveClassIdenAll('first');
		headerNav.classList.toggle('nav-actived');
		hambBg.classList.toggle('hamb-actived');
    menuhamb.classList.toggle('hamb-actived');
    hambIconUp.classList.toggle('icon-actived');
    hambIconMid.classList.toggle('icon-actived');
    hambIconBottom.classList.toggle('icon-actived');
	});