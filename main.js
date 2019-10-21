console.log("this");

function main() {
        for(const el of document.getElementsByClassName("number")) {
                console.log(el.textContent);
                let size = parseInt(el.textContent) * 6 ;
                el.setAttribute("style", "width:" + size + "px");
        }
}

function toggle(pre, curr) {
        pre.classList.toggle("number");
        pre.classList.toggle("active");
        curr.classList.toggle("number");
        curr.classList.toggle("active");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sort() {
        let changed = true;
        let elems = document.getElementsByClassName("number")
        // let elems = Array.from(document.getElementsByClassName("number"))
        let container = document.getElementById("container")
        while (changed) {
                changed = false;
                let i = 1;
                        while( i < elems.length) {

                                let current = elems[i];
                                let previous = elems[i-1];
                                toggle(previous, current);

                                if (parseInt(previous.textContent) > parseInt(current.textContent)) {
                                        changed = true;
                                        // elems.splice(i - 1, 1);
                                        container.insertBefore(current, previous);
                                        // previous.remove();
                                }
                                i++;
                                await sleep(500)
                                toggle(previous, current);
                        // container

                        }
        }
}
