(function() {
  'use strict';

  // two way data binding (to UI)

  var app = new Vue({
  el: '#app',
  data: {
    count: 5
  },

  watch: {

    //localStorageに保存
    count: function(){
      localStorage.setItem('count',JSON.stringify(this.count));
    }
  },

//読み込んだタイミングで
  mounted: function(){
      this.count = JSON.parse(localStorage.getItem('count'));
      this.changeMovie();
  },

  methods:　{
    changeMovie :function(){
      setTimeout(()=>{
        $('.movie').fadeOut(3000);
        $('.message').find('p').text('LOSE');
      },6200);

    },

    //カウントダウン
    startGame:　function(){

      if(this.count >0){

        // カウントを減らす
        this.count--;

        //①パネルとボタンを隠す
        setTimeout(()=>{
          $('#slot-start').addClass('hide');
          $('.left').find('img').addClass('hide');
          $('.right').find('img').addClass('hide');
          $('.center').find('img').addClass('hide');
        },100);

        let id = this.getRandom(999);
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
          if(this.getRandom(2) == 1){
            flg = true;
            console.log("reach");
          }
          console.log("lose");
        }

        //④ パネル画像を変更する。
        setTimeout(()=>{
          $('.left').find('img').attr('src',`${this.getRandom(7)}.png`);
          $('.right').find('img').attr('src',`${this.getRandom(7)}.png`);
          $('.center').find('img').attr('src',`${this.getRandom(7)}.png`);
        },1300);

        // ⑤リーチの演出を見せる。
        // リーチでないなら真ん中のパネルを表示させる。
        if(flg){

          // 右と左のパネルを表示させる
          setTimeout(()=>{
            $('.left').find('img').removeClass('hide');
            $('.right').find('img').removeClass('hide');
            // $('.center').find('img').removeClass('hide');
          },1300);

          //reeach演出
          //databaseからcutinをとってくる。
          //カットインを表示させた1s後にpushボタンを表記
          setTimeout(()=>{
            console.log("reeach");
            $('.letter').find("p").text('reeach!!!!');
          },2000);

          setTimeout(()=>{
            $('.letter').find("p").text('押せ!!!!');
            $('#movie-start').removeClass('hide');
            $('#movie-start').addClass('show');
          },5000);

        }else{
          console.log("no reach")
          setTimeout(()=>{

            // パネルを表示させる
            setTimeout(()=>{
              $('.left').find('img').removeClass('hide');
              $('.right').find('img').removeClass('hide');
              $('.center').find('img').removeClass('hide');
              $('#slot-start').removeClass('hide');
            },2000);
          });
        }
      }
    },

    getRandom: function(num){
      return Math.floor(Math.random() * num + 1);
    }

  }
})

})();
