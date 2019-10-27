import React from "react"

// class TodoItem extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             count:0
//         }
//         this.changeCheck = this.changeCheck.bind(this)
//     }

//     // changeCheck = () => {
//     //     this.setState({
//     //         count: this.state.count + 1
//     //     })
//     //     console.log(this.state.count)
//     // }

//     /* ketika menggunakan method di dlm class kita harus bind utk menggunakan this jika tidak dlm method kita tidak bisa akses this atau undefined
//     bind() di dlm constructor

//     this.changeCheck = this.changeCheck.bind(this)
//     */
//     changeCheck(){
//         // console.log(this);
//         this.setState( prev => {
//             return{
//                 count: prev.count + 1
//             }
//         })
//         console.log(this.state.count);
//     }

//     render(){
//         return(
//         <div className="todo-item">
//             <input 
//                 type="checkbox" 
//                 checked={this.props.item.completed}
//                 onChange={this.changeCheck}
//             />
//             <p>{this.props.item.text}</p>
//         </div>
//         )
//     }
    
// }
function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem;