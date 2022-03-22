import React, { Component } from 'react'

export class Footer extends Component {

    myStyle = {
        color:"white",
        backgroundColor:"#212529",
        fontSize:"18px",
        width:"100%",
        bottom:"0",
        borderTop:"2px solid black"
    }

    render() {
        return (
            <div className="d-flex justify-content-center footer mt-5" style={this.myStyle}>
                <div className="my-3">
                    <div>
                        Made with &#10084; by VIVEK VARSHNEY
                    </div>
                    <div style={{paddingLeft:"35px"}}>
                        &#169; 2022 All Rights Reserved
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Footer
