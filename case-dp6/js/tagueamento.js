// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//-----------------------------------------------
// Carrega javascript do lib analytics.js
//-----------------------------------------------
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
//-----------------------------------------------
// Envia evento de visualizacao de pagina
//-----------------------------------------------
ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview', location.pathname);
//-----------------------------------------------
// Recupera elementos por classe
//-----------------------------------------------
let menu_contato 	= document.getElementsByClassName("menu-lista-contato")[0];
let menu_download 	= document.getElementsByClassName("menu-lista-download")[0];
let cards			= document.getElementsByClassName("card-montadoras");
let formulario		= document.getElementsByClassName("contato")[0];
//-----------------------------------------------
// Recupera elementos do formulario por Id
//-----------------------------------------------
let input_nome		= document.getElementById("nome");
let input_email		= document.getElementById("email");
let input_telefone	= document.getElementById("telefone");
let input_aceito	= document.getElementById("aceito");
//-----------------------------------------------
//Adiciona evento para o menu de Contato
//-----------------------------------------------
menu_contato.addEventListener('click', function(){
  ga('send', 'event', {
    eventCategory: 'menu',
    eventAction: 'entre_em_contato',
    eventLabel: 'link_externo'
  });
}, false); 
//-----------------------------------------------
//Adiciona evento para o menu de Download
//-----------------------------------------------
menu_download.addEventListener('click', function(){
  ga('send', 'event', {
    eventCategory: 'menu',
    eventAction: 'download_pdf',
    eventLabel: 'download_pdf'
  });
}, false);
//-----------------------------------------------
//Adiciona evento para os cards da pagina Analise
//-----------------------------------------------
for(let i = 0; i < cards.length; i = i + 1){
  cards[i].addEventListener('click', function(){
    ga('send', 'event', {
      eventCategory: 'analise',
      eventAction: 'ver_mais',
      eventLabel: cards[i].getAttribute('data-name')
    });
  }, false);
}
//-----------------------------------------------
//Adiciona evento para o input nome 
//do formulario de contato
//-----------------------------------------------
input_nome.addEventListener('focusout', function(){
  ga('send', 'event', {
    eventCategory: 'contato',
    eventAction: input_nome.getAttribute('Id'),
    eventLabel: 'preencheu'
  });
}, false);
//-----------------------------------------------
//Adiciona evento para o input email
//do formulario de contato
//-----------------------------------------------
input_email.addEventListener('focusout', function(){
  ga('send', 'event', {
    eventCategory: 'contato',
    eventAction: input_email.getAttribute('Id'),
    eventLabel: 'preencheu'
  });
}, false);
//-----------------------------------------------
//Adiciona evento para o input telefone 
//do formulario de contato
//-----------------------------------------------
input_telefone.addEventListener('focusout', function(){
  ga('send', 'event', {
    eventCategory: 'contato',
    eventAction: input_telefone.getAttribute('Id'),
    eventLabel: 'preencheu'
  });
}, false);
//-----------------------------------------------
//Adiciona evento para o input aceito 
//do formulario de contato
//-----------------------------------------------
input_aceito.addEventListener('focusout', function(){
  ga('send', 'event', {
    eventCategory: 'contato',
    eventAction: input_aceito.getAttribute('Id'),
    eventLabel: 'preencheu'
  });
}, false);
//-----------------------------------------------
//Adiciona evento de formulario enviado
//-----------------------------------------------
formulario.addEventListener('submit', function(){
  ga('send', 'event', {
    eventCategory: 'contato',
    eventAction: 'enviado',
    eventLabel: 'enviado'
  });
}, false);