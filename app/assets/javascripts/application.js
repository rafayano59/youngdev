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
//= require_tree .

    window.onbeforeunload = function () {
        window.scrollTo(0,0);
};

  $(document)
    .ready(function() {
      

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
      
      // gradually change color home
      $('.telapreta')
        .visibility({
           once       : false,
           continuous : true,
          onPassing  : function(calculations) {
            var newColor = 'rgba(0, 0, 0, ' + ( 1 - calculations.percentagePassed ) +')';
            $(this).css('background-color', newColor);
          }
        });
        
        
      //entrada fade home
      
      $('.entrada1, .entrada2, .entrada3')
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
       
      
      //fly left home
      
      $('.center.aligned.row')
        .visibility({
          once: true,
          onTopVisible: function() {
            $('.center.aligned.row .flyleft')
              .transition({
                animation  : 'bounce',
                duration   : '1s'
              })
            ;
            $('.center.aligned.row .flyright')
              .transition({
                animation  : 'bounce',
                duration   : '1s'
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
        
        $("a[href^='#']").click(function(e) {
        	e.preventDefault();
        	
        	var position = $($(this).attr("href")).offset().top;
        
        	$("body, html").animate({
        		scrollTop: position
        	}, 500 );
        });
        
        $('.tiny.info.icon.link')
          .popup({
            position : 'right center',
            target   : '#targetruby',
            content  : 'O que Airbnb, Bloomberg, GitHub e Twitter têm em comum? São aplicações desenvolvidas em Ruby on Rails.'
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
         
    });
    
    
