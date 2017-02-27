import './SvgTabFactory.css';
import './svg/black/css/sprite.css';
import './svg/blue/css/sprite.css';
import './svg/white/css/sprite.css';

const L = window.L;

let createTab = (iconClass, hint) => {
    return (state) => {
        var el = L.DomUtil.create('div', 'svgTabIcon');
        var svgEl = L.DomUtil.create('div', 'svgTabIcon-svg', el);
        hint && el.setAttribute('title', hint);
        if (state === 'active') {
             L.DomUtil.addClass(svgEl, iconClass + '_blue');
             L.DomUtil.addClass(el, 'svgTabIcon_active');
        } else {
             L.DomUtil.addClass(svgEl, iconClass);
        }
        L.DomUtil.addClass(svgEl, iconClass + '-dims');
        return el;
    };
};

export { createTab };
