import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const notifications = [
    { id: '1', message: 'Diwakar Narayan Ganesh submitted his assignment', date: '2024-10-18', profilePic: require('../assets/images/profile.png') },
    { id: '2', message: 'Diwakar Narayan Ganesh sent a leave Request', date: '2024-10-17', profilePic: require('../assets/images/profile.png') },
    { id: '3', message: 'Diwakar Narayan Ganesh submitted his homework', date: '2024-10-15', profilePic: require('../assets/images/profile.png') },
    { id: '4', message: 'There will be holiday on the occasion of Dashain', date: '2024-10-14', profilePic: require('../assets/images/profile.png') },
    { id: '5', message: 'Diwakar Narayan Ganesh submitted his assignment', date: '2024-10-10', profilePic: require('../assets/images/profile.png') },
    { id: '5', message: 'Diwakar Narayan Ganesh submitted his assignment', date: '2024-10-10', profilePic: require('../assets/images/profile.png') },
    { id: '5', message: 'Diwakar Narayan Ganesh submitted his assignment', date: '2024-10-10', profilePic: require('../assets/images/profile.png') },
    { id: '5', message: 'Diwakar Narayan Ganesh submitted his assignment', date: '2024-10-10', profilePic: require('../assets/images/profile.png') },
    { id: '5', message: 'Diwakar Narayan Ganesh submitted his assignment', date: '2024-10-10', profilePic: require('../assets/images/profile.png') },
];

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);

    if (date.toDateString() === today.toDateString()) {
        return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
    } else if (date >= lastWeek) {
        return 'Last Week';
    } else if (date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
        return 'Last Month';
    } else {
        return date.toLocaleDateString();
    }
};

const groupNotificationsByFriendlyDate = (notifications) => {
    return notifications.reduce((acc, notification) => {
        const friendlyDate = formatDate(notification.date);
        if (!acc[friendlyDate]) {
            acc[friendlyDate] = [];
        }
        acc[friendlyDate].push(notification);
        return acc;
    }, {});
};

const filterNotifications = (notifications, filter) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);
    const lastMonth = new Date(today);
    lastMonth.setMonth(today.getMonth() - 1);

    return notifications.filter(notification => {
        const notificationDate = new Date(notification.date);

        switch (filter) {
            case 'today':
                return notificationDate.toDateString() === today.toDateString();
            case 'yesterday':
                return notificationDate.toDateString() === yesterday.toDateString();
            case 'last_week':
                return notificationDate >= lastWeek && notificationDate < today;
            case 'last_month':
                return notificationDate >= lastMonth && notificationDate < today;
            default:
                return true;
        }
    });
};

export default function NotificationsScreen() {
    const [filter, setFilter] = useState('all');

    const filteredNotifications = filterNotifications(notifications, filter);
    const groupedNotifications = groupNotificationsByFriendlyDate(filteredNotifications);
    const dateKeys = Object.keys(groupedNotifications);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.picker}>
                    <RNPickerSelect
                        onValueChange={value => setFilter(value)}
                        items={[
                            { label: 'All', value: 'all' },
                            { label: 'Today', value: 'today' },
                            { label: 'Yesterday', value: 'yesterday' },
                            { label: 'Last Week', value: 'last_week' },
                            { label: 'Last Month', value: 'last_month' },
                        ]}
                        style={pickerSelectStyles}
                        placeholder={{ label: 'Select Date', value: null }}
                    /></View>

                <FlatList
                    data={dateKeys}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.dateHeader}>{item}</Text>
                            {groupedNotifications[item].map(notification => (
                                <View key={notification.id} style={styles.notificationItem}>
                                    <Image source={notification.profilePic} style={styles.profilePicture} />
                                    <View style={styles.notificationContent}>
                                        <Text style={styles.notificationMessage}>{notification.message}</Text>
                                        <Text style={styles.notificationDate}>{notification.date}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    )}
                    ListEmptyComponent={<Text style={styles.emptyMessage}>No notifications</Text>}
                /></ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    picker: {
        width: "100%",
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 8

    },
    dateHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    notificationContent: {
        flex: 1,
    },
    notificationMessage: {
        fontSize: 16,
    },
    notificationDate: {
        marginTop: 3,
        fontSize: 12,
        color: '#5E5C5C',
    },
    emptyMessage: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
        color: '#5E5C5C',
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color: 'black',
        marginBottom: 20,
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color: 'black',
        marginBottom: 20,
    },
});
