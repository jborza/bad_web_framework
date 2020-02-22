function handler(arg){
    console.log(arg.target);
}

var container = create_element('div');
var checkbox = create_element("input");
set_attribute(checkbox, "type", "checkbox");
add_child(container, checkbox);

var label = create_element("span");
set_text_content(label,"Go shopping");

add_child(container, label);

var editbox = create_element("input");
set_attribute(editbox, "type", "text");
set_attribute(editbox, "placeholder", "What do you want to do?");
add_child(container, editbox);

var button = create_element("input");
set_attribute(button, "type", "button");
set_attribute(button, "value", "Save");
add_click_handler(button, handler);
add_child(container, button);

add_child(document.getElementById("_body"), container);