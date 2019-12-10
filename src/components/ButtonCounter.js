import React, {Component} from 'react'

class ButtonCounter extends Component {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            }
        })
    }
}

export default ButtonCounter