function submit_Num() {
    
    let arr = [];
    let x = document.getElementById("input_num").value;
    let z = 0;

    for(i = 2; i <= x; i++){    
        let count0 = 0;

        for(w = 2; w <= x; w++){
            z = i % w;

            if(z == 0){
                count0 += 1;
            }
        }
        if(count0 == 1){
            arr.push(i);
        }
    }

    document.getElementById("result_Container").innerHTML = arr;
    document.getElementById("length_Count").innerHTML = arr.length;
}