import React, { PureComponent } from 'react'

class FooterComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
           

        }
    }

    render() {
        return (
            <footer className="footer">
              <span className="text-muted">All rights reserved 2020</span>

            </footer>
        )
    }
}

export default FooterComponent