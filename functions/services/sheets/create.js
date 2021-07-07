module.exports = (snapshot, context) => {
    const newValue = snapshot.data();
    console.log(newValue);
    // TODO: Send To Google Sheets
};
