import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

export const Loading = () => {
    return(

        <View style={styles.container}>
                <ActivityIndicator
                    size='large'
                    color='#156e5c'
                // animating={true}
                />
            </View>

    );
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#7cccbc20',
    }
});