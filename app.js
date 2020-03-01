function create_sample_list() {
    array = [];
    array.push(create_todo('Read a C tutorial online', true));
    array.push(create_todo('Read about HTML', true));
    array.push(create_todo('Write a web framework', false));
    array.push(create_todo('Fix edit/read mode for todoitemview'));
    array.push(create_todo('Style the "done" checkbox'));
    array.push(create_todo('Style the Save button'));
    array.push(create_todo('Implement the "Clear completed" button'));
    array.push(create_todo('Strikethrough done items'));
    array.push(create_todo('Add a delete button'));
    array.push(create_todo('Signal todo state change to parent model'));
    array.push(create_todo('Apply filter - all, in progress, done'));
    return array;
}

function main() {
    model = create_todo_model();
    model.items = create_sample_list();
    list_state = create_todolist_viewstate(model);
    listview_layout(list_state);
    listview_render(list_state);
}

main();