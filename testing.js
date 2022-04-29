(function( $ ){
    "use strict";
  
    $.fn.topBlock = function( options ) {
  
      // Defaults
      var settings = $.extend({
          'color'             : '#ffffff'
      }, options);
  
      var $this = $(this),$settings = settings;

      var template = `<section style="background-color: ${$settings.color}">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="block-bg-video">
                          <div className="block-bg-video__video">
                              <h1>Here your video</h1>
                          </div>
                          <div className="block-bg-video__content">
                              <div className="block-bg-video__content-item">
                                  <h2 className="block-bg-video__content-item-title">
                                      here the subtitle
                                  </h2>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>`;

      $this.append(template);

    };
})( jQuery );
