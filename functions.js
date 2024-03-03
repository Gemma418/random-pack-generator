function changeColourTest() {
    document.getElementById("button-generator").style.backgroundColor = "green";
}

function includeJammer(min, max) {
    let jammer = Math.floor(Math.random() * 3)  + 1;

    if(jammer === 1 || jammer === 3) {
        jammer = true;
    } else {
        jammer = false;
    };

    return this.jammer;
}

function includePivot() {
    let pivot = Math.floor(Math.random() * 3)  + 1;

    if(pivot === 1 || pivot === 3) {
        pivot = true;
    } else {
        pivot = false;
    };

    return this.pivot;
}

function numberOfBlockers() {
    let blockers = Math.floor(Math.random() * 10);

    if(blockers === 0) {
        // console.log("no blockers");
        blockers = 0;
    } else if(blockers === 1 || blockers === 2) {
        // console.log("one blocker");
        blockers = 1;
    } else if(blockers >=3 && blockers <= 5) {
        // console.log("two blockers");
        blockers = 2;
    } else {
        // console.log("three blockers");
        blockers = 3;
    }

    return this.blockers;
}

function generatePack() {
    let packOne = [this.includeJammer(), this.includePivot(), this.numberOfBlockers()];
    
    let packTwo = [includeJammer(), includePivot(), numberOfBlockers()];



    // call includeJammer
    // call includePivot
    // call numberOfBlockers
    
    console.log(packOne, packTwo);


}