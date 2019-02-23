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
      
      $('.entrada')
        .transition({
          animation  : 'fade in',
          duration   : '5s'
        });
        
        
      //fade right home
      
      $('.faderight')
        .transition('hide')
        .visibility({
          once: true,
          onTopVisible: function() {
            $('.faderight')
              .transition({
                animation  : 'fade right in',
                duration   : '2s'
              })
            ;
          }
        });  
        

      //fade left home
      
      $('.fadeleft')
        .transition('hide')
        .visibility({
          once: true,
          onTopVisible: function() {
            $('.fadeleft')
              .transition({
                animation  : 'fade left in',
                duration   : '2s'
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
                duration   : '1s'
              })
            ;
          }
        });  
        
        
        $('.tada2home')
        .visibility({
          once: true,
          onTopVisible: function() {
            $('.tada2home')
              .transition({
                animation  : 'fade in',
                duration   : '1s'
              })
            ;
          }
        }); 
        
        
    });
    
