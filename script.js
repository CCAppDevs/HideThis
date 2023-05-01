
let titles = document.getElementsByClassName("collapsable-title");

for (let i = 0; i < titles.length; i++) {

    // arrow function OR lambda
    titles[i].onclick = (event) => {
        let target = event.target.nextElementSibling;
        target.classList.toggle("hidden");
    };
}

function doStuff(callback) {
    for (let i = 100; i > 0; i--) {
        console.log(i + " bottles of beer on the wall.");
    }
    callback();
}

// function onComplete() {
//     console.log("Job's done");
// }

doStuff(() => {
    console.log("Job's done");
});

function Promise(next, error) {
    try {
        // do a thing
        next();
    } catch {
        error();
    }
    
}

// for (let i = 0; i < titles.length; i++) {
//     titles[i].onclick = hide;
// }

// function hide(event) {
//     let target = event.target.nextElementSibling;
//     target.classList.toggle("hidden");
// }