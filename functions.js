function changeColourTest() {
    document.getElementById("button-generator").style.backgroundColor = "green";
}

function includeJammer(min, max) {
    let jammer = Math.floor(Math.random() * 3)  + 1;

    if(jammer === 1 || jammer === 3) {
        jammer = "Y";
    } else {
        jammer = "N";
    };

    console.log("jammer:" + jammer);
    return jammer;
}

function includePivot() {
    let pivot = Math.floor(Math.random() * 3)  + 1;

    if(pivot === 1 || pivot === 3) {
        pivot = "Y";
    } else {
        pivot = "N";
    };

    console.log("pivot:" + pivot);
    return pivot;
}

const numberOfBlockers = [0, 1, 2, 3]
const weight = [1, 2, 3, 4]

function numberOfBlockersOnTrack(numberOfBlockers, weight) {

    // array = [0, 1, 1, 2, 2, 2, 3, 3 ,3 ,3]
    const cumulativeWeights = [];

    for (let i = 0; i < weight.length; i+=1) {
        cumulativeWeights[i] = weight[i] + (cumulativeWeights[i-1] || 0);
    }
    
    const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
    const rand = Math.random() * maxCumulativeWeight;

    for (let blockerIndex = 0; blockerIndex < cumulativeWeights.length; blockerIndex +=1) {
        if (cumulativeWeights[blockerIndex] >= rand) {
            return {
                blockers: numberOfBlockers[blockerIndex],
                index: blockerIndex,
            };
        }

    }

    // console.log("blockers:" + cumulativeWeights);
    // return cumulativeWeights;
}

function generatePack() {
    let pack = 1;
    // call includeJammer
    // call includePivot
    // call numberOfBlockers
    
    console.log(pack);

    // return pack
    return pack;
    
}