import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
    title: yup.string().required('Invalid Task'),
    done: yup.boolean()
})

interface AddTodoForm {
    title: string
    done: boolean
}

const AddTodo = () => {
    const { addTodo } = useContext<TodoContextType>(TodoContext);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data: AddTodoForm, e: any) => {
        console.log(data);


        addTodo(data.title, data.done);
        e.target.reset();
        window.location.href = "/listTodo";
    }

    return (
        <div className="container mt-3 col-6">
            <div className="card">
                <h5 className="card-header">New Task</h5>
                <div className="card-body">
                    <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)} className="row g-2">
                        <div className="col-12">
                            <div className="form-floating" >
                                <input type="text" className="form-control" id="title" name="title" placeholder="Task name" ref={register} />
                                <label htmlFor="title">Task Description</label>
                                <span><small>{errors.title?.message}</small></span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="done" name="done" ref={register} />
                                <label className="form-check-label" htmlFor="done">Task done</label>
                            </div>
                        </div>

                        <div className="col-12 text-end">
                            <Link to="/listTodo"><button type="reset" className="btn btn-danger ms-3">Cancel</button></Link>
                            <button type="submit" className="btn btn-success ms-3">Add Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default AddTodo;