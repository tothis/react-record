import React from 'react'
import 'antd/dist/antd.css'
import axios from 'axios'

export default class extends React.Component {

    state = {
        mock: [],
        data: []
    }

    async componentWillMount() {
        await axios({
            url: '/mock',
            method: 'post'
        }).then(result => {
            this.setState({
                mock: result.data.users
            })
        })

        await axios({
            url: '/data',
            method: 'get'
        }).then(result => {
            this.setState({
                data: result.data
            })
        })
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.mock)}
                <br/>
                {JSON.stringify(this.state.data)}
            </div>
        )
    }
}
