function create_todolist_viewstate(model) {
    return {
        model: model,
        container: null,
        empty_item_view: null,
        item_container: null,
        item_status_counter: null,
        item_filter: FILTER_ALL,
        clear_completed: null,
        item_states: []
    }
}

function clear_completed_handler(viewstate, target) {
    clear_completed_items(viewstate.model);
    listview_render(viewstate);
}

function save_new_item_signal_handler(viewstate, parameters) {
    var new_item = create_todo(parameters);
    viewstate.model.items.unshift(new_item);
    listview_render(viewstate);
}

function item_checked_handler(viewstate, parameters) {
    update_item_count(viewstate);
}

function filter_change_handler(viewstate, event) {
    viewstate.item_filter = event.target.value;
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
    set_attribute(all, "value", FILTER_ALL);
    set_attribute(all, "checked", "checked");
    add_change_handler(all, filter_change_handler, vs);
    var all_label = create_element("label");
    set_text_content(all_label, "All");
    add_child(all_label, all);
    add_child(filter_container, all_label);

    var active = create_element("input");
    set_attribute(active, "type", "radio");
    set_attribute(active, "name", "filter");
    set_attribute(active, "value", FILTER_IN_PROGRESS);
    add_change_handler(active, filter_change_handler, vs);
    var active_label = create_element("label");
    set_text_content(active_label, "In progress");
    add_child(active_label, active);
    add_child(filter_container, active_label);

    var done = create_element("input");
    set_attribute(done, "type", "radio");
    set_attribute(done, "name", "filter");
    set_attribute(done, "value", FILTER_DONE);
    add_change_handler(done, filter_change_handler, vs);
    var done_label = create_element("label");
    set_text_content(done_label, "Done");
    add_child(done_label, done);
    add_child(filter_container, done_label);
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
    connect_signal(SIGNAL_SAVE_NEW_ITEM, save_new_item_signal_handler, vs);
    add_child(vs.container, empty_item_container);

    //render children
    vs.item_container = create_element("div");

    add_child(vs.container, vs.item_container);

    //render [x] item left (counter of not items not done)
    vs.item_status_counter = create_element("span");
    set_style_fontweight(vs.item_status_counter, "bold");
    add_child(vs.container, vs.item_status_counter);
    connect_signal(SIGNAL_ITEM_DONE_CHECKED, item_checked_handler, vs);

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

function update_item_count(vs) {
    set_text_content(vs.item_status_counter, get_items_left(vs.model) + " items left");
}

function listview_render(vs) {
    update_item_count(vs);

    clear_children(vs.item_container);
    //update items
    var filtered_items = filter_items(model, vs.item_filter);
    for (todo_item_model of filtered_items) {
        state = create_todoitem_viewstate(todo_item_model);
        todoitem_layout(state, vs.item_container);
        todoitem_render(state);
    }
}