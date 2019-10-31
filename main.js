console.log("this");

function main() {
        const entry = document.getElementById("submit");
        document.getElementById("sort").addEventListener('click', sort);

        entry.addEventListener('click', parseVal);
}

function parseVal() {
    let input = document.getElementById('entry').value;
    if (input.length === 0) {
        input = "45 78 34 23 3 6 8 76 12 5 0";
    }

    for(const value of input.split(" ")) {
        let nele = document.createElement("span");
        nele.classList.add("number");
        nele.classList.add("inline");
        nele.appendChild(document.createTextNode(value));
        document.getElementById("container").appendChild(nele);
    }
    setLength(document.getElementsByClassName("number"));
}

function setLength(input) {
    if(input.length > 0) {
        for(const el of input) {
                    let size = parseInt(el.textContent) * 10;
                    el.setAttribute("style", "height:" + size + "px");
        }
    }
    else {
        let size = parseInt(input.textContent) * 10;
        input.setAttribute("style", "height:" + size + "px");
    }

}

function toggle(el, names) {
    for (const name of names) {
        el.classList.toggle(name);
    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubble() { // bubble
    let changed = true;
    let current;
    const elems = document.getElementsByClassName("number")
    const container = document.getElementById("container")
    const display = document.getElementById("display");

    let j = 0;
        while (changed) {
            changed = false;
            let i = 1;

            while( i < elems.length - j) {

                current = elems[i];
                let previous = elems[i-1];
                toggle(previous, ["number", "active"]);
                toggle(current, ["number", "active"]);
                
                display.innerText = `Checking if ${previous.textContent} > ${current.textContent} and swap them if true.`;

                if (parseInt(previous.textContent) > parseInt(current.textContent)) {
                    changed = true;
                    container.insertBefore(current, previous);
                }
                i++;
                await sleep(1000 - document.getElementById('speed').value)
                toggle(previous, ["number", "active"]);
                toggle(current, ["number", "active"]);
            }
                display.textContent = `Mark this element as sorted`;
                toggle(elems[elems.length - j - 1], ["finish"]);
                await sleep(350);
                toggle(elems[elems.length - j - 1], ["finish"]);
            j++;
        }
    }

async function insertion() {
    const elems = document.getElementsByClassName("number")
    const container = document.getElementById("container")
    const display = document.getElementById("display"); 
    toggle(elems[0], ["finish"]);
    for (var i = 1; i < elems.length; i++) {
        if(i === 1) display.textContent = `Mark first element ${elems[0].textContent} as sorted`;
        await sleep(350);
        for (var j = i - 1; j >= 0 && (parseInt(elems[j].textContent) > parseInt(elems[j + 1].textContent)); j--) {
            display.innerText = `${elems[j].textContent} is bigger than ${elems[j + 1].textContent} \n Move ${elems[j].textContent} to right.`;
            container.insertBefore(elems[j + 1], elems[j]);
            await sleep(1000 - document.getElementById('speed').value)
        }
        await sleep(350);
        toggle(elems[j + 1], ["finish"]);  

    }
    display.textContent = `Done`;
}

 function sort() {
    // if(sortType === '1') // bubble
    // if(sortType === '2') // insertion
    // if(sortType === '3') // quick
    const sortType = document.getElementById("selectBox").value;
    if(sortType === 'bubble') bubble();
    else if(sortType === 'insertion') insertion();
    else if(sortType === 'quick') quick();
}

// function main() {
//         // const entry = document.getElementById("submit");
//         // document.getElementById("sort").addEventListener('click', sort);

//         // entry.addEventListener('click', parseVal);
//         document.getElementsByTagName("body")[0].addEventListener('click', parseClick);
// }

// function parseClick(event) {
//     if(event.target.id === "sort") {
//         sort();
//     }
//     else if(event.target.id === "submit") parseVal();
// }

