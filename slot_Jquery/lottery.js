
(function() {
  'use strict';

  // two way data binding (to UI)

  var app = new Vue({
  el: '#app',
  data: {
    count: 10
  },
  methods:{
    countDown:function(){
      this.count--;
    }
  }
})

})();


//Jqueryの記述
$(function() {
    // 処理を記述




    $('#slot-start').click(()=>{

      setTimeout(()=>{
        //①パネルを隠す
        $('.left').find('img').addClass('hide');
        $('.right').find('img').addClass('hide');
        $('.center').find('img').addClass('hide');
      },1000);


      //  ②抽選してデータベースから値を受け取る。
      let id = getRandom(10);
      let flg = false;
      if(id == 1){
        // wins->id
        flg = true;
        console.log("win");
        console.log("reach");
      }else{

        // ③リーチかどうか調べる
        //lost->id
        //lost->left と　lost->right が同じなら flg をtrueにする。
        if(getRandom(4) == 1){
          flg = true;
          console.log("reach");
        }
        console.log("lose");
      }

        //④ パネル画像を変更する。
      setTimeout(()=>{
        $('.left').find('img').attr('src',`${getRandom(7)}.png`);
        $('.right').find('img').attr('src',`${getRandom(7)}.png`);
        $('.center').find('img').attr('src',`${getRandom(7)}.png`);
      },1300);



      // ⑤リーチの演出を見せる。
      // リーチでないなら真ん中のパネルを表示させる。
      if(flg){

        // 右と左のパネルを表示させる
        setTimeout(()=>{
          $('.left').find('img').removeClass('hide');
          $('.right').find('img').removeClass('hide');
          // $('.center').find('img').removeClass('hide');
        },1000);

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
          //④ パネル画像を変更する。
          setTimeout(()=>{
            $('.left').find('img').attr('src',`${getRandom(7)}.png`);
            $('.right').find('img').attr('src',`${getRandom(7)}.png`);
            $('.center').find('img').attr('src',`${getRandom(7)}.png`);
          },1300);

          // 右と左のパネルを表示させる
          setTimeout(()=>{
            $('.left').find('img').removeClass('hide');
            $('.right').find('img').removeClass('hide');
            $('.center').find('img').removeClass('hide');
          },2000);
        });
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
