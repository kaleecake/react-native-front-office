export const handleNavigate = (navigation, destination, data) => {
    if (!data || (Array.isArray(data) && data.length === 0)) {
        alert("No valid data to send!");
        return;
    }

    navigation.navigate(destination, data);
};