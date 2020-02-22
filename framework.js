function create_element(el) {
    return document.createElement(el);
}

function set_attribute(el, attr, val){
    el.setAttribute(attr, val);
}

function add_child(el, child){
    el.appendChild(child);
}

function set_text_content(el, body){
    el.textContent = body;
}

function get_attribute(el,attr){
    return el.get_attribute(attr);
}

function set_element_visible(el,visible){
    el.style.display = visible?'block':'none';
}

function add_click_handler(el, handler){
    el.onclick = handler;
}