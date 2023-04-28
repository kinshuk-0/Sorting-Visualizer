

function bubbleSort() {
    c_delay=0;
    for(let i=0; i<array_size; i++) {
        
        for(let j=0; j<array_size-1; j++) {
            divUpdate(divs[j],div_sizes[j],"yellow");
            if(div_sizes[j]>div_sizes[j+1]) {

                divUpdate(divs[j], div_sizes[j], "red");
                divUpdate(divs[j+1], div_sizes[j+1], "red");

                let t = div_sizes[j+1];
                div_sizes[j+1] = div_sizes[j];
                div_sizes[j] = t;

                divUpdate(divs[j], div_sizes[j], "red");
                divUpdate(divs[j+1], div_sizes[j+1], "red");
            }
            divUpdate(divs[j], div_sizes[j], "blue");
        }
        divUpdate(divs[i], div_sizes[i], "green");
    }
    divUpdate(divs[0],div_sizes[0], "green");
    enable();
}

function test(){
console.log("test");
}