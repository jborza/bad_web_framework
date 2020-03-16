function create_sample_list() {
    array = [];
    array.push(create_todo('Read a C tutorial online', true));
    array.push(create_todo('Read about HTML', true));
    array.push(create_todo('Write a web framework'));
    array.push(create_todo('Style the filter radio buttons', true));
    array.push(create_todo('Fix todoitemview render state', true));
    array.push(create_todo('Style the "done" checkbox', true));
    array.push(create_todo('Style the Save button', true));
    array.push(create_todo('Implement the "Clear completed" button', true));
    array.push(create_todo('Strikethrough done items', true));
    array.push(create_todo('Count items in progress', true));
    array.push(create_todo('Add a delete button'));
    array.push(create_todo('Apply filter - all, in progress, done', true));
    array.push(create_todo('Save the new item', true));
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