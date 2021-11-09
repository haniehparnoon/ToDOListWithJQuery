$(document).ready(function(){
    //Show todo list
    tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks){
        tasks.forEach(function (todo) {
            $(".list-group").append("<li class='list-group-item d-flex justify-content-between'>" + todo +  "<i class='fas fa-times text-danger mr-auto delete-item'></i>"+"</li>")
        })
    }


    //add item in todoList
    $('.btn-add').on('click', function(){
        var userInput = $('#task').val()
        
        if( !userInput){
            alert("please enter sth");

        } else {
            let tasks;
            tasks = [];
            if(localStorage.getItem('tasks') === null) {
    
                tasks = [];
          
              } else {
          
                tasks = JSON.parse(localStorage.getItem('tasks'));
              
              }
          
              tasks.push(userInput);
              console.log(userInput)
          
              localStorage.setItem('tasks', JSON.stringify(tasks));

              
            $(".list-group").append("<li class='list-group-item d-flex justify-content-between'>" + userInput +  "<i class='fas fa-times text-danger mr-auto delete-item'></i>"+"</li>")
   

        }   

    });

    //delete all items 
    $('.clear-tasks').on('click',function(){
        result =confirm('Are you sure ?')
        if(result){
            $("ul li").remove();
            localStorage.removeItem('tasks');
        }
        
        

    })

    //remove each item 

    $('.delete-item').click(function(){
        let removeItemSelect = $(this).parent().text()
        $(this).parent().remove();
        //remove from List Task
        tasks.splice(tasks.indexOf(removeItemSelect), 1);
        updateTask = tasks
        //remove all tasks from local storage
        localStorage.removeItem('tasks');
        //add update task to kocal storage
        localStorage.setItem('tasks', JSON.stringify(updateTask));
    
       
        });


    
    



});