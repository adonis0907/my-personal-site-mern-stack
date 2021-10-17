import './Button.css'

function Button({filter,button}){
  return(
    <div className='button__container'>
        {
          button.map((but, i)=>{
            return<button key={i} onClick={()=>filter(but)}> {but} </button>
          })
        }
    </div>
  )
}
export default Button
