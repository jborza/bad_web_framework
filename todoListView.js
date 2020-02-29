function create_todolist_viewstate(model) {
    return {
        model: model,
        container: null,
        emptyItemView: null,
        item_status_counter: null,
        itemFilter: null,
        clear_completed: null,
        item_states : []
    }
}

function clear_completed_handler(viewstate, target){
    console.log("TODO clear completed todos");
    //TODO invalidate
    listview_render(viewstate);
}

function filter_layout(vs, filter_container){
    //render selector for all / active / completed ()
    var all = create_element("input");
    set_attribute(all,"type","radio");
    set_attribute(all,"name","filter");
    set_attribute(all,"value","all");
    var all_label = create_element("label");
    set_text_content(all_label, "All");
    add_child(all_label, all);
    add_child(filter_container, all_label);

    var active = create_element("input");
    set_attribute(active,"type","radio");
    set_attribute(active,"name","filter");
    set_attribute(active,"value","active");
    var active_label = create_element("active");
    set_text_content(active_label, "In progress");
    add_child(active_label, active);
    add_child(filter_container, active_label);

    var done = create_element("input");
    set_attribute(done,"type","radio");
    set_attribute(done,"name","filter");
    set_attribute(done,"value","done");
    var done_label = create_element("label");
    set_text_content(done_label, "Completed");
    add_child(done_label, done);
    add_child(filter_container, done_label);

}


function listview_layout(vs){
    vs.container = create_element("div");
    
    var title = create_element("h1");
    set_text_content(title, "todos");
    add_child(vs.container, title);
    //render an empty todo item
    
    
    //render children
    for(todo_item of model.items){
        state = create_todoitem_viewstate(todo_item);
        vs.item_states.push(state);
        todoitem_layout(state);
    }

    //render [x] item left (counter of not items not done)
    vs.item_status_counter = create_element("span");
    
    add_child(vs.container, vs.item_status_counter);

    //render selector for all / active / completed ()
    //<ul class=filters><li>All</li><li>Active</li><li>Completed</li></ul>
    var filter_container = create_element("div");
    filter_layout(vs, filter_container);
    add_child(vs.container, filter_container);
    //render "clear completed" button
    vs.clear_completed = create_element("input");
    set_attribute(vs.clear_completed,"type","button");
    set_value(vs.clear_completed, "Clear completed");
    add_click_handler(vs.clear_completed, clear_completed_handler, vs);
    add_child(vs.container, vs.clear_completed);
    //delete item functionality?
    add_child(get_root(), vs.container);
}

function listview_render(vs){
    set_text_content(vs.item_status_counter, getItemsLeft(vs.model) + " items left");

    //update items
    for(todo_item of model.items){
        //get corresponding view state ? 
        //probably bad, should be referencing the todoitemview itself
        todoitem_render(state);
    }
}