function create_todolist_viewstate(model) {
    return {
        model: model,
        container: null,
        empty_item_view: null,
        item_container : null,
        item_status_counter: null,
        item_filter: null,
        clear_completed: null,
        item_states: []
    }
}

function clear_completed_handler(viewstate, target) {
    console.log("TODO clear completed todos");
    //TODO invalidate
    listview_render(viewstate);
}

function filter_layout(vs, filter_container) {
    var filter_label = create_element("span");
    set_text_content(filter_label, "Show:");
    add_child(filter_container, filter_label);

    //render selector for all / active / completed ()
    var all = create_element("input");
    set_attribute(all, "type", "radio");
    set_attribute(all, "name", "filter");
    set_attribute(all, "value", "all");
    //TODO move to render
    set_attribute(all, "checked", "checked");
    var all_label = create_element("label");
    set_text_content(all_label, "All");
    add_child(all_label, all);
    add_child(filter_container, all_label);

    var active = create_element("input");
    set_attribute(active, "type", "radio");
    set_attribute(active, "name", "filter");
    set_attribute(active, "value", "active");
    var active_label = create_element("label");
    set_text_content(active_label, "In progress");
    add_child(active_label, active);
    add_child(filter_container, active_label);

    var done = create_element("input");
    set_attribute(done, "type", "radio");
    set_attribute(done, "name", "filter");
    set_attribute(done, "value", "done");
    var done_label = create_element("label");
    set_text_content(done_label, "Done");
    add_child(done_label, done);
    add_child(filter_container, done_label);
}

function save_new_item_signal_handler(parameters) {
    console.log("todolistview handle signal: ", parameters);
}

function listview_layout(vs) {
    vs.container = create_element("div");

    var title = create_element("h1");
    set_text_content(title, "todos");
    add_child(vs.container, title);

    //render an empty todo item ["create new"]
    var empty_item_container = create_element("div");
    vs.empty_item_view = undefined;
    var empty_item_state = create_empty_item_viewstate();
    empty_todoitem_layout(empty_item_state, empty_item_container);
    connect_signal(SIGNAL_SAVE_NEW_ITEM, save_new_item_signal_handler);
    add_child(vs.container, empty_item_container);

    //render children
    vs.item_container = create_element("div");
    
    add_child(vs.container, vs.item_container);

    //render [x] item left (counter of not items not done)
    vs.item_status_counter = create_element("span");
    add_child(vs.container, vs.item_status_counter);

    //render selector for all / active / completed ()
    var filter_container = create_element("div");
    set_class(filter_container, "filter");
    filter_layout(vs, filter_container);
    add_child(vs.container, filter_container);

    //render "clear completed" button
    vs.clear_completed = create_element("input");
    set_attribute(vs.clear_completed, "type", "button");
    set_value(vs.clear_completed, "Clear completed");
    add_click_handler(vs.clear_completed, clear_completed_handler, vs);
    add_child(vs.container, vs.clear_completed);

    // TODO delete item functionality?
    add_child(get_root(), vs.container);
}

function listview_render(vs) {
    set_text_content(vs.item_status_counter, getItemsLeft(vs.model) + " items left");

    //TODO highlight the filter (all/active/done)
    

    //update items
    for (todo_item_model of model.items) {
        state = create_todoitem_viewstate(todo_item_model);
        //vs.item_states.push(state);
        todoitem_layout(state, vs.item_container);
        todoitem_render(state);
    }
    //also - what will happen when an item gets created or deleted??
    // for (todo_item of model.items) {
    //     var view_state
    //     //get corresponding view state ? 
    //     //probably bad, should be referencing the todoitemview itself
    //     todoitem_render(state);
    // }
}