import React, { PureComponent } from 'react'

class HeaderComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
           <div>
               <header>
                   <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                       <div><a href ="https://javaguides.net" className ="navbar">Employement Management App</a>

                       </div>

                   </nav>
               </header>
           </div> 
        )
    }
}

export default HeaderComponent