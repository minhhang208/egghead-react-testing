function mapChooser(locationName?: string) {
    if(!locationName) {
        locationName = "default";
    }
    const imageName = `${locationName}.jpg`;
    return (imageName);
}

export default mapChooser;