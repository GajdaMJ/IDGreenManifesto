document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var documentHeight = document.body.scrollHeight - window.innerHeight;
    var scrollRatio = scrollPosition / documentHeight;

    var startColor = { r: 194, g: 229, b: 197 }; // #c2e5c5
    var endColor = { r: 163, g: 136, b: 91 };   // #a3885b

    var newColor = {
        r: Math.round(startColor.r + (endColor.r - startColor.r) * scrollRatio),
        g: Math.round(startColor.g + (endColor.g - startColor.g) * scrollRatio),
        b: Math.round(startColor.b + (endColor.b - startColor.b) * scrollRatio)
    };

    var newBackgroundColor = `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
    document.body.style.backgroundColor = newBackgroundColor;
});
