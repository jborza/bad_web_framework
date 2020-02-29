function create_empty_item_viewstate() {
    return {
        container: null,
        editbox: null
    };
}

const SIGNAL_SAVE_NEW_ITEM = "save_new_item";

function empty_save_clicked_handler(vs, target) {
    //TODO raise signal that the new item is done editing
    var title = get_value(vs.editbox);
    raise_signal(SIGNAL_SAVE_NEW_ITEM, title);
}

function empty_todoitem_layout(vs, root_container){
    vs.container = create_element('div');
     
    vs.editbox = create_element("input");
    set_attribute(vs.editbox, "type", "text");
    set_attribute(vs.editbox, "id", "new_item");
    set_attribute(vs.editbox, "placeholder", "What do you want to do?");
    add_child(vs.container, vs.editbox);
    
    var save_button = create_element("input");
    set_attribute(save_button, "type", "button");
    set_value(save_button, "Save");
    add_click_handler(save_button, empty_save_clicked_handler, vs);
    add_child(vs.container, save_button);
    
    add_child(root_container, vs.container);
}

function empty_todoitem_render(vs){

}