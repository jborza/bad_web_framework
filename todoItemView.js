function create_todoitem_viewstate(item) {
    return {
        item: item,
        container: null,
        checkbox: null,
        label: null,
        editbox: null,
        edit_button: null,
        save_button: null,
        editing: false
    };
}

function save_clicked_handler(arg) {
    console.log(arg.target);
}

function edit_clicked_handler(arg) {
    console.log(arg.target);
}

//vs = viewstate
function layout(vs){
    vs.container = create_element('div');
    vs.checkbox = create_element("input");
    set_attribute(vs.checkbox, "type", "checkbox");
    add_child(vs.container, vs.checkbox);
    
    vs.label = create_element("span");
    set_text_content(vs.label, "Go shopping");
    add_child(vs.container, vs.label);
    
    vs.editbox = create_element("input");
    set_attribute(vs.editbox, "type", "text");
    set_attribute(vs.editbox, "placeholder", "What do you want to do?");
    add_child(vs.container, vs.editbox);
    
    vs.edit_button = create_element("input");
    set_attribute(vs.edit_button, "type", "button");
    set_attribute(vs.edit_button, "value", "Edit");
    add_click_handler(vs.edit_button, edit_clicked_handler);
    add_child(vs.container, vs.edit_button);

    vs.save_button = create_element("input");
    set_attribute(vs.save_button, "type", "button");
    set_attribute(vs.save_button, "value", "Save");
    add_click_handler(vs.save_button, save_clicked_handler);
    add_child(vs.container, vs.save_button);
    
    add_child(document.getElementById("_body"), vs.container);
}

function render(vs){
    set_text_content(vs.label, vs.item.title);
    
}