import React, { Component } from 'react'
import './index.css'

function toChinesNum(num) {
    let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    let unit = ['', '十', '百', '千', '万']
    num = parseInt(num)
    let getWan = (temp) => {
        let strArr = temp.toString().split('').reverse()
        let newNum = ''
        for (let i = 0; i < strArr.length; i++) {
            newNum = (
                i === 0 && strArr[i] === 0 ? ''
                    : (i > 0 && strArr[i] === 0 && strArr[i - 1] === 0 ? ''
                    : changeNum[strArr[i]] + (strArr[i] === 0 ? unit[0] : unit[i]))
            ) + newNum
        }
        return newNum
    }
    let overWan = Math.floor(num / 10000)
    let noWan = num % 10000
    if (noWan.toString().length < 4) {
        noWan = '0' + noWan
    }
    return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num)
}

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            S: [],
            M: [],
            H: [],
            sPosition: 6,
            mPosition: 6,
            hPosition: 15
        }
    }

    componentDidMount() {
        let { S, M, H } = this.state
        for (let i = 60; i > 0; i--) {
            S.push(toChinesNum(i) + '秒')
            M.push(toChinesNum(i) + '分')
            if (i < 25) {
                H.push(toChinesNum(i) + '时')
            }
        }
        this.setState({
            S,
            M,
            H
        })

        console.log(this.state)
        setInterval(() => {
            let { sPosition, mPosition } = this.state
            // 秒
            this.setState({
                sPosition: this.state.sPosition + 6
            })
            // 60秒进一分钟
            if (sPosition !== 0 && sPosition % 360 === 0) {
                this.setState({
                    mPosition: this.state.mPosition + 6
                })
            }
            // 60分钟进一小时
            if (mPosition !== 0 && mPosition % 360 === 0) {
                this.setState({
                    hPosition: this.state.hPosition + 15
                })
            }
        }, 1000)
    }

    render() {
        return (
            <div className='clock-container'>
                {
                    /* 秒 */
                    this.state.S.map((item, index) => (
                        <div className='clock' key={index} style={{
                            transform: 'rotate(' + (this.state.sPosition + index * 6) + 'deg)',
                            width: '600px'
                        }}>{item}</div>
                    ))
                }
                {
                    /* 分 */
                    this.state.M.map((item, index) => (
                        <div className='clock' key={index} style={{
                            transform: 'rotate(' + (this.state.mPosition + index * 6) + 'deg)',
                            width: '450px'
                        }}>{item}</div>
                    ))
                }
                {
                    /* 时 */
                    this.state.H.map((item, index) => (
                        <div className='clock' key={index} style={{
                            transform: 'rotate(' + (this.state.hPosition + index * 15) + 'deg)',
                            width: '300px'
                        }}>{item}</div>
                    ))
                }
                <div className='clock' style={{
                    marginTop: '10px',
                    marginLeft: '150px',
                    width: '300px',
                    borderBottom: '1px solid #000'
                }}></div>
            </div>
        )
    }
}
