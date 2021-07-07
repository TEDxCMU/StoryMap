module.exports = (change, context) => {
    const previousValue = change.before.data();
    const newValue = change.after.data();

    if (!previousValue.approved && newValue.approved) {
        console.log('Approved');
        // TODO: Update Google Sheets
    }
};
