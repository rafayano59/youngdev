// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require jquery.mask
//= require_tree .

  $(document).on('turbolinks:load', function() {
      

      // fix menu when passed
      $('.bottomjs')
        .visibility({
          once: false,
          onTopPassed: function() {
            $('.fixed.menu').transition({
              animation : 'fade down in',
              duration : '1s'
            });
          },
          onTopPassedReverse: function() {
            $('.fixed.menu').transition({
            animation  : 'fade down out',
            duration   : '1s'
            });
          }
        })
      ;

      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;
      
        
        
      //entrada fade home
      
      $('.entrada1, .entrada2, .entrada3, .entrada4, .entrada5')
        .transition({
          animation  : 'fade in',
          duration   : '5s',
          interval   : '1000'
        });
        
        
      //fade right home
      
      $('.faderight')
        .visibility({
          once: true,
          onTopVisible: function() {
            $('.topleft, .bottomright')
              .transition({
                animation  : 'fade right in',
                duration   : '2s',
                interval   : 1000
              })
            ;
          }
        });  
        

      //fade left home
      
      $('.fadeleft')
        .visibility({
          once: true,
          onTopVisible: function() {
            $('.topright2, .bottomleft2')
              .transition({
                animation  : 'fade left in',
                duration   : '2s',
                interval   : 1000
              })
            ;
          }
        });  
       
      

      
        
      
      
      
      $('.tadahome')
        .visibility({
          once: true,
          onTopVisible: function() {
            $('.tadahome')
              .transition({
                animation  : 'fade in',
                duration   : '5s'
              })
            ;
          }
        });  
        
        
        $('.tada2home')
        .visibility({
          once: true,
          onTopVisible: function() {
            $('.tada1, .tada2, .tada3, .tada4')
              .transition({
                animation  : 'fade in',
                duration   : '5s',
                interval   : 1000
              })
            ;
          }
        }); 
        
        
        $('.tiny.info.icon.link')
          .popup({
            position : 'right center',
            target   : '#targetruby',
            content  : 'O que Airbnb, Bloomberg, Shopify e Twitter têm em comum? São aplicações desenvolvidas em Ruby on Rails.'
          })
        ;

        $('.bottomleft.image')
          .dimmer({
            on: 'hover'
          })
        ;
        
        $('.right')
          .on('click', function() {
            console.log('right');
            $('.slide')
              .siblings('.active:not(:last-of-type)') 
              .removeClass('active')
              .next()
              .addClass('active');
        });
        
        $('.left')
          .on('click', function() {
            $('.slide')
              .siblings('.active:not(:first-of-type)')
              .removeClass('active')
              .prev()
              .addClass('active');
        });
        
        var $root = $('html, body');

        $('a[href^="#"]').click(function () {
            $root.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
        
            return false;
        });
        
        
        $('#pic-changer').change(function(){ //if the select value gets changed
           var bgSource = $(this).find(':selected').data('bg');
           var h3Source = $(this).find(':selected').data('h3'); //get the data from data-h3 attribute
           var pSource = $(this).find(':selected').data('p');
           if(h3Source){ //if it has data
              $('#image-location').html('<div class="ui segment '+bgSource+'"><h3 class="letrawhite fontmedio marginbottom1">'+h3Source+'</h3><p class="font1p8 letrawhite06">'+pSource+'</p></div>'); // insert image in div image-location
           } else {
              $('#image-location').html('<div class="ui center aligned segment institucionalbg"><h3 class="letrawhite fontmedio marginbottom1">Nossos valores</h3><p class="font1p8 letrawhite06">Acreditamos que um bom serviço fornece o maior valor com o menor custo.<br>Desenvolvemos sites com preços a partir de <span class="font3p5 opacity75 tadahome letrapurple">R$475</span><br></p></div>'); //remove content from div image-location, thus removing the image
           }
        })
        
        var maskBehavior = function (val) {
          return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        options = {onKeyPress: function(val, e, field, options) {
                field.mask(maskBehavior.apply({}, arguments), options);
            }
        };
        
        $('#contato_phone').mask(maskBehavior, options);
         
    });
    
    
