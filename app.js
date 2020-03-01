function create_list() {
    array = [];
    array.push(create_node('Read a C tutorial online', true));
    array.push(create_node('Read about HTML', true));
    array.push(create_node('Write a web framework', false));
    array.push(create_node('Strikethrough done items', false));
    array.push(create_node('Add a delete button', false));
    array.push(create_node('Fix edit/read mode for todoitemview', false));
    array.push(create_node('Signal todo state change to parent model', false));
    return array;
}

function create_node(title, done) {
    return {
        title: title,
        done: done
    }
}

sampleModelState = {
    title: "Sample ToDo item",
    done: false
}

function main() {
    model = create_todo_model();
    model.items = create_list();
    list_state = create_todolist_viewstate(model);
    listview_layout(list_state);
    listview_render(list_state);
    //TODO remove and move to todolistview
    // for(todo_item of model.items){
    //     state = create_todoitem_viewstate(todo_item);
    //     todoitem_layout(state);
    //     todoitem_render(state);
    // }
}

main();