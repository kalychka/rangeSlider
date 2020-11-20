///<reference path="./Slider.d.ts"/>
import * as $ from 'jquery'

import Model from './model'
import View from './view'

(function( $ ) {

    $.fn.extend({
        Slider: function(options:any) {
            let newSlider = new Model(options);
            let SliderView = new View(newSlider.options);
            return this.each(function() {
                this.appendChild(SliderView.initSlider(this));
            })
        }
    })
})(jQuery);