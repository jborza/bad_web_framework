function create_todo_model(){
    return {
        items: []
    };
}

function getItemsLeft(model){
    return model.items.filter(i=>!i.done).length;
}