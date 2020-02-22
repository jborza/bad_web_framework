

function create_list() {
    array = [];
    array.push(create_node('Read a C tutorial online',true));
    //array.push(create_node('Read about HTML',false));
    //array.push(create_node('Write a web framework',false));
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



function main(){
    todo_items = create_list();
    for(todo_item of todo_items){
        state = create_todoitem_viewstate(todo_item);
        layout(state);
        render(state);
    }
}

main();