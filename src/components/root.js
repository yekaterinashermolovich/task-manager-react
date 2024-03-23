function Root() {

    return (
    <>
        <div className='wrapper'>
         <h1>Task Manager</h1>
         <form className='form-tasks' method='post'>
          <input 
            className='input-form' type='text' name='input-form'></input>
            <button type='submit' className='btn'>New Task</button> 
         </form>
        </div>
    </>
    )
}

export default Root;