// 正方形をクリックしたときに、その正方形のみslideUpして消えるアニメーション
// thisを利用すると、コードをシンプルにまとめることができます。
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

// リスト（ul要素）の子要素であるli要素内の文字列が、黒色から赤色に変化
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});