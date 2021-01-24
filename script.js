jQuery(function ($) {
  //APPLIQUE UN DÉCALAGE (OFFSET) SUR LE BODY POUR RECALER LE MENU-HEADER EN FIXED
  let offset = $("header").height();
  $("body").css('marginTop', offset);
  //MENU BURGER
  $(".menu-burger").click(function () {
    $(this).toggleClass("open close");
    //DÉPLOIE LE MENU HEADER
    $("nav.menu").slideToggle({
      //AJOUTE PROGRESSIVEMENT UN OFFSET SUR LE BODY À MESURE QUE LE MENU SE DÉPLOIE
      progress: function () {
        if ($('body').width() < 480) {
          let offset = $("header").height();
          $("body").css('marginTop', offset);
        }
      }
    });
  });
  //FERME LE MENU BURGER QUAND CLICK SUR ANCRE DU MENU
  $("header .header-menu a").click( function(){
    if($('.menu-burger').hasClass("open"))
      $(".menu-burger").trigger('click');
  });
  //OUVRE/FERME LES TOGGLES DE LA PARTIE PROGRAMME
  $(".togl-trig").click(function () {
    $(this).next(".togl-cont").slideToggle();
    //LA CLASSE EST NÉCESSAIRE POUR LE PICTO DU TOGGLE
    $(this).toggleClass("open close");
  });
  //OUVRE LE TROISIÈME TOGGLE AU CHARGEMENT DE LA PAGE (Le diplôme)
	$('h4.togl-trig:nth-of-type(3)').trigger('click');
	/* SWIPER */
	let mySwiper = new Swiper('.swiper-container-js', {
    // Optional parameters
    loop: true,
    //POUR LES RÉSOLUTIONs AUTRES QUE CELLES GÉRÉES PAR BREAKPOINTS (ICI EN-DESSOUS DE 320)
    slidesPerView: 1,
    spaceBetween: 10,
    //FAIT PASSER LES SLIDER AUTOMATIQUEMENT
    autoplay: {
      delay: 6500,
      //ÉVITER LA DÉSACTIVATION DU SLIDE AUTO SUR UNE INTERRACTION
      disableOnInteraction: false
    },
    // Responsive breakpoints
    breakpoints: {
      // BREAKSPOINTS GÉRANT LE NOMBRE DE SLIDES SELON LA REZ
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1281: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    //PAGINATION DU SLIDE (POINTS)
    pagination: {
      el: '.swiper-pagination'
    }
  });

  // LP SECTEURS - Répartition du bloc Formations en deux colonnes
  let list = $("section#formation.sect li.togl-line");
  let num = list.length;
  if(num>0){
    let half = Math.ceil(num/2);
    for( let i=0;i<num;i++){
      if(i<half){
        $("ul.col.left").append(list[i]);
      }else{
        $("ul.col.right").append(list[i]);
      }
    }
  }

  // Scroll when user click on an anchor
  $("a.scrolled, .scrolled a").on('click', function (e) {
    //Only on Tablet and Mobile Devices
    e.preventDefault();
    const menuHeight = $('header').height();
    const target = $(this).attr('href');
    const ofst = $(target).offset();
    const scrollto = ofst.top - menuHeight; // minus fixed header height
    $('html, body').animate({scrollTop: scrollto}, 400);
  })
});