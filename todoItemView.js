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
function todoitem_layout(vs){
    vs.container = create_element('div');
    vs.checkbox = create_element("input");
    set_attribute(vs.checkbox, "type", "checkbox");
    add_child(vs.container, vs.checkbox);
    
    vs.label = create_element("span");
    add_child(vs.container, vs.label);

    vs.edit_button = create_element("input");
    set_attribute(vs.edit_button, "type", "button");
    set_attribute(vs.edit_button, "value", "Edit");
    add_click_handler(vs.edit_button, edit_clicked_handler);
    add_child(vs.container, vs.edit_button);
    
    vs.editbox = create_element("input");
    set_attribute(vs.editbox, "type", "text");
    set_attribute(vs.editbox, "placeholder", "What do you want to do?");
    add_child(vs.container, vs.editbox);
    
    vs.save_button = create_element("input");
    set_attribute(vs.save_button, "type", "button");
    set_attribute(vs.save_button, "value", "Save");
    add_click_handler(vs.save_button, save_clicked_handler);
    add_child(vs.container, vs.save_button);
    
    add_child(document.getElementById("_body"), vs.container);
}

function todoitem_render(vs){
    //visibility
    //read-mode
    set_element_visible(vs.label, !vs.editing);
    set_element_visible(vs.edit_button, !vs.editing);
    //edit-mode
    set_element_visible(vs.save_button, vs.editing);
    set_element_visible(vs.editbox, vs.editing);
    //content
    set_text_content(vs.label, vs.item.title);
    set_text_content(vs.edit_button, vs.item.title);
    set_checkbox_checked(vs.checkbox, vs.item.done);
}