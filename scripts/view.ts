import { extend } from "jquery";

class View {
    sliderOptions: object;
    constructor(_options: object) {
        this.sliderOptions = _options;
    }
    
    initSlider(slider) {
        let div = document.createElement('div');
        let style = JSON.stringify(this.sliderOptions).replace(/[\{\}\"]/g, '').replace(/,/g, ';');
        slider.style.cssText = `${style}`;      
        return div
    }
}

class Slider extends View {

}

export default View

