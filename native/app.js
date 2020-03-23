import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const app: () => React$Node = () => {
    return (
        <>
            <View style={style.content}>
                <Text style={{ fontSize: 100 }}>李磊</Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center', // 水平居中
        justifyContent: 'center', // 垂直居中
        backgroundColor: 'skyblue'
    }
})

export default app
