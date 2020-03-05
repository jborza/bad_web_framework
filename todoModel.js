const FILTER_ALL = "all";
const FILTER_IN_PROGRESS = "in_progress";
const FILTER_DONE = "done";

function create_todo_model(){
    return {
        items: []
    };
}

function get_items_left(model){
    return model.items.filter(i=>!i.done).length;
}

function create_sample_item() {
    return {
        title: "Sample ToDo item",
        done: false
    }   
}

function create_todo(title){
    return create_todo(title, false);
}

function create_todo(title, done){
    return {
        title: title,
        done: done
    }
}

function clear_completed_items(model){
    model.items = model.items.filter(x => !x.done);
}

function filter_items(model, filter){
    if(filter == FILTER_ALL){
        return model.items;
    }
    else if(filter==FILTER_IN_PROGRESS){
        return model.items.filter(x => !x.done);
    }
    else{
        return model.items.filter(x => x.done);
    }
}