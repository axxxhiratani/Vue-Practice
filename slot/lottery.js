

//Jqueryの記述
$(function() {
    // 処理を記述

    // Vueの記述
    var app = new Vue({
      el: '#logdata',
      data: {
        num: 10
      }
    })

    // パネルを隠す
    $('#slot-start').click(()=>{
      $('.left').find('img').slideUp(1200);
      $('.right').find('img').slideUp(1100);
      $('.center').find('img').slideUp(1000);


      // 抽選してデータベースから値を受け取る。
      let id = getRandom(10);
      let flg = false;
      if(id == 1){
        // wins->id
        flg = true;
        console.log("win");
        console.log("reach");
      }else{
        //lost->id
        //lost->left と　lost->right が同じなら flg をtrueにする。
        if(getRandom(2) == 1){
          flg = true;
          console.log("reach");
        }
        console.log("lose");
      }


      // パネル画像を変更する。
      setTimeout(()=>{
        $('.left').find('img').attr('src',`${getRandom(7)}.png`);
        $('.right').find('img').attr('src',`${getRandom(7)}.png`);
        $('.center').find('img').attr('src',`${getRandom(7)}.png`);
      },1300);


      // パネルを表示させる。
      setTimeout(()=>{

        $('.left').find('img').slideDown(2500);
        $('.right').find('img').slideDown(2800);
      },2000);

      if(flg){
        //reeach演出
        //databaseからcutinをとってくる。


        //カットインを表示させた1s後にpushボタンを表記

        setTimeout(()=>{
          console.log("reeach");
          $('.letter').find("p").text('reeach!!!!');

        },2000);

        setTimeout(()=>{

          $('.letter').find("p").text('押せ!!!!');
          $('#slot-start').addClass('hide');
          $('#movie-start').removeClass('hide');
          $('#movie-start').addClass('show');
        },5000);


      }else{
        console.log("no reach")
        setTimeout(()=>{
          $('.center').find('img').slideDown(2800);
        },2000);
      }
    });


    // pushを押した時の処理
    $('#movie-start').click(()=>{
        $('.letter').find("p").text('go!!!!');

        //directingtのデータを送信する。
        //データはローカルストレージに保存しておく
        //sessionに図柄を保存しておく。

    });


    function getRandom(num){
      return Math.floor(Math.random() * num + 1);
    }

  });
