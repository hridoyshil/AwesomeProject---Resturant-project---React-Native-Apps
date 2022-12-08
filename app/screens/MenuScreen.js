import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getDishes } from '../redux/actionCreators';
import Menuitem from '../components/Menuitem';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => dispatch(getDishes()),
    }
}

const MenuScreen = (props) => {
    useEffect(() => {
        props.getDishes();
    }, []);
    return (
        <View>
            <FlatList
                data={props.dishes}
                renderItem={
                    ({ item }) => (<Menuitem item={item} />)
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);