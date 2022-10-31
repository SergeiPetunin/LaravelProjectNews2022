@extends('layouts.app')

@section('content')

    <div class="box-header with-border">
        <h3 class="box-title"><storng> Dashboar Start page</strong><h3>
    </div>
    <div class="box-body" style="min-height:450px">
        <div class="my-container">
            
            <form id="new-task-form">
                <h2>Admin Task List</h2>
                <input 
                    type="text" 
                    id="new-task-input" 
                    placeholder="What do you planned?"
                />
                <input 
                    type="submit" 
                    id="new-task-submit" 
                    value="Add task"
                />
            </form>

            <div id="tasks">
                <h3>Tasks</h3>
                <!-- <div class="my-content">
                    <div class="my-tasks">
                        <input 
                            type="text" 
                            class="text"
                            value="My shiny task"
                            readonly
                        />
                    </div>
                    <div class="actions">
                        <label class="checkbox style-d" for="done">
                            <input type="checkbox" id="done" class="itsdone" value="yes">
                            <div class="checkbox__checkmark"></div>
                            <div class="checkbox__body">Done</div>
                        </label>
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>
                </div> -->
        </div>
    </div>

    <div class="container">

    </div>
    
    <hr>
    
@endsection


