$(document).ready(() => {
  $('#header-top').click(() => {
    $('#header-top').children('i').toggleClass('rotate-180deg');
  })

  $('#header-work').click(() => {
    $('#header-work').toggleClass('box-shadow');
    $('#content-form-trab').slideToggle('slow');
    $('#header-work').children('i').toggleClass('rotate-180deg');
  });

  $('#header-design').click(() => {
    $('#header-design').toggleClass('box-shadow');
    $('#content-project').slideToggle('slow');
    $('#header-design').children('i').toggleClass('rotate-180deg');
  });

  $('#curriculum').click(() => {
    $('#curriculum').toggleClass('box-shadow');
    $('#content-curriculum').slideToggle('slow');
    $('#curriculum').children('i').toggleClass('rotate-180deg');
  });

  $('#mapa').click(() => {
    $('#mapa').toggleClass('box-shadow');
    $('#content-map').slideToggle('slow');
    $('#mapa').children('i').toggleClass('rotate-180deg');
  });

  $('#btn-download').click(() => {
    window.location = 'img/Curriculo_Fabricio.pdf';
  });
  const myMap = () => {
    var mapProp = {
      center: new google.maps.LatLng(51.508742, -0.120850),
      zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  }
  myMap();
});

var slideIndex = 1;

const slideShow = (container, n) => {
  let slideNum = $(container).length - 1;

  if (n > slideNum)
    slideIndex = 1;

  if (n < 1)
    slideIndex = slideNum;

  for (let i = 0; i < slideNum; i++)
    $(container)[i].style.display = 'none';

}

const slideSwitch = (container, i) => {
  slideShow(container += ' div', slideIndex += i);
}

slideShow('#slider-design-logos div', slideIndex);
slideShow('#slider-design-ui div', slideIndex);
slideShow('#slider-drawings div', slideIndex);