class Model {

    constructor(options:Slider) {
        this.options = options;
    };
    options:Slider;
    
}

interface Slider {
   width: string;
   height: string;
   backgroundColor: string;     
}

export default Model