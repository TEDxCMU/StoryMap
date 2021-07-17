const { GoogleSpreadsheet } = require('google-spreadsheet');
const serviceAccount = require('../../config/tedxcmu-narratives.json');

const document = new GoogleSpreadsheet('1-Ei_YyqTYnRngVS9po_fcxaPer-5JyOmU989_li0mCs');

module.exports = async (change, context) => {
    const previousValue = change.before.data();
    const newValue = change.after.data();

    await document.useServiceAccountAuth(serviceAccount);
    await document.loadInfo();

    if (!previousValue.approved && newValue.approved) {
        const sheet = document.sheetsByIndex[0];
        await sheet.addRow([
            newValue.name,
            newValue.email,
            newValue.prompt,
            newValue.story?.text,
            `${newValue.latLong?.lat}, ${newValue.latLong?.lng}`,
            'APPROVED',
            'PENDING'
        ]);
    }

    return;
};
