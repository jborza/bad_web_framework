function create_todolist_viewstate(model) {
    return {
        model: model,
        container: null,
        emptyItemView: null,
        item_status_counter: null,
        itemFilter: null,
        clear_completed: null
    }
}

function clear_completed_handler(viewstate, target){
    console.log("TODO clear completed todos");
    //TODO invalidate
    listview_render(viewstate);
}


function listview_layout(vs){
    vs.container = create_element("div");
    
    var title = create_element("h1");
    set_text_content(title, "todos");
    add_child(vs.container, title);
    //render an empty todo item
    
    
    //render children

    //render [x] item left (counter of not items not done)
    vs.item_status_counter = create_element("span");
    
    add_child(vs.container, vs.item_status_counter);

    //render selector for all / active / completed ()
    //<ul class=filters><li>All</li><li>Active</li><li>Completed</li></ul>


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
}