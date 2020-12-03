const sort=(deret)=>{
    if(typeof deret === "string"){
        deret=deret.split(" ");
    }
    let swapped = true;
    let jumlah=0;
	while (swapped){
        swapped = false;
        const swap=[0,0];
		for (let j = 0; j < deret.length; j++) {
			if (deret[j] > deret[j + 1]) {
				let temp = deret[j];
                deret[j] = deret[j + 1];
                swap[0]=deret[j];
                deret[j + 1] = temp;
                swap[1]=temp;
                jumlah=jumlah+1;
                console.log(`${jumlah}. [${swap.toString()}] -> ${deret.join(" ")}`);
                swapped = true;
                break;
			}
		}
    };
    console.log(`\nJumlah swap=${jumlah}`);
	return deret;
}
const arr=[4,9,7,5,8,9,3];
const string=arr.join(" ");
sort(string); // input bisa deret berupa array atau string