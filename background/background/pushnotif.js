import { StatusBar } from 'expo-status-bar';
import { View, Button, StyleSheet } from 'react-native';

const PushNotificationScreen = ({ navigation }) => {
    const sendPushNotification = async () => {
        const apiUrl = 'https://app.nativenotify.com/api/notification';

        // Get the current date and time
        const currentDate = new Date();
        const formattedDate = `${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}${currentDate.getHours() >= 12 ? 'PM' : 'AM'}`;

        // Your data
        const notificationData = {
            appId: 10831,
            appToken: "Yv8XSv8f7GqDdCkhVzlwMd",
            title: "Push title here as a string",
            body: "Push message here as a string",
            dateSent: formattedDate,
            pushData: { yourProperty: "yourPropertyValue" },
            bigPictureURL: "Big picture URL as a string"
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(notificationData),
            });

            if (response.ok) {
                console.log('Notification sent successfully');
            } else {
                console.error('Failed to send notification');
            }
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Send Push Notification" onPress={sendPushNotification} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PushNotificationScreen;




