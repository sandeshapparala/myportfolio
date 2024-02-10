window.addEventListener('DOMContentLoaded', (event) => {
    smokeEffect();
});


function disablePointerEventsOnTouch() {
    const interactionLayer = document.getElementById('interaction-layer');
    window.addEventListener('touchstart', function() {
        interactionLayer.style.pointerEvents = 'auto';
    });
}

disablePointerEventsOnTouch();
