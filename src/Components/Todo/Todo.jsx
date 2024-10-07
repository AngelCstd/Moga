export function Todo({list}){

    console.log(list)
    return(
        <aside className="todo">
            {list.map((element)=>{
                <label>
                    <input type="checkbox"/>
                    {element.nombre}
                </label>
            })}
        </aside>
    )
}