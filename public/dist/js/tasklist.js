window.addEventListener('load', () => {
    //todos = JSON.parse(localStorage.getItem('todos')) || [];

    const form = document.querySelector("#new-task-form"); //получить форму
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const taksNum = 1; // для lavel for id


        if (!task) {
            alert("Please fill out the task");
            return;
        }


        //div class="my-content"
        const task_mycontent_el = document.createElement("div");
        task_mycontent_el.classList.add("my-content");

        //div class="my-tasks"
        const task_mytask_el = document.createElement("div");
        task_mytask_el.classList.add("my-tasks");

        task_mycontent_el.appendChild(task_mytask_el);

        //input class="text"
        const task_inputtask_el = document.createElement("input");
        task_inputtask_el.classList.add("text");
        task_inputtask_el.value = task;
        task_inputtask_el.setAttribute("readonly", "readonly");

        task_mytask_el.appendChild(task_inputtask_el);
        //-------
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");
        
        // //label class="checkbox style-d"
        const task_done_el = document.createElement("label");
        task_done_el.classList.add("checkbox");
        task_done_el.classList.add("style-d");
        task_done_el.htmlFor = taksNum;

        
        
        
        //input chekbox
        const task_doneinput_el = document.createElement("input");
        task_doneinput_el.classList.add("itsdone");
        task_doneinput_el.type = "checkbox";
        task_doneinput_el.id = taksNum;
         
        task_done_el.appendChild(task_doneinput_el);

        //input checkmark
        const task_checkmark_el = document.createElement("div");
        task_checkmark_el.classList.add("checkbox__checkmark");
        

        //input checkbox__body
        const task_checkboxbody_el = document.createElement("div");
        task_checkboxbody_el.classList.add("checkbox__body");
        task_checkboxbody_el.innerHTML = "Done";

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        //append
        
        task_done_el.appendChild(task_checkmark_el);
        task_done_el.appendChild(task_checkboxbody_el);

        task_actions_el.appendChild(task_done_el);

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        
        
        //------
        
        task_mycontent_el.appendChild(task_actions_el);

        list_el.appendChild(task_mycontent_el);
        
        //_____________EDIT_______________
        input.value = "";
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_inputtask_el.removeAttribute("readonly");
                task_inputtask_el.focus();
                task_edit_el.innerText = "Save";
            }else {
                task_inputtask_el.setAttribute("readonly","readonly");
                task_edit_el.innerText = "Edit";
            }
            
        });
        //_____________DELETE_______________
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_mycontent_el);
        });

    })
})