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

function save_clicked_handler(viewstate, target) {
    viewstate.editing = false;
    save_changes(viewstate);
    todoitem_render(viewstate);
}

function save_changes(vs) {
    vs.item.title = get_value(vs.editbox);
}

function edit_clicked_handler(viewstate, target) {
    viewstate.editing = true;
    todoitem_render(viewstate);
}

function checkbox_checked_handler(viewstate, target) {
    viewstate.item.done = get_checkbox_checked(viewstate.checkbox);
    console.log("setting done of" + viewstate.item.title + " to " + viewstate.item.done);
}

//vs = viewstate
function todoitem_layout(vs, root_container) {
    vs.container = create_element('div');
    vs.checkbox = create_element("input");
    set_attribute(vs.checkbox, "type", "checkbox");
    add_change_handler(vs.checkbox, checkbox_checked_handler, vs);
    add_child(vs.container, vs.checkbox);

    vs.label = create_element("span");
    add_child(vs.container, vs.label);

    vs.edit_button = create_element("input");
    set_attribute(vs.edit_button, "type", "button");
    set_value(vs.edit_button, "Edit");
    add_click_handler(vs.edit_button, edit_clicked_handler, vs);
    add_child(vs.container, vs.edit_button);

    vs.editbox = create_element("input");
    set_attribute(vs.editbox, "type", "text");
    set_class(vs.editbox, "editbox");
    set_attribute(vs.editbox, "placeholder", "What do you want to do?");
    add_child(vs.container, vs.editbox);

    vs.save_button = create_element("input");
    set_attribute(vs.save_button, "type", "button");
    set_value(vs.save_button, "Save");
    add_click_handler(vs.save_button, save_clicked_handler, vs);
    add_child(vs.container, vs.save_button);

    add_child(root_container, vs.container);
}

function todoitem_render(vs) {
    //visibility
    //read-mode
    set_element_visible(vs.label, !vs.editing);
    set_element_visible(vs.edit_button, !vs.editing);
    //edit-mode
    set_element_visible(vs.save_button, vs.editing);
    set_element_visible(vs.editbox, vs.editing);
    //content
    set_text_content(vs.label, vs.item.title);
    set_value(vs.editbox, vs.item.title);
    set_checkbox_checked(vs.checkbox, vs.item.done);
}