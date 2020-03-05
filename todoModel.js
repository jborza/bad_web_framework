function create_todo_model(){
    return {
        items: []
    };
}

function getItemsLeft(model){
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