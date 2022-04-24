const loader = document.getElementById("pre-loader");
const b = this.document.getElementById("load-1");
const c = this.document.getElementById("load-2");

window.addEventListener("load", function() {
    loader.style.display = 'none';
    b.style.display = 'block';
    c.style.display = 'block';
    setTimeout(() => (b.style.opacity = 1), 50);
    setTimeout(() => (c.style.opacity = 1), 50);
})