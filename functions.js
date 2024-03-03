function changeColourTest() {
    document.getElementById("button-generator").style.backgroundColor = "green";
}

function includeJammer(min, max) {
    let jammer = Math.floor(Math.random() * 3)  + 1;

    if(jammer === 1 || jammer === 3) {
        jammer ="&#10004;";
    } else {
        jammer = "&#10006;";
    };

    return jammer;
}

function includePivot() {
    let pivot = Math.floor(Math.random() * 3)  + 1;

    if(pivot === 1 || pivot === 3) {
        pivot = "&#10004;";
    } else {
        pivot = "&#10006;";
    };

    return pivot;
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

    return blockers;
}

function generatePack() {
    const packOne = [includeJammer(), includePivot(), numberOfBlockers()];
    document.getElementById('jammer1').innerHTML = packOne[0];
    document.getElementById('pivot1').innerHTML = packOne[1];
    document.getElementById('blockers1').innerHTML = packOne[2];
    let packTwo = []
    
    if(packOne[0] === "&#10006;"){
        packTwo = ["&#10004;", includePivot(), numberOfBlockers()];
        document.getElementById('jammer2').innerHTML = packTwo[0];
        document.getElementById('pivot2').innerHTML = packTwo[1];
        document.getElementById('blockers2').innerHTML = packTwo[2];
    } else {
        packTwo = [includeJammer(), includePivot(), numberOfBlockers()];
        document.getElementById('jammer2').innerHTML = packTwo[0];
        document.getElementById('pivot2').innerHTML = packTwo[1];
        document.getElementById('blockers2').innerHTML = packTwo[2];
    }
}