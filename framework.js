function create_element(el) {
    return document.createElement(el);
}

function set_attribute(el, attr, val) {
    el.setAttribute(attr, val);
}

function set_class(el, className) {
    el.className = className;
}

function add_child(el, child) {
    el.appendChild(child);
}

function set_text_content(el, body) {
    el.textContent = body;
}

function set_value(el, value) {
    el.value = value;
}

function get_value(el) {
    return el.value;
}

function get_attribute(el, attr) {
    return el.get_attribute(attr);
}

function set_element_visible(el, visible) {
    el.hidden = !visible;
}

function add_click_handler(el, handler, viewstate) {
    var wrapped_handler = curry(handler, viewstate);
    el.onclick = wrapped_handler;
}

function add_double_click_handler(el, handler, viewstate) {
    var wrapped_handler = curry(handler, viewstate);
    el.ondblclick = wrapped_handler;
}

function add_change_handler(el, handler, viewstate) {
    var wrapped_handler = curry(handler, viewstate);
    el.onchange = wrapped_handler;
}

function set_checkbox_checked(el, checked) {
    el.checked = checked;
}

function get_checkbox_checked(el) {
    return el.checked;
}

function set_style_textdecoration(el, value) {
    el.style.textDecoration = value;
}

function set_style_fontweight(el, value) {
    el.style.fontWeight = value;
}

function curry(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}

function get_root() {
    return document.getElementById("app");
}

signal_map = {};

function raise_signal(signal, data) {
    console.log('Raised signal:', signal, " data:", data);
    signal_map[signal](data);
}

function connect_signal(signal, handler, target_viewstate) {
    var wrapped_handler = curry(handler, target_viewstate);
    signal_map[signal] = wrapped_handler;
}

function clear_children(el) {
    el.innerHTML = '';
}