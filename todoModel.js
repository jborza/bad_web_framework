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

function create_todo(title, finished){
    return {
        title: title,
        finished: finished
    }
}